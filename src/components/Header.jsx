import React from 'react';

const Header = ({ activeSection, setActiveSection, profile }) => {
  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <nav>
          <ul className="flex space-x-4">
            {['about', 'skills', 'projects', 'education'].map((section) => (
              <li key={section}> <button
                onClick={() => setActiveSection(section)}
                className={`px-3 py-1 rounded ${activeSection === section ? 'bg-white text-blue-600' : ''}`}
              >
                {section === 'about' ? 'プロフィール' :
                  section === 'skills' ? 'スキル' :
                    section === 'projects' ? 'プロジェクト' :
                      section === 'education' ? '学歴' : ''}
              </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
