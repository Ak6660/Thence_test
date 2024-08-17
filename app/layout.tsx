import type { Metadata } from 'next';
import {
  Covered_By_Your_Grace,
  Inter,
  Manrope,
} from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${manrope.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Brunel',
  description: 'Every success journey we’ve encountered.',
};
