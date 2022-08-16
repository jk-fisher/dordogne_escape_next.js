import styles from "../../styles/ExploreBanner.module.css";
import ArrowIcon from "./ArrowIcon";

const ExploreBanner = (props) => {
    return (  <div className={styles.hero}>
    <h1 className={styles.h1}>{props.title}</h1> 
        <ArrowIcon />
    </div> );
}
 
export default ExploreBanner;