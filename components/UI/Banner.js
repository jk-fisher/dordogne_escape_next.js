import styles from "../../styles/Banner.module.css";

const Banner = (props) => {
    return ( <section className={`${styles.hero} ${props.className}`}>
        <h1 className={`${styles.h1} ${props.h1Style}`}>{props.title}</h1> 
    </section> );
}
 
export default Banner;