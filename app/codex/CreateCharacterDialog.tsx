import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogFooter, Dialog, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


export function CreateCharacterDialog({ isOpened, onCreateCharacter }: { isOpened: boolean; onCreateCharacter: (userId: number, name: string, description: string) => Promise<{ success: boolean; message: string }> }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(isOpened);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateCharacter = async () => {
    if (!name.trim() || !description.trim()) {
      setErrorMessage("Character fields cannot be empty");
      return;
    }

    try {
      const result = await onCreateCharacter(1, name, description); // Replace with actual user ID
      if (result.success) {
        setIsOpen(false);
        setName("");
        setDescription("");
        setErrorMessage("");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error("Error creating character:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={() => (        <Button
          variant="outline"
          className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] w-[75%] h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] hover:cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaPlus />
          <span className="mt-1 mb-1 text-xl">Create a Character</span>
        </Button>)}>
        {/* This will need to use render={} to avoid hydration errors */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Character</DialogTitle>
          <DialogDescription>
            Enter the details for your new character below.         </DialogDescription>    
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Name
                </Label>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                    Description
                </Label>
                <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="col-span-3"
                />
            </div>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}
        <DialogFooter>
          <Button type="submit" onClick={handleCreateCharacter}>
            Create Character
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}   