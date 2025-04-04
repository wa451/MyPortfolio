import React from 'react';
import SectionTitle from './SectionTitle';

const Education = ({ education }) => {
  return (
    <section id="education" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <SectionTitle title="学歴" />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8 pb-6 border-l-2 border-green-400 timeline-item">
            <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 top-0"></div>
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-lg text-gray-700">{edu.degree}</p>
            <p className="text-gray-500 mb-2">{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
