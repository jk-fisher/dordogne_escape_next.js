import React from "react";

const CalendarContext = React.createContext({
    myDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1), 
    nextMonthHandler: () => {}
    // visibleDates: []
}); 

export default CalendarContext;