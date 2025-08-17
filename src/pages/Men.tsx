import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, Filter, Grid, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AddToCartButton from "@/components/AddToCartButton";

const Men = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      category: "Shirts",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSale: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Black"]
    },
    {
      id: 2,
      name: "Casual Denim Jacket",
      category: "Jackets",
      price: 159.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: false,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black"]
    },
    {
      id: 3,
      name: "Premium Wool Sweater",
      category: "Sweaters",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 67,
      isNew: false,
      isSale: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Navy", "Black"]
    },
    {
      id: 4,
      name: "Smart Chino Pants",
      category: "Pants",
      price: 79.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 142,
      isNew: false,
      isSale: false,
      sizes: ["30", "32", "34", "36"],
      colors: ["Khaki", "Navy", "Black"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Men's Collection</h1>
          <p className="text-xl opacity-90">Sophisticated styles for the modern gentleman</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <div key={product.id} className={`product-card ${
              viewMode === 'list' ? 'flex flex-row' : ''
            }`}>
              {/* Product Image */}
              <div className={`product-image relative ${
                viewMode === 'list' ? 'w-48 aspect-square flex-shrink-0' : ''
              }`}>
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
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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

                {/* Size Options */}
                <div className="mb-3">
                  <span className="text-sm text-muted-foreground mb-2 block">Sizes:</span>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground mb-2 block">Colors:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

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
                  
                   <AddToCartButton 
                     product={{
                       id: product.id,
                       name: product.name,
                       price: product.price,
                       image: product.image
                     }}
                     size="sm"
                     className="btn-gold"
                   />
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-outline">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Men;