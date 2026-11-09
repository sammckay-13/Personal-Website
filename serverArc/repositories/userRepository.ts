import { eq } from "drizzle-orm";
import { db } from "@/src/db"; // adjust to wherever your drizzle client lives
import { CodexUsers } from "@/src/db/schema"; // adjust path

export type NewUser = {
  email: string;
  passwordHash: string;
  anonId: string | null;
};

// Repository layer: database access only. No validation, hashing, or
// ActionResult messages here. Errors are allowed to throw so the service
// layer can decide what they mean (e.g. unique violations).

export async function findUserByEmail(email: string) {
  const [user] = await db
    .select()
    .from(CodexUsers)
    .where(eq(CodexUsers.email, email))
    .limit(1);
  return user ?? null;
}

export async function findUserByAnonId(anonId: string) {
  const [user] = await db
    .select()
    .from(CodexUsers)
    .where(eq(CodexUsers.anon_id, anonId))
    .limit(1);
  return user ?? null;
}

export async function findUserById(id: number) {
  const [user] = await db
    .select()
    .from(CodexUsers)
    .where(eq(CodexUsers.id, id))
    .limit(1);
  return user ?? null;
}

// Returns the new user's id and email only, never the password hash.
export async function insertUser({ email, passwordHash, anonId }: NewUser) {
  const [created] = await db
    .insert(CodexUsers)
    .values({ email, password: passwordHash, anon_id: anonId })
    .returning({ id: CodexUsers.id, email: CodexUsers.email });
  return created;
}

export async function updateUserPassword(id: number, passwordHash: string) {
  const result = await db
    .update(CodexUsers)
    .set({ password: passwordHash })
    .where(eq(CodexUsers.id, id));
  return (result.rowCount ?? 0) > 0;
}