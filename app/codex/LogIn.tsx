"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { LoginDialogProps } from "@/lib/types";

const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";

const outlineButton =
  "border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] w-fit h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] hover:cursor-pointer";

export default function LogIn({
  onCreateUser,
  onLoginUser,
  onLogoutUser,
  isLoggedIn,
}: LoginDialogProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [resultMessage, setResultMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localIsLoggedIn, setLocalIsLoggedIn] = useState(isLoggedIn);

  function resetForm() {
    setEmail("");
    setPassword("");
    setErrors({ email: false, password: false });
    setResultMessage("");
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
    if (!open) resetForm();
  }

  async function handleCreateAccount() {
    setIsSubmitting(true);
    try {
      // If there is no anon_id, the account is created without one
      const anonId = localStorage.getItem("anon_id");
      const result = await onCreateUser(email, password, anonId);

      if (!result.success) {
        setResultMessage(result.message);
        setErrors({ email: true, password: true });
        return;
      }

      // Log in right after sign-up so the new user lands in a session
      const logInResult = await onLoginUser(email, password);
      if (!logInResult.success) {
        setResultMessage(logInResult.message);
        return;
      }

      handleOpenChange(false);
      setLocalIsLoggedIn(true);
      router.refresh(); // re-run the Server Component with the new session cookie
    } catch (error) {
      console.error(error);
      setResultMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleLogIn() {
    setIsSubmitting(true);
    try {
      const result = await onLoginUser(email, password);

      if (!result.success) {
        setResultMessage(result.message);
        setErrors({ email: true, password: true });
        return;
      }

      handleOpenChange(false);
      setLocalIsLoggedIn(true);
      router.refresh();
    } catch (error) {
      console.error(error);
      setResultMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleLogOut() {
    const result = await onLogoutUser();
    if (result.success) {
      setLocalIsLoggedIn(false);
      router.refresh();
    }
  }

  return (
    <div>
      {localIsLoggedIn ? (
        <Button
          variant="outline"
          className={outlineButton}
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      ) : (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger
            render={<Button variant="outline" className={outlineButton} />}
          >
            Log In
          </DialogTrigger>

          <DialogContent className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee]">
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold">Log In</DialogTitle>
              <DialogDescription className="text-sm text-[#fffbee]">
                Log in to access your characters!
              </DialogDescription>
              {resultMessage && (
                <p role="alert" className="text-sm font-medium text-red-300">
                  {resultMessage}
                </p>
              )}
            </DialogHeader>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault(); // Enter key logs in
                void handleLogIn();
              }}
            >
              <Input
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                aria-invalid={errors.email}
                className={`bg-[#fff9e7] ${
                  errors.email ? errorRing : ""
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: false }));
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                aria-invalid={errors.password}
                className={`bg-[#fff9e7] ${
                  errors.password ? errorRing : ""
                }`}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                    setErrors((p) => ({ ...p, password: false }));
                }}
              />

              <div className="flex flex-row gap-4 justify-center">
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => void handleCreateAccount()}
                  className="bg-[#dc9954] text-[#fffbee] hover:bg-[#c98a48] hover:cursor-pointer"
                >
                  Create Account
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#543c2f] text-[#fffbee] hover:bg-[#3e2c22] hover:cursor-pointer"
                >
                  Log In
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
