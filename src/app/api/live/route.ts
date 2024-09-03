import { redis } from "@/lib/redis/config";
import { NextResponse } from "next/server";

export async function GET() {
  const responseStream = new ReadableStream({
    start(controller) {
      // Subscribe to the Redis channel
      redis.subscribe("my-channel", (err) => {
        if (err) {
          console.error("Failed to subscribe to Redis channel:", err);
          controller.close();
        } else {
          console.log("Subscribed to Redis channel: my-channel");
        }
      });

      // Listen for messages on the Redis channel
      redis.on("message", (channel, message) => {
        console.log(`Received message from ${channel}: ${message}`);
        controller.enqueue(`data: ${message}\n\n`);
      });

      // Cleanup on stream close
      controller.close = () => {
        redis.unsubscribe("my-channel");
        console.log("Client disconnected from SSE");
      };
    },
  });

  return new NextResponse(responseStream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
