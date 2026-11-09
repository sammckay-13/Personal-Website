import { StaticImageData } from "next/image";
import type { reactAction, submitPost } from "@/serverArc/actions/forumActions";
import type { ReactionType, ReactionCounts } from "@/lib/reactions";

export type ActionResult = { success: boolean; message: string };



export interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
}

type comment = {
  id: number;
  createdAt: Date;
  content: string | null;
  anonId: string;
};

export interface ProjectCardProps {
  project: Project;
  descriptionWidth?: string;
  isGalleryCard?: boolean;
}

export interface ProjectDialogProps {
  isOpen: boolean;
  projectName: string;
  projectImage: StaticImageData;
  projectDescription: string;
  projectUrl: string;
  onClose: () => void;
  isGalleryCard?: boolean;
}

export interface SidebarItemProps {
  section: string;
  heightAnchor: string;
  sidebarState: "expanded" | "collapsed";
}

export interface MckaypableHeaderProps {
  title: string;
}

export interface UserSVGProps {
  svgData: string;
}

export interface SkillBadge {
  title: string;
  color?: string;
  textColor?: string;
}

export interface SkillGroup {
  skill: string;
  items: SkillBadge[];
}

export interface ContentSectionProps {
  title: string;
  skillGroups?: SkillGroup[];
  id?: string;
  content?: {
    para1?: string;
    para2?: string;
    para3?: string;
    underlinedPhrases?: string[];
  };
  list?: string[];
}

export interface CustomTextProps {
  para1?: string;
  para2?: string;
  para3?: string;
  underlinedPhrases?: string[];
  title: string;
}

export interface NavMainProps {
  navs: {
    title: string;
    url?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items: {
      icon: React.ReactNode;
      title: string;
      url: string;
    }[];
  }[];
}

export interface ColorPickerContextValue {
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
  mode: string;
  setHue: (hue: number) => void;
  setSaturation: (saturation: number) => void;
  setLightness: (lightness: number) => void;
  setAlpha: (alpha: number) => void;
  setMode: (mode: string) => void;
}

export interface TechNewsCardProps {
  title: string;
  content: string;
  sources: string[];
  createdAt: Date;
}

export interface BlogWrapperProps {
  summaries: TechNewsCardProps[];
}

export interface TechNewsDialogProps {
  isOpen: boolean;
  title: string;
  content: string;
  createdAt: Date;
  parsedFeed: FeedItem[];
  onClose: () => void;
}

export type FeedItem = {
  title: string;
  summary: string;
  url: string;
  domain: string;
};

export type ForumPost = {
  id: number;
  createdAt: Date;
  content: string | null;
  title: string | null;
  comments: comment[];
  reactions: ReactionCounts;
  myReaction: ReactionType | null;
};

export type ForumWrapperProps = {
  posts: ForumPost[];
  onReaction: typeof reactAction;
  submitPost: typeof submitPost;
  onReply: (input: {
    postId: number;
    content: string;
  }) => Promise<void | "Comment cannot be empty">;
};

export type ForumCardProps = ForumPost & {
  onReaction: typeof reactAction;
  onReply: (input: {
    postId: number;
    content: string;
  }) => Promise<void | "Comment cannot be empty">;
};

export type PostCreationDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  submitPost: typeof submitPost;
};

export type Character = {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date
};
 

export type LoginDialogProps = {
  onCreateUser: (email: string, password: string, anon_id: string | null) => Promise<ActionResult>;
  onLoginUser: (email: string, password: string) => Promise<ActionResult>;
};

export type CodexWrapperProps = LoginDialogProps & {
  characters: Character[];
  onCreateCharacter: (name: string, description: string) => Promise<ActionResult>;
  onEditCharacter: (
    characterId: number,
    name: string,
    description: string,
  ) => Promise<ActionResult>;
  onDeleteCharacter: (characterId: number) => Promise<ActionResult>;
};