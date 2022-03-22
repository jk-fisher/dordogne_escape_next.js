import { useRef } from 'react';
import styles from "../../styles/PropertyText.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const PropertyText = (props) => {
    const moreBtn = useRef(null);
    const lessBtn = useRef(null);

    return ( 
        <div data-aos="fade-up" className={styles.text}>
                <h3>About The Cottage</h3>
                <p>We have restored an ancient bread oven on our little farm to make a cosy retreat in a quiet corner of the Dordogne. The kitchen and bathroom combine modern fittings with ancient beams and stonework while the comfortable sitting room features a log burning stove and the original paddle for the old bread oven, found when we started the renovation work.
                It is an ideal base for an active holiday (many options nearby) but the nightlife consists of sharing the stars with the owls and a bottle of wine.<span id="dots">..</span>
                </p>
                
                    <CSSTransition
                        nodeRef={moreBtn}
                        in={!props.state}
                        timeout={{
                            enter: 1000,
                            exit: 200
                        }}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                            enterActive: styles["fadeBtn-enter-active"],
                            exitActive: styles["fadeBtn-exit-active"]
                        }}
                    >
                        <div ref={moreBtn}>
                            <button className={styles.textButton} onClick={props.moreText}>
                            Read More
                            <FaAngleDown className={styles.icon} />
                            </button>
                        </div>
                    
                    </CSSTransition>

                    <CSSTransition
                        nodeRef={lessBtn}
                        in={props.state}
                        timeout={{
                            enter: 1000,
                            exit: 1000
                        }}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                            enterActive: styles["fade-enter-active"],
                            exitActive: styles["fade-exit-active"]
                        }}>
                        <div ref={lessBtn} className={styles.text}>
                            <p>
                            We welcome visitors to our little farm. The chickens and sheep will greet you in the mornings and you can have fresh laid eggs for breakfast with jam from our own fruit trees and, in season, produce from the garden.
                            If you fancy relaxing by a tranquil lake we have a millpond just two kilometres away. Plenty of fish if you bring your rod, (or borrow one of ours) or just somewhere shady to read a book on a sunny day.
                            </p>
                            <br />
                            <p>
                            You have your own access to the cottage with space to park your car just outside, so you can come and go as you choose. We have room for a motor home or caravan on a flat field given advanced notice. There is a little garden for a spot of sunbathing, or a hammock in the woods where you can relax in real rural tranquility.
                            If you enjoy fishing we have our own lake two km from the cottage, really good for family friendly fishing.
                            </p>
                            <br />
                            <p>
                            Please note...this is not a good holiday for anyone keen on discos and nightlife, or who is irritated by birdsong and farmyard noises!
                            </p>
                            <button className={styles.textButton} onClick={props.lessText}>
                                Read Less 
                                <FaAngleUp className={styles.icon}/>
                            </button>
                        </div>
                    </CSSTransition> 
                    
            </div>
     );
}
 
export default PropertyText;