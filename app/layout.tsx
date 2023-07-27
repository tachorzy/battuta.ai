import './globals.css'
import { satoshi } from '@/utils/localFonts';
import NavLogo from "@/components/NavLogo";

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
      <body className={satoshi.className + ""}>
        {children}
      </body>
    </html>
  )
}
