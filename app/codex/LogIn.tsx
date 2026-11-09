"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/toast";
import { LoginDialogProps } from "@/lib/types";
import { useState } from "react";

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";


export default function LogIn({ onCreateUser, onLoginUser }: LoginDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
      const [errors, setErrors] = useState({ title: false, content: false });


    async function handleCreateAccount() {
        // Implement the logic to create an account
        const anonId = localStorage.getItem("anon_id"); // use your existing key or helper
        const result = await onCreateUser(email, password, anonId);
        return result
    }

    async function handleLogIn() {
        // Implement the logic to log in
        // I'll also have to tie the anon_id to the user account on the backend, so people will have access to their comments and stuff
        await onLoginUser(email, password);
    
    }
    return(
    <Dialog open={isOpen} onOpenChange={() => {setIsOpen(!isOpen)}}>
        <DialogTrigger        render={
          <Button
            variant="outline"
            className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] w-[15%] h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        }>Log In</DialogTrigger>
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
                className="border rounded px-3 py-2"
                                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.title) setErrors((p) => ({ ...p, title: false }));
                }}
            />
            <input
                type="password"
                placeholder="Password"
                className="border rounded px-3 py-2"
                onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.title) setErrors((p) => ({ ...p, title: false }));

                }}
            />
            <div className="flex flex-row gap-4 justify-center">

        <button onClick={() => handleCreateAccount()} className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600">
                Create Account
            </button>
            <button onClick={() => handleLogIn()} className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600">
                Log In
            </button>
            </div>
        </div>
        </DialogContent>
        <DialogClose onClick={() => setIsOpen(false)} />
    </Dialog>
    )
}