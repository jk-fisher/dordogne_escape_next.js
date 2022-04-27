import styles from "../../styles/ReviewItem.module.css"
import { FaUser } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ReviewModalItem = (props) => {
    return (     
    <li className={styles.item} key={props.id}>
        <FaUser className={styles.icon} />
        <p className={styles.name}>{props.name}</p>
        <span className={styles.date}>{props.date}</span>
        <div className={styles.body}>
            <ReactMarkdown>
                {props.body}
            </ReactMarkdown>
        </div>
    </li>
    );
}
 
export default ReviewModalItem;