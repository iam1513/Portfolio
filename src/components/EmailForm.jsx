import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then(
        (response) => {
          setFeedback("Email sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setFeedback("Error sending email. Please try again.");
        }
      );
  };

  return (
    <div className="email-form-container">
      <h2 className="email-form-title">Send Us an Email</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <label className="email-form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-form-input"
          />
        </label>
        <label className="email-form-label">
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="email-form-textarea"
          />
        </label>
        <button type="submit" className="email-form-button">
          Send
        </button>
      </form>
      {feedback && <p className="email-form-message">{feedback}</p>}
    </div>
  );
};

export default EmailForm;
