import { StaticImageData } from "next/image";



export interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectDialogProps {
  isOpen: boolean;
  projectName: string;
  projectImage: StaticImageData;
  projectDescription: string;
  projectUrl: string;
  onClose: () => void;
}


export interface SidebarItemProps {
  section: string;
  heightAnchor: string;
  sidebarState: "expanded" | "collapsed";
}

export interface MckaypableHeaderProps {
  title: string
}

export interface UserSVGProps {
  svgData: string
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