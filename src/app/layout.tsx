import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Emmanuel Ubachi - Data Visualization, Data Analytics, BI Development, Web Development",
  description:
    "Emmanuel Ubachi - Data Visualization, Dashboards, Data Analytsis",
  keywords: [
    "data visualization",
    "Data Visualization Development",
    "dashboard",
    "Data Analytics",
    "Business Information Development",
    "BI Development",
    "Power BI",
    "Power BI Dashboards",
    "Beautiful Dashboards",
    "Beautiful Dashboards UI",
    "Beautiful Dashboards design",
    "Beautiful Dashboards User interface",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
