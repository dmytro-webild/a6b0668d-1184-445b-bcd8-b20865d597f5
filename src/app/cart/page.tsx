"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import React, { useState, useEffect, useCallback } from "react";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Minus, Plus, X } from "lucide-react";

// Define a simple CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

// Mock product data for demonstration purposes on the cart page
const mockProducts: CartItem[] = [
  { id: "mock-1", name: "Organic Red Apples", price: 5.99, quantity: 1, imageSrc: "http://img.b2bpic.net/free-photo/juicy-fresh-apples-wooden-rustic-tray_114579-61904.jpg" },
  { id: "mock-2", name: "Heirloom Tomatoes", price: 7.49, quantity: 1, imageSrc: "http://img.b2bpic.net/free-photo/front-view-fresh-red-tomatoes-inside-plate-blue-table_140725-132841.jpg" },
  { id: "mock-3", name: "Fresh Carrots", price: 3.29, quantity: 1, imageSrc: "http://img.b2bpic.net/free-photo/clean-carrots-board_23-2147761582.jpg" }
];

const DELIVERY_FEE = 5.00; // Fixed delivery fee

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // Initialize with some mock items if cart is empty, for demonstration
      setCart([
        { ...mockProducts[0], quantity: 2 },
        { ...mockProducts[1], quantity: 1 }
      ]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex((item) => item.id === id);

      if (existingItemIndex > -1) {
        const updatedCart = [...currentCart];
        const updatedQuantity = updatedCart[existingItemIndex].quantity + delta;

        if (updatedQuantity <= 0) {
          // Remove item if quantity becomes zero or less
          return updatedCart.filter((item) => item.id !== id);
        } else {
          // Update quantity
          updatedCart[existingItemIndex].quantity = updatedQuantity;
          return updatedCart;
        }
      }
      return currentCart; // Should not happen if item exists
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }, []);

  const addItemToCart = useCallback((product: CartItem) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex((item) => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal > 0 ? subtotal + DELIVERY_FEE : 0;

  const navItems = [
    { name: "Home", id: "#hero" },
    { name: "Products", id: "#products" },
    { name: "Packages", id: "#family-packs" },
    { name: "About Us", id: "#about" },
    { name: "Reviews", id: "#testimonials" },
    { name: "Delivery", id: "#delivery-info" },
    { name: "Contact", id: "#contact" },
    { name: "Cart", id: "/cart" }
  ];

  const footerColumns = [
    {
      title: "Products",      items: [
        { label: "Fruits", href: "#products" },
        { label: "Vegetables", href: "#products" },
        { label: "Organic Products", href: "#products" },
        { label: "Seasonal", href: "#products" },
        { label: "Special Offers", href: "#products" },
        { label: "Your Cart", href: "/cart" }
      ]
    },
    {
      title: "Company",      items: [
        { label: "About Us", href: "#about" },
        { label: "Why Choose Zelenara", href: "#about" },
        { label: "Customer Reviews", href: "#testimonials" },
        { label: "Delivery Information", href: "#delivery-info" }
      ]
    },
    {
      title: "Support",      items: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={navItems}
            brandName="Zelenara"
            button={{ text: "Call Us: 060 342 2089" }}
          />
        </div>

        <main className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-theme(spacing.20))]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-foreground mb-4">Your Shopping Cart</h1>
            <p className="text-lg text-foreground-secondary">Review your items before checkout.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-foreground-secondary text-xl">
                  Your cart is empty.
                  <div className="mt-4">
                    <button
                      onClick={() => addItemToCart(mockProducts[0])}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-cta hover:bg-primary-cta-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cta"
                    >
                      Add Sample Apple
                    </button>
                    <button
                      onClick={() => addItemToCart(mockProducts[1])}
                      className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-cta hover:bg-primary-cta-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cta"
                    >
                      Add Sample Tomato
                    </button>
                  </div>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center p-4 bg-card rounded-lg shadow-sm">
                    <img src={item.imageSrc} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-foreground-secondary">{item.price.toFixed(2)} BAM</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 rounded-md bg-secondary-cta text-white hover:bg-secondary-cta-dark transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-foreground font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 rounded-md bg-secondary-cta text-white hover:bg-secondary-cta-dark transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 p-2 rounded-md text-red-500 hover:bg-red-100 transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-md h-fit sticky top-28">
              <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal:</span>
                  <span>{subtotal.toFixed(2)} BAM</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Delivery:</span>
                  <span>{DELIVERY_FEE.toFixed(2)} BAM</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-2xl font-bold text-foreground">
                  <span>Total:</span>
                  <span>{total.toFixed(2)} BAM</span>
                </div>
              </div>
              <button
                disabled={cart.length === 0}
                className="mt-8 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-cta hover:bg-primary-cta-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cta disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
              {cart.length > 0 && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => setCart([])}
                    className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Zelenara"
            columns={footerColumns}
            copyrightText="© 2024 Zelenara. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
