import React from "react";

function LocationMap() {
  return (
    <div
      id="location"
      className="bg-gradient-to-r from-black to-gray-900 text-white py-8"
    >
      <h2 className="text-2xl font-bold text-yellow 400 text-center mb-6">
        Find Us
      </h2>

      <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.422670586617!2d36.820051226145!3d-1.2927286183340343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11271d83f417%3A0x914f6242f5c9c7bb!2sRailways%20Bus%20stop%20%2Fbus%20Stage!5e0!3m2!1sen!2ske!4v1745475659747!5m2!1sen!2ske"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;