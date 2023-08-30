import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      <Toaster  position='top-center'/>
    </Layout>
  ) 
}
