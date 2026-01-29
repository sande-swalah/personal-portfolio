import { useState } from "react";
import '../styles/ProjectForm.css';

const categories = [
  'mechanical engineering',
  'Design app using react',
];

function ProjectForm({ updateProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    link: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(formData);
    setFormData({
      title: '',
      description: '',
      category: '',
      image: '',
      link: '',
    });
  };

 return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="title" className="label">
           Title <span className="required">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter project title"
          className={`input ${errors.title ? 'inputError' : ''}`}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="formGroup">
        <label htmlFor="description" className="label">
          Description <span className="required">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter project description"
          rows="3"
          className={`textarea ${errors.description ? 'inputError' : ''}`}
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>

      <div className="formGroup">
        <label htmlFor="category" className="label">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="formGroup">
        <label htmlFor="link" className="label">
          Project Link <span className="required">*</span>
        </label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://example.com"
          className={`input ${errors.link ? 'inputError' : ''}`}
        />
        {errors.link && <span className="error">{errors.link}</span>}
      </div>

      <button type="submit" className="button">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
