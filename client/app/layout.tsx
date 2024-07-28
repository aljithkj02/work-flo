import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import StoreProvider from "@/lib/appStore/StoreProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workflo!",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AppRouterCacheProvider>
            {children}
            <Toaster />
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
