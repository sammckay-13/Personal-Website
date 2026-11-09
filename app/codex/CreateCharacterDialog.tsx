"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ActionResult } from "@/lib/types"; // wherever you put it

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";

export function CreateCharacterDialog({
  onCreateCharacter,
}: {
  onCreateCharacter: (
    userId: number,
    name: string,
    description: string,
  ) => Promise<ActionResult>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ name: false, description: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function reset() {
    setName("");
    setDescription("");
    setErrors({ name: false, description: false });
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
    if (!open) reset();
  }

  async function handleSubmit() {
    const next = {
      name: name.trim().length === 0,
      description: description.trim().length === 0,
    };
    setErrors(next);
    if (next.name || next.description) return;

    setIsSubmitting(true);
    try {
      const result = await onCreateCharacter(1, name.trim(), description.trim()); // Replace with actual user ID
      if (result.success) {
        toast.success(result.message);
        handleOpenChange(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error creating character:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] w-[75%] h-fit p-1 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] hover:cursor-pointer"
          />
        }
      >
        <FaPlus />
        <span className="mt-1 mb-1 text-xl">Create a Character</span>
      </DialogTrigger>

      <DialogContent
        className="h-fit overflow-hidden bg-[#fff9e7] pb-8 dark:bg-[#6F5345] md:min-w-[50%]"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl pt-3 w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
            Create a Character!
          </DialogTitle>
          <DialogDescription className="text-[#6F5345] dark:text-[#FFFBEE] text-lg font-semibold">
            Enter the details for your new character below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
        >
          <FieldGroup>
            <Field>
              <Label
                htmlFor="character-name"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Name<span className="text-red-500 text-lg mt-1">*</span>
              </Label>
              <Input
                id="character-name"
                value={name}
                aria-invalid={errors.name}
                aria-describedby={errors.name ? "character-name-error" : undefined}
                className={errors.name ? errorRing : ""}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: false }));
                }}
                placeholder="Name Your Character"
              />
              {errors.name && (
                <p
                  id="character-name-error"
                  role="alert"
                  className="text-sm font-medium text-red-500"
                >
                  {REQUIRED_MESSAGE}
                </p>
              )}
            </Field>

            <Field>
              <Label
                htmlFor="character-description"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Description<span className="text-red-500 text-lg mt-1">*</span>
              </Label>
              <Textarea
                id="character-description"
                value={description}
                aria-invalid={errors.description}
                aria-describedby={
                  errors.description ? "character-description-error" : undefined
                }
                className={errors.description ? errorRing : ""}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (errors.description)
                    setErrors((p) => ({ ...p, description: false }));
                }}
                placeholder="Who are they? What do they look like?"
              />
              {errors.description && (
                <p
                  id="character-description-error"
                  role="alert"
                  className="text-sm font-medium text-red-500"
                >
                  {REQUIRED_MESSAGE}
                </p>
              )}
            </Field>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="dark:hover:bg-[#3e2c22] hover:cursor-pointer bg-[#543c2f] text-[#fffbee] text-lg p-5"
            >
              {isSubmitting ? "Creating..." : "Create Character"}
            </Button>
          </FieldGroup>
        </form>

        <div className="absolute bottom-0 left-0 h-3 w-full bg-[#dc9954]" />
      </DialogContent>
    </Dialog>
  );
}