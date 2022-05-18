import { useEffect } from "react";
import useCalendar from "../../../hooks/useCalendar";
import styles from "../../../styles/Calendar.module.css"
import CalendarDaysItem from "./CalendarDayItem";

const CalendarDaysList = () => {
    const {myDate, 
        firstDayIndex, 
        lastDayIndex, 
        renderCalendarHandler,
        highlightDaysHandler, 
        visibleDates} = useCalendar();

    const today = new Date();

    const prevClassName =  `${styles.day} ${styles.prevDate}`;
    // const prevClassName =  `${styles.day} ${styles.prevDate} ${clicked ? styles.clicked : ''}`;
    const currentClassName = `${styles.day}`;
    const nextClassName = `${styles.day} ${styles.nextDate}`;


    
    const days = visibleDates.map((day, index) => {
        // console.log(day, index, firstDayIndex)
        if(index < firstDayIndex - 1){
            console.log('prev day')
            return <CalendarDaysItem
                        className={prevClassName} 
                        key={index}>
                        {day}</CalendarDaysItem>   
        }else if(index >= firstDayIndex - 1 && index < lastDayIndex){
            if(
                myDate.getDate() === day &&
                myDate.getMonth() === today.getMonth() &&
                myDate.getFullYear() === today.getFullYear()){
                    return <CalendarDaysItem
                                className={`${currentClassName} ${styles.today}` } 
                                key={index}>
                                {day}</CalendarDaysItem>   
            }else{
                return <CalendarDaysItem
                            className={currentClassName} 
                            key={index}>
                            {day}</CalendarDaysItem>   
            }
        }else if(index >= lastDayIndex){
            return <CalendarDaysItem
                        className={nextClassName} 
                        key={index}>
                        {day}</CalendarDaysItem>    
        }
    })

    useEffect(() => {
        renderCalendarHandler()
    },[]);

    return ( <ul className={styles.days} onClick={(e) => {highlightDaysHandler(e.target)}}>
            {days}
        </ul> );
}
 
export default CalendarDaysList;