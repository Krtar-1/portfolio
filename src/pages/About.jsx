import { motion } from "framer-motion";

function About() {
  return (
    <section className="page about-page">
      <motion.div
        className="page-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Me</h1>

        <p>
          My name is Carter Glidewell. I am a web development graduate interested
          in creating clean, responsive, and user-friendly websites. I am capable of
          working with front-end technologies like React, JavaScript, HTML, and
          CSS, as well as back-end tools like PHP and MySQL.
        </p>

        <p>
          I like building projects that solve real problems, organize
          information clearly, and give users a smooth experience across
          desktop and mobile devices. My main projects are meant to organize a user's pesonal life
        </p>

        <h2>Skills</h2>

        <div className="skills-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>GitHub</span>
          <span>Responsive Design</span>
        </div>

        <h2>Interests</h2>

        <p>
          My interests include web design, interactive user interfaces, personal use websites and learning new development tools.
        </p>
      </motion.div>
    </section>
  );
}

export default About;