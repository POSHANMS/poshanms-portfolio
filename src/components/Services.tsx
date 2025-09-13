import { Globe, Code, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and user-friendly websites using HTML, CSS, and JavaScript with modern frameworks and best practices.",
      features: [
        "Responsive Design",
        "Modern UI/UX", 
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      color: "primary"
    },
    {
      icon: Code,
      title: "Software Solutions", 
      description: "Developing applications to solve real-world problems using C, C++, Java, or Python with focus on scalability and efficiency.",
      features: [
        "Custom Applications",
        "Problem-solving Focus",
        "Scalable Architecture", 
        "Code Quality"
      ],
      color: "accent"
    },
    {
      icon: Cpu,
      title: "Full Stack Development",
      description: "Designing, developing, and maintaining complete applications from database to user interface with modern technology stack.",
      features: [
        "Database Design",
        "API Development",
        "Frontend Integration",
        "System Maintenance"
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
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services focused on delivering high-quality software solutions tailored to your needs
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
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.icon}`}></div>
                      <span className="text-sm text-foreground">{feature}</span>
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
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6">
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