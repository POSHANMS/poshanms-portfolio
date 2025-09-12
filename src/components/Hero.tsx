import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full hero-gradient p-1 shadow-2xl">
                <img src={profilePicture} alt="Poshan M S - Computer Science Student" className="w-full h-full rounded-full object-cover" />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full shadow-accent/30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary rounded-full shadow-primary/30"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Poshan M S
                    </span>
                  </h1>
                  <div className="space-y-4">
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">Computer Science & Engineering student • Building reliable web & software solutions • Cybersecurity</p>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-card/50 rounded-xl p-6 backdrop-blur-sm border border-primary/10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    B.Tech, Computer Science & Engineering — Navkis College of Engineering<br />
                    4th year (7th semester) — <span className="text-primary font-semibold">CGPA: 7.88</span>
                  </p>
                </div>

                {/* Profile Links */}
                <div className="bg-card/50 rounded-xl p-6 backdrop-blur-sm border border-accent/10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Connect & Profiles</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <a href="https://www.linkedin.com/in/poshan-ms-457200382" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group">
                      <div className="w-8 h-8 bg-[#0077B5] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">in</span>
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary">LinkedIn</span>
                    </a>
                    <a href="https://github.com/POSHANMS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group">
                      <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                        <span className="text-background text-xs font-bold">GH</span>
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary">GitHub</span>
                    </a>
                    <a href="https://leetcode.com/u/oeISZpmw6b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group">
                      <div className="w-8 h-8 bg-[#FFA116] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">LC</span>
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary">LeetCode</span>
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/poshanms/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group">
                      <div className="w-8 h-8 bg-[#0F9D58] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">GFG</span>
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary">GeeksforGeeks</span>
                    </a>
                    <a href="https://tryhackme.com/p/poshanms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-smooth group">
                      <div className="w-8 h-8 bg-[#C11111] rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">THM</span>
                      </div>
                      <span className="text-sm text-foreground group-hover:text-primary">TryHackMe</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="hero-gradient text-white border-0 hover:opacity-90 transition-smooth shadow-accent" onClick={() => scrollToSection('portfolio')}>
                  View My Work
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>CSE Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>7th Semester</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;