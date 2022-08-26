import React from "react";

const CalendarContext = React.createContext({
    myDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1), 
    nextMonthHandler: () => {},
    nextYearHandler: () => {},
    prevMonthHandler: () => {},
    prevYearHandler: () => {},
    visibleDates: [],
    firstDayIndex: null,
    lastDayIndex: null,
    prevMonthArrowVisible: false,
    prevYearArrowVisible: false,
    firstDateSelected: null,
    secondDateSelected: null,
    selectedDateCounter: 0,
    clickedObj: null
}); 

export default CalendarContext;