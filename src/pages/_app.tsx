import '../styles/global.css';
import type { AppProps } from 'next/app';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Provider } from 'next-auth/client';
import { AuthProvider } from '../contexts/AuthContext';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}
export default MyApp
