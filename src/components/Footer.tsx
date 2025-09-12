import { Heart, Mail, Linkedin, Github, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Mail,
    href: "mailto:poshan.ms@example.com",
    label: "Email"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/in/poshanms",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com/poshanms",
    label: "GitHub"
  }, {
    icon: Phone,
    href: "tel:+919876543210",
    label: "Phone"
  }];
  const quickLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Portfolio",
    href: "#portfolio"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      document.getElementById(href.substring(1))?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Poshan M S
            </h3>
            <p className="text-background/80 leading-relaxed">
              A passionate Computer Science student dedicated to building innovative software solutions 
              and contributing to the world of technology through clean code and creative problem-solving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return <a key={index} href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''} className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth" aria-label={link.label}>
                    <Icon className="w-5 h-5" />
                  </a>;
            })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} onClick={e => {
                e.preventDefault();
                scrollToSection(link.href);
              }} className="text-background/80 hover:text-accent transition-smooth">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Get In Touch</h4>
            <div className="space-y-3 text-background/80">
              <p className="text-sm">
                Ready to collaborate? Let's discuss your next project and create something amazing together.
              </p>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>by Poshan M S</span>
            </div>
            
            <div className="text-background/80 text-sm">
              © {currentYear} Poshan M S. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;