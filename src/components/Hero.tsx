import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full hero-gradient p-1">
                <img
                  src={profilePicture}
                  alt="Poshan M S - Computer Science Student"
                  className="w-full h-full rounded-full object-cover shadow-accent"
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full shadow-soft animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary rounded-full shadow-soft"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Poshan M S
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  A Computer Science and Engineering student passionate about{" "}
                  <span className="text-primary font-semibold">technology</span>,{" "}
                  <span className="text-accent font-semibold">problem-solving</span>, and building{" "}
                  <span className="text-primary font-semibold">innovative software solutions</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="hero-gradient text-white border-0 hover:opacity-90 transition-smooth shadow-accent"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  onClick={() => scrollToSection('contact')}
                >
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
    </section>
  );
};

export default Hero;