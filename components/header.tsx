import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="bg-background shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Rohith S
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-4">
            <Link
              href="#skills"
              className="text-foreground/70 hover:text-foreground"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-foreground/70 hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-foreground"
            >
              Contact
            </Link>
          </div>
          <form className="hidden sm:flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="w-32 sm:w-64 h-9"
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
