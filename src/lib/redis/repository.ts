import { redis } from "./config";

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
  }
}

export async function redis_list() {
  try {
    const list = (await redis.call("ft._list")) as string[];
    return list;
  } catch (error) {
    console.log(error);
  }
}
