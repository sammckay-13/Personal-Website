"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/toast";
import { LoginDialogProps } from "@/lib/types";
import { useState } from "react";

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";

export default function LogIn({ onCreateUser, onLoginUser }: LoginDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  async function handleCreateAccount() {
    // Implement the logic to create an account
    const anonId = localStorage.getItem("anon_id"); // use your existing key or helper
    // I might want to create an anon_id if they don't have one but that will probably result in orphaned posts
    const result = await onCreateUser(email, password, anonId);
    if (result.success) {
      setIsOpen(false);
      return;
    }
    setErrors({ email: true, password: true });
    return result;
  }

  async function handleLogIn() {
    // Implement the logic to log in
    // I'll also have to tie the anon_id to the user account on login, so people will have access to their comments and stuff
    const result = await onLoginUser(email, password);
    if (result.success) {
      setIsOpen(false);
      return;
    }
    setErrors({ email: true, password: true });
    return result;
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(!isOpen);
      }}
    >
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] w-[15%] h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        }
      >
        Log In
      </DialogTrigger>
      <DialogContent className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee]">
        <DialogHeader className="text-center">
          <h1 className="text-2xl font-bold">Log In</h1>
          <p className="text-sm text-muted-foreground">
            Log in to access your characters!
          </p>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            aria-invalid={errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? errorRing : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: false }));
            }}
          />
          <input
            type="password"
            placeholder="Password"
            aria-invalid={errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={errors.email ? errorRing : ""}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: false }));
            }}
          />
          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={() => handleCreateAccount()}
              className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600"
            >
              Create Account
            </button>
            <button
              onClick={() => handleLogIn()}
              className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </div>
      </DialogContent>
      <DialogClose onClick={() => setIsOpen(false)} />
    </Dialog>
  );
}
