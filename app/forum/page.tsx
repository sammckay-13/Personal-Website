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
  replyAction,
  fetchCommentsForPostAction,
} from "@/actions/forumActions";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("ADMINID")?.value === process.env.ADMINID;
  const posts = await fetchPostsAction();

  const postsWithComments = await Promise.all(
    posts.map(async (p) => ({
      ...p,
      comments: await fetchCommentsForPostAction(p.id),
    })),
  );

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
        posts={postsWithComments}
        onReaction={reactAction}
        submitPost={submitPost}
        isAdmin={isAdmin}
        onReply={replyAction}
      />
    </div>
  );
}
