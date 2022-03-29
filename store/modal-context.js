import React from "react";
// import Modal from "../components/UI/Modal";

const ModalContext = React.createContext({
    showModal: false, 
    openModalHandler: () => {},
    closeModalHandler: () => {},
    modalContent: ""
}); 

// let ModalContext;
// let { Provider } = (ModalContext = React.createContext());

// let ModalProvider = ({ children }) => {
//   let { modal, handleModal, modalContent } = useModal();
//   return (
//     <Provider value={{ modal, handleModal, modalContent }}>
//       <Modal />
//       {children}
//     </Provider>
//   );
// };
export default ModalContext;