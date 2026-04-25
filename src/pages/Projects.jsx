import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Goblin Gizmos",
      description:
      "A team-built collection website featuring collectibles, categories, and a clean interface for browsing and viewing items. Developed collaboratively with a focus on organization and usability.",
      image: "src/assets/images/goblin.png",
      link: "https://students.gaim.ucf.edu/~je686804/goblingizmos/index.php"
    },
    {
      title: "Mangot Book Collection",
      description:
        "A personal book collection website built to organize and browse my own library. Features categorized collections, clean UI design, and a structured layout for managing and viewing books.",
      image: "src/assets/images/mangot.png",
      link: "https://mangot-app.netlify.app/collection.html"
    },
    {
      title: "Oyasushi Restaurant Website",
      description:
        "A dream-themed sushi restaurant website featuring a menu, responsive layout, favorites system, and localStorage functionality.",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
      link: "https://serene-lollipop-5e4b00.netlify.app"
    }
  ];

  return (
    <section className="page projects-page">
      <motion.div
        className="page-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Projects</h1>
        <p>
          Here are a few projects I have built using React, PHP, MySQL,
          JavaScript, HTML, and CSS.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;