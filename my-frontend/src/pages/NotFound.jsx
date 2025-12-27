import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:'center', margin:'2rem'}}>404 - Page Not Found</h1>
      <Footer />
    </div>
  );
}

export default NotFound;
