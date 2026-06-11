'use client';

import { useCart } from '@/context/CartContext';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus } from 'lucide-react';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Toaster } from 'react-hot-toast';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, deliveryFee, grandTotal } = useCart();

  const navItems = [
    { name: 'Početna', id: '#hero' },
    { name: 'Proizvodi', id: '#products' },
    { name: 'Paketi', id: '#family-packs' },
    { name: 'O nama', id: '#about' },
    { name: 'Recenzije', id: '#testimonials' },
    { name: 'Dostava', id: '#delivery-info' },
    { name: 'Kontakt', id: '#contact' },
    { name: 'Korpa', id: '/cart' }
  ];

  const footerColumns = [
    {
      title: "Proizvodi",      items: [
        { label: "Voće", href: "#products" },
        { label: "Povrće", href: "#products" },
        { label: "Organski proizvodi", href: "#products" },
        { label: "Sezonsko", href: "#products" },
        { label: "Posebne ponude", href: "#products" }
      ]
    },
    {
      title: "Kompanija",      items: [
        { label: "O nama", href: "#about" },
        { label: "Zašto odabrati Zelenaru", href: "#about" },
        { label: "Recenzije kupaca", href: "#testimonials" },
        { label: "Informacije o dostavi", href: "#delivery-info" }
      ]
    },
    {
      title: "Podrška",      items: [
        { label: "Kontaktirajte nas", href: "#contact" },
        { label: "Česta pitanja", href: "#" },
        { label: "Politika privatnosti", href: "#" },
        { label: "Uslovi korištenja", href: "#" }
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
      <Toaster />
      <NavbarLayoutFloatingOverlay
        navItems={navItems}
        brandName="Zelenara"
        button={{ text: "Pozovite nas: 060 342 2089" }}
      />

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8 text-foreground text-center">Vaša Korpa</h1>

          {items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-foreground mb-6">Vaša korpa je prazna.</p>
              <Link href="/" className="px-6 py-3 rounded-full bg-primary-cta text-white font-medium hover:bg-opacity-90 transition-colors">
                Nastavi kupovinu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center bg-card rounded-lg shadow-sm p-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <Image src={item.imageSrc} alt={item.name} width={80} height={80} className="rounded-md object-cover flex-shrink-0" />
                    <div className="ml-4 flex-grow">
                      <h2 className="text-lg font-medium text-foreground">{item.name}</h2>
                      <p className="text-muted-foreground">{item.price.toFixed(2)} BAM</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 rounded-full bg-background-accent text-accent hover:bg-accent hover:text-white transition-colors"
                          aria-label={`Smanji količinu za ${item.name}`}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-3 text-foreground font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 rounded-full bg-background-accent text-accent hover:bg-accent hover:text-white transition-colors"
                          aria-label={`Povećaj količinu za ${item.name}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 p-2 rounded-full text-foreground hover:bg-red-500 hover:text-white transition-colors"
                      aria-label={`Ukloni ${item.name}`}
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="md:col-span-1 bg-card rounded-lg shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Ukupno za plaćanje</h2>
                <div className="space-y-2 text-foreground">
                  <div className="flex justify-between">
                    <span>Međuzbir:</span>
                    <span>{subtotal.toFixed(2)} BAM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dostava (Sarajevo):</span>
                    <span>{deliveryFee.toFixed(2)} BAM</span>
                  </div>
                  <div className="border-t border-muted-foreground my-4"></div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Ukupno:</span>
                    <span>{grandTotal.toFixed(2)} BAM</span>
                  </div>
                </div>
                <Link href="/checkout" className="block w-full text-center px-6 py-3 mt-8 rounded-full bg-primary-cta text-white font-medium hover:bg-opacity-90 transition-colors">
                  Idi na naplatu
                </Link>
                <Link href="/" className="block w-full text-center px-6 py-3 mt-4 rounded-full bg-secondary-cta text-white font-medium hover:bg-opacity-90 transition-colors">
                  Nastavi kupovinu
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <FooterBaseCard
        logoText="Zelenara"
        columns={footerColumns}
        copyrightText="© 2024 Zelenara. Sva prava zadržana."
      />
    </ThemeProvider>
  );
}
