import '../styles/globals.css';
import Nav from "../components/nav.js";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (<>
    <Nav className="overflow-x-hidden" page={router.pathname.toLowerCase().slice(1)} />
    <Component className="overflow-x-hidden" {...pageProps} />
  </>)
}

export default MyApp;
