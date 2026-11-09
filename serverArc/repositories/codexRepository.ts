import { db } from "@/src/db";
import { CodexCharacters } from "@/src/db/schema";
import { desc, eq, and } from "drizzle-orm";

function fetchCharactersForUser(userId: string) {
  // we need to verify the user exists and is valid before fetching their characters
      return db
      .select({
        id: CodexCharacters.id,
        createdAt: CodexCharacters.createdAt,
        name: CodexCharacters.name,
        description: CodexCharacters.description,
      })
      .from(CodexCharacters)
      .where(eq(CodexCharacters.codex_user_id, userId))
      .orderBy(desc(CodexCharacters.createdAt));
}

function createCharacter(userId: string, name: string, description: string) {
  return db.insert(CodexCharacters).values({
    codex_user_id: userId,
    name,
    description,
  });
}

function deleteCharacter(userId: string, characterId: number) {
  return db.delete(CodexCharacters).where(
    and(
      eq(CodexCharacters.id, characterId),
      eq(CodexCharacters.codex_user_id, userId),
    ),
  );
}

function editCharacter(
  userId: string,
  characterId: number,
  name: string,
  description: string,
) {
  return db
    .update(CodexCharacters)
    .set({ name, description })
    .where(and(
      eq(CodexCharacters.id, characterId),
      eq(CodexCharacters.codex_user_id, userId),)
    );
}

export const codexRepository = {
  fetchCharactersForUser,
  createCharacter,
  deleteCharacter,
  editCharacter,
};