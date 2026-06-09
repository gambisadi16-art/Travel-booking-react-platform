import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaConciergeBell } from "react-icons/fa";

const hotels = [
  {
    id: 1,
    name: "Burj Al Arab Dubai",
    city: "Dubai",
    price: 1500,
    rating: 5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant"],
    description: "Luxury 7-star hotel with world-class services"
  },
  {
    id: 2,
    name: "Eiffel Tower Suites",
    city: "Paris",
    price: 800,
    rating: 5,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
    amenities: ["WiFi", "Restaurant", "Spa", "Concierge"],
    description: "Elegant suites with Eiffel Tower views"
  },
  {
    id: 3,
    name: "Soneva Jani Maldives",
    city: "Maldives",
    price: 2000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800",
    amenities: ["WiFi", "Pool", "Luxury Spa", "Water Sports"],
    description: "All-villa resort with private pools"
  },
  {
    id: 4,
    name: "Astra Suites",
    city: "Santorini",
    price: 650,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
    amenities: ["WiFi", "Pool", "Terrace", "Restaurant"],
    description: "Boutique hotel with sunset views"
  },
  {
    id: 5,
    name: "Tokyo Metropolitan Hotel",
    city: "Tokyo",
    price: 400,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1559205645-cd4628902249?q=80&w=800",
    amenities: ["WiFi", "Restaurant", "Fitness", "Business Center"],
    description: "Modern hotel in the heart of Tokyo"
  },
  {
    id: 6,
    name: "New York Plaza",
    city: "New York",
    price: 550,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631049307038-da0ec9d70304?q=80&w=800",
    amenities: ["WiFi", "Pool", "Rooftop Bar", "Gym"],
    description: "Iconic hotel in Times Square"
  }
];

export default function Hotels() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [priceRange, setPriceRange] = useState(2000);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1
  });

  const cities = ["All", ...new Set(hotels.map(h => h.city))];

  const filteredHotels = hotels.filter(hotel => {
    const cityMatch = selectedCity === "All" || hotel.city === selectedCity;
    const priceMatch = hotel.price <= priceRange;
    return cityMatch && priceMatch;
  });

  const handleBooking = () => {
    if (selectedHotel && bookingData.checkIn && bookingData.checkOut) {
      alert(`Booking confirmed for ${selectedHotel.name}!\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nGuests: ${bookingData.guests}`);
      setSelectedHotel(null);
    } else {
      alert("Please fill in all booking details");
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-gray-600 text-lg">Discover our collection of luxury hotels worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Filters</h3>

              {/* City Filter */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">City</h4>
                <div className="space-y-2">
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition ${selectedCity === city
                        ? "bg-purple-500 text-white font-semibold"
                        : "hover:bg-gray-200"
                        }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Max Price: ${priceRange}</h4>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div className="text-sm text-gray-600">
                Found {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''}
              </div>
            </div>
          </motion.div>

          {/* Hotels Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
                    <div className="flex items-center gap-2 mb-3 text-gray-600">
                      <FaMapMarkerAlt className="text-purple-500" />
                      <span>{hotel.city}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(hotel.rating) ? "text-yellow-400" : "text-gray-300"}
                          size={12}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{hotel.rating}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-purple-600">${hotel.price}</span>
                      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Booking Modal */}
        {selectedHotel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedHotel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <img src={selectedHotel.image} alt="" className="rounded-lg h-48 object-cover" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedHotel.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedHotel.description}</p>
                  <div className="space-y-2 mb-4">
                    {selectedHotel.amenities.map((amenity, i) => (
                      <span key={i} className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm mr-2">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="text-4xl font-bold text-purple-600">${selectedHotel.price}/night</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Check-in</label>
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Check-out</label>
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBooking}
                  className="flex-1 bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition"
                >
                  Book Now
                </button>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
