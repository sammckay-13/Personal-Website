
"use server"
import { ActionResult } from "@/lib/types";
import { userService } from "@/serverArc/services/userService";
import { revalidatePath } from "next/cache";

export async function createUserAction(
  email: string,
  password: string,
  anon_id: string | null,
): Promise<ActionResult> {
  const result = await userService.createUser(email, password, anon_id);
  console.log(result)
  if (result.success) revalidatePath("/codex");
  return result;
}

export async function loginUserAction(email: string, password: string): Promise<ActionResult> {
  const result = await userService.login(email, password);
  if (result.success) revalidatePath("/codex")
  return result
}

