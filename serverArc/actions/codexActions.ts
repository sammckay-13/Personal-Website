"use server";


import { revalidatePath } from "next/cache";
import { codexService } from "@/serverArc/services/codexService";
export type ActionResult = { success: boolean; message: string };


export async function fetchCodexCharactersAction(userId: number) {
  if (!Number.isInteger(userId) || userId <= 0)
    throw new Error("Invalid user id");
  return codexService.fetchCodexCharacters(userId);
}


export async function createCharacterAction(
  userId: number,
  name: string,
  description: string,
): Promise<ActionResult> {
  if (!Number.isInteger(userId) || userId <= 0) {
    return { success: false, message: "Character could not be created" };
  }
  if (typeof name !== "string" || name.trim() === "") {
    return { success: false, message: "Character name cannot be empty" };
  }
  if (typeof description !== "string" || description.trim() === "") {
    return { success: false, message: "Character description cannot be empty" };
  }

  try {
    await codexService.createCharacter(userId, name.trim(), description.trim());
    revalidatePath("/"); // adjust to the route that renders the list
    return { success: true, message: "Character created" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to create character" };
  }
}


export async function deleteCharacterAction(
  userId: number,
  characterId: number,
): Promise<ActionResult> {
  if (!Number.isInteger(userId) || userId <= 0) {
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
  userId: number,
  characterId: number,
  name: string,
  description: string,
): Promise<ActionResult> {
  // validate like create, then:
  try {
    const result = await codexService.editCharacter(userId, characterId, name.trim(), description.trim());
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