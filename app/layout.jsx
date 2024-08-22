// //This is for common layout across diff pages
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import BackToTopButton from '@/app/ui/BackToTop';
import '@/app/globalStyles/global.css';    //Common CSS styling ---> location ./app/globalStyles/global.css
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
