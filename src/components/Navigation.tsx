import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" }, 
    { label: "Skills", href: "#skills" },
    { label: "Areas of Interest", href: "#areas-of-interest" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.4)]'
        : 'bg-background/30 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-all"
            >
              Poshan M S
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="story-link px-1 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Animated hamburger button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary ${isMenuOpen ? 'translate-y-2 rotate-45 bg-primary shadow-[0_0_8px_hsl(var(--primary))]' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary ${isMenuOpen ? '-translate-y-2 -rotate-45 bg-primary shadow-[0_0_8px_hsl(var(--primary))]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile fullscreen overlay */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-2xl transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-grid-neon opacity-30" />
          <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                style={{ transitionDelay: isMenuOpen ? `${idx * 60}ms` : '0ms' }}
                className={`text-2xl font-semibold text-foreground/90 hover:text-neon transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="btn-magnetic mt-4"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;