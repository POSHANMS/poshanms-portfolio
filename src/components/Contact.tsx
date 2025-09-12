import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with an email service or backend here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siddeshwaraprasanna5@gmail.com",
      href: "mailto:siddeshwaraprasanna5@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9535560561",
      href: "tel:+919535560561",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/poshan-ms-457200382",
      href: "https://www.linkedin.com/in/poshan-ms-457200382",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/POSHANMS",
      href: "https://github.com/POSHANMS",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary/10",
        icon: "bg-primary text-primary-foreground",
        text: "text-primary"
      },
      accent: {
        bg: "bg-accent/10",
        icon: "bg-accent text-accent-foreground",
        text: "text-accent"
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a friendly chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to discuss potential opportunities, 
                  or simply want to connect, I'd love to hear from you. Feel free to reach out 
                  through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const colorClasses = getColorClasses(info.color);
                  const Icon = info.icon;
                  
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-accent/20 transition-smooth group"
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className={`p-3 rounded-lg ${colorClasses.icon} group-hover:scale-110 transition-smooth`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.label}</div>
                        <div className={`text-sm ${colorClasses.text}`}>{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Location */}
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Navkis College of Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground">
              I'm currently available for freelance projects and open to discussing full-time opportunities. 
              Let's connect and explore how we can work together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;