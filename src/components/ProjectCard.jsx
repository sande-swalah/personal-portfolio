import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  const {
    title,
    description,
    category,
    image,
    link,
  } = project;

  return (
    <div className="card">
      <div className="imageContainer">
        <img
          src={image}
          alt={title}
          className="image"
        />
      </div>
      <div className="content">
        <h3 className="cardTitle">{title}</h3>
        <p className="description">{description}</p>
        <span className="category">{category}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;