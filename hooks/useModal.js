import { useState } from "react";

export default () => {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState("")

    const openModalHandler = ( content ) => {
        console.log("open", content)
        setShowModal(true);
        setModalContent(content)
    };

    const closeModalHandler =() => {
        setShowModal(false);
        setModalContent("");
        console.log("content", modalContent)
    }

    // const handleModal = (content = false) => {
    //     setShowModal(!showModal);
    //     console.log(content)
    //     if(content) {
    //         setModalContent(content);
    //         console.log(modalContent)
    //     }
    // };
    return { showModal, openModalHandler, closeModalHandler, modalContent}
    // const closeModalHandler = () => {
    //   setShowModal(false)
    // }
    // const openModalHandler = () => {
    //   setShowModal(true)
    // }
};
