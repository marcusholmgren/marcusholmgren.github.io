import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Marcus Holmgren',
    default:
      'Marcus Holmgren - Software Builder & Machine Learning Tinkerer',
  },
  description:
    "👋 I'm Marcus Holmgren, a software developer passionate about building with **Python**, **Rust**, and **TypeScript**. A curious learner excited about the future of AI and the journey to a career in **Machine Learning**.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
