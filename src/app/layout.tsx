import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "@/Components/Footer";
import Navbar from '@/Components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grab Your Tickets',
  description: '"Grab Your Ticket" is a cutting-edge web application designed to revolutionize your ticket reservation experience. From concerts and sports events to movies and more, this application offers a seamless interface, intuitive navigation, and robust functionality. Enjoy the convenience of swift ticket selection, secure transactions, and real-time updates, making "Grab Your Ticket" your go-to destination for stress-free event planning. Elevate your ticket reservation journey with this dynamic and user-centric web application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Notification/> */}
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
