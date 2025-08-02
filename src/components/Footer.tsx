import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Legislative Work', href: '/legislative-work' },
    { name: 'Constituency Projects', href: '/projects' },
    { name: 'News & Media', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Bill Submissions', href: '/submit-bill' },
    { name: 'Public Petitions', href: '/petitions' },
    { name: 'Constituency Services', href: '/services' },
    { name: 'Town Hall Meetings', href: '/meetings' },
    { name: 'Youth Programs', href: '/youth' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Stay Informed</h3>
              <p className="text-primary-foreground/80 text-lg">
                Get the latest updates on legislative activities, constituency projects, 
                and community events delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <button className="px-6 py-3 bg-primary-glow text-primary-foreground font-medium rounded-lg hover:bg-primary-light transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Hon. Blessing Onuh</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Dedicated to serving our constituency with integrity, transparency, 
                and unwavering commitment to the people's welfare and development.
              </p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-primary-glow cursor-pointer transition-smooth" />
              <Twitter className="h-6 w-6 hover:text-primary-glow cursor-pointer transition-smooth" />
              <Instagram className="h-6 w-6 hover:text-primary-glow cursor-pointer transition-smooth" />
              <Youtube className="h-6 w-6 hover:text-primary-glow cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-glow transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-primary-glow transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    National Assembly Complex<br />
                    Three Arms Zone, Abuja<br />
                    Federal Capital Territory
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <p className="text-primary-foreground/80">+234 802 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <p className="text-primary-foreground/80">info@blessingonuh.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Hon. Blessing Onuh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-glow transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-glow transition-smooth">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-primary-foreground/60 hover:text-primary-glow transition-smooth">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;