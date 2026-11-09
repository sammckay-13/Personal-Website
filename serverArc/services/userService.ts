// services/codexService.ts
import { hashPassword, verifyPassword } from "@/lib/utils/user";
import * as userRepository from "@/serverArc/repositories/userRepository"; // adjust path
import type { ActionResult } from "@/lib/types";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function createUser(
  email: string,
  password: string,
  anonId: string | null,
): Promise<ActionResult> {
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return { success: false, message: "Please enter a valid email" };
  }
  if (typeof password !== "string" || password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters" };
  }

  try {
    const passwordHash = await hashPassword(password);
    await userRepository.insertUser({ email: normalizedEmail, passwordHash, anonId });
    return { success: true, message: "Account created" };
  } catch (error) {
    const cause = (error as { cause?: { code?: string; constraint?: string } })?.cause;
    if (cause?.code === "23505") {
      if (cause.constraint === "codex-users_email_unique") {
        return { success: false, message: "That email is already registered" };
      }
      if (cause.constraint === "codex-users_anon_id_unique") {
        return { success: false, message: "This browser already has an account. Try logging in." };
      }
    }
    console.error(error);
    return { success: false, message: "Failed to create account" };
  }
}

export async function login(email: string, password: string): Promise<ActionResult> {
  const user = await userRepository.findUserByEmail(email.trim().toLowerCase());

  // Same message for unknown email and wrong password
  if (!user || !(await verifyPassword(password, user.password))) {
    return { success: false, message: "Invalid email or password" };
  }
  return { success: true, message: "Logged in" };
}

export const userService = {
  createUser,
  login
}