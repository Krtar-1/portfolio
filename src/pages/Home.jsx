import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Carter Glidewell. I’m a web development graduate building
          responsive, interactive websites using React, JavaScript, HTML, CSS,
          PHP, and MySQL.
        </p>

        <Link to="/projects" className="button-link">
          View My Projects
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;