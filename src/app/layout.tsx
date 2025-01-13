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
    url: "https://rulez.vercel.app",
    siteName: "CursorRules",
    images: [
      {
        url: "https://rulez.vercel.app/og.png",
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
    images: ["https://rulez.vercel.app/og.png"],
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
    canonical: "https://rulez.vercel.app",
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
                <span>@yunuserturk</span>
              </a>
              <a
                href="https://github.com/yunuserturk/rulez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900/30 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
