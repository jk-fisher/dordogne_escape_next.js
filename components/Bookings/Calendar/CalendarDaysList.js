import { useEffect, useContext } from "react";
import useCalendar from "../../../hooks/useCalendar";
import CalendarContext from "../../../store/calendar-context";
import styles from "../../../styles/Calendar.module.css"
import CalendarDaysItem from "./CalendarDayItem";

const CalendarDaysList = () => {

    const { myDate, visibleDates, firstDayIndex, lastDayIndex, selectDatesHandler, clickedObj } = useContext(CalendarContext);


    const today = new Date();

    const prevClassName =  `${styles.day} ${styles.prevDate}`;
    // const prevClassName =  `${styles.day} ${styles.prevDate} ${clicked ? styles.clicked : ''}`;
    const currentClassName = `${styles.day}`;
    const nextClassName = `${styles.day} ${styles.nextDate}`;



    const days = visibleDates.map((day, index) => {
        // console.log('DAY', day,'INDEX', index)
        console.log(clickedObj);
        //map over clicked obj to add clicked class
        if(index < firstDayIndex){
            return <CalendarDaysItem
                        className={prevClassName} 
                        index={index}
                        onClick={selectDatesHandler}
                        key={index}>
                        {day}</CalendarDaysItem>   
        }else if(index >= firstDayIndex - 1 && index < lastDayIndex){
            if(
                today.getDate() === day &&
                myDate.getMonth() === today.getMonth() &&
                myDate.getFullYear() === today.getFullYear()){
                    return <CalendarDaysItem
                                className={`${currentClassName} ${styles.today}` }
                                index={index} 
                                onClick={selectDatesHandler}
                                key={index}>
                                {day}</CalendarDaysItem>   
            }else{
                return <CalendarDaysItem onClick={selectDatesHandler}
                            className={currentClassName} 
                            index={index}
                            key={index}>
                            {day}</CalendarDaysItem>   
            }
        }else if(index >= lastDayIndex){
            return <CalendarDaysItem
                        className={nextClassName} 
                        index={index}
                        onClick={selectDatesHandler}
                        key={index}>
                        {day}</CalendarDaysItem>    
        }
    })
    
    useEffect(() => {
        // renderCalendarHandler();
        console.log('useEffect calendar list ran')
    }, []);
    
    return ( <ul className={styles.days}>
            {days}
        </ul> );
}
 
export default CalendarDaysList;