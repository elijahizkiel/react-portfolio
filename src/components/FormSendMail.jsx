import { useRef } from "react";
import emailjs from "@emailjs/browser";

function FormSendMail({publicKey, templateId, serviceId}) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
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
    <form ref={formRef} onSubmit={sendEmail}>
      <label htmlFor="user_name">Name:</label>
      <input type="text" name="user_name" required />

      <label htmlFor="user_email">Email:</label>
      <input type="email" name="user_email" required />

      <label htmlFor="message">Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
}

export default FormSendMail;