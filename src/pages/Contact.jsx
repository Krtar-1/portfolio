import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="page contact-page">
      <motion.div
        className="page-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Me</h1>

        <p>
          Feel free to reach out about projects, web development, or portfolio
          opportunities.
        </p>

        <ContactForm />

        <div className="contact-links">
          <h2>Connect With Me</h2>
          <p>Email: carterglidewell@gmail.com</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Krtar-1" target="_blank" rel="noreferrer">
              github.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/carter-glidewell-62148a237/" target="_blank" rel="noreferrer">
              linkedin.com
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;