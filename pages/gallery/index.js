import { Fragment } from "react"
import Head from "next/head"
import styles from "../../styles/ImageCarousel.module.css"
import ImageCarousel from "../../components/UI/ImageCarousel"
import { getSortedImages } from "../../lib/carousel"


const getStaticProps = async () => {
    const carouselImages = getSortedImages();
    return {
      props: { carouselImages }
    }
}

const gallery = ({ carouselImages }) => {
    return ( <Fragment>
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
                <ImageCarousel images={carouselImages} />
    </Fragment> );
}
 
export { gallery as default, getStaticProps};