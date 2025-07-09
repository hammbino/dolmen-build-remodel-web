import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Subcontractors", href: "/subcontractors" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">Dolmen Construction</div>
                <div className="text-sm text-muted-foreground">Licensed B100 & E100</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Expert commercial interior remodels and full buildouts in Utah. 
              Over 20 years of industry experience serving Layton, Salt Lake City, 
              Park City, and surrounding areas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:385-244-1619" className="hover:text-primary transition-colors">
                  (385) 244-1619
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground">
                <MapPin className="w-4 h-4" />
                <span>Layton, Utah</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Commercial Interior Remodels</li>
              <li>Tenant Improvements</li>
              <li>Full Buildouts</li>
              <li>Core & Shell</li>
              <li>Architectural Services</li>
              <li>Engineering Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Dolmen Construction. All rights reserved. Licensed & Insured.
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground">
              Serving Layton • Salt Lake City • Park City & Beyond
            </div>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;