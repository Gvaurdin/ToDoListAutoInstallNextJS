import "@/styles/globals.css";
import { Footer } from '../components/Footer';
import { Header } from '../components/header';


export default function MyApp({ Component, pageProps }) {
  console.log('Component=', Component);
  return <>
      <Header />
      <main>
          <Component {...pageProps} />
      </main>
      <Footer />

  </>
}
