import { ActionResult } from "@/lib/types";
import { codexRepository } from "../repositories/codexRepository";

export const codexService = {
  async fetchCodexCharacters(userId: string) {
    // we need to verify the user exists and is valid before fetching their characters
    return codexRepository.fetchCharactersForUser(userId);
  },

  async createCharacter(
    userId: string,
    name: string,
    description: string,
    race: string,
    role: string,
    gender: string,
    country: string,
    town: string,
    voice_description: string
  ): Promise<ActionResult> {
    if (typeof name !== "string" || name.trim() === "") {
      return { success: false, message: "Character name cannot be empty" };
    }

    try {
      await codexRepository.createCharacter(
        userId,
        name.trim(),
        description.trim(), race.trim(), role.trim(), gender.trim(), country.trim(), town.trim(), voice_description.trim()

      );
      return { success: true, message: "Character created" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Failed to create character" };
    }
  },

  async deleteCharacter(userId: string, characterId: number) {
    return codexRepository.deleteCharacter(userId, characterId);
  },

  async editCharacter(
    userId: string,
    characterId: number,
    name: string,
    description: string,
  ) {
    return codexRepository.editCharacter(
      userId,
      characterId,
      name,
      description,
    );
  },
};
