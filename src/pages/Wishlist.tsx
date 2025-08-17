import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Trash2, Star } from "lucide-react";

import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Luxury Wool Coat",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      category: "Outerwear",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Camel"],
      rating: 4.8,
      isNew: false,
      inStock: true
    },
    {
      id: 2,
      name: "Designer Sunglasses",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400",
      category: "Accessories",
      colors: ["Black", "Tortoise"],
      rating: 4.7,
      isNew: true,
      inStock: true
    },
    {
      id: 3,
      name: "Silk Evening Dress",
      price: 189.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
      category: "Dresses",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Navy", "Burgundy"],
      rating: 4.9,
      isNew: false,
      inStock: false
    },
    {
      id: 4,
      name: "Leather Ankle Boots",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      category: "Footwear",
      sizes: ["6", "7", "8", "9", "10"],
      colors: ["Black", "Brown"],
      rating: 4.6,
      isNew: false,
      inStock: true
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const isEmpty = wishlistItems.length === 0;

  if (isEmpty) {
    return (

        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save items you love by clicking the heart icon. You'll find them here whenever you want to shop.
            </p>
            <Link to="/">
              <Button className="btn-hero">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>

    );
  }

  return (
  
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-xl text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="product-card group">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link to={`/product/${item.id}`}>
                      <div className="product-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">Out of Stock</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {item.isNew && (
                        <Badge className="bg-accent text-accent-foreground">New</Badge>
                      )}
                      {item.originalPrice && (
                        <Badge variant="destructive">
                          -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                        </Badge>
                      )}
                      {!item.inStock && (
                        <Badge variant="secondary">Out of Stock</Badge>
                      )}
                    </div>

                    {/* Remove from Wishlist */}
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-10 h-10 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                    </div>
                    
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({item.rating})</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">${item.price}</span>
                        {item.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.sizes && (
                        <div>
                          <span className="text-sm font-medium">Sizes: </span>
                          <span className="text-sm text-muted-foreground">
                            {item.sizes.join(", ")}
                          </span>
                        </div>
                      )}
                      
                      <div>
                        <span className="text-sm font-medium">Colors: </span>
                        <span className="text-sm text-muted-foreground">
                          {item.colors.join(", ")}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1" 
                          size="sm"
                          disabled={!item.inStock}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="px-3"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>

  );
};

export default Wishlist;
