"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PostCreationDialogProps } from "@/lib/types";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const REQUIRED_MESSAGE = "This is a required field";
const errorRing =
  "border-red-500 ring-2 ring-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500/40";

export default function PostCreationDialog({
  isOpen,
  onClose,
  submitPost,
}: PostCreationDialogProps) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [errors, setErrors] = useState({ title: false, content: false });

  function reset() {
    setPostTitle("");
    setPostContent("");
    setErrors({ title: false, content: false });
  }

  function handleClose() {
    reset();
    onClose();
  }

  function handleSubmit() {
    const next = {
      title: postTitle.trim().length === 0,
      content: postContent.trim().length === 0,
    };
    setErrors(next);
    if (next.title || next.content) return; // block submit, show red rings
    
    submitPost({ title: postTitle.trim(), content: postContent.trim() });
    handleClose()
  }

  return isOpen ? (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <form>
        <DialogContent
          className="h-fit bg-[#fff9e7] dark:bg-[#6F5345] md:min-w-[50%]"
          showCloseButton={true}
        >
          <DialogHeader className="max-h-15">
            <DialogTitle className="text-3xl pt-3 w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              Create a Post!
            </DialogTitle>
            <DialogDescription className="text-[#6F5345] h-[95%] dark:text-[#FFFBEE] text-lg font-semibold scrollbar-thumb-[#543c2f] scrollbar-none pt-6 overflow-y-auto"></DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label
                htmlFor="post-title"
                className="mt-5 text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Title<span className="text-red-500 text-lg mt-1">*</span>
              </Label>
              <Input
                id="post-title"
                name="Post Title"
                value={postTitle}
                aria-invalid={errors.title}
                aria-describedby={errors.title ? "post-title-error" : undefined}
                className={errors.title ? errorRing : ""}
                onChange={(e) => {
                  setPostTitle(e.target.value);
                  if (errors.title) setErrors((p) => ({ ...p, title: false }));
                }}
                placeholder="Title Your Post"
              />
              {errors.title && (
                <p
                  id="post-title-error"
                  role="alert"
                  className="text-sm font-medium text-red-500"
                >
                  {REQUIRED_MESSAGE}
                </p>
              )}
            </Field>
            <Field>
              <Label
                htmlFor="post-content"
                className="text-lg text-[#6F5345] dark:text-[#FFFBEE]"
              >
                Content<span className="text-red-500 text-lg mt-1">*</span>
              </Label>
              <Textarea
                id="post-content"
                name="Post Content"
                value={postContent}
                aria-invalid={errors.content}
                aria-describedby={errors.content ? "post-content-error" : undefined}
                className={errors.content ? errorRing : ""}
                onChange={(e) => {
                  setPostContent(e.target.value);
                  if (errors.content) setErrors((p) => ({ ...p, content: false }));
                }}
                placeholder="What's on your mind?"
              />
              {errors.content && (
                <p
                  id="post-content-error"
                  role="alert"
                  className="text-sm font-medium text-red-500"
                >
                  {REQUIRED_MESSAGE}
                </p>
              )}
            </Field>
            <Button
              type="button"
              className="dark:hover:bg-[#3e2c22] hover:cursor-pointer bg-[#543c2f] text-[#fffbee] text-lg p-5"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </FieldGroup>
          <div className="fixed w-full mt-20 bg-[#dc9954] h-3" />
          <div className="fixed mt-174 w-full bg-[#dc9954] h-2" />
        </DialogContent>
      </form>
    </Dialog>
  ) : (
    <p></p>
  );
}