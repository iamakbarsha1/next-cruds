import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const archiaFont = localFont({
  src: "./fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-archiaFont",
  weight: "400",
});
// const archiaFont = localFont({
//   src: "./fonts/archia-regular-webfont.woff2",
//   variable: "--font-archiaFont",
//   weight: "100",
// });

export const metadata = {
  title: "Cruds",
  description: "create-read-update-delete-save",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${archiaFont.variable} antialiased`}
      >
        <main className="flex">
          <section className="w-full h-full">
            <Sidebar />
          </section>
          <section className="w-full h-full">
            <Navbar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
