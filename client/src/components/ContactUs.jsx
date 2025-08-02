import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import api from '../config/api';
import{toast} from "react-hot-toast"




const ContactUs = () => {

  const navigate = useNavigate();
    const [contactUsData, setContactUsData] = useState({
      name: "",
      email: "",
      feedback: "",
      subject:"",
      phone:"",
      
    })
  
    const handleChange = (e) => {
    setContactUsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactUsData.name || !contactUsData.email) {
      toast.error("Please enter both email and full name.");
      return;
    }

    try {
      const res = await api.post("/contact/submit", contactUsData);
      toast.success(res.data.message || "Message sent successfully");
      setContactUsData({ name: "", email: "", feedback: "" });
    } catch (error) {
      toast.error(
        `Error ${error.response?.status || ""}: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };




  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-[#fff1e0] via-[#fbd9b4] to-[#fff7eb] flex items-center justify-center px-6 py-12" 
    >
  <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10 border border-[#d6a756]">
    <h2 className="text-4xl font-bold text-[#822727] mb-6 text-center font-serif">
      Contact Us
    </h2>
    <p className="text-center text-[#5a2b0c] mb-10 font-medium">
      Every celebration deserves a touch of elegance — contact us for bookings, guidance, or heartfelt blessings.
    </p>
    <form className="space-y-6" onSubmit={handleSubmit}>


      <div>
        <label className="block text-[#6b2f0c] font-semibold mb-1 font-serif">
         Name
        </label>
        <input
        name='name'
          type="text"
          className="w-full px-4 py-2 border border-[#d6a756] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2b057] bg-[#fffaf5]"
          placeholder="Enter your name"
          value={contactUsData.name}
          onChange={handleChange}
        required
        />
      </div>


      <div>
        <label className="block text-[#6b2f0c] font-semibold mb-1 font-serif">
          Email Address
        </label>
        <input
        name='email'
          type="email"
          className="w-full px-4 py-2 border border-[#d6a756] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2b057] bg-[#fffaf5]"
          placeholder="Enter your email"
          value={contactUsData.email}
          onChange={handleChange}
        required
        />
      </div>


      <div>
        <label className="block text-[#6b2f0c] font-semibold mb-1 font-serif">
          Feedback
        </label>
        <textarea
          name='feedback'
          rows="5"
          className="w-full px-4 py-2 border border-[#d6a756] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2b057] bg-[#fffaf5]"
          placeholder="Share your feedback..."
          value={contactUsData.feedback}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-[#6b2f0c] font-semibold mb-1 font-serif">
          Subject
        </label>
        <input
        name='subject'
          type="text"
          className="w-full px-4 py-2 border border-[#d6a756] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2b057] bg-[#fffaf5]"
          placeholder="Enter your subject"
          value={contactUsData.subject}
          onChange={handleChange}
          required
        />
      </div>


      <div>
        <label className="block text-[#6b2f0c] font-semibold mb-1 font-serif">
          Phone
        </label>
        <input
        name='number'
          type="tel"
          className="w-full px-4 py-2 border border-[#d6a756] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2b057] bg-[#fffaf5]"
          placeholder="Enter your Phone Number"
          value={contactUsData.number}
          onChange={handleChange}
        required
        />
      </div>

      

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#cc3366] text-white px-6 py-2 rounded-full hover:bg-[#b92c5b] transition duration-300 font-semibold"
        >
          Send Feedback
        </button>
      </div>
    </form>
    <p className="text-sm text-center text-[#754c24] mt-6 italic font-serif">
      We'll get back to you within 24 hours. Your journey is our joy!
    </p>
  </div>
</section>

    
    </>
  )
}


export default ContactUs;