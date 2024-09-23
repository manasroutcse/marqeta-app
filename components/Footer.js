// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-800 text-white p-4">
//       <div className="mx-auto max-w-screen-md text-center">
//         <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser,facebook } from '@fortawesome/free-solid-svg-icons';
import { faCamera,faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add the icons to the library
library.add(fas, far);


// import { fas, far, fal, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// lib/fontawesome.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Add all Solid icons to the library
// library.add(fas);


function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
    <div>
    <footer className="footer">
    <div className="footerDivOne">
      <ul>
        <h1>Solutions</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
       
      </ul>
      </div>
      <div className="footerDivTwo">
      <ul>
        <h1>Product</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
      </ul>
      </div>
      <div className="footerDivThree">
      <ul>
        <h1>Features</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
      </ul>
      </div>
      <div className="footerDivFour">
      <ul>
        <h1>Developer</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
      </ul>
      </div>
      <div className="footerDivFive">
      <ul>
        <h1>Company</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
      </ul>
      </div>
      <div className="footerDivSix">
      <ul>
        <h1>Location</h1>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
        <li>solutions overview</li>
      </ul>
      </div>

     
    <div className="copyRight">
    
    <hr/>
    <br/>
     <div><p>&copy;2024 Marqeta,Inc 180 grand Avenue,6th Floor Oakland,CA 94612</p></div> 
     <div className="fontawesome">
           
            <div className="fontOne"><p> <i className="fab fa-github"></i></p></div>
           <div className="fontTwo"><p> <i className="fab fa-twitter"></i></p></div> 
            <div className="fontThree"><p> <i className="fab fa-facebook"></i></p></div>
            <div className="fontFour"><p> <i className="fab fa-linkedin"></i></p></div>
        </div>
     
      </div>
    
  </footer>
  </div>
  </>
    
  );
}

export default Footer;

