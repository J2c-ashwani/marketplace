// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'FitIndia - Your Partner in Health & Wellness',
    template: '%s | FitIndia',
  },
  description: 'Find and book certified Gym Trainers, Yoga Instructors, and Dieticians online. Start your wellness journey with FitIndia.',
  openGraph: {
    title: 'FitIndia - Your Partner in Health & Wellness',
    description: 'Connect with top health professionals for personalized guidance.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.fitindia-marketplace.com', // Replace with your actual domain
    siteName: 'FitIndia',
  },
  // Add more metadata: twitter, icons, etc.
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-brand-neutral text-gray-800`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}