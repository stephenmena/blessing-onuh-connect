import React from 'react';
import { ArrowRight, Users, Heart, Scale } from 'lucide-react';
import { Button } from './ui/enhanced-button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary-glow font-medium">Honorable Representative</p>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                Blessing Onuh
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90">
                Serving the People with Integrity, Commitment, and Vision
              </p>
            </div>

            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Dedicated to representing the voices of our constituency in the House of Representatives, 
              working tirelessly to deliver meaningful legislation and transformative projects that 
              improve lives and build stronger communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Learn More About My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="elegant" size="xl">
                Contact My Office
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto">
                  <Scale className="h-6 w-6 text-primary-glow" />
                </div>
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm text-primary-foreground/70">Bills Sponsored</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary-glow" />
                </div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm text-primary-foreground/70">Constituents Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-lg mb-2 mx-auto">
                  <Heart className="h-6 w-6 text-primary-glow" />
                </div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-primary-foreground/70">Community Projects</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] bg-primary-foreground/10 rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src="./blessing-onuh-profile.jpg" 
                  alt="Hon. Blessing Onuh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;