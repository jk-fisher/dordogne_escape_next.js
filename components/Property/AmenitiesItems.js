import styles from "../../styles/Amenities.module.css"

const AmenitiesItems = () => {
    return (
        <div className={styles.content}>
                    <div className={styles.col}>
                        <ul>
                            <li>Wifi</li>
                            <li>Indoor fireplace</li>
                            <li>Washing Machine</li>
                            <li>TV</li>
                            <li>Iron</li>
                            <li>Essentials - including towels, bed sheets, soap and toilet paper</li>
                            <li>Heating</li>
                            <li>Hot water</li>
                        </ul>
                        <ul><br />
                            <li className={styles.bold}>Facilities</li>
                            <li>Free parking on premises</li>
                            <li>Pool</li>
                            <li>Free on-street parking</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <ul>
                            <li className={styles.bold}>Dining</li>
                            <li>Kitchen space where guests can cook their own meals</li>
                            <li>Cooking basics - including Pots, pans, oil, salt & pepper</li>
                            <li>Coffee maker</li>
                            <li>Microwave</li>
                            <li>Stove</li>
                            <li>Dishes silverwear</li>
                            <li>Oven</li>
                            <li>Refrigerator</li>
                            <li>Dishwasher</li>
                        </ul>
                        <ul><br />
                            <li className={styles.bold}>Family features</li>
                            <li>Childrens tableware/High Chair</li>
                            <li>Travel cot</li>
                            <li>Bath</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <ul>
                            <li className={styles.bold}>Guest Access</li>
                            <li>Private entrance</li>
                            <li>Greeted upon arrival</li><br />
                            <li><b>Logistics</b></li>
                            <li>Luggage drop off for guests convenience if arriving early or departing late</li><br />
                            <li className={styles.bold}>Bed and bath</li>
                            <li>Shampoo</li>
                            <li>Hair dryer</li>
                            <li>Hangers</li>
                            <li>Shower Gel</li>
                            <li>Extra pillows/blankets</li>
                            <li>Bed linen</li><br />
                            <li className={styles.bold}>Outdoor</li>
                            <li>Garden/backyard</li>
                            <li>BBQ grill</li><br />
                            <li className={styles.bold}>Location</li>
                            <li>Private lake access</li><br />
                            <li className={styles.bold}>Safety features</li>
                            <li>Smoke alarm</li>
                            <li>Carbon monoxide alarm</li>
                            <li>Fire extinguisher</li>
                            <li>First aid kit</li>
                        </ul>
                    </div>
              </div>
    );
}
 
export default AmenitiesItems;