import '../styles/global.css';
import type { AppProps } from 'next/app';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { DiscontinuedBanner } from '../components/DiscontinuedBanner';
config.autoAddCss = false;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DiscontinuedBanner />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
