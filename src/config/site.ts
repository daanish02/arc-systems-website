/**
 * Site-wide configuration
 * Update these values with your actual company information
 */

export const siteConfig = {
  company: {
    name: "Arc Systems",
    tagline: "Engineering Intelligent Systems",
    email: "hello@archsystems.tech",
    phone: "+971-50-751-1002", // Update with your WhatsApp number
    whatsappNumber: "971507511002", // Format: country code + number (no + or spaces)
    location: "Dubai, United Arab Emirates",
    timezone: "GST (UTC+4)",
    businessHours: "Available Daily, 9:00 AM - 12:00 AM GST",
    businessHoursExtended: "Available Daily, 9:00 AM - 12:00 AM GST",
    businessHoursFull: "Available Daily: 9:00 AM - 12:00 AM (GST)",
  },

  founder: {
    name: "Danish Ahmed", // Update with your name
    role: "Founder, CEO & Lead Engineer",
  },

  social: {
    linkedin: "https://linkedin.com/company/arc-systems", // Update with your LinkedIn
    github: "", // Optional
    twitter: "", // Optional
  },

  integrations: {
    // Google Analytics tracking ID (get from https://analytics.google.com)
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",

    // Google Sheets Web App URL (from Apps Script deployment)
    googleSheetsWebAppUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "",

    // For future use
    calendlyUsername: "", // If you add Calendly later
  },

  urls: {
    website: "https://archsystems.tech",
    portfolio: "/projects",
    contact: "/contact",
  },

  // WhatsApp messages (pre-filled when user clicks)
  whatsappMessages: {
    default: "Hi! I'm interested in discussing an AI/ML or data science project with Arc Systems.",
    fromContact: "Hi! I'd like to discuss my AI/ML project requirements.",
    fromServices: "Hi! I'm interested in your AI and data science services.",
    fromProject: "Hi! I saw your portfolio and would like to discuss an AI/ML solution.",
  },
} as const;

// Helper function to generate WhatsApp link
export function getWhatsAppLink(message?: string): string {
  const msg = message || siteConfig.whatsappMessages.default;
  return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// Helper to check if WhatsApp is configured
export function isWhatsAppEnabled(): boolean {
  const number = siteConfig.company.whatsappNumber;
  return number.length > 10 && /^\d+$/.test(number);
}
