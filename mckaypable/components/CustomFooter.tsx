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
    label: "LinkedIn",
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
    <footer className="mx-auto max-w-full *:px-4 *:md:px-6 items-center -ml-10">
      <div className="flex items-center justify-between py-4 text-[#DC9954] text-md bg-[#FFFBEE]">
        &copy;
        <div className=" flex">
          {socialLinks.map(({ href, label, icon }) => (
            <Button key={label} size="icon" variant="ghost" className="hover:text-[#CE7052] hover:bg-transparent">
              <a aria-label={label} href={href}>
                {icon}
              </a>
            </Button>
          ))}
        </div>
        <nav>
          <ul className="flex flex-row gap-4 font-medium text-muted-foreground text-sm md:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-foreground" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="inline-flex items-center gap-1">
          <a href="https://youtu.be/ZZ5LpwO-An4?si=FA420ZJSboprYZaD">

          <Image
            alt="McKay"
            className="size-6 rounded-full"
            src={BrownMckaypableLogo}
            />
            </a>
          Sam McKay
        </p>
      </div>
    </footer>
  );
}
