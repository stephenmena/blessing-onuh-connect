import React from 'react';
import { Users, Handshake, MessageCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CommunityEngagement = () => {
  const engagementStats = [
    {
      icon: Users,
      title: "Town Halls",
      count: "24+",
      description: "Community meetings held annually"
    },
    {
      icon: Handshake,
      title: "Partnerships",
      count: "50+",
      description: "Strategic collaborations established"
    },
    {
      icon: MessageCircle,
      title: "Consultations",
      count: "200+",
      description: "Constituent meetings facilitated"
    },
    {
      icon: Calendar,
      title: "Events",
      count: "100+",
      description: "Community events organized"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Community Engagement & Collaboration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges between the National Assembly and grassroots communities through 
            meaningful dialogue and strategic partnerships
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-16">
          <div className="aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src="/office-group-photo.png" 
              alt="Hon. Blessing Onuh with community leaders and stakeholders"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl">
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Strategic Partnership Meeting
              </h3>
              <p className="text-lg opacity-90">
                Collaborating with key stakeholders to address constituency priorities and advance community development initiatives
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementStats.map((stat, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-smooth text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 mx-auto">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.count}</div>
                <h3 className="font-semibold text-foreground mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-subtle border-none shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join the Conversation
              </h3>
              <p className="text-muted-foreground mb-6">
                Your voice matters in shaping the future of our constituency. 
                Engage with Hon. Blessing Onuh and be part of meaningful change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth">
                  Schedule a Meeting
                </button>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-smooth">
                  Join Community Forum
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;