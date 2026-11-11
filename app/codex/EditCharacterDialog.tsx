"use client";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { EditCharacterDialogProps } from "@/lib/types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";

export function EditCharacterDialog({
  characterId,
  name,
  description,
  race,
  role,
  gender,
  country,
  town,
  voice_description,
  onSubmitEdit,
  onDelete,
}: EditCharacterDialogProps) {
  const [errors, setErrors] = useState({ name: false});
  const [currName, setCurrName] = useState(name);
  const [currDescription, setCurrDescription] = useState(description);
  const [currRace, setCurrRace] = useState(race);
  const [currRole, setCurrRole] = useState(role);
  const [currGender, setCurrGender] = useState(gender);
  const [currCountry, setCurrCountry] = useState(country);
  const [currTown, setCurrTown] = useState(town);
  const [curr_voice_description, setCurrVoiceDescription] =
    useState(voice_description);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function reset() {
    setCurrName("");
    setCurrDescription("");
    setCurrRace("");
    setCurrGender("");
    setCurrCountry("");
    setCurrTown("");
    setCurrRole("");
    setCurrVoiceDescription("");
    setErrors({ name: false});
  }

  function handleSubmit() {
    const next = {
      name: currName.trim().length === 0,
    };
    setErrors(next);
    if (next.name) return;
    setIsSubmitting(true);
    onSubmitEdit(
      characterId,
      currName,
      currDescription,
      currRace,
      currRole,
      currGender,
      currCountry,
      currTown,
      curr_voice_description,
    );
    setIsSubmitting(false);
    setIsOpen(false);
  }

  function handleDelete() {
    setIsSubmitting(true);
    onDelete(characterId);
    setIsSubmitting(false);
    setIsOpen(false);
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
    if (!open) reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <Tooltip>
    <TooltipTrigger
      render={
        <DialogTrigger
          render={
            <Button
              variant="ghost"
              aria-label="Edit character"
              className="mr-3 h-10 w-10 mb-4 bg-[#6f5345] dark:bg-[#fff9e7] hover:bg-[#6f5345]"
            >
              <FaEdit className="ml-0.5 dark:text-[#6f5345] text-[#fff9e7]" />
            </Button>
          }
        />
      }
    />
    <TooltipContent className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee] text-md">Click to edit character</TooltipContent>
  </Tooltip>
      <DialogContent className="h-170 overflow-auto bg-[#fff9e7] pb-8 dark:bg-[#6F5345] md:min-w-[50%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl pt-3 w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              Edit a Character!
            </DialogTitle>
            <DialogDescription className="text-[#6F5345] dark:text-[#FFFBEE] text-lg font-semibold">
              Enter the new details for your character below.
            </DialogDescription>
          </DialogHeader>
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
                Description<span className="text-lg mt-1"></span>
              </Label>
              <Textarea
                id="character-description"
                value={currDescription}
                onChange={(e) => {
                  setCurrDescription(e.target.value);
                }}
                placeholder="Who are they? What do they look like?"
              />
            </Field>
            <Field>
              <Label
                htmlFor="gender"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Gender
              </Label>
              <Textarea
                id="gender"
                value={currGender}
                onChange={(e) => {
                  setCurrGender(e.target.value);
                }}
                placeholder="How do they identify?"
              />
            </Field>
            <Field>
              <Label
                htmlFor="race"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Race<span className="text-red-500 text-lg mt-1"></span>
              </Label>
              <Textarea
                id="race"
                value={currRace}
                onChange={(e) => {
                  setCurrRace(e.target.value);
                }}
                placeholder="What race are they?"
              />
            </Field>

            <Field>
              <Label
                htmlFor="voice-description"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Voice Description
              </Label>
              <Textarea
                id="voice-description"
                value={curr_voice_description}
                onChange={(e) => {
                  setCurrVoiceDescription(e.target.value);
                }}
                placeholder="What do they sound like?"
              />
            </Field>

            <Field>
              <Label
                htmlFor="role"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Role
              </Label>
              <Textarea
                id="role"
                value={currRole}
                onChange={(e) => {
                  setCurrRole(e.target.value);
                }}
                placeholder="What do they do?"
              />
            </Field>

            <Field>
              <Label
                htmlFor="country"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Country
              </Label>
              <Textarea
                id="country"
                value={currCountry}
                onChange={(e) => {
                  setCurrCountry(e.target.value);
                }}
                placeholder="What country are they from?"
              />
            </Field>

            <Field>
              <Label
                htmlFor="town"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Town
              </Label>
              <Textarea
                id="town"
                value={currTown}
                onChange={(e) => {
                  setCurrTown(e.target.value);
                }}
                placeholder="What town are they from?"
              />
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
  );
}
