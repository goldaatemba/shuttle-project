import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function BookingForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [routes, setRoutes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  // Fetch routes and vehicles from your live API
  useEffect(() => {
    fetch("https://shuttle-project.onrender.com/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Failed to fetch routes", error));

    fetch("https://shuttle-project.onrender.com/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error("Failed to fetch vehicles", error));
  }, []);

  // Update price and departure time when a route is selected
  useEffect(() => {
    const selected = routes.find((r) => r.id.toString() === route);
    if (selected) {
      setDepartureTime(selected.departureTime);
      setPrice(selected.price);
    } else {
      setDepartureTime("");
      setPrice("");
    }
  }, [route, routes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number || !route || !date || !vehicle) {
      toast.error("Please fill in all fields.");
      return;
    }

    const selectedRoute = routes.find((r) => r.id.toString() === route);

    const newBooking = {
      name,
      number,
      route: `${selectedRoute.from} - ${selectedRoute.to}`,
      vehicle,
      departureDate: date,
      departureTime: selectedRoute.departureTime,
      price: selectedRoute.price,
    };

    fetch("https://shuttle-project.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Booking successful");
        setName("");
        setNumber("");
        setRoute("");
        setVehicle("");
        setDate("");
        setDepartureTime("");
        setPrice("");
        setError("");
      })
      .catch((error) => {
        console.error("Failed to submit booking", error);
        setError("Failed to submit booking");
        toast.error("Failed to submit booking");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="book"
      className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-900 text-white p-6 rounded-xl shadow-lg border"
    >
      <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">
        Book a Seat
      </h2>

      {error && <p className="text-red-400 text-center">{error}</p>}

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="number"
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <select
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <option value="">Select Route</option>
        {routes.map((r) => (
          <option key={r.id} value={r.id}>
            {r.from} - {r.to} - KES {r.price} : {r.departureTime}
          </option>
        ))}
      </select>

      <select
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {departureTime && (
        <p className="text-yellow-300 mb-2">
          Departure Time: <strong>{departureTime}</strong>
        </p>
      )}

      {price && (
        <p className="text-yellow-300 mb-4">
          Price: <strong>KES {price}</strong>
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition cursor-pointer"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
