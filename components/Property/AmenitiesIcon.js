import styles from "../../styles/AmenitiesIcon.module.css";

const AmenitiesIcon = (props) => {
    
    return ( <span className={styles.iconItem}>
        {props.name}<i className={styles.icon}>{props.icon}</i>
    </span> );
}
 
export default AmenitiesIcon;