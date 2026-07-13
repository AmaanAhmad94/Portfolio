import { useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, projectCategories } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import SearchInput from '../ui/SearchInput';
import FilterTabs from '../ui/FilterTabs';
import ScrollReveal from '../animations/ScrollReveal';

const Projects = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Projects"
            title="Featured Work"
            subtitle="A selection of projects showcasing my development skills."
          />
        </ScrollReveal>

        <div className="flex flex-col items-center gap-6 mb-12">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
          />
          <FilterTabs
            options={projectCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index}>
              <Card className="overflow-hidden p-0 h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-sky/10 text-navy dark:text-sky"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-500 mb-4 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium hover:bg-sky/10 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky to-navy text-white text-sm font-medium"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500">No projects found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
