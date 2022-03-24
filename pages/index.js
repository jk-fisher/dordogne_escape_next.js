import Head from "next/head";

import HeroSection from "../components/Layout/HeroSection"
import Amenities from "../components/Property/Amenities";
import PropertyDescription from "../components/Property/PropertyDescription";
import Reviews from "../components/Reviews/Reviews";
import Location from "../components/Location/Location";

const Home = () => {
    return ( 
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <title>Le Petit Cottage</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Le Petit Cottage, self-catered accommodation in France, available to book for holidays to the Dordogne region."
                />
                <meta
                    name="keywords" 
                    content="Le Petit Cottage, Dordogne, France, holiday, rental, self-catered"
                />
            </Head>
            
            <HeroSection />

            <Amenities />

            <PropertyDescription />

            <Reviews />

            <Location />
        </>

     );
}
 
export default Home;
