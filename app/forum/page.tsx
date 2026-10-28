// app/forum/page.tsx
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";
import ForumWrapper from "./ForumWrapper";
import { fetchPostsAction, reactAction } from "@/actions/forumActions";

export default async function Home() {
  const posts = await fetchPostsAction();

  return (
    <div className="overflow-x-hidden md:flex-row flex-col">
      <SidebarProvider className="min-h-0" defaultOpen={false}>
        <AppSidebar />
        <FloatingSidebarTrigger />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex">
            <MckaypableHeader title="RMAIIG Forum" />
          </header>
        </SidebarInset>
      </SidebarProvider>
      <ForumWrapper posts={posts} onReaction={reactAction} />
    </div>
  );
}