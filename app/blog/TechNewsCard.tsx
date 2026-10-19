import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { TechNewsCardProps } from "@/lib/types";


export default function TechNewsCard({blurb_title, content, sources}: TechNewsCardProps) {

    return (
        <Card>
            <CardHeader>
                {blurb_title}
            </CardHeader>
                <CardContent>
                    {content}
                </CardContent>
                <CardFooter>
                    {sources}
                </CardFooter>
        </Card>
    )
}