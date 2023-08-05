import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Hello World',
//   description: 'Generated by Yasumin',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      <main className={inter.className}>{children}</main>
      <Footer/>
    </>
  )
}
