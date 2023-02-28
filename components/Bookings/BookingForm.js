import { useState, useContext, Fragment } from "react";
import Button from "../UI/Button";
import styles from "../../styles/BookingForm.module.css";
import CalendarContext from "../../store/calendar-context";

const BookingForm = () => {
  const { clickedObj } = useContext(CalendarContext);

  const placeholderMessage = `Hi,\nIs Le Petit Cottage available to book from ${clickedObj[0].date.toDateString()} until ${clickedObj[1].date.toDateString()}?`;

  const [displayForm, setDisplayForm] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Request to Book Le Petit Cottage");
  const [message, setMessage] = useState(placeholderMessage);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send booking request");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0 && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log("errors", errors, isValid);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending your request...");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullName,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        // console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send booking request");
        return;
      }
      setShowSuccessMessage(true);
      setDisplayForm(false);
      setShowFailureMessage(false);
      setButtonText("Your request has been sent!");
    }
    // console.log(fullName, email, subject, message);
  };

  return (
    <div>
      <form className={styles.flex} onSubmit={handleSubmit}>
        <h2 className={styles.header}>Request to stay at Le Petit Cottage</h2>
        {displayForm && (
          <Fragment>
            <label htmlFor="fullName">Full Name *</label>
            <input
              className={styles.input}
              type="text"
              value={fullName}
              name="fullName"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            {errors?.fullname && (
              <p className={styles.fail}>Full name cannot be empty.</p>
            )}
            <label htmlFor="email">E-mail Address *</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            {errors?.email && (
              <p className={styles.error}>E-mail cannot be empty.</p>
            )}

            <label htmlFor="subject">Subject</label>
            <input
              className={styles.input}
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Request to Book Le Petit Cottage"
            />
            {errors?.subject && (
              <p className={styles.fail}>Subject cannot be empty.</p>
            )}
            <label htmlFor="message">Message</label>
            <textarea
              className={`${styles.input} ${styles.message}`}
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder={placeholderMessage}
            />
            {errors?.message && (
              <p className={styles.fail}>Subject cannot be empty.</p>
            )}
          </Fragment>
        )}
        <Button type="submit" className={styles.bookBtn}>
          {buttonText}
        </Button>
        <div className="text-left">
          {showSuccessMessage && (
            <p className={styles.success}>
              Thank you! Your Message has been delivered and you will here back
              within the next 48hrs.
            </p>
          )}
          {showFailureMessage && (
            <p className={styles.fail}>
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
