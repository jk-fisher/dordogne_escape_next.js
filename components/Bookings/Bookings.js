import styles from "../../styles/Bookings.module.css";

import Calendar from "./Calendar";
import Button from "../UI/Button";

const Bookings = () => {


    return ( <section className={styles.bookingsWrapper}>
        <Calendar />
        <div className={styles.priceContainer}>
            <div className={styles.dateEnquiry}>
                <div className={styles.header}>
                    <span className={styles.white}>Only £48/<br /><span className={styles.sm}>night</span></span> <br /><br />
                </div>
                <div className={styles.priceFiller}>
                    <div> 10% OFF<br /><span className={styles.sm}>on weekly bookings</span></div> <br /> 
                    <div className={styles.info}>Select your dates on the calender to check availability.</div> 
                </div>
            </div> 
            <div className={styles.priceSummary}>
                <ul className={styles.priceBreakdown}></ul>
                <Button className={styles.bookBtn}>Request to book</Button>
            </div>
        </div>
    </section> );
}
 
export default Bookings;