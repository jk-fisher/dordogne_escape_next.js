import { useState } from 'react';

export default () => {
    const date = new Date();
    const d = new Date(date.getFullYear(), date.getMonth(), 1)
    const [ myDate, setMyDate ] = useState(d);
    const [ visibleDates, setVisibleDates ] = useState([])

    const [ lastDate, setLastDate ] = useState(null);
    const [ firstDayIndex, setFirstDayIndex ] = useState(null);
    const [ lastDayIndex, setLastDayIndex ] = useState(null);

    const [ clicked, setClicked ] = useState(null);
    const [ clickedRange, setClickedRange ] = useState(null);
;
    const [ nextMonthDays, setNextMonthDays ] = useState(null);
    const [ prevLastDate, setPrevLastDate ] = useState(null);
    let [ selectedDateCounter, setSelectedDateCounter ] = useState(0);
    let [ firstDateSelected, setFirstDateSelected ] = useState(null);
    let [ secondDateSelected, setSecondDateSelected ] = useState(null);
    let [ firstIndexSelected, setFirstIndexSelected ] = useState(null);
    let [ secondIndexSelected, setSecondIndexSelected ] = useState(null);

    const [prevMonthArrowVisible, setPrevMonthArrowVisible ] = useState(true);
    const [prevYearArrowVisible, setPrevYearArrowVisible ] = useState(false);


    const findIndexofDay = (dateObject) => {
        const myDate = dateObject.getDate();
        const month = dateObject.getMonth();
        if(month === myDate.getMonth()-1){
            const prevLastDayIndex = firstDayIndex - 1;
            const counterIndex = prevLastDate - myDate;
            return prevLastDayIndex - counterIndex;
        } else if (month === myDate.getMonth()+1){
            return myDate + lastDate + (firstDayIndex -1);
        } else if(month === myDate.getMonth()){
            return myDate + (firstDayIndex -1)
        };

    };

    const createDateObjectHandler = (indexOfDay) => {
        let dayOfMonth = (indexOfDay + 1) - firstDayIndex;
        let month = myDate.getMonth();
        let year = myDate.getFullYear();
        if(dayOfMonth > lastDate){
            month++;
            dayOfMonth = dayOfMonth - (lastDate); 
            if(month > 11){
                year++
                month = month - 12
            };
        }else if(dayOfMonth < 1){
            month--;
            dayOfMonth = prevLastDate + dayOfMonth; 
            if(month < 0){
                year--
                month = month + 12
            };
        };
        const dateObject = new Date(year, month, dayOfMonth);
        return dateObject;
    };

    const selectDaysHandler = (dateId) => {
        setSelectedDateCounter(selectedDateCounter++);
        const newDateObject = createDateObjectHandler(dateId);
        if(selectedDateCounter === 1 && !firstDateSelected){
            setFirstDateSelected(newDateObject);
            setFirstIndexSelected(dateId);
        }else if(selectedDateCounter === 2 && firstDateSelected < newDateObject){
            setSecondDateSelected(newDateObject);
            setSecondIndexSelected(dateId);
            // renderUIDates();
        } else {
            setFirstDateSelected(newDateObject);
            setFirstIndexSelected(dateId);
            setSecondDateSelected(null);
            setSecondIndexSelected(null);
            setSelectedDateCounter(1);
            //setClicked + clickedRange to null 
        }
        highlightDaysHandler();
    }

    const highlightDaysHandler = (e) => {
        console.log(e, 'dateClicked')
        
    }
    
    const renderCalendarHandler = () => {

    console.log('rendercalendarrun', myDate)
        
        const lastDate = new Date(
            myDate.getFullYear(),
            myDate.getMonth() + 1,
            0
            ).getDate();
        setLastDate(lastDate)
        // console.log(lastDate)
        
        const prevLastDate = new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            0
        ).getDate();
        setPrevLastDate(prevLastDate)
        // console.log(prevLastDate)
        

        const firstDayIndex = myDate.getDay();
        setFirstDayIndex(firstDayIndex)
        // console.log('firstdayindex', firstDayIndex)

        const lastWeekdayIndex = new Date(
            myDate.getFullYear(),
            myDate.getMonth() + 1,
            0
        ).getDay();
    
        const nextMonthDays = (7 - lastWeekdayIndex) - 1;
        setNextMonthDays(nextMonthDays)
        // console.log(nextMonthDays)

        
        
        // display prev month days 
        firstDayIndex ++;
        const prevdaysIndex = [...Array(firstDayIndex -1).keys()]; 
        // console.log(prevdaysIndex)
        const prevMonthDates = prevdaysIndex.reverse().map((dayIndex) => {
            // console.log('prevmonthdates', prevLastDate - dayIndex)
            return prevLastDate - dayIndex;
        })

        // display this month days
        const thisMonthDaysIndex = [...Array(lastDate).keys()];
        const thisMonthDates = thisMonthDaysIndex.map((dayIndex) => {
            return dayIndex + 1 
        })

        // display next month days
        const nextMonthIndex = [...Array(nextMonthDays).keys()];
        // console.log('nxtMonthDays', nextMonthIndex)
        const nextMonthDates = nextMonthIndex.map((dayIndex) => {
            return dayIndex + 1
        })

        const lastDayIndex = lastDate + (firstDayIndex - 1);
        // console.log(lastDayIndex, lastDate)
        setLastDayIndex(lastDayIndex);
        const visibleDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
        setVisibleDates(visibleDates);
        console.log(visibleDates)
        highlightDaysHandler();

        // console.log('arrows', prevMonthArrowVisible, prevYearArrowVisible)
        //hide and show arrow icons
        if(myDate.getFullYear() <= new Date().getFullYear() &&
        myDate.getMonth() <= new Date().getMonth()){
            setPrevMonthArrowVisible(false);
            
        } else if (myDate.getFullYear() <= new Date().getFullYear()){
            setPrevYearArrowVisible(false)
        };
        
        if(myDate.getFullYear() >= new Date().getFullYear() &&
        myDate.getMonth() >= new Date().getMonth()+1) {
            setPrevMonthArrowVisible(true)
            
        };
        if (myDate.getFullYear() > new Date().getFullYear()){
            setPrevMonthArrowVisible(true);
            setPrevYearArrowVisible(true)
            
        };
    } 
    const nextMonthHandler = () => {
        // console.log('mydate', myDate, myDate.getMonth())
        const newMonth = myDate.getMonth()+1;
        // console.log('newMonth', newMonth)
        const newDate = new Date(myDate.getFullYear(), newMonth, myDate.getDate())
        setMyDate(newDate);
        // console.log('newDate', newDate)
        renderCalendarHandler()
    }
    // const nextYearHandler = () => {
    //     const newYear = myDate.getFullYear()+1
    //     setMyDate(new Date(newYear, myDate.getMonth(), myDate.getDate()))
    //     console.log(myDate)
    //     renderCalendarHandler()
    // }
    // const prevMonthHandler = () => {
    //     const newMonth = myDate.getMonth()-1
    //     setMyDate(new Date(myDate.getFullYear(), newMonth, myDate.getDate()))
    //     renderCalendarHandler()
    // }
    // const prevYearHandler = () => {
    //     const newYear = myDate.setFullYear(myDate.getFullYear()-1)
    //     setMyDate(new Date(newYear, myDate.getMonth(), myDate.getDate()))
    //     renderCalendarHandler()
    // }
    
    return { myDate,
        renderCalendarHandler, 
        highlightDaysHandler, 
        // nextMonthHandler,
        // nextYearHandler,
        // prevMonthHandler,
        // prevYearHandler,
        visibleDates, 
        firstDayIndex, 
        lastDayIndex, 
        prevMonthArrowVisible, 
        prevYearArrowVisible, 
        nextMonthHandler
         }
}