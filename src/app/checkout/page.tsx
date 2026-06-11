'use client';

import { useCart } from '@/context/CartContext';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
// import { Toaster, toast } from 'react-hot-toast';

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, grandTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    city: 'Sarajevo', // Fixed for Sarajevo
    phone: '',
    email: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      console.error('Vaša korpa je prazna. Dodajte proizvode prije naplate.');
      return;
    }
    // Simulate order placement
    clearCart();
    window.location.href = '/checkout/confirmation'; // Redirect to confirmation page
  };

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
      
      <NavbarLayoutFloatingOverlay
        navItems={navItems}
        brandName="Zelenara"
        button={{ text: "Pozovite nas: 060 342 2089" }}
      />

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8 text-foreground text-center">Naplata</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Delivery Information Form */}
            <div className="bg-card rounded-lg shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Informacije o dostavi</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">Ime</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring focus:ring-primary-cta focus:ring-opacity-50 bg-background-accent text-foreground p-2"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-foreground">Prezime</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring focus:ring-primary-cta focus:ring-opacity-50 bg-background-accent text-foreground p-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-foreground">Adresa</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring focus:ring-primary-cta focus:ring-opacity-50 bg-background-accent text-foreground p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground">Grad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-background-accent text-foreground p-2 cursor-not-allowed"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring focus:ring-primary-cta focus:ring-opacity-50 bg-background-accent text-foreground p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring focus:ring-primary-cta focus:ring-opacity-50 bg-background-accent text-foreground p-2"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 rounded-full bg-primary-cta text-white font-medium hover:bg-opacity-90 transition-colors"
                >
                  Potvrdi narudžbu
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-card rounded-lg shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Pregled narudžbe</h2>
              <div className="space-y-4">
                {items.length === 0 ? (
                  <p className="text-foreground">Nema proizvoda u korpi.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-foreground">
                      <div className="flex items-center">
                        <Image src={item.imageSrc} alt={item.name} width={50} height={50} className="rounded-md object-cover mr-3" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Količina: {item.quantity}</p>
                        </div>
                      </div>
                      <p>{(item.price * item.quantity).toFixed(2)} BAM</p>
                    </div>
                  ))
                )}
                <div className="border-t border-muted-foreground my-4"></div>
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
              </div>
            </div>
          </div>
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