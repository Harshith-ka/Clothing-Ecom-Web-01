import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Filter } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products = [
    {
      id: 1,
      name: "Rainbow T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      image: "/src/assets/kids-tshirt.jpg",
      category: "tops",
      sizes: ["2T", "3T", "4T", "5T"],
      colors: ["Red", "Blue", "Pink"],
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Denim Overalls",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7e6551dc?w=400",
      category: "bottoms",
      sizes: ["2T", "3T", "4T", "5T", "6T"],
      colors: ["Blue", "Light Blue"],
      rating: 4.9
    },
    {
      id: 3,
      name: "Unicorn Dress",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
      category: "dresses",
      sizes: ["2T", "3T", "4T", "5T"],
      colors: ["Purple", "Pink", "White"],
      rating: 4.7
    },
    {
      id: 4,
      name: "Superhero Pajamas",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
      category: "sleepwear",
      sizes: ["2T", "3T", "4T", "5T", "6T"],
      colors: ["Blue", "Red"],
      rating: 4.6
    },
    {
      id: 5,
      name: "Sports Shorts",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
      category: "bottoms",
      sizes: ["2T", "3T", "4T", "5T"],
      colors: ["Navy", "Gray", "Black"],
      rating: 4.5
    },
    {
      id: 6,
      name: "Princess Tutu",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      category: "dresses",
      sizes: ["2T", "3T", "4T"],
      colors: ["Pink", "Purple", "White"],
      rating: 4.8,
      isNew: true
    }
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "tops", name: "Tops" },
    { id: "bottoms", name: "Bottoms" },
    { id: "dresses", name: "Dresses" },
    { id: "sleepwear", name: "Sleepwear" }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-accent-light to-accent flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Kids Collection</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Fun, comfortable, and stylish clothing for little adventurers
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
                            <span className="text-sm font-medium">Sizes: </span>
                            <span className="text-sm text-muted-foreground">
                              {product.sizes.join(", ")}
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
    </Layout>
  );
};

export default Kids;