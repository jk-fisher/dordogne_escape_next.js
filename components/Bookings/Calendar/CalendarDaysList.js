import { useEffect, useContext } from "react";
import CalendarContext from "../../../store/calendar-context";
import styles from "../../../styles/Calendar.module.css"
import CalendarDaysItem from "./CalendarDayItem";

const CalendarDaysList = () => {

    const { myDate, 
        visibleDates, 
        firstDayIndex, 
        lastDayIndex, 
        selectDatesHandler, 
        setClickedObj, 
        firstCalendarDate, 
        lastCalendarDate,
        findIndexofDay,
        clickedObj
    } = useContext(CalendarContext);

    useEffect(() => {
        if(clickedObj.length > 0){
            const newObj = clickedObj.map(dateobj => {
                const newIndex = findIndexofDay(dateobj.date)
                return {...dateobj, index: newIndex}
            })
            setClickedObj(newObj);        
        }
    }, [myDate]);

    // const [ isOnPage, setIsOnPage ] = useState(false);
    const firstOnPage = false;
    const lastOnPage = false;
    const isClicked = false;

    const today = new Date();

    const prevClassName =  `${styles.day} ${styles.prevDate}`;
    const currentClassName = `${styles.day}`;
    const nextClassName = `${styles.day} ${styles.nextDate}`;

    // const firstDayIndex = myDate.getDay();
    
    const days = visibleDates.map((day, index) => {
        //map over clicked obj to add clicked class
        if(clickedObj.length === 1){
            firstOnPage = firstCalendarDate <= clickedObj[0].date && clickedObj[0].date <= lastCalendarDate
            lastOnPage = false
        }else if(clickedObj.length === 2){
            firstOnPage = firstCalendarDate <= clickedObj[0].date && clickedObj[0].date <= lastCalendarDate
            lastOnPage = firstCalendarDate <= clickedObj[1].date && clickedObj[1].date <= lastCalendarDate
        }
        if(lastOnPage && firstOnPage){
            isClicked = index >= clickedObj[0].index && index <= clickedObj[1].index;
        }else if(lastOnPage && !firstOnPage){
            isClicked = index <= clickedObj[1].index;
        }else if(firstOnPage && clickedObj.length === 2){
            isClicked = index >= clickedObj[0].index;
        }else if(firstOnPage && clickedObj.length === 1){
            isClicked = index === clickedObj[0].index;
        }else{
            isClicked = false;
        }
            //// both and between = clicked
            //// first on, last off and last exists = highlight to end of calendar
            //// first on, last off and last doesn't exists = highlight only first day clicked
            //// first off, last on = highlight to start of calendar
            //// first off, last doesn't exist = highlight nothing
        if(index < firstDayIndex){
            return <CalendarDaysItem
                        className={isClicked ? `${styles.clicked} ${prevClassName}` : prevClassName} 
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
                                className={`${currentClassName} ${styles.today}`}
                                index={index} 
                                onClick={selectDatesHandler}
                                key={index}>
                                {day}</CalendarDaysItem>   
            }else{
                return <CalendarDaysItem onClick={selectDatesHandler}
                            className={isClicked ? `${styles.clicked} ${currentClassName}` : currentClassName}
                            index={index}
                            key={index}>
                            {day}</CalendarDaysItem>   
            }
        }else if(index >= lastDayIndex){
            return <CalendarDaysItem
                        className={isClicked ? `${styles.clicked} ${nextClassName}` : nextClassName}
                        index={index}
                        onClick={selectDatesHandler}
                        key={index}>
                        {day}</CalendarDaysItem>    
        }
    })
    
    return ( <ul className={styles.days}>
            {days}
        </ul> );
}
 
export default CalendarDaysList;