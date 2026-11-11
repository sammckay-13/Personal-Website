"use server";

import { revalidatePath } from "next/cache";
import { codexService } from "@/serverArc/services/codexService";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export type ActionResult = { success: boolean; message: string };

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user.id ?? null;
}

export async function fetchCodexCharactersAction() {
  const userId = await getUserId();
  if (!userId) return [];
  return codexService.fetchCodexCharacters(userId);
}

export async function createCharacterAction(
  name: string,
  description: string,
  race: string,
  role: string,
  gender: string,
  country: string,
  town: string,
  voice_description: string,
): Promise<ActionResult> {
  const userId = await getUserId();
  if (!userId) {
    return {
      success: false,
      message: "Create an account to create a character!",
    };
  }
  if (typeof name !== "string" || name.trim() === "") {
    return { success: false, message: "Character name cannot be empty" };
  }

  try {
    await codexService.createCharacter(
      userId,
      name.trim(),
      description.trim(),
      race.trim(),
      role.trim(),
      gender.trim(),
      country.trim(),
      town.trim(),
      voice_description.trim(),
    );
    revalidatePath("/"); // adjust to the route that renders the list
    return { success: true, message: "Character created" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to create character" };
  }
}

export async function deleteCharacterAction(
  characterId: number,
): Promise<ActionResult> {
  const userId = await getUserId();
  if (!userId) {
    return { success: false, message: "Character could not be deleted" };
  }
  if (!Number.isInteger(characterId) || characterId <= 0) {
    return { success: false, message: "Character could not be deleted" };
  }

  try {
    const result = await codexService.deleteCharacter(userId, characterId);

    // Adjust to your driver: rowCount (pg), rowsAffected (libsql/sqlite), affectedRows (mysql)
    if (result.rowCount === 0) {
      return { success: false, message: "Character not found" };
    }

    revalidatePath("/"); // same route you used for create
    return { success: true, message: "Character deleted" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to delete character" };
  }
}

export async function editCharacterAction(
  characterId: number,
  name: string,
  description: string,
): Promise<ActionResult> {
  const userId = await getUserId();
  if (!userId) return { success: false, message: "no user found" };

  try {
    if (description?.trim().length === 0) description = "";
    const result = await codexService.editCharacter(
      userId,
      characterId,
      name.trim(),
      description,
    );
    if (result.rowCount === 0) {
      return { success: false, message: "Character not found" };
    }
    revalidatePath("/");
    return { success: true, message: "Character updated" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to update character" };
  }
}
