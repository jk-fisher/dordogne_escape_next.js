import { useContext } from "react";

import ModalContext from "../../store/modal-context";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from "../../styles/ReviewItem.module.css";
import { FaUser } from "react-icons/fa";

const ReviewItem = (props) => {
    const { openModalHandler } = useContext(ModalContext);

    return ( <li >
        <Card>
                <FaUser /><h3 className={styles.name}>{props.name}</h3>
                <span className={styles.date}>{props.date}</span>
                <div className={styles.body}>{props.body}</div>
                <button 
                    onClick={() => openModalHandler( "reviews" )} 
                    className={styles.reviewsBtn}>Read all reviews</button>
                <Modal />
        </Card>
    </li>
 );
}
 
export default ReviewItem;