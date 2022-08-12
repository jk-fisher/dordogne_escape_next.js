import { useContext } from "react";
import styles from "../../styles/PriceInfo.module.css";
import Button from "../UI/Button";
import CalendarContext from "../../store/calendar-context";

const PriceInfo = () => {
    const { UIDates, firstDateSelected, secondDateSelected } = useContext(CalendarContext);

    
    console.log('price Info', UIDates)
    return ( <div className={styles.priceContainer}>
        <div className={styles.dateEnquiry}>
            <div className={styles.header}>
                <h4 className={styles.white}><span className={styles.sm}>Prices from</span><br /> £48/night</h4> <br /><br />
            </div>
            {UIDates ?
            <div>
                <p>{`${firstDateSelected} - ${secondDateSelected}`}</p>
            </div> 
            :<div className={styles.priceFiller}>
                <div className={styles.info}> 10% OFF<br />on weekly bookings</div> <br /> 
                <div className={styles.info}>Select your dates on the calender to check availability.</div> 
            </div>}
        </div> 
        <div className={styles.priceSummary}>
            <ul className={styles.priceBreakdown}></ul>
            <Button className={styles.bookBtn}>Request to book</Button>
        </div>
    </div> );
}
 
export default PriceInfo;