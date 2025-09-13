import { GraduationCap, Target, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate about technology and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main content */}
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I aim to build strong skills in software development and emerging technologies while continuously learning and growing. Beyond academics, I enjoy coding projects that keep me motivated and inspired.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a Computer Science and Engineering student, I'm passionate about creating innovative solutions and exploring the endless possibilities that technology offers.
                </p>
              </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Goals</h4>
                      <p className="text-muted-foreground">Building innovative solutions and mastering emerging technologies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Code className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Passion</h4>
                      <p className="text-muted-foreground">Problem-solving through code and creating impactful software</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-success/10 rounded-lg group-hover:bg-success/20 transition-colors">
                      <Heart className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Drive</h4>
                      <p className="text-muted-foreground">Continuous learning and staying motivated through challenging projects</p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Education & Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-2xl p-8 border border-primary/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <p className="text-muted-foreground">Current Studies</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">4th Year (7th Semester)</p>
                    <p className="text-primary font-medium">Navkis College of Engineering</p>
                    <p className="text-accent font-bold">CGPA: 7.88</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-accent/10 rounded-xl p-6 hover:bg-accent/20 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">2+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-6 hover:bg-primary/20 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;