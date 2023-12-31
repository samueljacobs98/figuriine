"use client";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: { pathname: "/" } },
  { name: "Build", href: { pathname: "/build" } },
];

type href = {
  pathname: string;
  query?: {
    [key: string]: string;
  };
};

type NavItemProps = {
  href: href;
  isCurrent: boolean;
  children?: React.ReactNode;
};

const NavItem = ({ href, isCurrent, children }: NavItemProps) => {
  return (
    <li className={`hover:text-slate-700 ${isCurrent && "font-bold"}`}>
      <Link href={href}>
        <p className="capitalize">{children ? children : href.pathname}</p>
      </Link>
    </li>
  );
};

type UserProps = {
  isSignedIn: boolean;
  isCurrent: boolean;
};

const User = ({ isSignedIn, isCurrent }: UserProps) => {
  return isSignedIn ? (
    <li>
      <UserButton afterSignOutUrl="/" />
    </li>
  ) : (
    <NavItem
      href={{ pathname: "/sign-in", query: { direct: "true" } }}
      isCurrent={isCurrent}
    >
      Sign In
    </NavItem>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth() as { isSignedIn: boolean };

  return (
    <nav
      className="text-slate-200 w-full bg-lego-red shadow-xl p-6"
      role="navigation"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-center md:text-left">
          <span className="font-bold cursor-pointer">FIGURiiNE</span>
        </Link>
        <ul className="flex flex-row justify-end items-center gap-x-6 font-medium">
          {pages.map(({ name, href }) => (
            <NavItem
              href={href}
              isCurrent={pathname == href.pathname}
              key={name}
            >
              {name}
            </NavItem>
          ))}
          <User isSignedIn={isSignedIn} isCurrent={pathname == "/sign-in"} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
