'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast'; // Assuming you have react-hot-toast installed

interface CartItem {
  id: string;
  name: string;
  price: number; // Price parsed to a number
  imageSrc: string;
  quantity: number;
}

interface ProductToAdd {
  id: string;
  name: string;
  price: string; // Original string price, e.g., '5.99 BAM/kg'
  imageSrc: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: ProductToAdd, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const parsePrice = (priceString: string): number => {
  const match = priceString.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items]);

  const addItem = useCallback((product: ProductToAdd, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
        toast.success(`Ažurirano: ${existingItem.name} (${existingItem.quantity + quantity})`);
        return updatedItems;
      } else {
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: parsePrice(product.price),
          imageSrc: product.imageSrc,
          quantity,
        };
        toast.success(`Dodato u korpu: ${product.name}`);
        return [...prevItems, newItem];
      }
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => {
      const removedItem = prevItems.find((item) => item.id === id);
      if (removedItem) {
        toast.error(`Uklonjeno iz korpe: ${removedItem.name}`);
      }
      return prevItems.filter((item) => item.id !== id);
    });
  }, []);

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.success('Korpa je ispražnjena.');
  }, []);

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const deliveryFee = useMemo(() => subtotal > 0 ? 5.00 : 0, [subtotal]); // Hardcoded 5 BAM for Sarajevo delivery if cart has items
  const grandTotal = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      deliveryFee,
      grandTotal,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal, deliveryFee, grandTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
