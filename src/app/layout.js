import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/layouts/Footer';
import './app.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orphanage Home',
  description: 'A home for the orphans',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
