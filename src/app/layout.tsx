'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { sacredVultusTheme } from '../themes/sacred-theme';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0B0B0B', color: '#F9F9F9' }}>
        <ChakraProvider value={sacredVultusTheme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
