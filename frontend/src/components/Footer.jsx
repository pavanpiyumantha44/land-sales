import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LandSales (PVT) LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
