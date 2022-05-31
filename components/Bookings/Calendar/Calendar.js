import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "../../../styles/Calendar.module.css";
import useCalendar from "../../../hooks/useCalendar";

import CalendarDaysList from "./CalendarDaysList";
import CalendarContext from "../../../store/calendar-context";
import { useContext, useState } from "react";


const Calendar = () => {

        const { nextMonthHandler, 
            nextYearHandler,
            prevMonthHandler,
            prevYearHandler,
            prevMonthArrowVisible, 
            prevYearArrowVisible,
            myDate } = useContext(CalendarContext)
    
    const today = new Date();

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

    console.log(prevMonthArrowVisible, prevYearArrowVisible)

    const monthArrowVisible = prevMonthArrowVisible ? styles.icon : styles.none;
    const yearArrowVisible = prevYearArrowVisible ? styles.icon : styles.none; 

    return ( <div className={styles.calendarContainer}>
        <div className={styles.monthYear}>
            <div className={styles.prev}>
               <FaAngleLeft onClick={prevMonthHandler} fill='white' className={monthArrowVisible} />
               <FaAngleLeft onClick={prevYearHandler} fill='white' className={yearArrowVisible}/>
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