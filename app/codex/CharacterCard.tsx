"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CharacterCardProps } from "@/lib/types";
import { EditCharacterDialog } from "./EditCharacterDialog";

export function CharacterCard({
  characterId,
  name,
  description,
  race,
  role,
  gender,
  country,
  town,
  voice_description,
  handleEditCharacter,
  handleDeleteCharacter,
}: CharacterCardProps) {
  const fields = [
    { key: "description", label: "Description", value: description },
    { key: "role", label: "Role", value: role },
    { key: "country", label: "Country", value: country },
    { key: "town", label: "Town", value: town },
    { key: "voice_description", label: "Voice", value: voice_description },
  ];

  const trimmedFields = fields.filter((f) => f.value);

  const [outerOpen, setOuterOpen] = useState<string[]>([]);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const allOpen =
    outerOpen.includes("details") && openItems.length === fields.length;

  const toggleAll = () => {
    if (allOpen) {
      setOuterOpen([]);
      setOpenItems([]);
    } else {
      setOuterOpen(["details"]);
      setOpenItems(fields.map((f) => f.key));
    }
  };

  const subtitle = [race, gender].filter(Boolean).join(" · ");
  console.log(gender);

  return (
    <Card className="dark:bg-[#6f5345] bg-[#fff9e7] border-[#fffbee] text-[#fffbee] h-auto md:h-auto w-full md:w-170 lg:w-[30%] mb-1">
      <CardHeader className="items-center justify-between w-full flex ml-2 mb-2 text-[#8b6959] dark:text-[#fffbee]">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">{name}</span>
          {subtitle && (
            <span className="text-base font-semibold opacity-100">
              {subtitle}
            </span>
          )}
        </div>
        <EditCharacterDialog
          characterId={characterId}
          name={name}
          description={description}
          race={race}
          role={role}
          gender={gender}
          country={country}
          town={town}
          voice_description={voice_description}
          onSubmitEdit={handleEditCharacter}
          onDelete={handleDeleteCharacter}
        />
      </CardHeader>
      <CardContent className="w-full text-[#8b6959] dark:text-[#fffbee] text-lg font-semibold">
        <div className="flex justify-end mb-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleAll}
            className="text-sm text-[#8b6959] dark:text-[#fffbee]"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </Button>
        </div>
        <Accordion
          multiple
          value={outerOpen}
          onValueChange={setOuterOpen}
          className="w-full"
        >
          <AccordionItem
            value="details"
            className="border-[#8b6959]/30 dark:border-[#fffbee]/30"
          >
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Details
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                multiple
                value={openItems}
                onValueChange={setOpenItems}
                className="w-full"
              >
                {trimmedFields.map(({ key, label, value }) => (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border-[#8b6959]/30 dark:border-[#fffbee]/30"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {label}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-normal">
                      {value || "—"}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
