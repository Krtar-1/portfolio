function ProjectCard({ title, description, image, link }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />

      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;