import React from 'react';
import { Award, BookOpen, Users, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Legislative Excellence",
      description: "Recognized for outstanding contribution to lawmaking and parliamentary debates"
    },
    {
      icon: BookOpen,
      title: "Educational Advocate",
      description: "Champion of educational reforms and youth empowerment initiatives"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Dedicated to grassroots development and constituency engagement"
    },
    {
      icon: Briefcase,
      title: "Economic Development",
      description: "Focused on job creation and sustainable economic growth"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                About Hon. Blessing Onuh
              </h2>
              <p className="text-xl text-muted-foreground">
                A dedicated public servant committed to transparent governance and inclusive development
              </p>
            </div>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                Hon. Blessing Onuh brings years of experience in public service, community development, 
                and legislative excellence to the House of Representatives. With a deep understanding 
                of the challenges facing our constituency, she has consistently advocated for policies 
                that promote economic growth, educational advancement, and social justice.
              </p>
              
              <p>
                Her legislative journey is marked by groundbreaking bills that address critical issues 
                such as youth unemployment, women's rights, and infrastructure development. Through 
                collaborative leadership and strategic partnerships, she has successfully championed 
                initiatives that have directly improved the lives of thousands of constituents.
              </p>

              <p>
                Beyond the chambers of the National Assembly, Hon. Onuh remains deeply connected to 
                her roots, regularly engaging with community leaders, youth groups, and women's 
                organizations to ensure that her legislative priorities reflect the real needs of the people.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {achievements.map((item, index) => (
                <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-primary rounded-2xl overflow-hidden shadow-elegant">
              <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <p className="text-4xl font-bold mb-2">Hon. Blessing Onuh</p>
                  <p className="text-lg opacity-80">Official Portrait</p>
                </div>
              </div>
            </div>
            
            {/* Quote Card */}
            <Card className="absolute -bottom-8 -left-8 max-w-xs bg-background shadow-glow border-none">
              <CardContent className="p-6">
                <blockquote className="text-sm text-foreground italic">
                  "Public service is not just a career choice; it's a calling to serve 
                  with integrity and make a lasting difference in people's lives."
                </blockquote>
                <footer className="mt-3 text-xs text-primary font-medium">
                  — Hon. Blessing Onuh
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;