import QuotepageContent from "../components/quotepage/QuotepageContent.jsx";
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx'
import React from "react";

function QuotePage() {
  return (
    <div>
      <Navbar />
      <QuotepageContent />
      <Footer />
    </div>
  );
}

export default QuotePage;
