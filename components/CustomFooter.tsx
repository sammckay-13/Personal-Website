import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MckaypableIcon } from "@/assets/MckaypableIcon";

const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Blog" },
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
  return (
    <footer className="*:px-3 *:md:px-6 flex items-center text-[#DC9954] mt-5 text-md bg-[#FFFBEE]">
      <div className="border-r border-[#CE7052]">
        {socialLinks.map(({ href, label, icon }) => (
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
        ))}
      </div>
      <nav>
        <ul className="flex gap-3 text-[#6F5345] md:text-md md:font-semibold md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="hover:text-foreground" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="inline-flex items-center border-l md:text-lg md:font-semibold border-[#CE7052]">
        <a
          href="https://youtu.be/ZZ5LpwO-An4?si=FA420ZJSboprYZaD"
          className="hover:cursor-default"
        >
          <div className="flex items-center h-5 w-11">
            <MckaypableIcon color="#6F5345" />
          </div>
        </a>
        Sam McKay
      </span>
    </footer>
  );
}
