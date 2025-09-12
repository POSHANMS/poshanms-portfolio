import { GraduationCap, Target, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I aim to build strong skills in software development and emerging technologies 
                  while continuously learning and growing. Beyond academics, I enjoy coding projects 
                  that keep me motivated and inspired.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Goals</h4>
                      <p className="text-muted-foreground">Building innovative solutions and mastering emerging technologies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Code className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Passion</h4>
                      <p className="text-muted-foreground">Problem-solving through code and creating impactful software</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Heart className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">My Drive</h4>
                      <p className="text-muted-foreground">Continuous learning and staying motivated through challenging projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary rounded-lg">
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
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-accent/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent">2+</div>
                    <div className="text-sm text-muted-foreground">Years Coding</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
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