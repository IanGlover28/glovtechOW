// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Glovtech Ghana | AI & IT Solutions',
  description: 'Glovtech Ghana delivers AI automation, web development, and IT solutions to help your business grow.',
  keywords: ['Glovtech', 'AI', 'Ghana', 'Web Development', 'Automation', 'IT'],
  openGraph: {
    title: 'Glovtech Ghana',
    description: 'Empowering Africa with AI and Digital Transformation.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Glovtech Ghana',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
