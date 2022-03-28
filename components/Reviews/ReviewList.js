
const ReviewList = (props) => {
    return ( <ul className={styles.list}>
        {props.data.map(({ id, date, title }) => (
            <li key={id} className={styles.listItem}>
                {title}
                <br />
                {date}
                <br />
            </li>
        ))}
    </ul> );
}
 
export default ReviewList;