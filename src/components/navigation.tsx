import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#residency", label: "Residency" },
  { href: "#contact", label: "Contact" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-black/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-[0.15em] text-accent"
        >
          ELLIS COLLECTIVE HOUSE
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-200 hover:text-accent",
                "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/60 text-foreground/70 shadow-glow md:hidden">
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
