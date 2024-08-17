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
export const metadata: Metadata = {
  title: 'Brunel',
  description: 'Every success journey we’ve encountered.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
