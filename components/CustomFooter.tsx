import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MckaypableIcon } from "@/assets/MckaypableIcon";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const navLinks = [
  { href: "/web-projects-gallery", label: "Gallery" },
  { href: "#", label: "AI News" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sam-mckay13",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:mckaypable@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
  },
];

export function CustomFooter() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="mb-10 w-full md:w-auto *:px-3 *:md:px-3 flex items-center text-[#DC9954] mt-5 text-md bg-[#FFFBEE] dark:bg-[#543C2F] dark:text-[#d9c8b3]">
      <div className="border-r border-[#CE7052]">
        {socialLinks.map(({ href, label, icon }) => (
          <Tooltip>
            <TooltipTrigger>

          <Button
            key={label}
            size="icon"
            variant="ghost"
            className="hover:text-[#CE7052] hover:bg-transparent mr-1"
            >
            <a aria-label={label} href={href} className="md:[&>svg]:size-5!">
              {icon}
            </a>
          </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-[#6f5345] text-[#fffbee] border border-[#fffbee] text-md">{label}</TooltipContent>
            </Tooltip>
        ))}
      </div>
      <nav>
        <ul className="ml-auto flex gap-3 text-[#6F5345] dark:text-[#d9c8b3] text-sm md:text-md md:font-semibold md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="hover:text-foreground" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="inline-flex items-center text-sm md:text-lg md:font-semibold border-l border-[#CE7052]">
        <a
          href="https://youtu.be/ZZ5LpwO-An4?si=FA420ZJSboprYZaD"
          className="hover:cursor-default"
        >
          <div className="flex items-center h-5 w-11">
            <MckaypableIcon color={theme == "light" ? "#49362D" : "#D9C8B3"} />
          </div>
        </a>
        Sam McKay
      </span>
    </footer>
  );
}
