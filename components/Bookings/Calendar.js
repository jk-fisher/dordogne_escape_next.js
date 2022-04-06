import { useState, useEffect } from "react";
import styles from "../../styles/Calendar.module.css";




const renderCalendarHandler = () => {
    console.log('calendarHandlerRendered');

    setLastDate(new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate());

    console.log('lastDate', lastDate);

    setPrevLastDate(new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate());

    setFirstDayIndex(date.getDay());

    setLastDayIndex(new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay());

    setNextMonthDays(7 - lastDayIndex - 1)
    
    

    const days = [...Array(firstDayIndexDay).keys()];
    const reverseDays = days.reverse();

}


const Calendar = (props) => {
    const [ date, setDate ] = useState(new Date());
    const [ selectedDateCounter, setSelectedDateCounter ] = useState(0);
    const [ firstDateSelected, setFirstDateSelected ] = useState(null);
    const [ secondDateSelected, setSecondDateSelected ] = useState(null);
    const [ firstIndexSelected, setFirstIndexSelected ] = useState(null);
    const [ secondIndexSelected, setSecondIndexSelected ] = useState(null);
    const [ lastDate, setLastDate ] = useState(null);
    const [ prevLastDate, setPrevLastDate ] = useState(null);
    const [ firstDayIndexDay, setFirstDayIndex ] = useState(null);
    const [ lastDayIndex, setLastDayIndex ] = useState(null);
    const [ nextMonthDays, setNextMonthDays ] = useState(null);
    
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
    ]
    useEffect(() => {
        renderCalendarHandler()
    }, []);
           
    return ( <div className={styles.calendarContainer}>
        <div className={styles.monthYear}>
            <div className={styles.prev}>
               {/* icons */}
            </div>
            <div className={styles.date}>
                <div className={styles.month}>{month[date.getMonth()]}</div>
                <div className={styles.year}>{date.getFullYear()}</div>
                <div className={styles.selectedDate}></div>
            </div>
            <div className={styles.next}>
                {/* icons  */}
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
        <div className={styles.days}>
            {reverseDays.map((day) => (
                <div className={[styles.prevDate, styles.day].join(" ")}>{day}</div>
            ))}
        </div>
    </div> );

export { Calendar as default, renderCalendarHandler };