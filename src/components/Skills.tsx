import { Code, Database, Globe, Cpu, Terminal, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Java", "Python"],
      color: "primary"
    },
    {
      title: "Web Development", 
      icon: Globe,
      skills: ["HTML/CSS", "JavaScript", "basic front-end frameworks"],
      color: "accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB (basic CRUD)"],
      color: "success"
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: ["Git/GitHub", "Visual Studio Code", "basic Linux commands"],
      color: "primary"
    },
    {
      title: "Software Development",
      icon: Cpu,
      skills: ["Object-oriented programming", "problem-solving", "algorithm design"],
      color: "accent"
    },
    {
      title: "Data Visualization",
      icon: Wrench,
      skills: ["Matplotlib (Python)"],
      color: "success"
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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-accent/20 transition-smooth">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses.icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
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
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Additional Technologies / Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "AI Development", "Cybersecurity",
              "Object-Oriented Programming", "Data Structures"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
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