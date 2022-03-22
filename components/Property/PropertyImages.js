import { Fragment } from "react";
import Image from "next/image";

import kitchen from "../../public/img_05.jpg";
import bedroom from "../../public/img_07.jpg";
import livingRoom from "../../public/img_00.jpg";
import bathroom from "../../public/img_08.jpg";

import styles from "../../styles/PropertyImages.module.css"

const PropertyImages = () => {
    return ( 
        <Fragment>

        <div className={styles.imgContainer}>
            <Image 
                className={styles.lg} 
                src={kitchen} 
                alt="Le Petit Cottage - Kitchen area" 
                layout="responsive"
                width={1905}
                height={1425}
                
                />
            
        </div>
        <div className={styles.imgGrid}>
            <Image 
                className={styles.gridItem} 
                src={bedroom} 
                alt="The bedroom in Le Petit Cottage" 
                layout="responsive"
                width={1905}
                height={1425}
                />
            <Image 
                className={styles.gridItem} 
                src={livingRoom} 
                alt="The livingroom in Le Petit Cottage" 
                layout="responsive"
                width={4618}
                height={3464}
                />
            <Image 
                className={styles.gridItem} 
                src={bathroom} 
                alt="The bathroom in Le Petit Cottage"
                layout="responsive"
                width={1280}
                height={960}
                />
        </div> 
        </Fragment>
    );
}
 
export default PropertyImages;