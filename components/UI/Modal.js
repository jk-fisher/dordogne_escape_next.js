import React, { useEffect, useState } from "react";
import styles from "../../styles/Modal.module.css"
import ReactDom from "react-dom";
import { Fragment } from "react/cjs/react.production.min";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
    return(
        <div className={styles.modal}>
            <button className={styles.close} onClick={props.onClose}>
            x
            </button>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>      
    )
}


const Modal = (props) => {
    const [isBrowser, setIsBrowser] = useState(false);
    
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    
    const modalConent = props.show ? (
        <Fragment>
            <Backdrop onClose={props.onClose} />
            <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay> 
        </Fragment>
    ) : null;
    
    if (isBrowser){
        return ( <Fragment>
            {ReactDom.createPortal(
                        modalConent,
                        document.getElementById("modal-root")
            )}
        </Fragment>)
        } else {
            return null
        }
}
 
export default Modal;