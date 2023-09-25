import "./styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovan Ilić - Front-end Developer",
  description:
    "Hi, my name is Jovan Ilić. I'm a front-end developer, from Serbia, with back-end experience and a passion for design. Explore my portfolio to learn more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
