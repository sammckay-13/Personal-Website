import { createAuthClient } from "better-auth/react";
import { sentinelClient } from "@better-auth/infra/client";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL, // or import.meta.env.VITE_APP_URL for Vite
  plugins: [sentinelClient()],
});