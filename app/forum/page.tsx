// app/forum/page.tsx
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";
import ForumWrapper from "./ForumWrapper";
import {
  fetchPostsAction,
  reactAction,
  submitPost,
} from "@/actions/forumActions";
import { cookies } from "next/headers";

export default async function Home() {
  const posts = await fetchPostsAction();
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("ADMINID")?.value === process.env.ADMINID;

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
      <ForumWrapper
        posts={posts}
        onReaction={reactAction}
        submitPost={submitPost}
        isAdmin={isAdmin}
      />
    </div>
  );
}
