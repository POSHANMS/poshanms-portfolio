import { Code, Database, Globe, Cpu, Terminal, Wrench, Shield, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "JAVA"],
      color: "primary"
    },
    {
      title: "Web Development", 
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React.js (basic)", "REST APIs"],
      color: "accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL (basic)", "MongoDB (basic)"],
      color: "success"
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: ["Git/GitHub", "Visual Studio Code", "Eclipse", "Linux"],
      color: "primary"
    },
    {
      title: "Software Development",
      icon: Cpu,
      skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)", "Problem-Solving", "CRUD Operations"],
      color: "accent"
    },
    {
      title: "Cybersecurity & Emerging Tech",
      icon: Shield,
      skills: ["Cybersecurity Fundamentals (TryHackMe labs)", "Networking Basics", "AI/ML (Python, ML/DL basics)"],
      color: "success"
    },
    {
      title: "Data Visualization",
      icon: Wrench,
      skills: ["Matplotlib", "Pandas"],
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Documentation", "Communication"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary/10",
        icon: "bg-primary text-primary-foreground",
        progress: "bg-primary",
        text: "text-primary"
      },
      accent: {
        bg: "bg-accent/10", 
        icon: "bg-accent text-accent-foreground",
        progress: "bg-accent",
        text: "text-accent"
      },
      success: {
        bg: "bg-success/10",
        icon: "bg-success text-success-foreground", 
        progress: "bg-success",
        text: "text-success"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, hsl(217 32% 17%) 0%, hsl(222 47% 11%) 50%, hsl(217 32% 17%) 100%)'}}>
      {/* Background effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-l from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses.icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-smooth ${colorClasses.bg} ${colorClasses.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Additional Technologies / Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "AI Development", "Cybersecurity",
              "Object-Oriented Programming", "Data Structures"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/10 text-white/80 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default backdrop-blur-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;