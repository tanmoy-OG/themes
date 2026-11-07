import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dum Dum Eyewear UI Manifest',
  description:
    'Six distinct landing page UI designs for a local Dum Dum, Kolkata eyeglass shop featuring Minimalist, Glassmorphism, Bento Grids, Editorial, Hand-Drawn, and Neobrutalism aesthetics.',
  openGraph: {
    title: 'Dum Dum Eyewear UI Manifest',
    description:
      'Six distinct landing page UI designs for a local Dum Dum, Kolkata eyeglass shop featuring Minimalist, Glassmorphism, Bento Grids, Editorial, Hand-Drawn, and Neobrutalism aesthetics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dum Dum Eyewear UI Manifest',
    description:
      'Six distinct landing page UI designs for a local Dum Dum, Kolkata eyeglass shop featuring Minimalist, Glassmorphism, Bento Grids, Editorial, Hand-Drawn, and Neobrutalism aesthetics.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600;700&family=Patrick+Hand&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        style={
          {
            '--font-inter': '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            '--font-outfit': '"Outfit", -apple-system, BlinkMacSystemFont, sans-serif',
            '--font-playfair': '"Playfair Display", Georgia, serif',
            '--font-lora': '"Lora", Georgia, serif',
            '--font-caveat': '"Caveat", "Comic Sans MS", cursive',
            '--font-patrick': '"Patrick Hand", "Bradley Hand", cursive',
            '--font-space-grotesk': '"Space Grotesk", system-ui, sans-serif',
            '--font-ibm-plex-mono': '"IBM Plex Mono", monospace',
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
