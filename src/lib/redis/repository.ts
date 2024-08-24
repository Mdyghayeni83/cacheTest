import { redis } from "./config";

export function makeQueryValue(values: { [key: string]: any }) {
  let queryValue: string[] = [];
  for (const property in values) {
    queryValue.push(property, values[property]);
  }
  return queryValue;
}
export async function set(key: string, values: { [key: string]: any }) {
  const _values = makeQueryValue(values);
  return await redis.call("HSET", key, ..._values);
}

export async function getAll(index: string) {
  return await redis.call("FT.SEARCH", `idx:${index}`, "*");
}
