import { useContext } from "react";

import ModalContext from "../../store/modal-context";
import Modal from "../UI/Modal";
import styles from "../../styles/Amenities.module.css";
import AmenitiesModalItems from "./AmenitiesModalItems";
import AmenitiesIcon from "./AmenitiesIcon";
import Button from "../UI/Button";

import { FaShower, FaHome, FaUsers, FaBed } from "react-icons/fa";

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
    const { openModalHandler } = useContext(ModalContext);

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
            <Button onClick={() => openModalHandler( <AmenitiesModalItems /> )}>Show All Amenities</Button>
            <Modal /> 
          </div>
          {/* <Modal onClose={handleModal}>
            <AmenitiesModalItems />
        </Modal> */}
    </section>
     );
}
 
export default Amenities;