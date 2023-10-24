import "../styles/globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovan Ilić - Front-end Developer",
  description:
    "Hi, my name is Jovan Ilić. I'm a front-end developer, from Serbia, with back-end experience and a passion for design. Explore my portfolio to learn more.",
};

const locales = ["en", "sr"];

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  const isValidLocale = locales.some((l) => l === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
