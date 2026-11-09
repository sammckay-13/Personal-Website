import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CharacterCardProps } from "@/lib/types";
import { EditCharacterDialog } from "./EditCharacterDialog";


export function CharacterCard({characterId, name, description, handleEditCharacter, handleDeleteCharacter}: CharacterCardProps) {

    return (
        <Card className="dark:bg-[#6f5345] bg-[#fff9e7] border-[#fffbee] text-[#fffbee] h-auto md:h-auto w-full md:w-170 lg:w-[30%]">
            <CardHeader className="items-center justify-between w-full flex ml-2 text-2xl mb-2 font-semibold text-[#8b6959] dark:text-[#fffbee]">
            {name}
            <EditCharacterDialog characterId={characterId} name={name} description={description} onSubmitEdit={handleEditCharacter} onDelete={handleDeleteCharacter}></EditCharacterDialog>
            </CardHeader>
            <CardContent className="ml-4 w-full text-[#8b6959] dark:text-[#fffbee] text-lg font-semibold">
            {description}
            </CardContent>

        </Card>
    )
}