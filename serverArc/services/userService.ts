// services/userService.ts
import { APIError } from "better-auth/api";
import { auth } from "@/lib/auth";
import * as userRepository from "@/serverArc/repositories/userRepository";
import type { ActionResult } from "@/lib/types";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function createUser(
  email: string,
  password: string,
  anonId: string | null,
): Promise<ActionResult> {
  const normalizedEmail =
    typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return { success: false, message: "Please enter a valid email" };
  }
  if (typeof password !== "string" || password.length < 8) {
    return {
      success: false,
      message: "Password must be at least 8 characters",
    };
  }
  if (
    anonId !== null &&
    (typeof anonId !== "string" || !UUID_RE.test(anonId))
  ) {
    return { success: false, message: "Invalid anonymous id" };
  }

  try {
    // Friendly message before the library hits the unique constraint
    if (anonId && (await userRepository.findUserByAnonId(anonId))) {
      return {
        success: false,
        message: "This browser already has an account. Try logging in.",
      };
    }

    await auth.api.signUpEmail({
      body: {
        email: normalizedEmail,
        password,
        name: normalizedEmail, // Better Auth requires a name; swap in a display-name field later
      },
    });
    return { success: true, message: "Account created" };
  } catch (error) {
    if (error instanceof APIError) {
      // Check error.body?.code to map specific cases (e.g. email already registered)
      return {
        success: false,
        message: error.message || "Failed to create account",
      };
    }
    console.error(error);
    return { success: false, message: "Failed to create account" };
  }
}

export async function login(
  email: string,
  password: string,
): Promise<ActionResult> {
  try {
    await auth.api.signInEmail({
      body: { email: email.trim().toLowerCase(), password },
    });
    return { success: true, message: "Logged in" };
  } catch (error) {
    if (error instanceof APIError) {
      // Same message for unknown email and wrong password
      return { success: false, message: "Invalid email or password" };
    }
    console.error(error);
    return { success: false, message: "Failed to log in" };
  }
}

export const userService = { createUser, login };
