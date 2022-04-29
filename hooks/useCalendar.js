import { useState } from 'react';

export default () => {
    const [ date, setdate ] = useState(new Date());
    const [ visibleDates, setVisibleDates ] = useState([])

    const [ lastDate, setLastDate ] = useState(null);
    const [ firstDayIndex, setFirstDayIndex ] = useState(null);
    const [ lastDayIndex, setLastDayIndex ] = useState(null);


    const [ nextMonthDays, setNextMonthDays ] = useState(null);
    const [ prevLastDate, setPrevLastDate ] = useState(null);
    const [ selectedDateCounter, setSelectedDateCounter ] = useState(0);
    const [ firstDateSelected, setFirstDateSelected ] = useState(null);
    const [ secondDateSelected, setSecondDateSelected ] = useState(null);
    const [ firstIndexSelected, setFirstIndexSelected ] = useState(null);
    const [ secondIndexSelected, setSecondIndexSelected ] = useState(null);

    const renderCalendarHandler = () => {


        // console.log('calendarHandlerRendered');
        setdate(new Date());
        // console.log('today date', date)
        
        
        const lastDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
            ).getDate();
        setLastDate(lastDate)
        // console.log('set lastdte', lastDate)
        
        const prevLastDate = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        setPrevLastDate(prevLastDate)
        // console.log(prevLastDate)
        

        const firstDayIndex = date.getDay();
        setFirstDayIndex(firstDayIndex)
            // console.log('firstDayIndex', firstDayIndex)

        const lastWeekdayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        // console.log('lastdayindex', lastDayIndex)
    
        const nextMonthDays = (7 - lastWeekdayIndex) - 1;
        setNextMonthDays(nextMonthDays)
        // console.log(nextMonthDays, 'nextmonth')

        
        
        // prev month days 
        const prevdaysIndex = [...Array(firstDayIndex - 1).keys()]; 
        const prevMonthDates = prevdaysIndex.reverse().map((dayIndex) => {
            // console.log('daysIndex', prevdaysIndex, firstDayIndex)
            return prevLastDate - dayIndex;
        })

        // this month days
        const thisMonthDaysIndex = [...Array(lastDate).keys()];
        const thisMonthDates = thisMonthDaysIndex.map((dayIndex) => {
            return dayIndex + 1 
        })

        //next month days
        const nextMonthIndex = [...Array(nextMonthDays + 1).keys()];
        // console.log('nextMonthIndex', nextMonthIndex, nextMonthDays)
        const nextMonthDates = nextMonthIndex.map((dayIndex) => {
            return dayIndex + 1
        })
        // console.log('nextmonthdays', nextMonthDates)

        const lastDayIndex = lastDate + (firstDayIndex - 1);
        setLastDayIndex(lastDayIndex);
        const visibleDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
        setVisibleDates(visibleDates);
    } 
    
    return { date, renderCalendarHandler, visibleDates, firstDayIndex, lastDayIndex }
}