import Link from "next/Link";
import Card from "../UI/Card";
import styles from "../../styles/ReviewItem.module.css";
import { FaUser } from "react-icons/fa";

const ReviewItem = (props) => {
    return ( <li >
        <Card>
                <FaUser /><h3 className={styles.name}>{props.name}</h3>
                <span className={styles.date}>{props.date}</span>
                <div className={styles.body}>{props.body}</div>
                <Link href="/reviews">
                    <button className={styles.reviewsBtn}>Read all reviews</button>
                </Link>
        </Card>
    </li>
 );
}
 
export default ReviewItem;