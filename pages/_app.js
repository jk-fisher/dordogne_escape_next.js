import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      AOS.init({ 
          duration: 1000,
          easing: "ease-out-cubic",
          // offset: 50,
          //once: true;
          })
    }, []);
  return (
          <Layout>
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
          </Layout> 


  )
}

export default MyApp
