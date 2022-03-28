import Head from "next/head";
import { getSortedReviewsData } from "../../lib/reviews";
// import ReviewList from "../../components/Reviews/ReviewList";

const getStaticProps = async () => {
    const allReviewsData = getSortedReviewsData()
    return {
        props: {allReviewsData} 
    }
}

const Reviews = ({ allReviewsData }) => {
    return (<>
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

    )
}
export { Reviews as default, getStaticProps}
