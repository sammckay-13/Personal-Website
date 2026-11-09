// serverArc/actions/userActions.ts
"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { userService } from "@/serverArc/services/userService";
import type { ActionResult } from "@/lib/types";
import { codexService } from "../services/codexService";

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user.id ?? null;
}

export async function createCharacterAction(name: string, description: string): Promise<ActionResult> {
  const userId = await getUserId();
  if (!userId) return { success: false, message: "Please log in" };

  const result = await codexService.createCharacter(userId, name, description);
  if (result.success) revalidatePath("/codex"); // not "/"
  return result;
}

export async function createUserAction(
  email: string,
  password: string,
  anonId: string | null,
): Promise<ActionResult> {
  const result = await userService.createUser(email, password, anonId);
  if (result.success) revalidatePath("/codex");
  return result;
}

export async function loginUserAction(
  email: string,
  password: string,
): Promise<ActionResult> {
  const result = await userService.login(email, password);
  if (result.success) revalidatePath("/codex");
  return result;
}

export async function logoutUserAction(): Promise<ActionResult> {
  try {
    await auth.api.signOut({ headers: await headers() });
    revalidatePath("/codex");
    return { success: true, message: "Logged out" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to log out" };
  }
}
