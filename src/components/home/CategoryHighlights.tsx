import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryHighlights = () => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Sophisticated styles for the modern gentleman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
      link: "/men",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Women's Collection",
      description: "Elegant designs that celebrate femininity",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6af?w=600&h=800&fit=crop&crop=face",
      link: "/women",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Kids' Fashion",
      description: "Fun and comfortable clothing for little ones",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600&h=800&fit=crop&crop=face",
      link: "/kids",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Accessories",
      description: "Perfect finishing touches for every outfit",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      link: "/accessories",
      color: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every style and occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                  <Button 
                    className="btn-gold w-fit opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-x-4 group-hover:translate-x-0"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-gold rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            New Customer Special
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get 20% off your first order with code WELCOME20
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
            <Button variant="ghost" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;