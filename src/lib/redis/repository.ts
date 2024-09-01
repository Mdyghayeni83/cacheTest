import { redis } from "./config";

// function createSchema(options: { [key: string]: "text" | "numeric" | "tag" }) {
//   const schema: string[] = [];
//   for (const key in options) {
//     if (Object.prototype.hasOwnProperty.call(options, key)) {
//       schema.push(`$.${key}`, "AS", key, options[key].toUpperCase());
//     }
//   }
//   return schema;
// }

// interface ICreateOptions {
//   [key: string]: "text" | "numeric" | "tag";
// }

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

export async function redis_create(
  index: string,
  type: "HASH" | "JSON" = "JSON",
  perfix: string,
  schema: string
) {
  try {
    await redis.call(
      "FT.CREATE",
      index,
      "ON",
      type,
      "PERFIX",
      perfix,
      "SCHEMA",
      ...schema.split(" ")
    );
    return "OK";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

export async function redis_list() {
  try {
    const list = (await redis.call("ft._list")) as string[];
    return list;
  } catch (error) {
    console.log(error);
    return [] as string[];
  }
}

export async function redis_keys(pattern: string) {
  try {
    const keys = (await redis.call("KEYS", pattern)) as string[];
    return keys;
  } catch (error) {
    console.log(error);
    return [] as string[];
  }
}

// ON JSON
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

// ON HASH
