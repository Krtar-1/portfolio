import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitted && (
        <p className="success-message">
          Thank you! Your message has been validated.
        </p>
      )}

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      {errors.message && <p className="error-message">{errors.message}</p>}

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;