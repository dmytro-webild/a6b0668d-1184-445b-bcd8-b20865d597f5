"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import { Sparkles, Users, ShoppingBag, DollarSign, LineChart, Package, Upload, CreditCard, Leaf } from "lucide-react";

export default function AdminPage() {
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
            navItems={[
              { name: "Početna", id: "/" },
              { name: "Proizvodi", id: "/#products" },
              { name: "Paketi", id: "/#family-packs" },
              { name: "O nama", id: "/#about" },
              { name: "Recenzije", id: "/#testimonials" },
              { name: "Dostava", id: "/#delivery-info" },
              { name: "Kontakt", id: "/#contact" },
              { name: "Administracija", id: "/admin" }
            ]}
            brandName="Zelenara"
            button={{ text: "Pozovite nas: 060 342 2089" }}
          />
        </div>

        <div id="admin-dashboard" data-section="admin-dashboard">
          <HeroBillboardDashboard
            title="Administracija Zelenara"
            description="Dobrodošli na vašu administrativnu kontrolnu tablu. Upravljajte proizvodima, narudžbama, korisnicima i pregledajte statistike prodaje."
            background={{ variant: 'radial-gradient' }}
            dashboard={{
              title: "Pregled statusa",              stats: [
                {
                  title: "Proizvodi",                  values: [150, 160, 170],
                  description: "Ukupan broj proizvoda"
                },
                {
                  title: "Narudžbe",                  values: [450, 470, 490],
                  description: "Sedmične narudžbe"
                },
                {
                  title: "Prihod",                  values: [12000, 12500, 13000],
                  valueSuffix: " KM",                  description: "Sedmični prihod"
                }
              ],
              logoIcon: Leaf,
              sidebarItems: [
                { icon: ShoppingBag, active: true },
                { icon: Upload },
                { icon: DollarSign },
                { icon: Sparkles },
                { icon: Package },
                { icon: CreditCard },
                { icon: Users },
                { icon: LineChart }
              ],
              searchPlaceholder: "Pretražite...",              buttons: [
                { text: "Dodaj proizvod", href: "#" },
                { text: "Nova promocija", href: "#" }
              ],
              chartTitle: "Statistika prodaje",              chartData: [
                { value: 20 }, { value: 30 }, { value: 25 }, { value: 40 },
                { value: 35 }, { value: 50 }, { value: 45 }, { value: 55 },
                { value: 60 }, { value: 50 }, { value: 40 }, { value: 30 }
              ],
              listTitle: "Nedavne narudžbe",              listItems: [
                { icon: CreditCard, title: "Narudžba #1005", status: "Dostavljeno" },
                { icon: CreditCard, title: "Narudžba #1004", status: "U obradi" },
                { icon: CreditCard, title: "Narudžba #1003", status: "Čeka isporuku" },
                { icon: CreditCard, title: "Narudžba #1002", status: "Dostavljeno" },
                { icon: CreditCard, title: "Narudžba #1001", status: "Završeno" }
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/view-laptop-with-analysis-graphs_23-2148805004.jpg",              imageAlt: "Dashboard with analytics and graphs"
            }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}