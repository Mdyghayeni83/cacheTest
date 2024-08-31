import Redis from "ioredis";

const _config = {
  port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379,
  host: process.env.REDIS_HOST ?? "http://localhost",
  options: {
    username: process.env.REDIS_USERNAME ?? "",
    password: process.env.REDIS_PASSWORD ?? "",
    db: process.env.REDIS_DB ? +process.env.REDIS_DB : 0,
  },
};

export const redis = new Redis(_config.port, _config.host, _config.options);
redis.on("error", (error) => {
  console.log(error);
});
