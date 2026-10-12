import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CustomAlertProps } from "@/lib/types";
import { InfoIcon } from "lucide-react";

export default function CustomAlert({ title, description }: CustomAlertProps) {
  return (
    <Alert className="mt-10 flex ml-15 w-fit bg-[#6f5345] drop-shadow-2xl">
      <InfoIcon width={10} />
      <div className="flex-col">

      <AlertTitle className="text-xl">{title}</AlertTitle>
      <AlertDescription className="flex-col">
       {description}
      </AlertDescription>
      </div>
    </Alert>
  );
}
