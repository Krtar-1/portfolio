import { motion } from "framer-motion";

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <img src={image} alt={title} />

      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;