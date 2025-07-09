import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, MapPin, Ruler } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      name: "Hideaway Restaurant",
      type: "Restaurant Buildout",
      location: "Salt Lake City, UT",
      sqft: "3,200",
      description: "Complete restaurant buildout featuring modern industrial design with custom millwork, commercial kitchen installation, and dining area renovation.",
      features: ["Commercial kitchen setup", "Custom bar installation", "Modern lighting design", "Industrial finishes"],
      image: "/api/placeholder/600/400"
    },
    {
      name: "Hideaway on Main", 
      type: "Restaurant Remodel",
      location: "Park City, UT",
      sqft: "2,800",
      description: "Comprehensive interior remodel of existing restaurant space with updated finishes, improved layout, and enhanced dining experience.",
      features: ["Layout optimization", "Updated HVAC system", "New flooring throughout", "Enhanced acoustics"],
      image: "/api/placeholder/600/400"
    },
    {
      name: "Basecamp Coworking",
      type: "Office Tenant Improvement", 
      location: "Layton, UT",
      sqft: "4,500",
      description: "Modern coworking space transformation with flexible work areas, private offices, and collaborative meeting spaces.",
      features: ["Flexible workspace design", "Technology integration", "Sound-proof meeting rooms", "Modern finishes"],
      image: "/api/placeholder/600/400"
    },
    {
      name: "Medical Office Complex",
      type: "Healthcare Buildout",
      location: "Ogden, UT", 
      sqft: "6,200",
      description: "Specialized medical office buildout with exam rooms, waiting areas, and administrative spaces designed for patient comfort and operational efficiency.",
      features: ["ADA compliant design", "Medical gas systems", "Specialized lighting", "Privacy considerations"],
      image: "/api/placeholder/600/400"
    },
    {
      name: "Retail Showroom",
      type: "Retail Remodel",
      location: "Salt Lake City, UT",
      sqft: "3,800",
      description: "High-end retail showroom renovation featuring custom display areas, improved customer flow, and modern point-of-sale integration.",
      features: ["Custom displays", "Enhanced lighting", "Security systems", "Customer flow optimization"],
      image: "/api/placeholder/600/400"
    },
    {
      name: "Corporate Headquarters",
      type: "Full Office Buildout",
      location: "Layton, UT",
      sqft: "8,500",
      description: "Complete corporate office buildout from core and shell including conference rooms, open office areas, executive suites, and break areas.",
      features: ["Executive conference rooms", "Open office concept", "Break room facilities", "Technology infrastructure"],
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "500K+", label: "Square Feet Remodeled" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100%", label: "On-Time Completion" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Commercial Spaces Across Utah
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our recent commercial construction projects showcasing quality craftsmanship, 
              innovative design solutions, and successful project delivery across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-lg font-medium mb-1">{project.name}</div>
                    <div className="text-sm">Project Photo</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="mb-2">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Ruler className="w-4 h-4" />
                      <span>{project.sqft} sq ft</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Project Types We Specialize In
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experience spans across multiple commercial sectors, allowing us to understand 
              the unique requirements of different business types.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurant & Hospitality",
                description: "Complete restaurant buildouts, bar installations, and hospitality space renovations with commercial kitchen expertise.",
                projects: "15+ Projects"
              },
              {
                title: "Office & Corporate",
                description: "Modern office buildouts, executive suites, coworking spaces, and corporate headquarters development.",
                projects: "20+ Projects"
              },
              {
                title: "Medical & Healthcare",
                description: "Specialized medical office buildouts, dental practices, and healthcare facility renovations with code compliance.",
                projects: "10+ Projects"
              },
              {
                title: "Retail & Showroom",
                description: "High-end retail spaces, showrooms, and customer-facing commercial environments with custom features.",
                projects: "12+ Projects"
              },
              {
                title: "Industrial & Warehouse",
                description: "Industrial facility improvements, warehouse office spaces, and specialized manufacturing environments.",
                projects: "8+ Projects"
              },
              {
                title: "Mixed-Use & Other",
                description: "Fitness centers, educational facilities, and other specialized commercial space renovations.",
                projects: "5+ Projects"
              }
            ].map((type, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {type.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {type.projects}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "Dolmen Construction transformed our restaurant space beyond our expectations. 
                  Matt's attention to detail and professional approach made the entire process smooth and stress-free."
                </p>
                <div className="font-medium text-foreground">Restaurant Owner</div>
                <div className="text-sm text-muted-foreground">Hideaway Restaurant</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "Working directly with Matt was invaluable. His experience and communication throughout 
                  our office buildout ensured we got exactly what we needed, on time and on budget."
                </p>
                <div className="font-medium text-foreground">Business Executive</div>
                <div className="text-sm text-muted-foreground">Corporate Client</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your commercial space. Get a free consultation 
            and detailed quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:385-244-1619">Call (385) 244-1619</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;