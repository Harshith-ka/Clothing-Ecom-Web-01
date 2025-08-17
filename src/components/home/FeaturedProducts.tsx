import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mensShirt from "@/assets/mens-shirt.jpg";
import womensDress from "@/assets/womens-dress.jpg";
import kidsTshirt from "@/assets/kids-tshirt.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "Men's Fashion",
      price: 89.99,
      originalPrice: 129.99,
      image: mensShirt,
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSale: true,
    },
    {
      id: 2,
      name: "Elegant Midi Dress",
      category: "Women's Fashion",
      price: 159.99,
      originalPrice: null,
      image: womensDress,
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Colorful Kids T-Shirt",
      category: "Kids' Fashion",
      price: 34.99,
      originalPrice: 44.99,
      image: kidsTshirt,
      rating: 4.7,
      reviews: 67,
      isNew: false,
      isSale: true,
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that define contemporary fashion. 
            Each item tells a story of quality and craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Image */}
              <div className="product-image relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">New</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="glass hover:bg-white hover:text-primary"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="glass hover:bg-white hover:text-primary"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-gold">
                    Quick View
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-accent font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button size="sm" className="btn-ghost">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button className="btn-hero">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;