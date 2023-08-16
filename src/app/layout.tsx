import React from 'react';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clipd',
  description: 'Host your images and clips for free.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
    <body className={inter.className}>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    <Analytics />
    </body>
    </html>
);

export default RootLayout;