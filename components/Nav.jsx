"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    nam: "home",
    path: "/",
  },
  {
    nam: "services",
    path: "/services",
  },
  {
    nam: "resumè",
    path: "/resume",
  },
  {
    nam: "work",
    path: "/work",
  },
  {
    nam: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } capitalize hover:text-accent font-medium transition-all duration-300`}
          >
            {link.nam}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
