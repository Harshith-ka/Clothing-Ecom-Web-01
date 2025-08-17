import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Truck } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously crafted using premium materials and attention to detail."
    },
    {
      icon: Heart,
      title: "Sustainable Fashion",
      description: "We're committed to ethical production and environmental responsibility."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to help you look and feel your best."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your favorite pieces to you faster."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6af?w=300&h=300&fit=crop&crop=face",
      bio: "With over 15 years in fashion design, Sarah brings a vision of accessible luxury to every collection."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Michael ensures every piece meets our quality standards and reaches customers with care."
    },
    {
      name: "Emma Rodriguez",
      role: "Sustainability Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Emma leads our sustainability initiatives, making fashion better for people and planet."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2020 with a vision to democratize premium fashion, 
            we believe everyone deserves to wear clothing that makes them feel confident and beautiful.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Fashion with Purpose
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're more than just a clothing brand. We're a movement towards mindful fashion 
                that celebrates individuality while respecting our planet. Every design decision 
                is made with intention, from our choice of sustainable materials to our ethical 
                manufacturing partnerships.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our collections are designed to be timeless, versatile, and built to last. 
                We believe in quality over quantity, creating pieces that will remain relevant 
                in your wardrobe for years to come.
              </p>
              <Button className="btn-gold">
                Explore Our Collections
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                alt="Our atelier"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind your favorite pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-64 h-64 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Fashion Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a community that values quality, sustainability, and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Newsletter Signup
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;