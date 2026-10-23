// Shared config + copy for the mission-reach landing.

// "Book …" CTAs open the booking widget directly (see BookButton.astro);
// "Check if you qualify" CTAs scroll to the final eligibility-call block.
export const QUALIFY_HREF = "#book";
export const QUALIFY_LABEL = "Check if you qualify";
export const BOOK_CALL =
  "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits";

export const CONTACT = {
  email: "nonprofit@dgtl-house.com",
  phone: "+1 (224) 313-4445",
  phoneHref: "tel:+12243134445",
  address: "1635 Eagle Grove Ct., Wheeling, IL 60090",
} as const;

// Header / mobile menu / bottom pill nav.
export const NAV = [
  { label: "Google Ad Grants", short: "Ad Grants", href: "#ad-grants" },
  { label: "How we work", short: "How we work", href: "#how-we-work" },
  { label: "Results", short: "Results", href: "#results" },
  { label: "Pricing", short: "Pricing", href: "#pricing" },
  { label: "FAQ", short: "FAQ", href: "#faq" },
] as const;

export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dgtl.house",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/@dgtlhouse",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dgtl-house/about",
    icon: "linkedin",
  },
] as const;

// Mobile (<768px) hero image. Hero.astro and the <head> preload in
// Layout.astro must use the same srcset/sizes, or the preload is wasted.
// Tablet and desktop keep their own <source> elements in Hero.astro.
export const HERO_MOBILE = {
  src: "/img/hero-m-600.webp",
  srcset:
    "/img/hero-m-400.webp 400w, /img/hero-m-600.webp 600w, /img/hero-m-700.webp 700w, /img/hero-m-800.webp 800w",
  sizes: "calc(100vw - 40px)",
} as const;
