import { useState, useEffect } from 'react';

export default () => {
    const [ myTest, setMyTest ] = useState(true);

    const today = new Date();
    const [ myDate, setMyDate ] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [ visibleDates, setVisibleDates ] = useState([])
    
    const [ lastDate, setLastDate ] = useState(null);
    const [ firstDayIndex, setFirstDayIndex ] = useState(null);
    const [ lastDayIndex, setLastDayIndex ] = useState(null);

    ;
    const [ nextMonthDays, setNextMonthDays ] = useState(null);
    const [ prevLastDate, setPrevLastDate ] = useState(null);
    
    let [ selectedDateCounter, setSelectedDateCounter ] = useState(0);
    const [ clickedDates, setClickedDates ] = useState([]);
    const [ dateID, setDateID ] = useState([]);
    // let [ firstDateSelected, setFirstDateSelected ] = useState(null);
    // let [ secondDateSelected, setSecondDateSelected ] = useState(null);
    // let [ firstIndexSelected, setFirstIndexSelected ] = useState(null);
    // let [ secondIndexSelected, setSecondIndexSelected ] = useState(null);

    const [prevMonthArrowVisible, setPrevMonthArrowVisible ] = useState(false);
    const [prevYearArrowVisible, setPrevYearArrowVisible ] = useState(false);

    useEffect(() => {
        renderCalendarHandler();
        console.log('useCalendar useEffect ran')
    }, [myDate]);


    useEffect(() => {
        console.log('useEffect counter ran', selectedDateCounter, dateID);
        if(selectedDateCounter === 1){
            // setClickedDates([...clickedDates, newDateObject]);
            console.log('counter = 1', selectedDateCounter, clickedDates);
            
            //if second date selected is after the first
        }else if(selectedDateCounter === 2){
            // setClickedDates([...clickedDates, newDateObject]);
            console.log('counter = 2', selectedDateCounter, clickedDates);
            
            //if second date selected is before the first
        } else if(selectedDateCounter === 3){
            setSelectedDateCounter(1);
            console.log('set counter back to 1', selectedDateCounter, clickedDates)
            // setClickedDates([...clickedDates, newDateObject]);
            // setClicked + clickedRange to null
        } 
    }, [selectedDateCounter]);

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
        return dateObject;
    };

    const selectDatesHandler = (e) => {
        const newDateObject = createDateObjectHandler(e.currentTarget.dataset.id);

        setSelectedDateCounter(selectedDateCounter + 1);
        setClickedDates([...clickedDates, newDateObject]);
        // select the first date
        
    }
    
    const highlightDaysHandler = (e) => {
        // console.log(e, 'dateClicked')
        
    }
    



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

        const lastWeekdayIndex = new Date(
            myDate.getFullYear(),
            myDate.getMonth() + 1,
            0
        ).getDay();
    
        const nextMonthDays = (7 - lastWeekdayIndex) - 1;
        setNextMonthDays(nextMonthDays)

        
        // display prev month days 
        firstDayIndex ++;
        const prevdaysIndex = [...Array(firstDayIndex -1).keys()]; 
        const prevMonthDates = prevdaysIndex.reverse().map((dayIndex) => {
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

        const lastDayIndex = lastDate + (firstDayIndex - 1);
        setLastDayIndex(lastDayIndex);
        const visibleDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
        setVisibleDates(visibleDates);
        highlightDaysHandler();

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
        highlightDaysHandler, 
        firstDayIndex, 
        lastDayIndex, 
        prevMonthArrowVisible, 
        prevYearArrowVisible, 
        nextMonthHandler, 
        prevMonthHandler, 
        nextYearHandler, 
        prevYearHandler,
        selectDatesHandler, 
        // firstDateSelected, 
        // secondDateSelected
         }
}