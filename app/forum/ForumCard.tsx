import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaRegHeart } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ForumCard() {
  return (
    <Card
      id="blog-wrapper"
      className="flex items-center w-[50%] border bg-[#6f5345] border-[#fffbee] mt-15 h-fit"
    >
      <CardHeader className="w-full text-3xl underline underline-offset-6">
        Title
      </CardHeader>
      <CardContent className="flex gap-4 text-lg text-[#fffbee]">
        <div>The forum comment</div>
        {/* It might be cool to add a model column to the database so people can see which model is creating which summaries */}
      </CardContent>
      <CardFooter className="flex flex-row w-full bg-[#624a3e] border-t border-[#fffbee]">
        <Tooltip>
          <TooltipTrigger>
            <Button className="bg-transparent hover:bg-transparent cursor-pointer">
              <FaRegThumbsUp className="text-[#fffbee]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-[#6f5345] border text-md "
          >
            Like!
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button className="bg-transparent hover:bg-transparent cursor-pointer">
              <FaRegHeart className="text-[#fffbee]" />
            </Button>{" "}
          </TooltipTrigger>
          <TooltipContent side="bottom" className="bg-[#6f5345] text-md border">
            Love!
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button className="bg-transparent hover:bg-transparent cursor-pointer">
              <FaRegLightbulb className="text-[#fffbee]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-[#6f5345] border text-md "
          >
            Inspiring!
          </TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
