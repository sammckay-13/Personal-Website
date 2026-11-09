// repositories/userRepository.ts
import { eq } from "drizzle-orm";
import { db } from "@/src/db";
import { user } from "@/src/db/schema"; // the Better Auth table (adjust path)

export async function findUserByAnonId(anonId: string) {
  const [row] = await db
    .select({ id: user.id, email: user.email })
    .from(user)
    .where(eq(user.anon_id, anonId))
    .limit(1);
  return row ?? null;
}

export async function findUserById(id: string) {
  const [row] = await db
    .select({ id: user.id, email: user.email, name: user.name })
    .from(user)
    .where(eq(user.id, id))
    .limit(1);
  return row ?? null;
}

export async function findUserByEmail(email: string) {
    const [row] = await db
    .select({ id: user.id, email: user.email, name: user.name })
    .from(user)
    .where(eq(user.email, email))
    .limit(1);
  return row ?? null;
}