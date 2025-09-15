import { Globe, Code, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Passionate about creating modern, responsive web applications using HTML, CSS, JavaScript, and React.js with clean, maintainable code.",
      features: [
        "Frontend Development",
        "React.js Applications", 
        "REST API Integration",
        "Responsive UI Design"
      ],
      color: "primary"
    },
    {
      icon: Code,
      title: "Problem Solving & Algorithms", 
      description: "Enthusiastic about tackling complex programming challenges, designing efficient algorithms, and solving computational problems.",
      features: [
        "Data Structures",
        "Algorithm Design",
        "Competitive Programming",
        "Code Optimization"
      ],
      color: "accent"
    },
    {
      icon: Cpu,
      title: "Cybersecurity & System Security",
      description: "Interested in cybersecurity principles, system security, and understanding how to build secure, reliable software systems.",
      features: [
        "Security Best Practices",
        "System Analysis",
        "Vulnerability Assessment",
        "Secure Development"
      ],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary/5",
        icon: "bg-primary text-primary-foreground",
        text: "text-primary",
        button: "bg-primary hover:bg-primary-hover text-primary-foreground"
      },
      accent: {
        bg: "bg-accent/5",
        icon: "bg-accent text-accent-foreground", 
        text: "text-accent",
        button: "bg-accent hover:bg-accent-hover text-accent-foreground"
      },
      success: {
        bg: "bg-success/5",
        icon: "bg-success text-success-foreground",
        text: "text-success", 
        button: "bg-success hover:bg-success text-success-foreground"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="areas-of-interest" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Areas of Interest</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Key areas where I'm passionate about learning, growing, and contributing to innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index} 
                className={`${colorClasses.bg} rounded-2xl p-8 shadow-soft hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm border border-white/10`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${colorClasses.icon} group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.icon}`}></div>
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className={`w-full ${colorClasses.text} hover:${colorClasses.bg} group/btn`}
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto backdrop-blur-sm border border-primary/20 hover:shadow-accent/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how I can help bring your ideas to life with clean, efficient code and innovative solutions.
            </p>
            <Button 
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="hover:scale-105 transition-transform"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;