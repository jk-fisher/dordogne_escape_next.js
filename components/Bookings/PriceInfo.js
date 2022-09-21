import { useContext } from "react";
import styles from "../../styles/PriceInfo.module.css";
import Button from "../UI/Button";
import CalendarContext from "../../store/calendar-context";
import ModalContext from "../../store/modal-context";
import Modal from "../../hooks/useModal"
import BookingForm from "./BookingForm";

const PriceInfo = () => {
    const { openModalHandler } = useContext(ModalContext);
    const { clickedObj } = useContext(CalendarContext)
    
    const calculateNights = () => {
        const timeDifference = clickedObj[1].date.getTime() - clickedObj[0].date.getTime();
        return Math.round(timeDifference / (1000 * 3600 * 24)); 
    }

    return ( <div className={styles.priceContainer}>
        <div className={styles.dateEnquiry}>
            <div className={styles.header}>
                <h4 className={styles.white}><span className={styles.sm}>Prices from</span><br /> £48/night</h4> <br /><br />
            </div>
            {clickedObj.length === 2 ?
            <div className={styles.priceFiller}>
                <div className={styles.flexRow}>
                    <span className={`${styles.caps} ${styles.blue}`}>Check-in: </span><span className={`${styles.blue}`}>{`${clickedObj[0].date.toDateString()}`}</span> 
                </div>
                <div className={styles.flexRow}>
                    <span className={`${styles.caps} ${styles.blue}`}>Checkout: </span><span className={`${styles.blue}`}>{`${clickedObj[1].date.toDateString()}`}</span> 
                </div>
                <div className={styles.flexRow}>
                    <span className={`${styles.caps} ${styles.blue}`}>£50 x {calculateNights()} nights: </span><span className={` ${styles.blue}`}>{`£${(calculateNights()) * 50}`}</span>
                </div>
                <Button onClick={() => openModalHandler(<BookingForm/>)} className={styles.bookBtn}>Request to book</Button>
                <div>
                    <span className={`${styles.blue} ${styles.flexEnd}`}>You won't be charged yet</span>
                </div>
            </div> 
            :<div className={styles.priceFiller}>
                <div className={styles.info}> 10% OFF<br />on weekly bookings</div> <br /> 
                <div className={styles.info}>Select your dates on the calender to check availability.</div> 
            </div>}
            <Modal />
        </div> 
    </div> );
}
 
export default PriceInfo;