import Button from "../UI/Button";

import Link from "next/link";
import Image from "next/image";
import waterTower from "../../public/img_37.jpg";
import styles from "../../styles/Location.module.css"

const Location = () => {
    return ( <section className={styles.container}>
                    <div data-aos="fade-up" className={styles.textWrapper}>
                        <h2>Location</h2><br />
                        <div className={styles.address}>Payzac, Aquitaine-Limousin-Poitou-Charentes, France.</div>
                        <Link href="https://www.google.com/maps/place/24270+Payzac,+France/@45.4199706,1.1590152,12z/data=!3m1!4b1!4m5!3m4!1s0x47ff32cb5d8b3ba3:0x406651748180060!8m2!3d45.400129!4d1.2185729" target="_blank" rel="noreferrer noopener" passHref>
                            <Button className={styles.mapBtn}>View On Map</Button>
                        </Link>
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