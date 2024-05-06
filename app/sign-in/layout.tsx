import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import GetNavbar from "@/components/getnavbar";
import { urlForImage } from "@/lib/sanity/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});



export default async function Layout({
                                       children,
                                       params
                                     }: {
  children: React.ReactNode;
  params: any;
}) {
  const settings = await getSettings();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
    <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
    <Providers>
      <GetNavbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </Providers>
    </body>
    </html>
  );
}

export const revalidate = 86400;
