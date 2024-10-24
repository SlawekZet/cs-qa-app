import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CS QA App',
  description: 'An app to check the Quality of the Customer Support Team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
