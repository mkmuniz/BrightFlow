import TanstackProvider from '@/providers/TanStackProvider';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import CookieConsent from '@/components/PopUps/CookieConsent';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css'

export const metadata: Metadata = {
  title: 'BrightFlow - Electricity Bill Management',
  description: 'Manage your electricity bills intelligently with BrightFlow. Upload, automatic data extraction, and a personalized dashboard for your needs.',
  metadataBase: new URL('https://brightflow.com.br'),
  authors: [{ name: 'Mikael Muniz Ribeiro' }],
  keywords: ['electricity bills', 'financial management', 'dashboard', 'data extraction', 'utilities'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightflow.com.br',
    siteName: 'BrightFlow',
    title: 'BrightFlow - Smart Electricity Bill Management',
    description: 'Simplify your electricity bill management with BrightFlow. Easy upload, automatic data extraction, and intuitive visualization all in one place.',
    images: [
      {
        url: '/Brightflow-og.png',
        width: 1200,
        height: 630,
        alt: 'BrightFlow Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightFlow - Smart Electricity Bill Management',
    description: 'Simplify your electricity bill management with BrightFlow. Easy upload, automatic data extraction, and intuitive visualization.',
    images: ['/Brightflow-og.png'],
    creator: '@mkmuniz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=dQw4w9WgXcQ',
  },
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

const roboto = Roboto({ weight: '700', subsets: ['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet" />
        
        <link rel="canonical" href="https://brightflow.com.br/" />
      </head>
      <body className={roboto.className}>
        <NextAuthSessionProvider>
          <TanstackProvider>
            {children}
          </TanstackProvider>
        </NextAuthSessionProvider>
        <CookieConsent />
      </body>
    </html>
  )
}
