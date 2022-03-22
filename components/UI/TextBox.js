import styles from "../../styles/TextBox.module.css"

const TextBox = ({ children }) => {
    return ( <div className={styles.container}>
            {children}
        </div>
        );
}
 
export default TextBox;