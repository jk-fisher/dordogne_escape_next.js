import React from "react";
// import Modal from "../components/UI/Modal";

const ModalContext = React.createContext({
    showModal: false, 
    openModalHandler: () => {},
    closeModalHandler: () => {},
    modalContent: ""
}); 

export default ModalContext;