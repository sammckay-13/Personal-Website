import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";
import { createCharacterAction, deleteCharacterAction, editCharacterAction, fetchCodexCharactersAction } from "@/serverArc/actions/codexActions";
import CodexWrapper from "./CodexWrapper";
import { createUserAction } from "@/serverArc/actions/userActions";
import {loginUserAction} from "@/serverArc/actions/userActions"

export default async function Home() {
    const characters = await fetchCodexCharactersAction(1); // Replace with actual user ID

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
      />
    </div>
  );
}
