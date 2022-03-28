import ReviewItem from "./ReviewItem";
import styles from "../../styles/Reviews.module.css";
import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewsBanner = () => {

    const mainQuote = " We can’t rate this cottage highly enough! It is the most beautiful little getaway for anyone wanting to escape the hustle of a busy life...The little cottage has absolutely everything you could need for a lovely stay and it’s been renovated to such a high standard. Will definitely be recommending to our friends and family. "
    
    const reviews = [
        {
            id: "1",
            name: "Sarah", 
            date: "November 2019",
            body: "The little cottage is cosy but with lovely modern touches like a very large bathroom with a large waterfall shower. It have everything you could wish for all done with so much thought!"
        },
        {
            id: "2",
            name: "Julie", 
            date: "September 2018",
            body: " A perfect (not so little) getaway. Jude and Nick have beautifully and tastefully restored “Le petite cottage” to an exceptional standard. Nick very kindly met us in the nearby village and we followed him to the spotlessly clean cottage..."
        }
    ]
    const exampleReviews = reviews.map((item) => {
        return ( 
            <ReviewItem
                key={item.id}
                name={item.name}
                date={item.date}
                body={item.body}
            />

        )
            
        })

    return ( <section className={styles.container}>
        <h2>Reviews</h2>
            <div className={styles.textWrapper}>
                <div className={styles.stars}>
                    <br />
                    <FaStar className={styles.star}/>
                    <FaStar className={styles.star}/>
                    <FaStar className={styles.star}/>
                    <FaStar className={styles.star}/>
                    <FaStarHalfAlt className={styles.star}/>
                    <span className={styles.rating}>4.5 rating</span>
                </div>
                <span>(60 reviews)</span>
                <div className={styles.mainQuote}><br />
                    <p>
                        <FaQuoteLeft />  
                        {mainQuote}
                        <FaQuoteRight />
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className={styles.cardContainer}>
                    {exampleReviews}
                </div>
        </section> );
}
 
export default ReviewsBanner;