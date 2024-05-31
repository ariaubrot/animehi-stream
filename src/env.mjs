import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    UPSTASH_REDIS_REST_URL: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    CLIENT_ID: z.string(),
    CLIENT_SECRET: z.string(),
    GRAPHQL_ENDPOINT: z.string(),
    NEXTAUTH_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    ANIME_API_URI: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_ANIME_API_URL: z.string().url(),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    ANIME_API_URI: process.env.ANIME_API_URI,
    NEXT_PUBLIC_ANIME_API_URL: process.env.NEXT_PUBLIC_ANIME_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
})
