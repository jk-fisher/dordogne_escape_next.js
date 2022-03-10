import { useState } from "react";
import Modal from "../UI/Modal";
import { FaShower, FaHome, FaRestroom, FaUsers, FaBed } from "react-icons/fa";
import styles from "../../styles/Amenities.module.css";
import AmenitiesItems from "./AmenitiesItems";

const Amenities = () => {
    const [showModal, setShowModal] = useState(false)

    const closeModalHandler = () => {
      setShowModal(false)
    }
    const openModalHandler = () => {
      setShowModal(true)
    }
    return (  
        <div>
          <button onClick={openModalHandler}>Open Modal</button>
          <Modal onClose={closeModalHandler} show={showModal}>
            <h2 className={styles.header}>Amenities</h2>
            <AmenitiesItems />
        </Modal>
    </div>
     );
}
 
export default Amenities;