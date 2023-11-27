import './globals.css'
import { Courier_Prime } from 'next/font/google'

const font = Courier_Prime({weight: ["400", "700"], style: ["normal"], subsets: ["latin"]})

export const metadata = {
  title: 'TEDxCMU Build-a-Ted',
  description: 'Build your own TEDxCMU Ted!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
