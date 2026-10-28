// lib/anon-id.ts
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function readAnonId(): Promise<string | null> {
  const id = (await cookies()).get("anon_id")?.value;
  return id && UUID_RE.test(id) ? id : null;
}

export async function getOrCreateAnonId(): Promise<string> {
  const existing = await readAnonId();
  if (existing) return existing;

  const id = randomUUID();
  (await cookies()).set("anon_id", id, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365 * 2,
  });
  return id;
}
