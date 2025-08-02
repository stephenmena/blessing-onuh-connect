import React from 'react';
import { FileText, Clock, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const LegislativeWork = () => {
  const bills = [
    {
      title: "Youth Empowerment and Skills Development Act",
      status: "Passed",
      date: "March 2024",
      description: "A comprehensive bill to establish vocational training centers and provide skills development opportunities for young people.",
      impact: "Expected to benefit over 10,000 youth annually",
      category: "Education & Youth"
    },
    {
      title: "Women's Economic Empowerment Bill",
      status: "Under Review",
      date: "January 2024",
      description: "Legislation aimed at promoting women's participation in the economy through access to credit and business support.",
      impact: "Targets 5,000 women entrepreneurs",
      category: "Gender Equality"
    },
    {
      title: "Rural Infrastructure Development Act",
      status: "Committee Stage",
      date: "November 2023",
      description: "Framework for improving rural road networks, electricity, and water supply systems.",
      impact: "Will serve 25 rural communities",
      category: "Infrastructure"
    },
    {
      title: "Digital Literacy and Technology Access Bill",
      status: "Passed",
      date: "September 2023",
      description: "Initiative to bridge the digital divide by providing technology access and digital skills training.",
      impact: "15,000 citizens trained in digital skills",
      category: "Technology"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Passed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Under Review':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'Committee Stage':
        return <Users className="h-4 w-4 text-blue-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Review':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Committee Stage':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Legislative Work & Bills
          </h2>
          <p className="text-xl text-muted-foreground">
            Championing legislation that drives positive change and addresses the real needs of our constituency
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-none shadow-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">25+</h3>
              <p className="text-sm text-muted-foreground">Bills Sponsored</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">12</h3>
              <p className="text-sm text-muted-foreground">Laws Enacted</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">50K+</h3>
              <p className="text-sm text-muted-foreground">Lives Impacted</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">8</h3>
              <p className="text-sm text-muted-foreground">Pending Bills</p>
            </CardContent>
          </Card>
        </div>

        {/* Bills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {bills.map((bill, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getStatusColor(bill.status)} flex items-center gap-1`}>
                    {getStatusIcon(bill.status)}
                    {bill.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{bill.date}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {bill.title}
                </CardTitle>
                <Badge variant="outline" className="self-start">
                  {bill.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {bill.description}
                </p>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Expected Impact:</h4>
                  <p className="text-sm text-muted-foreground">{bill.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block border-none shadow-elegant bg-gradient-subtle">
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                Have a Bill or Motion to Suggest?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your voice matters in shaping legislation. Share your ideas for bills or motions 
                that can benefit our constituency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-smooth">
                  Suggest a Bill
                </button>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Submit a Motion
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWork;