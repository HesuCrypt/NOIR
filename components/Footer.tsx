import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NOIR. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;