"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/" },
  { name: "Build", href: "/build" },
];

type NavItemProps = {
  href: string;
  isCurrent: boolean;
  children?: React.ReactNode;
};

const NavItem = ({ href, isCurrent, children }: NavItemProps) => {
  return (
    <li className={`hover:text-slate-700 ${isCurrent && "font-bold"}`}>
      <Link href={href}>
        <p className="capitalize">{children ? children : href}</p>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="text-slate-200 w-full bg-lego-red shadow-xl p-6"
      role="navigation"
    >
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-center md:text-left">
          <span className="font-bold cursor-pointer">FIGURiiNE</span>
        </Link>
        <ul className="flex flex-row justify-end items-center gap-x-6 font-medium">
          {pages.map(({ name, href }) => (
            <NavItem href={href} isCurrent={pathname == href} key={name}>
              {name}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
