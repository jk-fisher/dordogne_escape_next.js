import React, { useEffect, useState, useContext } from "react";
import ReactDom from "react-dom";
import ModalContext from "../../store/modal-context";

import styles from "../../styles/Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
    let { modalContent } = useContext(ModalContext)
    return(
        <div className={styles.modal}>
            <button className={styles.close} onClick={props.onClose}>
            x
            </button>
            <div className={styles.content}>
                {modalContent}
            </div>
        </div>      
    
    )
}


const Modal = () => {
    let {closeModalHandler, showModal } = useContext(ModalContext);
    
    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    
    const modalDisplay = showModal ? (
        <Fragment>
            <Backdrop onClose={closeModalHandler} />
            <ModalOverlay onClose={closeModalHandler} />
        </Fragment>
    ) : null;
    
    if (isBrowser){
        return ( <Fragment>
            {ReactDom.createPortal(
                        modalDisplay,
                        document.getElementById("modal-root")
            )}
        </Fragment>)
        } else {
            return null
        }
}
 
export default Modal;