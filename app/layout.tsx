import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './(marketing)/_components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url:"/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url:"/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='notion-theme-2'>
        {children}
        </ThemeProvider></body>
    </html>
  )
}
