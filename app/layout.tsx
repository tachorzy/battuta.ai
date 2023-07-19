import './globals.css'
// import { satoshi } from '@/util/localFonts';

export const metadata = {
  title: 'Battuta.ai',
  description: 'Itineraries for the modern traveler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={""}>
        {children}
      </body>
    </html>
  )
}
