// data for features
import bolt from "../assets/features/feature-bolt-v2.png";
import natural from "../assets/features/feature-natural-v2.png";
import continuous from "../assets/features/feature-continuous-v2.png";
import predictive from "../assets/features/feature-predictive-v2.png";
import boltDark from "../assets/features/feature-bolt-dark-v2.png";
import naturalDark from "../assets/features/feature-natural-dark-v2.png";
import continuousDark from "../assets/features/feature-continuous-dark-v2.png";
import predictiveDark from "../assets/features/feature-predictive-dark-v2.png";
export const FeaturesData = [
  {
    title: "Fast & Smart",
    srcLight: bolt,
    srcDark: boltDark,
    desc: "Synora analyzes and provides insights in seconds, helping you make smarter decisions faster",
  },
  {
    title: "Predictive Insights",
    srcLight: predictive,
    srcDark: predictiveDark,
    desc: "Data-driven intelligence that anticipates your next move.",
  },
  {
    title: "Natural Interaction",
    srcLight: natural,
    srcDark: naturalDark,
    desc: "Chat, text, and voice AI designed to feel human.",
  },
  {
    title: "Continuous Learning",
    srcLight: continuous,
    srcDark: continuousDark,
    desc: "AI that evolves with your behavior and needs.",
  },
];

// data for Statistics
export const StatisticsData = [
  {
    title: "Data Points Processed Daily",
    number: "1M+",
  },
  {
    title: "Uptime Reliability",
    number: "99.9%",
  },
  {
    title: "Businesses Empowered",
    number: "500+",
  },
  {
    title: "Faster Insights",
    number: "10x",
  },
];

//Data for Partners
import gemini from "../assets/partners/gemini.svg";
import amazon from "../assets/partners/amazon.svg";
import huggingface from "../assets/partners/huggingface.svg";
import ibm from "../assets/partners/ibm.svg";
import intel from "../assets/partners/intel.svg";
import microsoft from "../assets/partners/microsoft.svg";
import nvidia from "../assets/partners/nvidia.svg";
import oracle from "../assets/partners/oracle.svg";

export const PartnersData = [
  {
    logo: gemini,
    name: gemini,
    link: "https://gemini.google.com/",
  },
  {
    logo: amazon,
    name: amazon,
    link: "https://aws.amazon.com/",
  },
  {
    logo: huggingface,
    name: huggingface,
    link: "https://huggingface.co/",
  },
  {
    logo: ibm,
    name: ibm,
    link: "https://www.ibm.com",
  },
  {
    logo: intel,
    name: intel,
    link: "https://www.intel.com",
  },
  {
    logo: microsoft,
    name: microsoft,
    link: "https://www.microsoft.com",
  },
  {
    logo: nvidia,
    name: nvidia,
    link: "https://www.nvidia.com",
  },
  {
    logo: oracle,
    name: oracle,
    link: "https://www.oracle.com/",
  },
];

//data for pricing
export const PricingData = [
  {
    name: "Starter",
    tagline: "Best for individuals just getting started",
    price: "Free",
    features: [
      "Access to essential features",
      "1,000 monthly requests",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    tagline: "For startups & teams",
    price: "$29/month",
    features: [
      "Everything in Starter",
      "Unlimited monthly requests",
      "Advanced AI features",
      "Priority support",
      "Early access to new tools",
    ],
    highlight: true, // 👈 this marks it as "Best Value"
  },
  {
    name: "Enterprise",
    tagline: "For large-scale organizations",
    price: "Custom Pricing",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom API & integrations",
      "Tailored security & compliance",
      "24/7 premium support",
    ],
    highlight: false,
  },
];

//contact
import email from "../assets/contact/email.png";
import emailDark from "../assets/contact/email-dark.png";
import location from "../assets/contact/location.png";
import locationDark from "../assets/contact/location-dark.png";
import phone from "../assets/contact/phone.png";
import phoneDark from "../assets/contact/phone-dark.png";

export const contactData = [
  {
    icon: email,
    text: "support@synora.com",
    iconDark: emailDark,
  },
  {
    icon: phone,
    text: "+63 123 456 890",
    iconDark: phoneDark,
  },
  {
    icon: location,
    text: "123 Synora Street, Tech City",
    iconDark: locationDark,
  },
];

//footer
import facebook from "../assets/footer/fb.png";
import facebookDark from "../assets/footer/fb-dark.png";
import instagram from "../assets/footer/ig.png";
import instagramDark from "../assets/footer/ig-dark.png";
import twitter from "../assets/footer/twitter.png";
import twitterDark from "../assets/footer/twitter-dark.png";

export const footerIcons = [
  {
    icon: facebook,
    href: "https://www.facebook.com/",
    iconDark: facebookDark,
     name: "facebook",
  },
  {
    icon: instagram,
    text: "https://www.instagram.com/",
    iconDark: instagramDark,
     name: "instagram",
  },
  {
    icon: twitter,
    text: "https://x.com/",
    iconDark: twitterDark,
    name: "twitter",
  },
];
