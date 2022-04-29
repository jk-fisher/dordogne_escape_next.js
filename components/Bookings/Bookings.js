import styles from "../../styles/Bookings.module.css";

import Calendar from "./Calendar";
import PriceInfo from "./PriceInfo";
import Button from "../UI/Button";

const Bookings = () => {


    return ( <section className={styles.bookingsWrapper}>
        <Calendar />
        <PriceInfo />
    </section> );
}
 
export default Bookings;