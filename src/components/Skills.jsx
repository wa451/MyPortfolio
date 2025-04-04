import React from 'react';
import SectionTitle from './SectionTitle';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <SectionTitle title="スキル" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
