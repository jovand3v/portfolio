import "../styles/globals.scss";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });
const locales = ["en", "sr"];

export const metadata: Metadata = {
  title: "Jovan Ilić - Front-end Developer",
  description:
    "Hi, my name is Jovan Ilić. I'm a front-end developer, from Serbia, with back-end experience and a passion for design. Explore my portfolio to learn more.",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
