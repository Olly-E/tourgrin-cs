import { Metadata } from "next";

import HomePageComponent from "./components/HomePageComponent";

export const metadata: Metadata = {
  title: "Coming Soon | Tourgrin",
  applicationName: "Tourgrin",
  description:
    "Tourgrin is a comprehensive platform for honeymooners, vacationers, and explorers, offering a one-stop solution for all travel need to cities in Africa.",
  keywords: [
    "Tourgrin",
    "Honeymooners",
    "Vacationers",
    "Explorers",
    "Travel platform",
    "Travel needs",
    "African cities",
    "Comprehensive travel",
    "One-stop travel solution",
    "African tourism",
    "Vacation planning",
    "Honeymoon destinations",
    "Travel services",
    "Travel booking",
    "Adventure travel",
    "Africa travel packages",
    "Tour planning",
    "Travel experiences",
    "Customized trips",
    "Holiday packages",
    "Travel assistance",
  ],
  publisher: "Tourgrin",
  twitter: {
    creator: "@tourgrin",
    title: "Coming Soon | Tourgrin",
    description: "",
    images: "https://web10.panel.tourgrin.com/assets/img/favicon.ico",
    site: "@tourgrin",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Coming Soon | Tourgrin",
    description:
      "A comprehensive platform for honeymooners, vacationers, and explorers, offering a one-stop solution for all travel need to cities in Africa.",
    images:
      "https://web10.panel.tourgrin.com/assets/img/favicon.ico",
  },
};

export default function Home() {
  return (
    <div>
      <HomePageComponent />
    </div>
  );
}
