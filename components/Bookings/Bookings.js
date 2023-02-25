import styles from "../../styles/Bookings.module.css";
import useCalendar from "../../hooks/useCalendar";
import CalendarContext from "../../store/calendar-context";

import Calendar from "./Calendar/Calendar";
import PriceInfo from "./PriceInfo";

const Bookings = () => {
  // const { myTest } = useCalendar();
  const {
    myDate,
    nextMonthHandler,
    nextYearHandler,
    prevMonthHandler,
    prevYearHandler,
    prevMonthArrowVisible,
    prevYearArrowVisible,
    visibleDates,
    firstDayIndex,
    lastDayIndex,
    selectDatesHandler,
    setClickedObj,
    firstCalendarDate,
    lastCalendarDate,
    createDateObjectHandler,
    findIndexofDay,
    setFirstDayIndex,
    setLastDate,
    setPrevLastDate,
    clickedObj,
  } = useCalendar();

  return (
    <section className={styles.bookingsWrapper}>
      <CalendarContext.Provider
        value={{
          myDate,
          nextMonthHandler,
          nextYearHandler,
          prevMonthHandler,
          prevYearHandler,
          prevMonthArrowVisible,
          prevYearArrowVisible,
          visibleDates,
          firstDayIndex,
          lastDayIndex,
          selectDatesHandler,
          setClickedObj,
          firstCalendarDate,
          lastCalendarDate,
          createDateObjectHandler,
          findIndexofDay,
          setFirstDayIndex,
          setLastDate,
          setPrevLastDate,
          clickedObj,
        }}
      >
        <Calendar />
        <PriceInfo />
      </CalendarContext.Provider>
    </section>
  );
};

export default Bookings;
