import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "../../../styles/Calendar.module.css";
import useCalendar from "../../../hooks/useCalendar";

import CalendarDaysList from "./CalendarDaysList";


const Calendar = () => {

    const {myDate, 
        prevMonthArrowVisible, 
        prevYearArrowVisible, 
        nextMonthArrowVisible, 
        nextYearArrowVisible,
        nextMonthHandler,
        prevMonthHandler,
        prevYearHandler, 
        nextYearHandler} = useCalendar();

        

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

    console.log(prevMonthArrowVisible, nextMonthArrowVisible, prevYearArrowVisible, nextYearArrowVisible)


    return ( <div className={styles.calendarContainer}>
        <div className={styles.monthYear}>
            <div className={styles.prev}>
               <FaAngleLeft onClick={prevMonthHandler} fill='white' className={`${prevMonthArrowVisible} ? ${styles.icon} : ${styles.none} `} />
               <FaAngleLeft onClick={prevYearHandler} fill='white' className={`${prevYearArrowVisible} ? ${styles.icon} : ${styles.none} `}/>
            </div>
            <div className={styles.date}>
                <div className={styles.month}>{month[myDate.getMonth()]}</div>
                <div className={styles.year}>{myDate.getFullYear()}</div>
                <div className={styles.selectedDate}></div>
            </div>
            <div className={styles.next}>
                <FaAngleRight onClick={nextMonthHandler} fill='white' className={`${nextMonthArrowVisible} ? ${styles.icon} : ${styles.none} `}/>
                <FaAngleRight onClick={nextYearHandler} fill='white' className={`${nextYearArrowVisible} ? ${styles.icon} : ${styles.none}`}/>
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