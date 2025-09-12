import { ExternalLink, Github, Brain, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "HealthGPT",
      description: "AI-powered healthcare assistant answering medical queries and tracking symptoms with advanced machine learning capabilities.",
      longDescription: "A comprehensive healthcare AI assistant that leverages OpenAI's API to provide intelligent medical query responses. Features secure data storage, user authentication, and an intuitive chatbot interface for seamless patient interaction.",
      tech: ["Python", "AI", "ML", "DL", "MongoDB", "OpenAI API", "Authentication"],
      icon: Brain,
      color: "primary",
      features: [
        "AI-powered medical query responses",
        "Symptom tracking and analysis", 
        "Secure data storage with MongoDB",
        "User authentication system",
        "Intuitive chatbot interface",
        "Integration with OpenAI API"
      ],
      github: "#",
      demo: "#",
      image: "healthgpt"
    },
    {
      id: 2,
      title: "Hostel Management System",
      description: "Comprehensive web-based application managing hostel operations including student registration, room allocation, and fee tracking.",
      longDescription: "A full-stack web application designed to streamline hostel management operations. Features an admin dashboard with complete CRUD operations and robust database integration for efficient management.",
      tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript", "Web Development"],
      icon: Building2,
      color: "accent", 
      features: [
        "Student registration system",
        "Automated room allocation",
        "Fee tracking and management",
        "Admin dashboard with analytics",
        "CRUD operations for all entities",
        "Secure database integration"
      ],
      github: "#",
      demo: "#",
      image: "hostel"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary/5",
        icon: "bg-primary text-primary-foreground",
        text: "text-primary",
        border: "border-primary/20"
      },
      accent: {
        bg: "bg-accent/5",
        icon: "bg-accent text-accent-foreground",
        text: "text-accent", 
        border: "border-accent/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative projects that demonstrate my skills in software development, AI integration, and system design
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Image/Visual */}
                <div className="flex-1">
                  <div className={`${colorClasses.bg} rounded-2xl p-8 shadow-soft`}>
                    <div className="flex items-center justify-center h-64 relative">
                      <div className={`p-8 rounded-full ${colorClasses.icon}`}>
                        <Icon className="w-16 h-16" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-8 h-8 bg-accent/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-4 h-4 bg-success/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                      <div className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-sm font-medium`}>
                        Featured
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colorClasses.icon}`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      variant="default"
                      className="gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring emerging technologies. Stay tuned for more innovative solutions!
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('#', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;