import Redis from "ioredis";

export const redis = new Redis(6380, "redis://192.168.16.195");
