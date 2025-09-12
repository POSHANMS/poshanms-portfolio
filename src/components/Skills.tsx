import { Code, Database, Globe, Cpu, Terminal, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
      ],
      color: "primary"
    },
    {
      title: "Web Development", 
      icon: Globe,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
      ],
      color: "accent"
    },
    {
      title: "Database & Data",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 80 },
      ],
      color: "success"
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 60 },
      ],
      color: "primary"
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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className={`text-xs font-bold ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${colorClasses.progress} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "AI Development", "OpenAI API",
              "Authentication Systems", "RESTful APIs", "Object-Oriented Programming", 
              "Algorithm Design", "Data Structures", "Software Architecture"
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