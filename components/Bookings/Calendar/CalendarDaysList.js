import { useEffect, useContext } from "react";
import useCalendar from "../../../hooks/useCalendar";
import CalendarContext from "../../../store/calendar-context";
import styles from "../../../styles/Calendar.module.css"
import CalendarDaysItem from "./CalendarDayItem";

const CalendarDaysList = () => {
    // const {myDate, 
    //     visibleDates} = useContext(CalendarContext);

    const { myDate } = useContext(CalendarContext);

    const {firstDayIndex, 
        // myDate,
        visibleDates,
        lastDayIndex } = useCalendar();

    const today = new Date();

    const prevClassName =  `${styles.day} ${styles.prevDate}`;
    // const prevClassName =  `${styles.day} ${styles.prevDate} ${clicked ? styles.clicked : ''}`;
    const currentClassName = `${styles.day}`;
    const nextClassName = `${styles.day} ${styles.nextDate}`;

    const selectDatesHandler = (e) => {
        console.log(e.currentTarget.dataset.id)
        
    }

    
    // const days = visibleDates.map((day, index) => {
    //     // console.log(day, index, firstDayIndex)
    //     if(index < firstDayIndex - 1){
    //         console.log('prev day')
    //         return <CalendarDaysItem
    //                     className={prevClassName} 
    //                     index={index}
    //                     onClick={selectDatesHandler}
    //                     key={index}>
    //                     {day}</CalendarDaysItem>   
    //     }else if(index >= firstDayIndex - 1 && index < lastDayIndex){
    //         if(
    //             myDate.getDate() === day &&
    //             myDate.getMonth() === today.getMonth() &&
    //             myDate.getFullYear() === today.getFullYear()){
    //                 return <CalendarDaysItem
    //                             className={`${currentClassName} ${styles.today}` }
    //                             index={index} 
    //                             onClick={selectDatesHandler}
    //                             key={index}>
    //                             {day}</CalendarDaysItem>   
    //         }else{
    //             return <CalendarDaysItem onClick={selectDatesHandler}
    //                         className={currentClassName} 
    //                         index={index}
    //                         key={index}>
    //                         {day}</CalendarDaysItem>   
    //         }
    //     }else if(index >= lastDayIndex){
    //         return <CalendarDaysItem
    //                     className={nextClassName} 
    //                     index={index}
    //                     onClick={selectDatesHandler}
    //                     key={index}>
    //                     {day}</CalendarDaysItem>    
    //     }
    // })
    
    const days = "These days";

    useEffect(() => {
        console.log('useEffect', myDate)
        // renderCalendarHandler();
    });
    
    // console.log('visible dates',  visibleDates)
    console.log('CalendarDaysList',  myDate)
    return ( <ul className={styles.days}>
            {days}
        </ul> );
}
 
export default CalendarDaysList;