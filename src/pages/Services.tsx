import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Building2, Wrench, PaintBucket, Lightbulb, Shield, Clock } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Commercial Interior Remodels",
      description: "Transform your existing commercial space with professional interior renovations that enhance functionality, aesthetics, and value.",
      features: [
        "Space planning and design optimization",
        "Modern finishes and materials",
        "Code compliance and permitting",
        "Lighting and electrical upgrades",
        "Flooring and wall treatments",
        "Custom millwork and fixtures"
      ],
      icon: Building2
    },
    {
      title: "Tenant Improvements",
      description: "Custom tenant improvement solutions designed to meet your specific business needs while working within timeline and budget constraints.",
      features: [
        "Custom layout design",
        "Fast-track scheduling",
        "Minimal business disruption",
        "ADA compliance modifications",
        "HVAC system integration",
        "Technology infrastructure"
      ],
      icon: Wrench
    },
    {
      title: "Full Buildouts",
      description: "Complete core and shell buildouts from concept to completion, including comprehensive architectural and engineering coordination.",
      features: [
        "End-to-end project management",
        "Architectural partnerships",
        "Engineering coordination",
        "Permit acquisition",
        "Quality craftsmanship",
        "Final inspections and closeout"
      ],
      icon: PaintBucket
    }
  ];

  const additionalServices = [
    "Architectural Design Services",
    "Structural Engineering",
    "MEP Engineering",
    "Permit Processing",
    "Project Management",
    "Construction Administration",
    "Interior Design Consultation",
    "Code Analysis and Compliance"
  ];

  const whyChooseUs = [
    {
      title: "Licensed & Insured",
      description: "B100 & E100 licensed general contractor with full bonding and insurance protection.",
      icon: Shield
    },
    {
      title: "Proven Experience",
      description: "Over 20 years of commercial construction experience with a track record of successful projects.",
      icon: CheckCircle
    },
    {
      title: "On-Time Delivery",
      description: "We understand the importance of deadlines and work diligently to complete projects on schedule.",
      icon: Clock
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Commercial Construction Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From interior remodels to full buildouts, we provide complete commercial construction solutions 
              with quality craftsmanship and professional service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline">
                      <Link to="/contact">
                        Get Quote for This Service <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="border-border">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 p-4 bg-accent rounded-lg">
                          <p className="text-sm text-foreground font-medium mb-1">
                            Professional Partnership
                          </p>
                          <p className="text-xs text-muted-foreground">
                            We work with established local architects and engineers to provide 
                            comprehensive design and technical solutions.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through our established partnerships with local specialists, we can provide 
              comprehensive architectural and engineering services for your project.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-4">
                  <Lightbulb className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-foreground font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need something not listed? We work with a network of trusted professionals 
              to handle specialized requirements for your project.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Discuss Your Specific Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Dolmen Construction?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed on time, 
              on budget, and to your exact specifications.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial meeting to understand your needs and vision" },
              { step: "02", title: "Planning", description: "Detailed planning with our architectural and engineering partners" },
              { step: "03", title: "Construction", description: "Professional execution with regular communication and updates" },
              { step: "04", title: "Completion", description: "Final walkthrough and project closeout with warranty support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
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
            Let's discuss your commercial construction needs and how we can help bring your vision to life. 
            Get a free consultation and detailed quote for your project.
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

export default Services;