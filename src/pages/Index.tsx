
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import ContentSection from "@/components/ContentSection";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <ImageSlider />
      
      {/* About Section */}
      <ContentSection
        id="about"
        title="About Our Process"
        subtitle="We create meaningful experiences through thoughtful design and innovative technology."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in [animation-delay:200ms]">
            <p className="text-lg">
              Our approach combines minimalist aesthetics with functional design principles. We believe that great design should be invisible, allowing the content and functionality to take center stage.
            </p>
            <p>
              Every project begins with a deep understanding of the user's needs and goals. We then craft solutions that are both beautiful and effective, focusing on the smallest details to create memorable experiences.
            </p>
            <div className="pt-4">
              <a href="#services" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn about our services
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-xl animate-slide-in [animation-delay:400ms]">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://player.vimeo.com/external/454527972.sd.mp4?s=4b6653599c4d26ea0e8dbc50da2e5de15460ab0b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </ContentSection>
      
      {/* Services Section */}
      <ContentSection
        id="services"
        title="Our Services"
        subtitle="We provide comprehensive solutions tailored to your specific needs."
        withBackground={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "glass-panel rounded-2xl p-6 transition-all hover:translate-y-[-5px]",
                "animate-fade-in [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${index * 150 + 200}ms` } as React.CSSProperties}
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>
      
      {/* Portfolio Section */}
      <ContentSection
        id="portfolio"
        title="Featured Work"
        subtitle="A selection of our recent projects showcasing our expertise and creativity."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "group rounded-2xl overflow-hidden shadow-lg transition-all duration-500",
                "animate-fade-in [animation-delay:var(--delay)]"
              )}
              style={{ '--delay': `${index * 150 + 200}ms` } as React.CSSProperties}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <span className="text-primary text-sm font-medium">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
      
      {/* Contact Section */}
      <ContentSection
        id="contact"
        title="Get In Touch"
        subtitle="Have a project in mind? We'd love to hear from you."
        withBackground={true}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px]"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </ContentSection>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern<span className="font-light">Design</span></h3>
              <p className="text-white/80">Creating exceptional digital experiences through thoughtful design and innovative technology.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <a 
                      href="#services"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>hello@moderndesign.com</li>
                <li>+1 (234) 567-8901</li>
                <li>123 Design Street, Creative City</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} ModernDesign. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

// Service data
const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance the overall user experience.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Web Development",
    description: "Building responsive and performant websites using modern technologies and best practices.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Brand Identity",
    description: "Developing cohesive brand identities that communicate your values and resonate with your audience.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.5H5L8 11.5L11 7.5L14 9.5L17 5.5L22 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 19.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Motion Design",
    description: "Creating engaging animations and interactive elements that bring your digital products to life.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8H16V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Digital Marketing",
    description: "Crafting strategic digital marketing campaigns that drive engagement and conversion.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Content Creation",
    description: "Producing high-quality content that tells your story and connects with your target audience.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

// Project data
const projects = [
  {
    title: "Minimalist E-Commerce",
    description: "A clean and intuitive shopping experience",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Finance Dashboard",
    description: "Data visualization for financial insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Travel Platform",
    description: "Connecting travelers with unique experiences",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
  },
  {
    title: "Smart Home App",
    description: "Intuitive control for connected devices",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Health & Wellness",
    description: "Tracking and improving personal wellbeing",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2085&q=80"
  },
  {
    title: "Educational Platform",
    description: "Making learning accessible and engaging",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
  }
];

export default Index;
