import Redis from "ioredis";

export const redis = new Redis(6379, "192.168.16.195", {
    username:"test",
    password:"321321",
    db:1
});
redis.on("error", (error) => {
    console.log(error);
});
