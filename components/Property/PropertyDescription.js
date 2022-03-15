import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "../../styles/PropertyDescription.module.css"
const PropertyDescription = () => {
    const [ moreTextShown, setMoreTextShown ] = useState(false);
    
    const showMoreTextHandler = () => {
        setMoreTextShown(true)
    }

    const showLessTextHandler = () => {
        setMoreTextShown(false)
    }


    return ( 
    <div className={styles.text}>
        <h3>Property Description</h3>
        <p>We have restored an ancient bread oven on our little farm to make a cosy retreat in a quiet corner of the Dordogne. The kitchen and bathroom combine modern fittings with ancient beams and stonework while the comfortable sitting room features a log burning stove and the original paddle for the old bread oven, found when we started the renovation work.
        It is an ideal base for an active holiday (many options nearby) but the nightlife consists of sharing the stars with the owls and a bottle of wine.<span id="dots">..</span>
        </p>
        <br /><br />
        {moreTextShown ? 
            <div>
                <p><br />
                We welcome visitors to our little farm. The chickens and sheep will greet you in the mornings and you can have fresh laid eggs for breakfast with jam from our own fruit trees and, in season, produce from the garden.
                If you fancy relaxing by a tranquil lake we have a millpond just two kilometres away. Plenty of fish if you bring your rod, (or borrow one of ours) or just somewhere shady to read a book on a sunny day.
                </p>
                <br /><br /><br />
                <p>
                You have your own access to the cottage with space to park your car just outside, so you can come and go as you choose. We have room for a motor home or caravan on a flat field given advanced notice. There is a little garden for a spot of sunbathing, or a hammock in the woods where you can relax in real rural tranquility.
                If you enjoy fishing we have our own lake two km from the cottage, really good for family friendly fishing.
                </p>
                <br /><br /><br />
                <p>
                Please note...this is not a good holiday for anyone keen on discos and nightlife, or who is irritated by birdsong and farmyard noises!
                </p>
                <button onClick={showLessTextHandler}>
                    Read Less 
                    <FaAngleUp />
                </button>
            </div> :
                <button className={styles.textButton} onClick={showMoreTextHandler}>
                    Read More
                    <FaAngleDown />
                </button>}
</div> );
}
 
export default PropertyDescription;