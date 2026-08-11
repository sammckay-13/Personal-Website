import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BrownMckaypableLogo from "@/assets/imgs/BrownMckaypableIcon.svg";
import { Separator } from "./ui/separator";

const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Blog" },
  { href: "#", label: "About" },
  { href: "mailto:mckaypable@gmail.com", label: "Contact" },
  { href: "#", label: "Licence" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sam-mckay13",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "#",
    label: "Email",
    icon: <FaEnvelope />,
  },
];

export function CustomFooter() {
  return (
    <footer className="*:px-4 *:md:px-6 flex items-center text-[#DC9954] text-md bg-[#FFFBEE]">
      <div className="border-r border-[#CE7052]">
        {socialLinks.map(({ href, label, icon }) => (
          <Button
            key={label}
            size="icon"
            variant="ghost"
            className="hover:text-[#CE7052] hover:bg-transparent"
          >
            <a aria-label={label} href={href}>
              {icon}
            </a>
          </Button>
        ))}
      </div>
      <nav>
        <ul className="flex gap-3 font-medium text-[#6F5345] text-md md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="hover:text-foreground" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="inline-flex items-center gap-3 border-l text-md border-[#CE7052]">
        <a
          href="https://youtu.be/ZZ5LpwO-An4?si=FA420ZJSboprYZaD"
          className="hover:cursor-default"
        >
          <Image
            alt="McKay"
            className="size-6 rounded-full"
            src={BrownMckaypableLogo}
          />
        </a>
        Sam McKay
      </p>
    </footer>
  );
}
