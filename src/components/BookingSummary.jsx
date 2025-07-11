import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

function BookingSummary() {
  const [bookings, setBookings] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    fetch("https://shuttle-project.onrender.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Failed to fetch bookings", error));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shuttle-project.onrender.com/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              setBookings((prev) =>
                prev.filter((booking) => booking.id !== id)
              );
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "The booking has been successfully deleted.",
                confirmButtonColor: "#3085d6",
                timer: 2000,
                showConfirmButton: false,
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to delete the booking!",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Something went wrong while deleting.",
            });
          });
      }
    });
  };

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div
        ref={printRef}
        className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-900 text-white rounded-xl shadow-lg border p-4 sm:p-6"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4 text-center">
          Booking Summary
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead>
              <tr className="text-yellow-300 bg-gray-800">
                <th className="px-4 py-2 text-left whitespace-nowrap">Name</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Phone Number
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Route</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Date</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Departure Time
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Vehicle
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Price</th>
                <th className="px-4 py-2 text-left whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-700 transition duration-200"
                >
                  <td className="px-4 py-2">{booking.name}</td>
                  <td className="px-4 py-2">{booking.number}</td>
                  <td className="px-4 py-2">{booking.route}</td>
                  <td className="px-4 py-2">{booking.departureDate}</td>
                  <td className="px-4 py-2">{booking.departureTime}</td>
                  <td className="px-4 py-2">{booking.vehicle}</td>
                  <td className="px-4 py-2">{booking.price}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-red-600 hover:bg-red-500 cursor-pointer text-white px-2 py-1 rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrint}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 cursor-pointer transition duration-200"
          >
            Print / Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
