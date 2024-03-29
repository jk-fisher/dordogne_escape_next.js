import Head from "next/head";

import ModalContext from "../store/modal-context";
import useModal from "../hooks/useModal";

import HeroSection from "../components/Layout/HeroSection"
import Amenities from "../components/Property/Amenities";
import PropertyDescription from "../components/Property/PropertyDescription";
import ReviewsBanner from "../components/Reviews/ReviewsBanner";
import Location from "../components/Location/Location";


import { getSortedReviewsData } from "../lib/reviews";
import { Fragment } from "react";

const getStaticProps = async () => {
    const allReviewsData = getSortedReviewsData();
    allReviewsData.map((review) => {
        const dateObj = new Date(review.date)
        const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })
        review.date = dateString;
        return review;
    })
    return {
        props: {allReviewsData} 
    }
}
const Home = ({ allReviewsData }) => {
    const { showModal, openModalHandler, closeModalHandler, modalContent } = useModal();
    

    
    return ( 
        <Fragment>
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

            <ModalContext.Provider value={{ showModal, openModalHandler, closeModalHandler, modalContent }}>
                <Amenities />
            </ModalContext.Provider>

            <PropertyDescription />

            <ModalContext.Provider value={{ showModal, openModalHandler, closeModalHandler, modalContent }}>
                <ReviewsBanner reviewData={allReviewsData} />
            </ModalContext.Provider>
            
            <Location />
        </Fragment>

     );
}
 
export { Home as default, getStaticProps} ;
