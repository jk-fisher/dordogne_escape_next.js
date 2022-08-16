import { useContext } from "react";

import ModalContext from "../../store/modal-context";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from "../../styles/ReviewItem.module.css";
import { FaUser } from "react-icons/fa";
import ReviewModal from "./ReviewModal";
import ReactMarkdown from 'react-markdown';


const ReviewItem = (props) => {
    const { openModalHandler } = useContext(ModalContext);

    return ( 
        <Card>
                <FaUser /><p className={styles.name}>{props.name}</p>
                <span className={styles.date}>{props.date}</span>
                <div className={styles.body}>
                    <ReactMarkdown>
                        {props.body}
                    </ReactMarkdown>
                </div>
                <button 
                    onClick={() => openModalHandler( <ReviewModal reviewData={props.reviewData} /> )} 
                    className={styles.reviewsBtn}>Read all reviews</button>
                <Modal />
        </Card>
 );
}
 
export default ReviewItem;