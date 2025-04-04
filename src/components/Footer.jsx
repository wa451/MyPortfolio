import React from 'react';

const Footer = ({ profile }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            GitHub
          </a>
          {/* <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            LinkedIn
          </a> */}
          <a href={`mailto:${profile.email}`} className="hover:text-blue-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
