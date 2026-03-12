import logo from "@/assets/finmonie-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Finmonie" className="h-6 w-6" />
            <span className="font-display font-bold text-foreground">Finmonie</span>
            <span className="text-xs text-muted-foreground ml-2">A product of Colauncha</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 Finmonie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
