import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Zelenara - Fresh Fruits & Vegetables Delivery Sarajevo',
  description: 'Order fresh fruits and vegetables online from Zelenara for daily home delivery across Sarajevo. Quality produce, best prices, healthy living.',
  keywords: ["fruit delivery Sarajevo, vegetable delivery Sarajevo, online grocery Sarajevo, fresh produce Sarajevo, buy fruits online Sarajevo, buy vegetables online Sarajevo, Zelenara Sarajevo"],
  openGraph: {
    "title": "Zelenara - Fresh Fruits & Vegetables Delivery Sarajevo",
    "description": "Order fresh fruits and vegetables online from Zelenara for daily home delivery across Sarajevo. Quality produce, best prices, healthy living.",
    "url": "https://www.zelenara.com",
    "siteName": "Zelenara",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/vertical-view-fresh-tomatoes-with-stem-mushrooms-broccoli-basket-white-background_140725-143863.jpg",
        "alt": "Colorful fresh fruits and vegetables"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Zelenara - Fresh Fruits & Vegetables Delivery Sarajevo",
    "description": "Order fresh fruits and vegetables online from Zelenara for daily home delivery across Sarajevo. Quality produce, best prices, healthy living.",
    "images": [
      "http://img.b2bpic.net/free-photo/vertical-view-fresh-tomatoes-with-stem-mushrooms-broccoli-basket-white-background_140725-143863.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
