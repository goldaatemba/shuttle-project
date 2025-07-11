import React, { useState } from "react";
import { toast } from "react-toastify";

function Footer() {
  const [feedback, setFeedback] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
     if (feedback.trim() === "") {
       toast.error("Please enter your feedback before submitting.");
       return;
     }
     toast.success("Thank you for your feedback!");
     setFeedback("");
   };

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg font-semibold text-yellow-400">Prestige Shuttles</p>
          <p>📞 +254 742 470 324</p>
          <p>📧 support@prestigeshuttles.co.ke</p>
        </div>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            placeholder="Share your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition cursor-pointer"
          >
            Submit
          </button>
        </form>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Prestige Shuttles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;