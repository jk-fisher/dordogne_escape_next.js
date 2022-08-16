import Button from "../UI/Button";

import Image from "next/image";
import waterTower from "../../public/img_37.jpg";
import styles from "../../styles/Location.module.css"

const Location = () => {
    return ( <section className={styles.container} id="location">
                    <div data-aos="fade-up" className={styles.textWrapper}>
                        <h2>Location</h2><br />
                        <div className={styles.address}>Payzac, Aquitaine-Limousin-Poitou-Charentes, France.</div>
                            <Button className={styles.mapBtn}>View On Map</Button>
                        <div className={styles.details}>
                            <p>
                                Our neighbourhood is a friendly farming community, where people still have time to stop and talk. Visiting le petit cottage is like stepping back fifty years in time to when life was kinder to us all.
                            </p>
                            <h3>Getting around</h3>
                            <p>
                                Unfortunately there is no public transport passing through the village so you will need your own transport
                            </p>
                            <h3>How To Find Us</h3>
                            <p>
                                Due to our remote, rural location, people often struggle to find us as our address will not show up on google maps - excellent if you want a secluded holiday off the grid! Please travel to Saint-Mesmin, look out for the beautifully painted water tower and we will come to meet you.  
                            </p>
                        </div>       
                        </div>
                    <div className={styles.imageWrapper}>
                        <Image 
                            className={styles.image}
                            src={waterTower} 
                            alt="Savignac Ledrier Watertower" 
                            layout="responsive"
                            width={992}
                            height={779}
                            />    
                    </div>
                </section> );
}
 
export default Location;