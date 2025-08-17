import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Luxury Leather Handbag",
      price: 189.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "bags",
      colors: ["Black", "Brown", "Tan"],
      rating: 4.9,
      isNew: true
    },
    {
      id: 2,
      name: "Classic Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "watches",
      colors: ["Silver", "Gold", "Black"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400",
      category: "eyewear",
      colors: ["Black", "Tortoise", "Silver"],
      rating: 4.7
    },
    {
      id: 4,
      name: "Silk Scarf",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400",
      category: "scarves",
      colors: ["Blue", "Red", "Pink", "Green"],
      rating: 4.6
    },
    {
      id: 5,
      name: "Diamond Earrings",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      category: "jewelry",
      colors: ["Silver", "Gold"],
      rating: 4.9,
      isNew: true
    },
    {
      id: 6,
      name: "Leather Belt",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "belts",
      colors: ["Black", "Brown", "Cognac"],
      rating: 4.5
    },
    {
      id: 7,
      name: "Designer Hat",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400",
      category: "hats",
      colors: ["Black", "Beige", "Navy"],
      rating: 4.4
    },
    {
      id: 8,
      name: "Gold Necklace",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      category: "jewelry",
      colors: ["Gold", "Silver"],
      rating: 4.8
    }
  ];

  const categories = [
    { id: "all", name: "All Accessories" },
    { id: "bags", name: "Bags" },
    { id: "watches", name: "Watches" },
    { id: "jewelry", name: "Jewelry" },
    { id: "eyewear", name: "Eyewear" },
    { id: "scarves", name: "Scarves" },
    { id: "belts", name: "Belts" },
    { id: "hats", name: "Hats" }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    {/* <Layout> */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-gold flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Accessories</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Perfect finishing touches for every outfit
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </h3>
                
                {/* Categories */}
                <div className="space-y-2">
                  <h4 className="font-medium text-muted-foreground">Categories</h4>
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {categories.find(c => c.id === selectedCategory)?.name} ({filteredProducts.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="product-card group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Link to={`/product/${product.id}`}>
                          <div className="product-image">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 space-y-2">
                          {product.isNew && (
                            <Badge className="bg-accent text-accent-foreground">New</Badge>
                          )}
                          {product.originalPrice && (
                            <Badge variant="destructive">
                              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-6">
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center mb-2">
                          <div className="flex text-accent">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-primary">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium">Colors: </span>
                            <span className="text-sm text-muted-foreground">
                              {product.colors.join(", ")}
                            </span>
                          </div>
                          
                          <AddToCartButton 
                            product={{
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image
                            }}
                            className="w-full"
                            size="sm"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/*</Layout> */}
  );
};

export default Accessories;
