// serverArc/actions/userActions.ts
"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { userService } from "@/serverArc/services/userService";
import type { ActionResult } from "@/lib/types";

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