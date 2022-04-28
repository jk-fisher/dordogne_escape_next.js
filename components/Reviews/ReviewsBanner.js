import ReviewItem from "./ReviewItem";
import styles from "../../styles/Reviews.module.css";
import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewsBanner = ({ reviewData }) => {

    const mainQuote = " We can’t rate this cottage highly enough! It is the most beautiful little getaway for anyone wanting to escape the hustle of a busy life...The little cottage has absolutely everything you could need for a lovely stay and it’s been renovated to such a high standard. Will definitely be recommending to our friends and family. "
    
    const exampleReviews = reviewData.filter((review, index) => {
        return index < 2
    }).map((item) => {
        return ( 
            <ReviewItem
                key={item.id}
                name={item.name}
                date={item.date}
                body={item.markdownBody}
                reviewData={reviewData}
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