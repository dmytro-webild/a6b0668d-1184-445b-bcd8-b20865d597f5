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
import { Award, Leaf, Sparkles, Users, ShieldCheck } from "lucide-react";

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
          name: "Početna",          id: "/"},
        {
          name: "Proizvodi",          id: "/#products"},
        {
          name: "Paketi",          id: "/#family-packs"},
        {
          name: "O nama",          id: "/#about"},
        {
          name: "Recenzije",          id: "/#testimonials"},
        {
          name: "Dostava",          id: "/#delivery-info"},
        {
          name: "Kontakt",          id: "/#contact"},
        {
          name: "Administracija",          id: "/admin"}
      ]}
      brandName="Zelenara"
      button={{
        text: "Pozovite nas: 060 342 2089"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Zelenara"
      description="Svakodnevna dostava širom Sarajeva sa svježim, pažljivo odabranim proizvodima po najpovoljnijim cijenama."
      buttons={[
        {
          text: "Kupite sada",          href: "/#products"},
        {
          text: "Pogledajte proizvode",          href: "/#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/vertical-view-fresh-tomatoes-with-stem-mushrooms-broccoli-basket-white-background_140725-143863.jpg"
      imageAlt="Colorful fresh fruits and vegetables in a market basket"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Naša priča"
      title="Zašto odabrati Zelenaru?"
      description="Posvećeni smo dostavi najsvježijeg voća i povrća direktno u domove širom Sarajeva. Naša misija je pružiti visokokvalitetne proizvode, pristupačne cijene i izuzetnu korisničku uslugu."
      subdescription="Nabavljamo direktno od lokalnih poljoprivrednika, osiguravajući da je svaki artikal ručno odabran za vrhunsku svježinu i kvalitetu, isporučen direktno na vaša vrata s pažnjom."
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
          title: "Svježina isti dan",          description: "Naručite prije 10 sati ujutro za dostavu isti dan, osiguravajući vrhunsku svježinu za vaše sastojke.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-buying-vegetables_23-2149050811.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Pažljivo pripremljeno",          description: "Svaka narudžba je svježe pripremljena i pažljivo upakovana kako bi se održala kvaliteta tokom transporta.",          imageSrc: "http://img.b2bpic.net/free-photo/minivan-driving-winter-suburban-road-with-traffic-flow-urban-commute-transport_169016-71803.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Pouzdano i brzo",          description: "Naš posvećeni tim pruža brzu i pouzdanu uslugu dostave širom Sarajeva i okolnih područja.",          imageSrc: "http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229205.jpg",          imageAlt: "fast delivery truck city background"},
        {
          title: "Pratite svoju narudžbu",          description: "Budite u toku s praćenjem u realnom vremenu od našeg skladišta do vaših vrata.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-carrying-box_23-2148773399.jpg",          imageAlt: "fast delivery truck city background"}
      ]}
      title="Brza dostava širom Sarajeva"
      description="Iskusite našu pouzdanu i brzu uslugu dostave, osiguravajući da vaše svježe namirnice stignu brzo i savršeno. Uživajte u dostavi isti dan za rane narudžbe!"
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
          id: "prod-1",          name: "Organske crvene jabuke",          price: "5.99 BAM/kg",          variant: "Svježe voće",          imageSrc: "http://img.b2bpic.net/free-photo/juicy-fresh-apples-wooden-rustic-tray_114579-61904.jpg",          imageAlt: "fresh red apples wooden crate"},
        {
          id: "prod-2",          name: "Stare sorte paradajza",          price: "7.49 BAM/kg",          variant: "Sezonsko povrće",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fresh-red-tomatoes-inside-plate-blue-table_140725-132841.jpg",          imageAlt: "ripe red tomatoes vine organic"},
        {
          id: "prod-3",          name: "Svježa mrkva",          price: "3.29 BAM/bunch",          variant: "Korjenasto povrće",          imageSrc: "http://img.b2bpic.net/free-photo/clean-carrots-board_23-2147761582.jpg",          imageAlt: "bunch of fresh organic carrots soil"},
        {
          id: "prod-4",          name: "Krune brokule",          price: "4.99 BAM/head",          variant: "Organsko povrće",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-raw-broccoli-cauliflower-black-rectangular-plate-green-white-checkered-napkin-dark-background_140725-139614.jpg",          imageAlt: "fresh green broccoli florets healthy"},
        {
          id: "prod-5",          name: "Zrele banane",          price: "2.79 BAM/kg",          variant: "Tropsko voće",          imageSrc: "http://img.b2bpic.net/free-photo/set-fresh-bananas_23-2147931477.jpg",          imageAlt: "ripe yellow bananas bunch tropical"},
        {
          id: "prod-6",          name: "Hrskavi krastavci",          price: "2.49 BAM/piece",          variant: "Povrće za salatu",          imageSrc: "http://img.b2bpic.net/free-photo/fresh-cucumber-gathered-from-greenhouse-plants_114579-2734.jpg",          imageAlt: "fresh green cucumbers garden"}
      ]}
      title="Naši svježi proizvodi"
      description="Istražite našu široku ponudu kategorija, od svakodnevnih potrepština do organskih specijaliteta. Pronađite svoje favorite uz jednostavne opcije pretraživanja, filtriranja i sortiranja."
    />
  </div>

  <div id="family-packs" data-section="family-packs">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "pack-small",          badge: "Popularno",          badgeIcon: Sparkles,
          price: "29.99 BAM",          subtitle: "Mali porodični paket",          buttons: [
            {
              text: "Naručite sada",              href: "/#contact"}
          ],
          features: [
            "Svježe voće i povrće (2-3 osobe)",            "Sezonski izbor",            "Sadržaj koji se mijenja sedmično",            "Praktična kućna dostava"]},
        {
          id: "pack-medium",          badge: "Najbolja vrijednost",          badgeIcon: Award,
          price: "49.99 BAM",          subtitle: "Srednji porodični paket",          buttons: [
            {
              text: "Naručite sada",              href: "/#contact"}
          ],
          features: [
            "Obilno voće i povrće (4-5 osoba)",            "Premium organske opcije",            "Sadržaj koji se mijenja sedmično",            "Ekspresna kućna dostava"]},
        {
          id: "pack-large",          badge: "Za velike porodice",          badgeIcon: Users,
          price: "69.99 BAM",          subtitle: "Veliki porodični paket",          buttons: [
            {
              text: "Naručite sada",              href: "/#contact"}
          ],
          features: [
            "Obilno voće i povrće (velike porodice)",            "Uključuje gurmanske selekcije",            "Dostupne prilagodljive opcije",            "Prioritetna kućna dostava"]}
      ]}
      title="Sedmični porodični paketi vrijednosti"
      description="Uštedite više s našim praktičnim porodičnim paketima, punim svježeg voća i povrća. Savršeno za svako domaćinstvo!"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Amina S.",          handle: "@amina_fresh",          testimonial: "Zelenara je potpuno promijenila moju kupovinu namirnica! Proizvodi su uvijek nevjerovatno svježi, a dostava je tako brza. Toplo preporučujem!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-outdoors_624325-737.jpg",          imageAlt: "happy young woman smiling outdoor"},
        {
          id: "t2",          name: "Haris K.",          handle: "@haris_healthy",          testimonial: "Fantastična kvaliteta, nevjerovatne cijene i pogodnost je nenadmašna. Moja porodica obožava sedmične pakete, uvijek odličan izbor!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-giving-thumbs-up-gray-wall_114579-63637.jpg",          imageAlt: "man looking positive outdoor"},
        {
          id: "t3",          name: "Lejla M.",          handle: "@lejla_kitchen",          testimonial: "Cijenim lokalnu nabavku i pažnju koja se ulaže u svaku dostavu. Zaista se osjeća kao farma-na-sto, baš ovdje u Sarajevu.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/picture-pensive-attractive-woman-holding-wooden-plate-broccoli_114579-88451.jpg",          imageAlt: "smiling woman with groceries home"},
        {
          id: "t4",          name: "Adnan B.",          handle: "@adnan_eats",          testimonial: "Uvijek svježe, uvijek na vrijeme! Zelenara mi olakšava zdravu ishranu uz moj užurbani raspored.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-holding-red-turnip-orange-carrot_23-2148076091.jpg",          imageAlt: "man unpacking grocery bag kitchen"},
        {
          id: "t5",          name: "Sara D.",          handle: "@sara_garden",          testimonial: "Njihov organski izbor je vrhunski. Utješno je znati da dobijam visokokvalitetne proizvode bez hemikalija za svoju porodicu.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-eating-banana-outdoors-park-after-yoga_23-2148685724.jpg",          imageAlt: "elderly woman happy smiling outdoor"}
      ]}
      showRating={true}
      animationType="slide-up"
      title="Šta kažu naši kupci"
      description="Poslušajte šta kažu naši zadovoljni kupci o kvaliteti i pogodnostima Zelenarine dostave svježih proizvoda."
    />
  </div>

  <div id="payment-options" data-section="payment-options">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Visa",        "Mastercard",        "Apple Pay",        "Google Pay",        "PayPal",        "Plaćanje po preuzimanju",        "Stripe Secure",        "SSL Encrypted"]}
      title="Sigurne i fleksibilne opcije plaćanja"
      description="Nudimo razne sigurne metode plaćanja za glatko i praktično iskustvo kupovine."
      showCard={false}
      tag="Osigurano plaćanje"
      tagIcon={ShieldCheck}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Imate pitanja ili trebate pomoć? Kontaktirajte nas direktno ili ispunite našu kontakt formu. Telefon: 📞 060 342 2089"
      buttons={[
        {
          text: "Pošaljite poruku",          href: "/#"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Zelenara"
      columns={[
        {
          title: "Proizvodi",          items: [
            {
              label: "Voće",              href: "/#products"},
            {
              label: "Povrće",              href: "/#products"},
            {
              label: "Organski proizvodi",              href: "/#products"},
            {
              label: "Sezonsko",              href: "/#products"},
            {
              label: "Posebne ponude",              href: "/#products"}
          ]},
        {
          title: "Kompanija",          items: [
            {
              label: "O nama",              href: "/#about"},
            {
              label: "Zašto odabrati Zelenaru",              href: "/#about"},
            {
              label: "Recenzije kupaca",              href: "/#testimonials"},
            {
              label: "Informacije o dostavi",              href: "/#delivery-info"}
          ]},
        {
          title: "Podrška",          items: [
            {
              label: "Kontaktirajte nas",              href: "/#contact"},
            {
              label: "Česta pitanja",              href: "/#"},
            {
              label: "Politika privatnosti",              href: "/#"},
            {
              label: "Uslovi korištenja",              href: "/#"}
          ]}
      ]}
      copyrightText="© 2024 Zelenara. Sva prava zadržana."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
