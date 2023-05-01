import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Lato, Roboto } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Radarbot',
  description: 'Radarbot website',
};
