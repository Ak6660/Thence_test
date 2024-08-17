import type { Metadata } from 'next';
import {
  Covered_By_Your_Grace,
  Manrope,
} from 'next/font/google';
import './globals.css';

export const coveredByYourGraceFont = Covered_By_Your_Grace(
  {
    subsets: ['latin'],
    style: 'normal',
    weight: '400',
  }
);

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
