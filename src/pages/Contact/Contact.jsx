/**
 * Contact Page
 *
 * Allows visitors to send a message to the TriTechPlus team.
 * Currently uses frontend validation and placeholder submission.
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  /**
   * Updates form state when the user types.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  /**
   * Validates and submits the form.
   * Backend/email integration will be added later.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus("Please complete all fields before submitting.");
      return;
    }

    setFormStatus("Message prepared successfully. Email service will be connected later.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="page contact-page">
      <div className="container contact-page__container">
        <div className="contact-page__content">
          <h1>{t("pages.contact.title")}</h1>
          <p>{t("pages.contact.description")}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message subject"
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />
          </div>

          {formStatus && (
            <p className="contact-form__status" role="status">
              {formStatus}
            </p>
          )}

          <button type="submit" className="contact-form__button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;