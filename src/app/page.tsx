"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Leaf, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
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
          name: "Home",          id: "#hero"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Packages",          id: "#family-packs"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "Delivery",          id: "#delivery-info"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Zelenara"
      button={{
        text: "Call Us: 060 342 2089"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Zelenara"
      description="Daily delivery across Sarajevo with fresh, carefully selected produce at the best prices."
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
        {
          text: "View Products",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/vertical-view-fresh-tomatoes-with-stem-mushrooms-broccoli-basket-white-background_140725-143863.jpg"
      imageAlt="Colorful fresh fruits and vegetables in a market basket"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Why Choose Zelenara?"
      description="We are dedicated to delivering the freshest fruits and vegetables directly to homes across Sarajevo. Our mission is to provide high-quality produce, affordable prices, and exceptional customer service."
      subdescription="We source directly from local farms, ensuring every item is hand-picked for peak freshness and quality, delivered right to your door with care."
      icon={Leaf}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-female-hands-holding-bucket-fresh-vegetables-such-as-zucchinis-tomatoes-cucumber-cauliflower-wooden-wall_141793-76088.jpg"
      imageAlt="Local farmer harvesting fresh produce"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="delivery-info" data-section="delivery-info">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Same-Day Freshness",          description: "Order before 10 AM for delivery on the same day, ensuring peak freshness for your ingredients.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-buying-vegetables_23-2149050811.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Carefully Prepared",          description: "Each order is freshly prepared and packed with care to maintain quality during transit.",          imageSrc: "http://img.b2bpic.net/free-photo/minivan-driving-winter-suburban-road-with-traffic-flow-urban-commute-transport_169016-71803.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Reliable & Fast",          description: "Our dedicated team provides fast and dependable delivery service throughout Sarajevo and surrounding areas.",          imageSrc: "http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229205.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Track Your Order",          description: "Stay updated with real-time tracking from our warehouse to your doorstep.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-carrying-box_23-2148773399.jpg",          imageAlt: "fast delivery truck city background"},
      ]}
      title="Fast Delivery Across Sarajevo"
      description="Experience our reliable and fast delivery service, ensuring your fresh produce arrives quickly and perfectly. Enjoy same-day delivery for early orders!"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="opacity"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",          name: "Organic Red Apples",          price: "5.99 BAM/kg",          variant: "Fresh Fruits",          imageSrc: "http://img.b2bpic.net/free-photo/juicy-fresh-apples-wooden-rustic-tray_114579-61904.jpg",          imageAlt: "fresh red apples wooden crate"},
        {
          id: "prod-2",          name: "Heirloom Tomatoes",          price: "7.49 BAM/kg",          variant: "Seasonal Vegetables",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fresh-red-tomatoes-inside-plate-blue-table_140725-132841.jpg",          imageAlt: "ripe red tomatoes vine organic"},
        {
          id: "prod-3",          name: "Fresh Carrots",          price: "3.29 BAM/bunch",          variant: "Root Vegetables",          imageSrc: "http://img.b2bpic.net/free-photo/clean-carrots-board_23-2147761582.jpg",          imageAlt: "bunch of fresh organic carrots soil"},
        {
          id: "prod-4",          name: "Broccoli Crowns",          price: "4.99 BAM/head",          variant: "Organic Vegetables",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-raw-broccoli-cauliflower-black-rectangular-plate-green-white-checkered-napkin-dark-background_140725-139614.jpg",          imageAlt: "fresh green broccoli florets healthy"},
        {
          id: "prod-5",          name: "Ripe Bananas",          price: "2.79 BAM/kg",          variant: "Tropical Fruits",          imageSrc: "http://img.b2bpic.net/free-photo/set-fresh-bananas_23-2147931477.jpg",          imageAlt: "ripe yellow bananas bunch tropical"},
        {
          id: "prod-6",          name: "Crisp Cucumbers",          price: "2.49 BAM/piece",          variant: "Salad Vegetables",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-cucumber-gathered-from-greenhouse-plants_114579-2734.jpg",          imageAlt: "fresh green cucumbers garden"},
      ]}
      title="Our Fresh Products"
      description="Explore our wide range of categories, from daily essentials to organic specialties. Find your favorites with easy search, filter, and sort options."
    />
  </div>

  <div id="family-packs" data-section="family-packs">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "pack-small",          badge: "Popular",          badgeIcon: Sparkles,
          price: "29.99 BAM",          subtitle: "Small Family Pack",          buttons: [
            {
              text: "Order Now",              href: "#contact"},
          ],
          features: [
            "Fresh fruits & vegetables (2-3 people)",            "Seasonal selection",            "Weekly changing contents",            "Convenient home delivery"],
        },
        {
          id: "pack-medium",          badge: "Best Value",          badgeIcon: Award,
          price: "49.99 BAM",          subtitle: "Medium Family Pack",          buttons: [
            {
              text: "Order Now",              href: "#contact"},
          ],
          features: [
            "Generous fruits & vegetables (4-5 people)",            "Premium organic options",            "Weekly changing contents",            "Express home delivery"],
        },
        {
          id: "pack-large",          badge: "For Large Families",          badgeIcon: Users,
          price: "69.99 BAM",          subtitle: "Large Family Pack",          buttons: [
            {
              text: "Order Now",              href: "#contact"},
          ],
          features: [
            "Abundant fruits & vegetables (large families)",            "Includes gourmet selections",            "Customizable options available",            "Priority home delivery"],
        },
      ]}
      title="Weekly Family Value Packs"
      description="Save more with our convenient family bundles, packed with fresh fruits and vegetables. Perfect for every household size!"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Amina S.",          handle: "@amina_fresh",          testimonial: "Zelenara has completely changed my grocery shopping! The produce is always incredibly fresh, and the delivery is so fast. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-outdoors_624325-737.jpg",          imageAlt: "happy young woman smiling outdoor"},
        {
          id: "t2",          name: "Haris K.",          handle: "@haris_healthy",          testimonial: "Fantastic quality, amazing prices, and the convenience is unbeatable. My family loves the weekly packages, always a great variety!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-giving-thumbs-up-gray-wall_114579-63637.jpg",          imageAlt: "man looking positive outdoor"},
        {
          id: "t3",          name: "Lejla M.",          handle: "@lejla_kitchen",          testimonial: "I appreciate the local sourcing and the care put into each delivery. It truly feels like farm-to-table right here in Sarajevo.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/picture-pensive-attractive-woman-holding-wooden-plate-broccoli_114579-88451.jpg",          imageAlt: "smiling woman with groceries home"},
        {
          id: "t4",          name: "Adnan B.",          handle: "@adnan_eats",          testimonial: "Always fresh, always on time! Zelenara makes eating healthy so much easier for my busy schedule.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-holding-red-turnip-orange-carrot_23-2148076091.jpg",          imageAlt: "man unpacking grocery bag kitchen"},
        {
          id: "t5",          name: "Sara D.",          handle: "@sara_garden",          testimonial: "Their organic selection is superb. It’s comforting to know I'm getting high-quality, chemical-free produce for my family.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-eating-banana-outdoors-park-after-yoga_23-2148685724.jpg",          imageAlt: "elderly woman happy smiling outdoor"},
      ]}
      showRating={true}
      animationType="slide-up"
      title="What Our Customers Say"
      description="Hear from our happy customers about the quality and convenience of Zelenara's fresh produce delivery."
    />
  </div>

  <div id="payment-options" data-section="payment-options">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Visa",        "Mastercard",        "Apple Pay",        "Google Pay",        "PayPal",        "Cash on Delivery",        "Stripe Secure",        "SSL Encrypted"]}
      title="Secure & Flexible Payment Options"
      description="We offer a variety of secure payment methods for a smooth and convenient checkout experience."
      showCard={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Have questions or need assistance? Reach out to us directly or fill out our contact form. Phone: 📞 060 342 2089"
      buttons={[
        {
          text: "Send Message",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Zelenara"
      columns={[
        {
          title: "Products",          items: [
            {
              label: "Fruits",              href: "#products"},
            {
              label: "Vegetables",              href: "#products"},
            {
              label: "Organic Products",              href: "#products"},
            {
              label: "Seasonal",              href: "#products"},
            {
              label: "Special Offers",              href: "#products"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Why Choose Zelenara",              href: "#about"},
            {
              label: "Customer Reviews",              href: "#testimonials"},
            {
              label: "Delivery Information",              href: "#delivery-info"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "FAQ",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Zelenara. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
