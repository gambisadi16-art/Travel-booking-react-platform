import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaDollarSign, FaCheck } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Desert Safari Adventure",
    location: "Dubai",
    price: 150,
    duration: "4 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?q=80&w=800",
    description: "Thrilling desert adventure with dune bashing and sunset camel ride",
    included: ["Dune bashing", "Camel ride", "BBQ dinner", "Traditional shows"]
  },
  {
    id: 2,
    title: "Eiffel Tower & Seine River Cruise",
    location: "Paris",
    price: 120,
    duration: "3 hours",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
    description: "Romantic experience with Eiffel Tower visit and riverside cruise",
    included: ["Tower entry", "River cruise", "Wine tasting", "French pastries"]
  },
  {
    id: 3,
    title: "Tropical Snorkeling",
    location: "Maldives",
    price: 200,
    duration: "5 hours",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800",
    description: "Explore vibrant coral reefs and encounter tropical marine life",
    included: ["Snorkeling gear", "Boat tour", "Lunch", "Photos"]
  },
  {
    id: 4,
    title: "Santorini Sunset & Wine",
    location: "Santorini",
    price: 140,
    duration: "3 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
    description: "Watch sunset from caldera with wine and local cheeses",
    included: ["Wine selection", "Cheese board", "Sunset view", "Guided tour"]
  },
  {
    id: 5,
    title: "Tokyo Street Food Tour",
    location: "Tokyo",
    price: 80,
    duration: "3 hours",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556821552-5ff63b1b2d30?q=80&w=800",
    description: "Discover authentic Japanese cuisine at local markets and restaurants",
    included: ["7-8 food tastings", "Local guide", "Drinks", "Market access"]
  },
  {
    id: 6,
    title: "New York Broadway Show",
    location: "New York",
    price: 180,
    duration: "3.5 hours",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    description: "Experience world-class Broadway musical performance",
    included: ["Show ticket", "Orchestra seating", "Dinner pre-show", "Program"]
  },
  {
    id: 7,
    title: "Thai Cooking Class",
    location: "Bangkok",
    price: 110,
    duration: "4 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561bf1?q=80&w=800",
    description: "Learn authentic Thai cooking from local chefs",
    included: ["Cooking lesson", "Ingredients", "Take-home recipe", "Meals"]
  },
  {
    id: 8,
    title: "Northern Lights Tour",
    location: "Iceland",
    price: 250,
    duration: "6 hours",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    description: "Witness the magical Aurora Borealis in the Arctic sky",
    included: ["Transport", "Thermal suit", "Hot drinks", "Professional guide"]
  }
];

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState("All");

  const locations = ["All", ...new Set(experiences.map(e => e.location))];

  const filteredExperiences = filter === "All"
    ? experiences
    : experiences.filter(e => e.location === filter);

  const handleBook = () => {
    if (selectedDate) {
      alert(`Booked for ${quantity} guest${quantity > 1 ? 's' : ''}!\nDate: ${selectedDate}\nTotal: $${selectedExperience.price * quantity}`);
      setSelectedExperience(null);
      setSelectedDate("");
      setQuantity(1);
    } else {
      alert("Please select a date");
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Unforgettable Experiences</h1>
          <p className="text-gray-600 text-lg">Book unique activities and adventures at your destination</p>
        </motion.div>

        {/* Location Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {locations.map(location => (
            <button
              key={location}
              onClick={() => setFilter(location)}
              className={`px-6 py-2 rounded-full font-medium transition ${filter === location
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-800 border border-gray-200 hover:border-purple-500"
                }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer group"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <FaStar size={12} />
                  {exp.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{exp.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{exp.location}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaClock size={14} className="text-purple-500" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaDollarSign size={14} className="text-green-500" />
                    From ${exp.price}
                  </div>
                </div>

                <button className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Booking Modal */}
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selectedExperience.image}
                alt=""
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h2 className="text-3xl font-bold mb-2">{selectedExperience.title}</h2>
              <p className="text-gray-600 mb-4">{selectedExperience.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-bold">{selectedExperience.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Rating</div>
                  <div className="font-bold flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {selectedExperience.rating}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Price</div>
                  <div className="font-bold text-purple-600">${selectedExperience.price}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {selectedExperience.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Price:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    ${selectedExperience.price * quantity}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBook}
                  className="flex-1 bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition"
                >
                  Book Now
                </button>
                <button
                  onClick={() => setSelectedExperience(null)}
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
