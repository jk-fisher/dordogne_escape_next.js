import { useState, useEffect } from 'react';

export default () => {

    const today = new Date();
    const [ myDate, setMyDate ] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [ visibleDates, setVisibleDates ] = useState([])
    
    const [ lastDate, setLastDate ] = useState(null);
    const [ firstDayIndex, setFirstDayIndex ] = useState(null);
    const [ lastDayIndex, setLastDayIndex ] = useState(null);

    const [ nextMonthDays, setNextMonthDays ] = useState(null);
    const [ prevLastDate, setPrevLastDate ] = useState(null);
    
    const [ selectedDateCounter, setSelectedDateCounter ] = useState(0);
    const [ clickedDates, setClickedDates ] = useState([]);
    const [ clickedObj, setClickedObj ] = useState([]);

    const [firstCalendarDate, setFirstCalendarDate] = useState(null);
    const [lastCalendarDate, setLastCalendarDate] = useState(null);

    const [prevMonthArrowVisible, setPrevMonthArrowVisible ] = useState(false);
    const [prevYearArrowVisible, setPrevYearArrowVisible ] = useState(false);

    useEffect(() => {
        renderCalendarHandler();
        
        console.log('renderCalendar()')
    }, [myDate]);


    useEffect(() => {
        if(selectedDateCounter === 1){
            console.log('counter = 1', selectedDateCounter, clickedDates);
            
            //if second date selected is after the first
        }else if(selectedDateCounter === 2){
            console.log('counter = 2', selectedDateCounter, clickedDates);
            
            //if second date selected is before the first
        } else if(selectedDateCounter === 3){
            setSelectedDateCounter(1);
            console.log('set counter back to 1', selectedDateCounter, clickedDates)
        } 
        const clickedObj = clickedDates.map((date) => {
            return {date: date,
                    index: findIndexofDay(date)};
        });
        setClickedObj(clickedObj)
    }, [selectedDateCounter]);

    const findIndexofDay = (dateObject) => {
        const date = dateObject.getDate();
        const month = dateObject.getMonth();
        console.log(dateObject, date, month, myDate)
        if(month === myDate.getMonth()-1){
            console.log('from prev month', firstDayIndex, prevLastDate, date)
            const prevLastDayIndex = firstDayIndex - 1;
            const counterIndex = prevLastDate - date;
            return prevLastDayIndex - counterIndex;
        } else if (month === myDate.getMonth()+1){
            console.log('from next month', date, lastDate, firstDayIndex)
            return date + lastDate + (firstDayIndex -1);
        } else if(month === myDate.getMonth()){
            console.log('from this month', date, firstDayIndex)
            return date + (firstDayIndex -1)
        };

    };

    const createDateObjectHandler = (indexOfDay) => {
        let dayOfMonth = (parseInt(indexOfDay) + 1) - firstDayIndex;
        let month = myDate.getMonth();
        let year = myDate.getFullYear();
        if(dayOfMonth > lastDate){
            month++;
            dayOfMonth = dayOfMonth - lastDate;
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
        console.log(typeof(indexOfDay), dateObject)
        return dateObject;
    };

    const selectDatesHandler = (e) => {
        const newDateObject = createDateObjectHandler(e.currentTarget.dataset.id);
        setSelectedDateCounter(selectedDateCounter + 1);
        if(clickedDates.length > 1 || newDateObject < clickedDates[0] ){
            setClickedDates([newDateObject]);
        } else {
            setClickedDates([...clickedDates, newDateObject]);
        }        
    }
    
    // const highlightDaysHandler = (e) => {
    //     // console.log(e, 'dateClicked')
        
    // }
    



    const renderCalendarHandler = () => {
        
        const lastDate = new Date(
            myDate.getFullYear(),
            myDate.getMonth() + 1,
            0
            ).getDate();
        setLastDate(lastDate)
        
        const prevLastDate = new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            0
        ).getDate();
        setPrevLastDate(prevLastDate)
        

        const firstDayIndex = myDate.getDay();
        setFirstDayIndex(firstDayIndex)
        console.log('firstdayindex', firstDayIndex)    
        
        
        const lastWeekdayIndex = new Date(
            myDate.getFullYear(),
            myDate.getMonth() + 1,
            0
            ).getDay();
            
        const nextMonthDays = (7 - lastWeekdayIndex) - 1;
        setNextMonthDays(nextMonthDays)
        
        
        // display prev month days 
        firstDayIndex ++;
        const prevDaysIndex = [...Array(firstDayIndex -1).keys()]; 
        const prevMonthDates = prevDaysIndex.reverse().map((dayIndex) => {
            return prevLastDate - dayIndex;
        })


        // display this month days
        const thisMonthDaysIndex = [...Array(lastDate).keys()];
        const thisMonthDates = thisMonthDaysIndex.map((dayIndex) => {
            return dayIndex + 1 
        })
        
        // display next month days
        const nextMonthIndex = [...Array(nextMonthDays).keys()];
        const nextMonthDates = nextMonthIndex.map((dayIndex) => {
            return dayIndex + 1
        })
        
        //set first date on the calendar
        if(prevDaysIndex.length === 0) {
            const firstCalendarDate = myDate;
            setFirstCalendarDate(firstCalendarDate)
        } else if(prevDaysIndex.length > 0){
            const firstCalendarDate = new Date(
                myDate.getFullYear(),
                myDate.getMonth() - 1,
                prevLastDate - (firstDayIndex - 2))
                setFirstCalendarDate(firstCalendarDate)
        };

        //set the last date on the calendar
        if(nextMonthIndex.length === 0 ){
            const lastCalendarDate = lastDate;
            setLastCalendarDate(lastCalendarDate)
        }else if(nextMonthIndex.length > 0){
            const lastCalendarDate = new Date(
                myDate.getFullYear(),
                myDate.getMonth() + 1,
                nextMonthDates.length)
            setLastCalendarDate(lastCalendarDate)
        } 


        const lastDayIndex = lastDate + (firstDayIndex - 1);
        setLastDayIndex(lastDayIndex);
        const visibleDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
        setVisibleDates(visibleDates);
    

        // highlightDaysHandler();

        //hide and show arrow icons
        if(myDate.getFullYear() <= new Date().getFullYear() &&
        myDate.getMonth() <= new Date().getMonth()){
            setPrevMonthArrowVisible(false);
            setPrevYearArrowVisible(false);
            
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
        const newMonth = myDate.getMonth()+1;
        const newDate = new Date(myDate.getFullYear(), newMonth, myDate.getDate())
        setMyDate(newDate);
    }
    const nextYearHandler = () => {
        const newYear = myDate.getFullYear()+1;
        const newDate = new Date(newYear, myDate.getMonth(), myDate.getDate())
        setMyDate(newDate);
    }
    const prevMonthHandler = () => {
        const newMonth = myDate.getMonth()-1;
        const newDate = new Date(myDate.getFullYear(), newMonth, myDate.getDate())
        setMyDate(newDate);
    }
    const prevYearHandler = () => {
        const newYear = myDate.getFullYear()-1;
        const newDate = new Date(newYear, myDate.getMonth(), myDate.getDate())
        setMyDate(newDate);
    }
    
    return { myDate,
        visibleDates, 
        renderCalendarHandler, 
        // highlightDaysHandler, 
        firstDayIndex, 
        lastDayIndex, 
        prevMonthArrowVisible, 
        prevYearArrowVisible, 
        nextMonthHandler, 
        prevMonthHandler, 
        nextYearHandler, 
        prevYearHandler,
        selectDatesHandler, 
        clickedObj,
        firstCalendarDate,
        lastCalendarDate,
        createDateObjectHandler,
        findIndexofDay,
        setFirstDayIndex,
        setLastDate, 
        setPrevLastDate
        
         }
}