import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { TechNewsCardProps } from "@/lib/types";


export default function TechNewsCard({title, content, sources}: TechNewsCardProps) {

    return (
        <Card>
            <CardHeader>
                {title}
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