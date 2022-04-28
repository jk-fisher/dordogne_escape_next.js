import ReviewModalItem from "./ReviewModalItem";
import styles from "../../styles/ReviewModal.module.css";
import { FaStar } from "react-icons/fa";
import { Fragment } from "react";

const ReviewModal = (props) => {
    return ( 
        <Fragment>
            <h2 className={styles.header}>All Reviews</h2>
                <div className={styles.subheader}>
                    <h3><FaStar className={styles.icon}/>  4.92</h3>
                    <p>(86 reviews)</p>
                </div>
            <div className={styles.content}>
                <ul className={styles.reviewList}>
                    {props.reviewData.map(({ id, date, name, markdownBody }) => (
                        <ReviewModalItem key={id} date={date} name={name} body={markdownBody}/>
                        
                    ))}

                </ul>
            </div>
        </Fragment>
         );
}
 
export default ReviewModal;