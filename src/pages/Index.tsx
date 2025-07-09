import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Calendar, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500K+", label: "Sq Ft Remodeled" },
    { number: "2019", label: "Established" },
    { number: "B100/E100", label: "Licensed" },
  ];

  const services = [
    {
      title: "Commercial Interior Remodels",
      description: "Transform your existing commercial space with professional interior renovations that enhance functionality and aesthetics.",
      features: ["Space planning", "Modern finishes", "Code compliance"]
    },
    {
      title: "Tenant Improvements", 
      description: "Custom tenant improvement solutions that meet your specific business needs and timeline requirements.",
      features: ["Custom layouts", "Fast turnaround", "Minimal disruption"]
    },
    {
      title: "Full Buildouts",
      description: "Complete core and shell buildouts from concept to completion, including architectural and engineering services.",
      features: ["End-to-end service", "Professional partnerships", "Quality craftsmanship"]
    }
  ];

  const testimonials = [
    {
      name: "Business Owner",
      text: "Professional work, excellent communication, and delivered on time. Matt and his team exceeded our expectations.",
      rating: 5
    },
    {
      name: "Property Manager", 
      text: "Dolmen Construction transformed our space beautifully. The attention to detail and quality craftsmanship is outstanding.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Commercial construction project" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Licensed B100 & E100 General Contractor
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Commercial Interior Remodels and Full Buildouts in Utah
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Backed by over 20 years of industry experience. We specialize in transforming commercial spaces 
              with quality craftsmanship and professional service from concept to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
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

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive commercial construction services with a focus on 
              quality, communication, and on-time delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experience You Can Trust. Craftsmanship You Can See.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dolmen Construction has been serving Utah's commercial construction needs since 2019. 
                Our founder brings over 20 years of experience in high-end commercial work, ensuring 
                every project meets the highest standards of quality and professionalism.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Direct Access to Owner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Quality Guarantee</span>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-3 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your commercial interior remodel 
            or buildout project. Let's discuss how we can bring your vision to life.
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

export default Index;