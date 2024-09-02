import { redis } from "./config";

function createSchema(
  obj: ICreateOptions,
  key: string = "$",
  schema: string[] = []
) {
  function createArrayPath(currentPath: string) {
    return `${currentPath}[*]`;
  }
  for (const [_key, value] of Object.entries(obj)) {
    const currentPath: string = `${key}.${_key}`;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      createSchema(value, currentPath, schema);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          createSchema(item, createArrayPath(currentPath), schema);
        } else {
          schema.push(
            createArrayPath(currentPath),
            "AS",
            `${currentPath
              .slice(2)
              .replace(/\./g, "_")
              .replace(/\[\d+\]/g, "")}${index ? "_" + index : ""}`,
            String(item).toUpperCase()
          );
        }
      });
    } else {
      schema.push(
        currentPath,
        "AS",
        currentPath
          .slice(2)
          .replace(/\./g, "_")
          .replace(/\[\d+\]/g, ""),
        String(value).toUpperCase()
      );
    }
  }
  return schema;
}

type ISchemaTypes = "text" | "numeric" | "tag";
interface ICreateOptions {
  [key: string]:
    | ISchemaTypes
    | ICreateOptions
    | ICreateOptions[]
    | ISchemaTypes[];
}

/// FT
// search
export async function redis_search(
  index: string,
  query: string,
  options: string = ""
) {
  try {
    const results = (await redis.call(
      "FT.SEARCH",
      index,
      query,
      ...options.split(" ")
    )) as string[];
    const data: string[] = [];
    for (let i = 2; i < results.length; i += 2) {
      const item = results[i][1];
      data.push(item);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

// create index
export async function redis_create(
  index: string,
  type: "HASH" | "JSON" = "JSON",
  prefix: string,
  options: ICreateOptions
) {
  const schema = createSchema(options);
  try {
    await redis.call(
      "FT.CREATE",
      index,
      "ON",
      type,
      "PREFIX",
      prefix,
      "SCHEMA",
      ...schema
    );
    return "OK";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

// list indexes
export async function redis_list() {
  try {
    const list = (await redis.call("FT._LIST")) as string[];
    return list;
  } catch (error) {
    console.log(error);
    return [] as string[];
  }
}

/// KYES
// get keys with pattern
export async function redis_keys(pattern: string) {
  try {
    const keys = (await redis.call("KEYS", pattern)) as string[];
    return keys;
  } catch (error) {
    console.log(error);
    return [] as string[];
  }
}

/// ON JSON
// get a json
export async function redis_json_get(key: string) {
  try {
    const item = (await redis.call("JSON.GET", key)) as string;
    return item;
  } catch (error) {
    console.log(error);
    return "" as string;
  }
}

// set a json
export async function redis_json_set(key: string, value: string) {
  try {
    await redis.call("JSON.SET", key, "$", value);
    return "OK";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

// get all json with pattern
export async function redis_json_get_all(pattern: string) {
  try {
    const keys = await redis_keys(pattern);
    if (keys.length > 0) {
      const items: string[] = [];
      for (const key of keys) {
        const item = (await redis.call("JSON.GET", key)) as string;
        items.push(item);
      }
      return items;
    }
    return [] as string[];
  } catch (error) {
    console.log(error);
    return [] as string[];
  }
}

/// ON HASH
