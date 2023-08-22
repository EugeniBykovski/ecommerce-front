"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map(({ id, name }) => ({
    href: `/category/${id}`,
    label: name,
    active: pathname === `/category/${id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:skew-x-6">
      {routes.map(({ href, label, active }) => (
        <Link
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            active ? "text-black" : "text-neutral-500"
          )}
          href={href}
          key={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
