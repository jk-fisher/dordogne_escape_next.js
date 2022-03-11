import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      AOS.init({ 
          duration: 1000,
          easing: "ease-out-cubic",
          // offset: 50,
          })
    }, []);
  return (
          <Layout>
                <Component {...pageProps} />
          </Layout> 


  )
}

export default MyApp
