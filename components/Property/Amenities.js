import { useState } from "react";
import Modal from "../UI/Modal";
import { FaShower, FaHome, FaRestroom, FaUsers, FaBed } from "react-icons/fa";
import styles from "../../styles/Amenities.module.css";
import AmenitiesModalItems from "./AmenitiesModalItems";
import AmenitiesIcon from "./AmenitiesIcon";
import Button from "../UI/Button";

const icons = [
  {
      name: "Entire Cottage",
      icon: <FaHome />
  },
  {
      name: "Up to 4 Guests",
      icon: <FaUsers />
  },
  {
      name: "1 Bedroom",
      icon: <FaBed />
  },
  {
      name: "2 Beds",
      icon: <FaBed />
  },
  {
      name: "1 Bathroom",
      icon: <FaShower />
  }
]

const Amenities = () => {
    const [showModal, setShowModal] = useState(false)

    const closeModalHandler = () => {
      setShowModal(false)
    }
    const openModalHandler = () => {
      setShowModal(true)
    }

    const amenitiesList = icons.map((iconItem) => {
      return <AmenitiesIcon
                key={iconItem.name}
                name={iconItem.name}
                icon={iconItem.icon}
                />
    })
    
    return (  
        <section className={styles.container}>
          <div className={styles.iconList}>
            {amenitiesList}
          </div>
          <hr className={styles.line}/>
          <div data-aos="fade-up">
            <Button onClick={openModalHandler}>Show All Amenities</Button>
          </div>
          <Modal onClose={closeModalHandler} show={showModal}>
            <h2 className={styles.header}>Amenities</h2>
            <AmenitiesModalItems />
        </Modal>
    </section>
     );
}
 
export default Amenities;