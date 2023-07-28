import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { UserContextProvider } from '@/components/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blogger',
  description: 'A simple blogging site for the beginners',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <UserContextProvider>
          <Header />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
