import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Users, Calendar, CheckCircle, Award, Wrench, Home } from "lucide-react";
import mattHeadshot from "@/assets/matt-headshot.jpg";

const About = () => {
  const quickStats = [
    { icon: Calendar, number: "20+", label: "Years Experience" },
    { icon: Home, number: "2019", label: "Established" },
    { icon: Shield, number: "B100/E100", label: "Licensed & Insured" },
    { icon: Award, number: "500K+", label: "Sq Ft Remodeled" },
  ];

  const values = [
    {
      title: "Trust & Communication",
      description: "We believe in transparent communication throughout every project. You'll work directly with Matt, ensuring your vision is understood and executed.",
      icon: Users
    },
    {
      title: "Quality Craftsmanship", 
      description: "Every project reflects our commitment to excellence. We use premium materials and proven techniques to deliver lasting results.",
      icon: Wrench
    },
    {
      title: "Professional Service",
      description: "From initial consultation to project completion, we maintain the highest standards of professionalism and accountability.",
      icon: CheckCircle
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Dolmen Construction</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Experience You Can Trust. Craftsmanship You Can See.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-service general contractor in Layton, Utah, specializing in commercial interiors since 2019. 
              Built on a foundation of trust, quality, and over two decades of industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Meet Our Founder
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Matt</strong> brings over 20 years of experience in high-end commercial construction work. 
                  Before founding Dolmen Construction in 2019, he honed his skills on complex commercial projects throughout Utah, 
                  developing a reputation for quality craftsmanship and reliable project delivery.
                </p>
                <p>
                  His hands-on approach means you'll work directly with the owner on every project. This direct relationship ensures 
                  clear communication, accountability, and a personal investment in your project's success.
                </p>
                <p>
                  Matt's extensive background in commercial interiors, combined with his commitment to building lasting relationships, 
                  has made Dolmen Construction a trusted partner for businesses throughout the Wasatch Front.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link to="/contact">Work Directly With Matt</Link>
                </Button>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative">
                <img 
                  src={mattHeadshot} 
                  alt="Matt - Founder of Dolmen Construction" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  <div className="text-sm font-medium">20+ Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built our reputation on three core principles that guide every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Serving the Wasatch Front
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Layton, Utah, we provide commercial construction services throughout the greater Salt Lake area. 
                Our central location allows us to efficiently serve businesses from Ogden to Salt Lake City and everywhere in between.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Primary Service Areas:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Layton</li>
                    <li>• Salt Lake City</li>
                    <li>• Park City</li>
                    <li>• Ogden</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Also Serving:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Davis County</li>
                    <li>• Weber County</li>
                    <li>• Salt Lake County</li>
                    <li>• Summit County</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-accent/50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Why Choose Dolmen Construction?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Licensed B100 & E100 General Contractor</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Fully bonded and insured for your protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Direct communication with the owner on every project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Established partnerships with local architects and engineers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">Track record of on-time, on-budget project delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the difference of working directly with an owner who cares about your project's success. 
            Let's discuss your commercial construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;