import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, Filter, Grid, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AddToCartButton from "@/components/AddToCartButton";

const Women = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: "Elegant Midi Dress",
      category: "Dresses",
      price: 159.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: false,
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Black", "Navy"]
    },
    {
      id: 2,
      name: "Silk Blouse",
      category: "Tops",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1564257577-b5467b1b1c07?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSale: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Cream", "Blush"]
    },
    {
      id: 3,
      name: "High-Waisted Jeans",
      category: "Denim",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 203,
      isNew: false,
      isSale: true,
      sizes: ["24", "26", "28", "30", "32"],
      colors: ["Dark Blue", "Light Blue", "Black"]
    },
    {
      id: 4,
      name: "Cashmere Cardigan",
      category: "Knitwear",
      price: 249.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 67,
      isNew: true,
      isSale: false,
      sizes: ["XS", "S", "M", "L"],
      colors: ["Beige", "Gray", "Cream"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Women's Collection</h1>
          <p className="text-xl opacity-90">Elegant designs that celebrate femininity</p>
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

export default Women;