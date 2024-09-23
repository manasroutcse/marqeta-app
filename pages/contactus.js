// export default function Contact() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
//         <div className="flex justify-center space-x-8">
//           <div>
//             <p className="text-gray-700">Address:</p>
//             <p className="text-gray-700">City, State Zip Code</p>
//             <p className="text-gray-700">Phone: (123) 456-7890</p>
//             <p className="text-gray-700">Email: info@example.com</p>
//           </div>
//           {/* Add more contact info as needed */}
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Service Hours</h2>
//         <ul>
//           <li>Monday-Friday: 9:00 AM - 5:00 PM</li>
//           <li>Saturday: Closed</li>
//           <li>Sunday: Closed</li>
//         </ul>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
//         {/* Add the contact form component here */}
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Social Media</h2>
//         <div className="flex justify-center space-x-4">
//           {/* Add social media links */}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here.
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

// import Link from "next/link";
// const Contact = () => (
//     <>
//       <div>
//         <h2>contact us page</h2>
//       </div>
//     </>
//   );
  
//   export default Contact;
