import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

function FormSendMail({ publicKey, templateId, serviceId }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email Sent Successfully!");
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        alert("Failed to send email.");
      }
    );
    e.target.reset();
  };

  return (
    <form className="form-send-mail" ref={formRef} onSubmit={sendEmail}>
      
      <div className="name">
        <label htmlFor="user_name">Name:</label>
        <input type="text" id="user_name" name="user_name" required />
      </div>

      <div className="email">
        <label htmlFor="user_email">Email:</label>
        <input type="email" id="user_email" name="user_email" required />
      </div>

      <div className="subject">
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" id="subject" required />
      </div>

      <div className="message">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required />
      </div>

      <Button id="btn-submit" className="btn btn-submit" type="submit">
        Send
      </Button>

    </form>
  );
}

export default FormSendMail;
