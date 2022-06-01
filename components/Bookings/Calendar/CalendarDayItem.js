
const CalendarDaysItem = (props) => {
    // console.log('list item rendered')
    return ( <li 
        className={props.className} onClick={props.onClick} data-id={props.index}
        >
            {props.children}</li> );
}
 
export default CalendarDaysItem;