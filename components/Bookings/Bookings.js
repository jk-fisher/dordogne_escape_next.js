import styles from "../../styles/Bookings.module.css";
import useCalendar from "../../hooks/useCalendar";
import CalendarContext from "../../store/calendar-context";

import Calendar from "./Calendar/Calendar";
import PriceInfo from "./PriceInfo";
import Button from "../UI/Button";

const Bookings = () => {

    // const { myTest } = useCalendar();
    const {myDate, nextMonthHandler} = useCalendar();

    return ( <section className={styles.bookingsWrapper}>
        <CalendarContext.Provider value={{ myDate, nextMonthHandler }}>
            <Calendar />
        </CalendarContext.Provider>
        <PriceInfo />
    </section> );
}
 
export default Bookings;