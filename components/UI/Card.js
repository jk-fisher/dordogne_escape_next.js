import styles from '../../styles/Card.module.css'

const Card = (props) => {
    return ( 
        <div className={`${styles.card} ${props.className}`}>I am a card</div>
     );
}
 
export default Card;