import { useEffect, useState } from "react";

function RouteDisplay() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("https://zuru-shuttles-api.onrender.com/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Failed to fetch routes", error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
        Available Routes
      </h2>
      <ul className="space-y-3">
        {routes.map((route) => (
          <li
            key={route.id}
            className="bg-gray-700 p-4 rounded-md hover:bg-gray-600 transition"
          >
            {route.from} ➤ {route.to} - Departure Time⌚ {route.departureTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RouteDisplay;