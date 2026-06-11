'use client';

import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import React from 'react';
import Link from 'next/link';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function ConfirmationPage() {
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
      <NavbarLayoutFloatingOverlay
        navItems={navItems}
        brandName="Zelenara"
        button={{ text: "Pozovite nas: 060 342 2089" }}
      />

      <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-md w-full bg-card rounded-lg shadow-xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Narudžba potvrđena!</h1>
          <p className="mt-4 text-muted-foreground">
            Hvala Vam na kupovini! Vaša narudžba je uspješno obrađena i bit će dostavljena uskoro.
          </p>
          <div className="mt-8">
            <Link href="/" className="inline-block px-6 py-3 rounded-full bg-primary-cta text-white font-medium hover:bg-opacity-90 transition-colors">
              Nazad na početnu
            </Link>
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
