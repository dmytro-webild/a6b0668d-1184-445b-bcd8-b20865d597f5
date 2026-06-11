"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import TextAnimation from '@/components/text/TextAnimation';
import CardStack from '@/components/cardStack/CardStack';
import Input from '@/components/form/Input';
import ButtonHoverMagnetic from '@/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic';
import { Package, Euro, Image, Tag, ShoppingBag, Users, BarChart } from 'lucide-react';

export default function AdminPanelPage() {
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
              {
                name: "Home", id: "#hero"
              },
              {
                name: "Products", id: "#products"
              },
              {
                name: "Packages", id: "#family-packs"
              },
              {
                name: "About Us", id: "#about"
              },
              {
                name: "Reviews", id: "#testimonials"
              },
              {
                name: "Delivery", id: "#delivery-info"
              },
              {
                name: "Contact", id: "#contact"
              },
              {
                name: "Admin Panel", id: "/admin"
              }
            ]}
            brandName="Zelenara"
            button={{
              text: "Call Us: 060 342 2089"
            }}
          />
        </div>

        <div id="admin-hero" data-section="admin-hero" className="py-24">
          <TextAnimation
            type="entrance-slide"
            children="Admin Panel"
            className="text-center text-4xl lg:text-5xl font-bold"
          />
          <p className="text-center text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Manage your store operations efficiently from here.
          </p>
        </div>

        <div id="product-management" data-section="product-management" className="py-16">
          <CardStack
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            textboxLayout="default"
            title="Product Management"
            description="Add, edit, or delete products and manage inventory."
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Package size={20} /> Add/Edit Product</h3>
                <Input value="" onChange={() => {}} placeholder="Product Name" />
                <Input value="" onChange={() => {}} placeholder="Description" />
                <Input value="" onChange={() => {}} placeholder="Category" />
                <Input value="" onChange={() => {}} placeholder="Current Price" type="number" />
                <ButtonHoverMagnetic text="Save Product" className="w-full" />
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Euro size={20} /> Price Changes</h3>
                <Input value="" onChange={() => {}} placeholder="Product ID" />
                <Input value="" onChange={() => {}} placeholder="New Price" type="number" />
                <ButtonHoverMagnetic text="Update Price" className="w-full" />
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Image size={20} /> Photo Uploads</h3>
                <Input value="" onChange={() => {}} placeholder="Product ID" />
                <ButtonHoverMagnetic text="Upload Photo" className="w-full" />
              </div>
            </div>
          </CardStack>
        </div>

        <div id="promotions-packs" data-section="promotions-packs" className="py-16">
          <CardStack
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            textboxLayout="default"
            title="Promotions & Weekly Packs"
            description="Create new promotions and manage your weekly family packs."
          >
            <div className="grid md:grid-cols-2 gap-6 w-full p-4">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Tag size={20} /> Promotion Creation</h3>
                <Input value="" onChange={() => {}} placeholder="Promotion Name" />
                <Input value="" onChange={() => {}} placeholder="Discount (%) or Amount" type="number" />
                <Input value="" onChange={() => {}} placeholder="Expiry Date" type="date" />
                <ButtonHoverMagnetic text="Create Promotion" className="w-full" />
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><ShoppingBag size={20} /> Weekly Pack Management</h3>
                <Input value="" onChange={() => {}} placeholder="Pack Name" />
                <Input value="" onChange={() => {}} placeholder="Contents Description" />
                <Input value="" onChange={() => {}} placeholder="Pack Price" type="number" />
                <ButtonHoverMagnetic text="Update Pack" className="w-full" />
              </div>
            </div>
          </CardStack>
        </div>

        <div id="orders-customers" data-section="orders-customers" className="py-16">
          <CardStack
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            textboxLayout="default"
            title="Order & Customer Management"
            description="View and manage orders, and update customer information."
          >
            <div className="grid md:grid-cols-2 gap-6 w-full p-4">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><ShoppingBag size={20} /> Order Management</h3>
                <Input value="" onChange={() => {}} placeholder="Order ID" />
                <Input value="" onChange={() => {}} placeholder="Status (e.g., Pending, Shipped)" />
                <ButtonHoverMagnetic text="Update Order Status" className="w-full" />
              }
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Users size={20} /> Customer Management</h3>
                <Input value="" onChange={() => {}} placeholder="Customer ID or Email" />
                <Input value="" onChange={() => {}} placeholder="Update Contact Info" />
                <ButtonHoverMagnetic text="Update Customer" className="w-full" />
              </div>
            </div>
          </CardStack>
        </div>

        <div id="sales-statistics" data-section="sales-statistics" className="py-16">
          <CardStack
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            textboxLayout="default"
            title="Sales Statistics"
            description="Review key performance indicators and sales trends."
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-semibold flex items-center gap-2"><BarChart size={20} /> Sales Overview</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">Detailed sales reports and analytics will be displayed here.</p>
              <ButtonHoverMagnetic text="View Full Reports" className="w-full mt-4" />
            </div>
          </CardStack>
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Zelenara"
            columns={[
              {
                title: "Products", items: [
                  {
                    label: "Fruits", href: "#products"
                  },
                  {
                    label: "Vegetables", href: "#products"
                  },
                  {
                    label: "Organic Products", href: "#products"
                  },
                  {
                    label: "Seasonal", href: "#products"
                  },
                  {
                    label: "Special Offers", href: "#products"
                  }
                ]
              },
              {
                title: "Company", items: [
                  {
                    label: "About Us", href: "#about"
                  },
                  {
                    label: "Why Choose Zelenara", href: "#about"
                  },
                  {
                    label: "Customer Reviews", href: "#testimonials"
                  },
                  {
                    label: "Delivery Information", href: "#delivery-info"
                  }
                ]
              },
              {
                title: "Support", items: [
                  {
                    label: "Contact Us", href: "#contact"
                  },
                  {
                    label: "FAQ", href: "#"
                  },
                  {
                    label: "Privacy Policy", href: "#"
                  },
                  {
                    label: "Terms of Service", href: "#"
                  }
                ]
              }
            ]}
            copyrightText="© 2024 Zelenara. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}