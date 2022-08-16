import styles from '../../styles/ArrowIcon.module.css'
import { motion } from "framer-motion"

const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity,
        ease: "easeOut"
    }
}
const ArrowIcon = () => {
    return ( 
        <div className={styles.icon}>
            
            <motion.svg 
                transition={bounceTransition}
                animate={{
                    y: ["40%", "-10%"]
                }}
                width="44" 
                height="30" 
                viewBox="0 0 44 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16L0 0L22 29.5L44 0L22 16Z" fill="rgba(255, 255, 255, 0.807)"/>
            </motion.svg>

        </div>

     );
}
 
export default ArrowIcon;