import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminPanelLayout from "@/src/components/admin-panel/admin-panel-layout";
import { SidebarProvider } from "@/src/components/admin-panel/sidebar-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin | Uni-Crescent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <AdminPanelLayout>{children}</AdminPanelLayout>
          </SidebarProvider>
      </body>
    </html>
  );
}
