import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Shield, Users, Upload, Phone, Mail } from "lucide-react";

const Subcontractors = () => {
  const requirements = [
    {
      title: "Current General Liability Insurance",
      description: "Minimum $1,000,000 coverage with Dolmen Construction listed as additional insured",
      icon: Shield
    },
    {
      title: "Workers' Compensation Insurance", 
      description: "Current workers' comp coverage for all employees",
      icon: Users
    },
    {
      title: "Valid Trade License",
      description: "Current Utah state license for your specific trade",
      icon: FileText
    },
    {
      title: "W-9 Tax Form",
      description: "Completed and current W-9 form for tax reporting",
      icon: FileText
    }
  ];

  const benefits = [
    "Steady work opportunities with established general contractor",
    "Fair payment terms and reliable payment schedule", 
    "Professional project management and clear communication",
    "Opportunity to work on diverse commercial projects",
    "Long-term partnership potential for quality subcontractors",
    "Direct communication with owner for streamlined decision making"
  ];

  const tradeMix = [
    "Electrical Contractors",
    "Plumbing Contractors", 
    "HVAC Specialists",
    "Flooring Installers",
    "Painting Contractors",
    "Drywall & Framing",
    "Tile & Stone Work",
    "Millwork & Cabinetry",
    "Roofing Contractors",
    "Concrete & Masonry",
    "Glazing & Windows",
    "Specialty Finishes"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Subcontractor Partners</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Our Network of Trusted Trade Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dolmen Construction is always looking for reliable, skilled subcontractors to join our team. 
              We believe in building lasting partnerships with quality trade professionals who share our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Partner With Dolmen Construction?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We've built our reputation on quality craftsmanship and professional relationships. 
                When you work with us, you're joining a network of skilled professionals who take pride in their work.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Our Project Portfolio
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Restaurant and hospitality buildouts</p>
                    <p>• Corporate office renovations</p>
                    <p>• Medical and healthcare facilities</p>
                    <p>• Retail and showroom spaces</p>
                    <p>• Mixed-use commercial projects</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Project Values
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Typical projects: $50K - $500K+</p>
                    <p>• Timeline: 2-16 weeks average</p>
                    <p>• Multiple projects running simultaneously</p>
                    <p>• Consistent work throughout the year</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Subcontractor Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To ensure the safety and success of all our projects, we require all subcontractors 
              to meet the following minimum standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((requirement, index) => {
              const IconComponent = requirement.icon;
              return (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{requirement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trades We Work With */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trades We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We regularly work with a diverse range of skilled trades across all our commercial projects.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tradeMix.map((trade, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-foreground">{trade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your trade listed? We're always open to working with new specialty contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to join our network? Follow these simple steps to get started.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Gather Documents
              </h3>
              <p className="text-sm text-muted-foreground">
                Collect your insurance certificates, license documentation, and completed W-9 form.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Submit Application
              </h3>
              <p className="text-sm text-muted-foreground">
                Email your documents and company information to our team for review.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Start Working
              </h3>
              <p className="text-sm text-muted-foreground">
                Once approved, we'll add you to our network and contact you for upcoming projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Submission Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Submit Your Application</CardTitle>
                <p className="text-muted-foreground">
                  Email us your required documents and company information to get started.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Required Documents:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• General Liability Insurance Certificate</li>
                    <li>• Workers' Compensation Insurance</li>
                    <li>• Current Trade License</li>
                    <li>• Completed W-9 Form</li>
                    <li>• Company information and references</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email Documents To:</p>
                      <a href="mailto:subcontractors@builtbydolmen.com" className="text-primary hover:underline">
                        subcontractors@builtbydolmen.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Questions? Call:</p>
                      <a href="tel:385-244-1619" className="text-primary hover:underline">
                        (385) 244-1619
                      </a>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="cta">
                  <Upload className="mr-2 w-4 h-4" />
                  Email Your Application
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Document Review</p>
                      <p className="text-xs text-muted-foreground">We'll verify all insurance and licensing requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Reference Check</p>
                      <p className="text-xs text-muted-foreground">We may contact provided references for quality verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Approval & Contact</p>
                      <p className="text-xs text-muted-foreground">Once approved, we'll contact you for upcoming project opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Payment Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Standard NET 30 payment terms</li>
                    <li>• Direct deposit available</li>
                    <li>• Progress payments on larger projects</li>
                    <li>• Clear payment schedule established upfront</li>
                    <li>• Prompt payment history with existing subs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Safety Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• OSHA 10 or 30 certification preferred</li>
                    <li>• Safety meetings on all job sites</li>
                    <li>• PPE requirements enforced</li>
                    <li>• Clean safety record expected</li>
                    <li>• Drug testing may be required</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subcontractors;