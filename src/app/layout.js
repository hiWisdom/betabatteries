import { Roboto } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";
import Navbar from "@/components/shared/NavBar/nav";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Beta Batteries",
  description: "BETA BATTERIES is the most reliable company relating to anything energy in Nigeria. Call or WhatsApp +2347069199257. Payment on or before delivery. Wholesale + Retail. Official Battery Distributor for: Lifeline Battery, Sun Xtender Battery, Northstar Battery, Optima Battery, Chairman Battery, Vision Energy Power, Crown, Full River, Noco, Power-Sonic, Trojan, and US Battery ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AuthContextProvider>
        <body
          className={`${inter.className} flex w-full h-full overflow-y-hidden flex-col`}
        >
          <Navbar />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
