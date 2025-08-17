import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getCartTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    const existingItem = get().items.find(i => i.id === item.id && i.size === item.size && i.color === item.color);
    
    if (existingItem) {
      set(state => ({
        items: state.items.map(i => 
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }));
    } else {
      set(state => ({
        items: [...state.items, { ...item, quantity: 1 }]
      }));
    }
  },
  removeItem: (id) => {
    set(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  },
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set(state => ({
      items: state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    }));
  },
  clearCart: () => set({ items: [] }),
  getItemCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
  getCartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
}));