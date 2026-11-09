"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EditCharacterDialogProps } from "@/lib/types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";


export function EditCharacterDialog({characterId, name, description, onSubmitEdit, onDelete}: EditCharacterDialogProps) {
      const [errors, setErrors] = useState({ name: false, description: false });
      const [currName, setCurrName] = useState(name);
      const [currDescription, setCurrDescription] = useState(description);
      const [isSubmitting, setIsSubmitting] = useState(false)
      const [isOpen, setIsOpen] = useState(false);

      function handleSubmit() {
        setIsSubmitting(true);
        onSubmitEdit(characterId, currName, currDescription)
        setIsSubmitting(false)
        setIsOpen(false)

      }

      function handleDelete() {
        setIsSubmitting(true);
        onDelete(characterId)
        setIsSubmitting(false)
        setIsOpen(false)
      }
    
    return (
        <Dialog open={isOpen}>
            <DialogTrigger render={(<Button onClick={() => setIsOpen(!isOpen)} variant="ghost" className="bg-[#6f5345] dark:bg-[#fff9e7] hover:bg-[#6f5345]"><FaEdit className="ml-0.5 dark:text-[#6f5345] text-[#fff9e7]"/></Button>)}></DialogTrigger>
            <DialogContent>
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
                value={currName}
                aria-invalid={errors.name}
                aria-describedby={
                  errors.name ? "character-name-error" : undefined
                }
                className={errors.name ? errorRing : ""}
                onChange={(e) => {
                  setCurrName(e.target.value);
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
                value={currDescription}
                aria-invalid={errors.description}
                aria-describedby={
                  errors.description ? "character-description-error" : undefined
                }
                className={errors.description ? errorRing : ""}
                onChange={(e) => {
                  setCurrDescription(e.target.value);
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
              {isSubmitting ? "Updating..." : "Update Character"}
            </Button>

            <Button
              disabled={isSubmitting}
              onClick={handleDelete}
              className="dark:hover:bg-[#3e2c22] hover:cursor-pointer bg-[#543c2f] text-[#fffbee] text-lg p-5"
            >
              {isSubmitting ? "Deleting..." : "Delete Character"}
            </Button>
          </FieldGroup>
        </form>

            </DialogContent>
        </Dialog>
    )
}