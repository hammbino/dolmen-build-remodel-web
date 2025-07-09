import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      timeline: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your commercial space? Get a free consultation and detailed quote. 
              We'll work with you to understand your needs and provide a comprehensive solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you within 24 hours to discuss your project in detail.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Type of Project *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="interior-remodel">Commercial Interior Remodel</SelectItem>
                            <SelectItem value="tenant-improvement">Tenant Improvement</SelectItem>
                            <SelectItem value="full-buildout">Full Buildout</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Hospitality</SelectItem>
                            <SelectItem value="office">Office Space</SelectItem>
                            <SelectItem value="medical">Medical/Healthcare</SelectItem>
                            <SelectItem value="retail">Retail/Showroom</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3months">1-3 Months</SelectItem>
                            <SelectItem value="3-6months">3-6 Months</SelectItem>
                            <SelectItem value="6+months">6+ Months</SelectItem>
                            <SelectItem value="planning">Still Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k+">$500,000+</SelectItem>
                          <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        placeholder="Please describe your project, including size, scope, and any specific requirements..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      <Send className="mr-2 w-4 h-4" />
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:385-244-1619" className="text-muted-foreground hover:text-primary transition-colors">
                        (385) 244-1619
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@builtbydolmen.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@builtbydolmen.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Layton, Utah</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">Primary Areas:</p>
                      <p className="text-sm text-muted-foreground">Layton • Salt Lake City • Park City • Ogden</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Counties Served:</p>
                      <p className="text-sm text-muted-foreground">Davis • Weber • Salt Lake • Summit</p>
                    </div>
                    <div className="pt-2 text-xs text-muted-foreground">
                      Other areas considered on a project-by-project basis
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Licensed B100 & E100 General Contractor</li>
                    <li>• Fully bonded and insured</li>
                    <li>• 20+ years of experience</li>
                    <li>• Direct communication with owner</li>
                    <li>• On-time project delivery</li>
                    <li>• Quality guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Based in Layton, Utah, perfectly positioned to serve the Wasatch Front
            </p>
          </div>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Dolmen Construction</p>
              <p className="text-sm">Layton, Utah</p>
              <p className="text-xs mt-2">Google Maps integration would go here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;