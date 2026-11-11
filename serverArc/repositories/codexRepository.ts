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
      race: CodexCharacters.race,
      role: CodexCharacters.role,
      gender: CodexCharacters.role,
      country: CodexCharacters.country,
      town: CodexCharacters.town,
      voice_description: CodexCharacters.voice_description
    })
    .from(CodexCharacters)
    .where(eq(CodexCharacters.codex_user_id, userId))
    .orderBy(desc(CodexCharacters.createdAt));
}

function createCharacter(userId: string, name: string, description: string,     race: string,
    role: string,
    gender: string,
    country: string,
    town: string,
    voice_description: string) {
  return db.insert(CodexCharacters).values({
    codex_user_id: userId,
    name,
    description,
    race, 
    role,
    gender, country, town, voice_description
  });
}

function deleteCharacter(userId: string, characterId: number) {
  return db
    .delete(CodexCharacters)
    .where(
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
    .where(
      and(
        eq(CodexCharacters.id, characterId),
        eq(CodexCharacters.codex_user_id, userId),
      ),
    );
}

export const codexRepository = {
  fetchCharactersForUser,
  createCharacter,
  deleteCharacter,
  editCharacter,
};
