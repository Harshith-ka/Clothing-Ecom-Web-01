import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  productSize?: string;
  color?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const AddToCartButton = ({ 
  product, 
  productSize = "M", 
  color = "Default", 
  className = "",
  variant = "default",
  size = "default"
}: AddToCartButtonProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: productSize,
      color
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Button 
      onClick={handleAddToCart}
      variant={variant}
      size={size}
      className={className}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;