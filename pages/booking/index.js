import Head from "next/head";
import { Fragment } from "react";

import Bookings from "../../components/Bookings/Bookings";
import ModalContext from "../../store/modal-context";
import useModal from "../../hooks/useModal";

const Booking = () => {
  const { showModal, openModalHandler, closeModalHandler, modalContent } =
    useModal();
  return (
    <Fragment>
      <Head>
        <title>Le Petit Cottage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Le Petit Cottage, self-catered accommodation in France, available to book for holidays to the Dordogne region."
        />
        <meta
          name="keywords"
          content="Le Petit Cottage, Dordogne, France, holiday, rental, self-catered, accomodation"
        />
      </Head>
      <ModalContext.Provider
        value={{ showModal, openModalHandler, closeModalHandler, modalContent }}
      >
        <Bookings />
      </ModalContext.Provider>
    </Fragment>
  );
};

export default Booking;
