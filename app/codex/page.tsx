import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";
import {
  createCharacterAction,
  deleteCharacterAction,
  editCharacterAction,
  fetchCodexCharactersAction,
} from "@/serverArc/actions/codexActions";
import CodexWrapper from "./CodexWrapper";
import { createUserAction, logoutUserAction } from "@/serverArc/actions/userActions";
import { loginUserAction } from "@/serverArc/actions/userActions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = auth.api.getSession({ headers: await headers() });

  const characters = await fetchCodexCharactersAction();
  return (
    <div className="overflow-x-hidden md:flex-row flex-col">
      <SidebarProvider className="min-h-0" defaultOpen={false}>
        <AppSidebar />
        <FloatingSidebarTrigger />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex">
            <MckaypableHeader title="Codex" />
          </header>
        </SidebarInset>
      </SidebarProvider>
      <CodexWrapper
        characters={characters}
        onCreateCharacter={createCharacterAction}
        onDeleteCharacter={deleteCharacterAction}
        onEditCharacter={editCharacterAction}
        onCreateUser={createUserAction}
        onLoginUser={loginUserAction}
        onLogoutUser={logoutUserAction}
        isLoggedIn={!!session}
      />
    </div>
  );
}
