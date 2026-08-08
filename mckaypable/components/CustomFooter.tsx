import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BrownMckaypableLogo from "@/assets/imgs/BrownMckaypableIcon.svg";

const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Blog" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Licence" },
  { href: "#", label: "Privacy" },
];

const socialLinks = [
  {
    href: "#",
    label: "X",
    icon: <FaLinkedin />,
  },
  {
    href: "#",
    label: "Github",
    icon: <FaEnvelope />,
  },
];

export function CustomFooter() {
  return (
    <footer className="mx-auto max-w-5xl *:px-4 *:md:px-6">
      <div className="flex flex-col gap-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"></div>
          <div className="flex items-center">
            {socialLinks.map(({ href, label, icon }) => (
              <Button key={label} size="icon" variant="ghost">
                <a aria-label={label} href={href}>
                  {icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-4 font-medium text-muted-foreground text-sm md:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-foreground" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 border-t py-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} efferd</p>

        <p className="inline-flex items-center gap-1">
          <span>Built by</span>
          <a
            aria-label="x/twitter"
            className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground hover:underline"
            href={"https://x.com/shabanhr"}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="shaban"
              className="size-4 rounded-full"
              src={BrownMckaypableLogo}
              width={24}
              height={24}
            />
            Shaban
          </a>
        </p>
      </div>
    </footer>
  );
}
