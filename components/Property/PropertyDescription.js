import { useState } from "react";
import PropertyText from "./PropertyText";
import PropertyImages from "./PropertyImages";

import styles from "../../styles/PropertyDescription.module.css";


const PropertyDescription = () => {
    const [ moreTextShown, setMoreTextShown ] = useState(false);
    // const [ showButton, setShowButton ] = useState(true);

    const showMoreTextHandler = () => {
        setMoreTextShown(true)
    }

    const showLessTextHandler = () => {
        setMoreTextShown(false)
    }
    
    return ( 
        <section  className={styles.propertySection}>
            <PropertyText 
                state={moreTextShown} 
                moreText={showMoreTextHandler} 
                lessText={showLessTextHandler} 
            />
            <PropertyImages />
        </section>
         );
}
 
export default PropertyDescription;