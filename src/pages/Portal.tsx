import { useEffect } from 'react';

const Portal = () => {
  useEffect(() => {
    // Open in new tab
    window.open('https://studentportal.unilag.edu.ng/login', '_blank');
    
    // Redirect back to home after opening the new tab
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7EB]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E917D] mx-auto mb-4"></div>
        <p className="text-[#464645] text-lg">Opening UNILAG Student Portal...</p>
      </div>
    </div>
  );
};

export default Portal;