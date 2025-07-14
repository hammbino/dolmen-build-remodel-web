import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import InViewAnimation from "@/components/InViewAnimation";

const Index = () => {
  const services = [
    {
      title: "Commercial Interior Remodels",
      description: "Transform your workspace with expert interior renovations that boost productivity and impress clients.",
      features: ["Office layouts", "Modern finishes", "Lighting design", "Space optimization"]
    },
    {
      title: "Tenant Improvements",
      description: "Customized buildouts that meet your specific business needs and lease requirements.",
      features: ["Code compliance", "Timeline management", "Budget optimization", "Minimal disruption"]
    },
    {
      title: "Full Buildouts",
      description: "Complete construction solutions from concept to completion for new commercial spaces.",
      features: ["Design consultation", "Project management", "Quality control", "Warranty protection"]
    }
  ];

  const stats = [
    { number: 500000, suffix: "+", label: "Square Feet Remodeled", prefix: "" },
    { number: 20, suffix: "+", label: "Years Experience", prefix: "" },
    { number: 150, suffix: "+", label: "Projects Completed", prefix: "" },
    { number: 98, suffix: "%", label: "Client Satisfaction", prefix: "" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations LLC",
      rating: 5,
      text: "Dolmen transformed our office space beyond our expectations. Professional, on-time, and exceptional quality."
    },
    {
      name: "Michael Chen",
      company: "Downtown Medical Center",
      rating: 5,
      text: "Outstanding work on our medical facility renovation. Matt's attention to detail made all the difference."
    },
    {
      name: "Lisa Rodriguez",
      company: "Mountain View Retail",
      rating: 5,
      text: "From planning to completion, Dolmen exceeded every milestone. Highly recommend for any commercial project."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <InViewAnimation delay={200}>
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-white border-primary/30">
              Utah's Premier Commercial General Contractor
            </Badge>
          </InViewAnimation>
          
          <InViewAnimation delay={400}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Commercial Interior<br />
              <span className="text-primary">Remodels & Buildouts</span>
            </h1>
          </InViewAnimation>
          
          <InViewAnimation delay={600}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Backed by over 20 years of industry experience. Transform your workspace with Utah's most trusted commercial construction experts.
            </p>
          </InViewAnimation>
          
          <InViewAnimation delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="cta" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <InViewAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <InViewAnimation>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Commercial Construction Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From small tenant improvements to large-scale buildouts, we deliver exceptional results on time and within budget.
              </p>
            </div>
          </InViewAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <InViewAnimation key={index} delay={index * 200}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <InViewAnimation>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from businesses we've transformed
              </p>
            </div>
          </InViewAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <InViewAnimation key={index} delay={index * 200}>
                <Card className="h-full bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </InViewAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <InViewAnimation>
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-semibold">Family Owned Business</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="font-semibold">Established 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-semibold">Quality Guaranteed</span>
              </div>
            </div>
          </InViewAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <InViewAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Commercial Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get your free consultation today and discover why Utah businesses trust Dolmen Construction for their most important projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/20">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </InViewAnimation>
        </div>
      </section>
    </div>
  );
};

export default Index;