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
    <section id="portfolio" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(217 32% 17%) 50%, hsl(222 47% 11%) 100%)'}}>
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
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
                  <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-white/20`}>
                    <div className="flex items-center justify-center h-64 relative">
                      <div className={`p-8 rounded-full ${colorClasses.icon}`}>
                        <Icon className="w-16 h-16" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-8 h-8 bg-accent/30 rounded-full"></div>
                      <div className="absolute top-1/2 left-4 w-4 h-4 bg-success/40 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <div className={`px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium border border-white/30`}>
                        Featured
                      </div>
                    </div>
                    <p className="text-lg text-white/80 leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-smooth border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colorClasses.icon}`}></div>
                          <span className="text-sm text-white/70">{feature}</span>
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-white/70 mb-6">
              I'm constantly working on new projects and exploring emerging technologies. Stay tuned for more innovative solutions!
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('#', '_blank')}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
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