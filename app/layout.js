// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import WhatsAppFloat from "./component/Chat";
import { icons } from "lucide-react";

// ============================================
// GLOBAL SEO VARIABLES - UPDATE THESE
// ============================================

<meta name="google-site-verification" content="qWFGEgdEutxBBLd41s1_wTcSHHq8M39zBXjAUyJcxQo" />


const SEO_CONFIG = {
  siteName: "Herbary",
  siteUrl: "https://herbary.vercel.app", // UPDATE WITH YOUR ACTUAL DOMAIN
  tagline: "Naturally, Live Fully",
  description: "Discover premium herbal blends, therapeutic teas, and natural wellness products in Nigeria. Herbary offers organic herbal remedies, custom formulations, and expert wellness consultations. Shop authentic Nigerian herbal products for immunity, detox, energy, sleep, and overall health.",
  logoPath: "/logo.png",
  twitterHandle: null, // UPDATE WITH YOUR TWITTER HANDLE
  googleVerification: "qWFGEgdEutxBBLd41s1_wTcSHHq8M39zBXjAUyJcxQo", // UPDATE AFTER GOOGLE SEARCH CONSOLE SETUP
  location: "Lucklife office No. 3a, 3rd floor opposite St. Thomas Catholic church, Airport Road, Kano state, Nigeria",
  
  phone: "+2347048556600",
  themeColor: "#16a34a", // Green color
};

const KEYWORDS = [
  "herbal products Nigeria",
  "natural remedies Nigeria",
  "organic herbs Port Harcourt",
  "therapeutic teas Nigeria",
  "herbal wellness products",
  "natural health supplements",
  "herbal blends Nigeria",
  "detox products Nigeria",
  "immunity boosters",
  "herbal medicine Nigeria",
  "organic sanitary pads",
  "natural wellness solutions",
  "traditional herbal remedies",
  "herbary Nigeria",
  "buy herbs online Nigeria",
  "herbal shop Port Harcourt",
  "natural health products",
  "wellness consultations Nigeria",
  "custom herbal formulations",
  "herbal tea Nigeria",
  "Rivers State herbal products",
  "Nigerian wellness products"
];
// ============================================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Basic Metadata
  title: {
    default: `${SEO_CONFIG.siteName} - Premium Natural Herbal Products & Wellness Solutions in Nigeria`,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.description,
  icons: {
    icon: SEO_CONFIG.logoPath,
    shortcut: SEO_CONFIG.logoPath,
    apple: SEO_CONFIG.logoPath,
  },
  
  keywords: KEYWORDS,

  authors: [{ name: SEO_CONFIG.siteName }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: `${SEO_CONFIG.siteName} - Premium Natural Herbal Products & Wellness Solutions in Nigeria`,
    description: SEO_CONFIG.description,
    images: [
      {
        url: SEO_CONFIG.logoPath,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.siteName} - Natural Herbal Products Nigeria`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${SEO_CONFIG.siteName} - Premium Natural Herbal Products & Wellness Solutions in Nigeria`,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.logoPath],
    creator: SEO_CONFIG.twitterHandle,
  },

  // Verification
  verification: {
    google: SEO_CONFIG.googleVerification,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: SEO_CONFIG.logoPath,
    shortcut: SEO_CONFIG.logoPath,
    apple: SEO_CONFIG.logoPath,
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional Metadata
  category: "health",
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Theme Color
  themeColor: SEO_CONFIG.themeColor,

  // Other
  metadataBase: new URL(SEO_CONFIG.siteUrl),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}

// ============================================
// ADDITIONAL FILES TO CREATE
// ============================================

// 1. Create: public/manifest.json
/*
{
  "name": "Herbary - Natural Herbal Products Nigeria",
  "short_name": "Herbary",
  "description": "Premium herbal products and wellness solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#16a34a",
  "icons": [
    {
      "src": "/logo.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/logo.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
*/

// 2. Create: public/robots.txt
/*
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
*/

// 3. Optional: Create app/sitemap.js (for automatic sitemap generation)
/*
export default function sitemap() {
  const baseUrl = 'https://yourdomain.com'; // UPDATE

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
*/

// ============================================
// SETUP CHECKLIST
// ============================================
/*
✅ 1. Update SEO_CONFIG.siteUrl with your actual domain
✅ 2. Update SEO_CONFIG.twitterHandle with your Twitter handle
✅ 3. Set up Google Search Console and add verification code
✅ 4. Create manifest.json in public folder
✅ 5. Create robots.txt in public folder
✅ 6. Optimize logo.png (recommended: 512x512px, under 200KB)
✅ 7. Create sitemap.js for automatic sitemap generation
✅ 8. Submit sitemap to Google Search Console
✅ 9. Set up Google Analytics
✅ 10. Test metadata with: https://www.opengraph.xyz/
*/