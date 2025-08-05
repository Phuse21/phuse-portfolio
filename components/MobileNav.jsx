"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { ModeToggle } from "./modeBtn";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 items-center justify-center">
      <ModeToggle />
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent tex-extrabold" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
          {/* Logo */}
          <div className="mt-32 mb-40 text-center text-2xl flex justify-center">
            <SheetClose asChild>
              <Link href="/">
                <h1 className="text-3xl font-semibold">
                  Phuse <span className="text-accent">.</span>
                </h1>
              </Link>
            </SheetClose>
          </div>

          <SheetTitle className="hidden">Mobile Navigation</SheetTitle>

          {/* Navigation Links */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path &&
                    "text-accent border-b-2 border-accent"
                  } capitalize hover:text-accent font-medium transition-all duration-300`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
