import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/finmonie-icon.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Finmonie" className="h-8 w-8" />
          <span className="font-display font-bold text-xl text-foreground">Finmonie</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Early Access</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3">
            <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
            <Button size="sm" className="flex-1">Get Early Access</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
