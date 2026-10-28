"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PostCreationDialogProps, TechNewsDialogProps } from "@/lib/types";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PostCreationDialog({
  isOpen,
  onClose,
  submitPost
}: PostCreationDialogProps) {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    function handleSubmit() {
        console.log(postTitle.length)
        if (postTitle.length > 1 && postContent.length > 1) {
            submitPost({title: postTitle, content: postContent})
        }
        // if content and title have values then call submit post passing those values in. else make red rings for missing field(s)
    }

  return isOpen ? (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <form>

      <DialogContent
        className="h-fit bg-[#fff9e7] dark:bg-[#6F5345] md:min-w-[50%]"
        showCloseButton={true}
        >
        <DialogHeader className="max-h-15">
          <DialogTitle className="text-3xl pt-3 w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
            Create a Post!
          </DialogTitle>
          <DialogDescription className="text-[#6F5345] h-[95%] dark:text-[#FFFBEE] text-lg font-semibold scrollbar-thumb-[#543c2f] scrollbar-none pt-6 overflow-y-auto">
            
          </DialogDescription>
        </DialogHeader>
         <FieldGroup>
            <Field>
              <Label htmlFor="post-title" className="mt-5 text-lg text-[#6F5345] dark:text-[#FFFBEE]">Title<span className="text-red-500 text-lg mt-1">*</span></Label>
              <Input required id="post-title" name="Post Title" onChange={(e) => setPostTitle(e.target.value)} placeholder="Title Your Post" />
            </Field>
            <Field>
              <Label htmlFor="post-content" className="text-lg text-[#6F5345] dark:text-[#FFFBEE]">Content<span className="text-red-500 text-lg mt-1">*</span></Label>
              <Textarea id="post-content" name="Post Content" onChange={(e) => setPostContent(e.target.value)} placeholder="What's on your mind?" />
            </Field>
          <Button className="dark:hover:bg-[#3e2c22] hover:cursor-pointer bg-[#543c2f] text-[#fffbee] text-lg p-5" onClick={handleSubmit}>Submit</Button>
          </FieldGroup>
        <div className=" fixed w-full mt-20 bg-[#dc9954] h-3" />
        <div className="fixed mt-174 w-full bg-[#dc9954] h-2" />
      </DialogContent>
          </form>
    </Dialog>
  ) : (
    <p></p>
  );
}
