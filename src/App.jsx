import { useState, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'

function App() {
   const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Mechanical Engineering',
      description: 'combining both software and mechanical theories to create modern systems.',
      category: 'Web and Mech Development',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqfEeOAr6Ab4HykUk8hNzWQGc8C_UPl662w&s',
      link: 'https://example.com/mechengineering',// this is a stand in since I don't have the links yet
    },
    {
      id: 2,
      title: 'App Design',
      description: 'design for any mobile application with an intuitive interface and smooth user experience.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: 'https://example.com/mobile',// similar to the previous id its a stand in
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  
  const handleAddProject = useCallback((newProject) => {
    const projectWithId = {
      ...newProject,
      id: Math.max(...projects.map(p => p.id), 0) + 1,
    };
    setProjects(prevProjects => [projectWithId, ...prevProjects]);
  }, [projects]);

 
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  
  const filteredProjects = projects.filter(project => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(lowerSearchTerm) ||
      project.description.toLowerCase().includes(lowerSearchTerm) ||
      project.category.toLowerCase().includes(lowerSearchTerm)
    );
  }); 

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <section className="section">
            <h2 className="sectionTitle">Add New Project</h2>
            <ProjectForm updateProject={handleAddProject} />
          </section>

          <section className="section">
            <h2 className="sectionTitle">Search Projects</h2>
            <SearchBar value={searchTerm} onChange={handleSearch} />
          </section>

          <section className="section">
            <h2 className="sectionTitle">
              Portfolio
              {searchTerm && ` - Results for "${searchTerm}"`}
            </h2>
            <ProjectList projects={filteredProjects} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App
