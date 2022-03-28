import Head from "next/head";

import HeroSection from "../components/Layout/HeroSection"
import Amenities from "../components/Property/Amenities";
import PropertyDescription from "../components/Property/PropertyDescription";
import ReviewsBanner from "../components/Reviews/ReviewsBanner";
import Location from "../components/Location/Location";

import { getSortedReviewsData } from "../lib/reviews";

const getStaticProps = async () => {
    const allReviewsData = getSortedReviewsData()
    return {
        props: {allReviewsData} 
    }
}
const Home = ({ allReviewsData }) => {
    return ( 
        <>
            <Head>
                <title>Le Petit Cottage</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Le Petit Cottage, self-catered accommodation in France, available to book for holidays to the Dordogne region."
                />
                <meta
                    name="keywords" 
                    content="Le Petit Cottage, Dordogne, France, holiday, rental, self-catered, accomodation"
                />
            </Head>
            
            <HeroSection />

            <Amenities />

            <PropertyDescription />

            <ReviewsBanner />

            <Location />

            <ul >
        {allReviewsData.map(({ id, date, title }) => (
            <li key={id} >
                {title}
                <br />
                {date}
                <br />

            </li>
        ))}
        </ul>
        </>

     );
}
 
export { Home as default, getStaticProps} ;
