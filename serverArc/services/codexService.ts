import { codexRepository } from "../repositories/codexRepository";

export const codexService = {
  async fetchCodexCharacters(userId: string) {
    // we need to verify the user exists and is valid before fetching their characters
    return codexRepository.fetchCharactersForUser(userId);
  },

  async createCharacter(userId: string, name: string, description: string) {
    return codexRepository.createCharacter(userId, name, description);
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
