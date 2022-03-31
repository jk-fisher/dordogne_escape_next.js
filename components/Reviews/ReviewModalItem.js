import styles from "../../styles/ReviewItem.module.css"
import { FaUser } from "react-icons/fa";


const ReviewModalItem = (props) => {
    return (     
    <li className={styles.item} key={props.id}>
        <FaUser className={styles.icon} />
        <p className={styles.name}>{props.title}</p>
        <span className={styles.date}>{props.date}</span>
        <p className={styles.body}>{props.quote}</p>
    </li>
    );
}
 
export default ReviewModalItem;