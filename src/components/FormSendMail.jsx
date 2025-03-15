/**
 * FormSendMail is a React component that renders a form for sending emails using the EmailJS service.
 * It uses the `emailjs.sendForm` method to send the email and provides feedback to the user upon success or failure.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.publicKey - The public key for the EmailJS service.
 * @param {string} props.templateId - The template ID for the EmailJS email template.
 * @param {string} props.serviceId - The service ID for the EmailJS service.
 *
 * @returns {JSX.Element} A form element with fields for name, email, subject, and message, and a submit button.
 *
 * @example
 * <FormSendMail
 *   publicKey="your-public-key"
 *   templateId="your-template-id"
 *   serviceId="your-service-id"
 * />
 */
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
