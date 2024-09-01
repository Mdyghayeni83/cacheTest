import { redis } from "./config";

function createSchema(options: ICreateOptions) {
  const schema: string[] = [];
  function pushToSchema(key: string[], value: string) {
    schema.push(`$.${key.join(".")}`, "AS", key.join("_"), value.toUpperCase());
  }
  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      if (typeof options[key] === "string") {
        pushToSchema([key], options[key]);
      } else if (Array.isArray(options[key])) {
        if (options[key].length > 0) {
          for (const _key in options[key]) {
            const _options = options[key];
            if (Object.prototype.hasOwnProperty.call(_options, _key)) {
              if (typeof _options[_key] === "string") {
                pushToSchema([`${_key}[*]`, _key], _options[_key]);
              } else {
              }
            }
          }
        }
      } else {
        for (const _key in options[key]) {
          const _options = options[key];
          if (Object.prototype.hasOwnProperty.call(_options, _key)) {
            if (typeof _options[_key] === "string") {
              pushToSchema([key, _key], _options[_key]);
            } else if (Array.isArray(_options[_key])) {
            } else {
              for (const __key in _options[_key]) {
                const __options = _options[_key];
                if (Object.prototype.hasOwnProperty.call(__options, __key)) {
                  if (typeof __options[__key] === "string") {
                    pushToSchema([key, _key, __key], __options[__key]);
                  } else if (Array.isArray(__options[__key])) {
                  } else {
                    for (const ___key in __options[__key]) {
                      const ___options = __options[__key];
                      if (
                        Object.prototype.hasOwnProperty.call(___options, ___key)
                      ) {
                        if (typeof ___options[___key] === "string") {
                          pushToSchema(
                            [key, _key, __key, ___key],
                            ___options[___key]
                          );
                        } else {
                          return [""];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(schema);
  return schema;
}
type ISchemaTypes = "text" | "numeric" | "tag";
interface ICreateOptions {
  [key: string]: ISchemaTypes | ICreateOptions;
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
