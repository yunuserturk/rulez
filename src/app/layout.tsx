import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CursorRules - AI-Powered Development Rules Generator",
  description:
    "Create intelligent development guidelines and AI rules for your projects. CursorRules helps teams establish consistent coding standards, AI development practices, and automated workflows.",
  keywords: [
    "cursorrules",
    "ai development rules",
    "development guidelines",
    "coding standards",
    "ai workflows",
    "development best practices",
    "code quality",
    "team collaboration",
    "project management",
    "development automation",
  ],
  openGraph: {
    title: "CursorRules - AI-Powered Development Rules Generator",
    description:
      "Transform your development workflow with intelligent rule management. Create, validate, and deploy AI decision logic seamlessly.",
    url: "https://cursorrules.dev",
    siteName: "CursorRules",
    images: [
      {
        url: "https://cursorrules.dev/og.png",
        width: 1200,
        height: 630,
        alt: "CursorRules - AI Development Guidelines Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CursorRules - AI-Powered Development Rules Generator",
    description:
      "Transform your development workflow with intelligent rule management. Create, validate, and deploy AI decision logic seamlessly.",
    creator: "@yunusserturk",
    images: ["https://cursorrules.dev/og.png"],
  },
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
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://cursorrules.dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <main className="flex-grow">{children}</main>
          <footer className="w-full py-6 text-center border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <span>created by</span>
              <a
                href="https://twitter.com/yunusserturk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@yunusserturk</span>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
