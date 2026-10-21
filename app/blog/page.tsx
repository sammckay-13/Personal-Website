import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MckaypableHeader from "@/components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import BlogWrapper from "./BlogWrapper";
import { fetchNewsSummariesAction } from "@/actions/blogActions";
import { TechNewsCardProps } from "@/lib/types";
export default async function Home() {
  const summaries = await fetchNewsSummariesAction();

  function toStringArray(value: unknown): string[] {
    if (Array.isArray(value)) {
      return value.filter((v): v is string => typeof v === "string");
    }
    if (typeof value === "string") {
      // handles a JSON string like '["https://..."]' or a single URL
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? toStringArray(parsed) : [value];
      } catch {
        return [value];
      }
    }
    return [];
  }

  const normalizedSummaries: TechNewsCardProps[] = summaries.map((row) => ({
    title: row.title,
    content: row.content,
    createdAt: row.createdAt,
    sources: toStringArray(row.sources),
  }));
  return (
    <div className="overflow-x-hidden">
      <SidebarProvider className="min-h-0" defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex sticky">
            <div className="flex items-center gap-2 px-4 fixed ">
              <SidebarTrigger
                size="default"
                className="-ml-1 h-10 mt-4 bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] hover:cursor-pointer [&>svg]:size-5! z-50"
              />
            </div>
            <MckaypableHeader title="Blog" />
          </header>
        </SidebarInset>
      </SidebarProvider>
      <BlogWrapper summaries={normalizedSummaries} />
    </div>
  );
}
