import { useEffect } from "react";
import styles from "../../styles/Calendar.module.css";
import useCalendar from "../../hooks/useCalendar";



const Calendar = () => {

    const {date, renderCalendarHandler, visibleDates, firstDayIndex, lastDayIndex} = useCalendar()

    const today = new Date();
    console.log('date', date)
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
    },[]);
   
    console.log(date.getDate(), today)
    const days = visibleDates.map((day, index) => {
        // console.log(day, index)
        if(index < firstDayIndex - 1){
            return <li className={`${styles.day} ${styles.prevDate}`} key={index}>
            {day}
        </li>   
        }else if(index >= firstDayIndex - 1 && index < lastDayIndex){
            if(date.getDate() === day &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()){
                console.log('today!')
                return <li className={`${styles.day} ${styles.today}`} key={index}>
                {day}
            </li>   
            }else{
                return <li className={styles.day} key={index}>
                {day}
            </li>   
            }
        }else if(index >= lastDayIndex){
            return <li className={`${styles.day} ${styles.nextDate}`} key={index}>
            {day}
        </li>   
        }
    })

    
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
        <div >

            <ul className={styles.days}>
                {days}
            </ul>

        </div>
    </div> );
}
export { Calendar as default };