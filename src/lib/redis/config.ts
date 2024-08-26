import Redis from "ioredis";

export const redis = new Redis(6379, "192.168.16.195");
redis.on("error", (error) => {
    console.log(error);
});
