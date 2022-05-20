import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "../../../styles/Calendar.module.css";
import useCalendar from "../../../hooks/useCalendar";

import CalendarDaysList from "./CalendarDaysList";
import CalendarContext from "../../../store/calendar-context";
import { useContext } from "react";


const Calendar = () => {

    const {
        myDate,
        prevMonthArrowVisible, 
        prevYearArrowVisible, 
        prevMonthHandler,
        // nextMonthHandler,
        nextYearHandler,
        prevYearHandler} = useCalendar(CalendarContext);
    
    const { nextMonthHandler } = useContext(CalendarContext)
    // const myTest = useContext(CalendarContext)


    const month = [
        "January",
        "February",
        "March", 
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    

    return ( <div className={styles.calendarContainer}>
        <div className={styles.monthYear}>
            <div className={styles.prev}>
               <FaAngleLeft onClick={prevMonthHandler} fill='white' className={`${prevMonthArrowVisible} ? ${styles.icon} : ${styles.none} `} />
               <FaAngleLeft onClick={prevYearHandler} fill='white' className={`${!prevYearArrowVisible} ? ${styles.icon} : ${styles.none} `}/>
            </div>
            <div className={styles.date}>
                <div className={styles.month}>{month[myDate.getMonth()]}</div>
                <div className={styles.year}>{myDate.getFullYear()}</div>
                <div className={styles.selectedDate}></div>
            </div>
            <div className={styles.next}>
                <FaAngleRight onClick={nextMonthHandler} fill='white' className={styles.icon}/>
                <FaAngleRight onClick={nextYearHandler} fill='white' className={styles.icon}/>
            </div>
        </div>
        <div className={styles.weekdays}>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div >
            <CalendarDaysList />

        </div>
    </div> );
}
export { Calendar as default };