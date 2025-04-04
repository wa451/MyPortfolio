import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Projects = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <SectionTitle title="プロジェクト" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover cursor-pointer"
              onClick={() => handleImageClick(project.image)}
            />
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3> {/* タイトル */}
              <p className="text-gray-600 mb-3 ">{project.description}</p> {/* 説明 */}
              <div className="flex flex-wrap gap-1 mb-4"> {/* 使用技術 */}
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded">
                    {tech}
                  </span> 
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="flex space-x-2 items-center">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                  GitHub
                </a>
                {project.demoLink && project.demoLink !== "#" && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    デモ
                  </a>
                )}
              </div>
            </div>
          </div> 
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedImage} alt="拡大画像"
              className="max-h-[70vh] max-w-[80vw]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
