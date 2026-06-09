import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaThermometerHalf, FaCalendar, FaUsers, FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    city: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
    temperature: "35°C",
    season: "Best in Winter",
    hotels: 280,
    experiences: 150,
    description: "A modern metropolis known for its luxury shopping, ultramodern architecture, and vibrant nightlife. Home to the iconic Burj Khalifa and Palm Islands.",
    highlights: ["Burj Khalifa", "Palm Islands", "Gold Souk", "Desert Safari", "Luxury Shopping"],
    flights: "From $450"
  },
  {
    id: 2,
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    temperature: "18°C",
    season: "Best in Spring",
    hotels: 450,
    experiences: 200,
    description: "The City of Light captivates with its romantic ambiance, world-class museums, and exquisite cuisine. Experience the majesty of the Eiffel Tower.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Seine River Cruise", "Champs-Élysées"],
    flights: "From $600"
  },
  {
    id: 3,
    city: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1000",
    temperature: "28°C",
    season: "Best in Nov-Mar",
    hotels: 150,
    experiences: 120,
    description: "A tropical paradise with pristine beaches, crystal-clear waters, and world-class diving. Perfect for a luxurious island getaway.",
    highlights: ["Coral Reefs", "Overwater Bungalows", "Diving", "Snorkeling", "Water Sports"],
    flights: "From $800"
  },
  {
    id: 4,
    city: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000",
    temperature: "25°C",
    season: "Best in Summer",
    hotels: 200,
    experiences: 180,
    description: "Famous for its white-washed buildings and blue-domed churches perched on volcanic cliffs. Enjoy stunning sunsets and local wine.",
    highlights: ["Caldera Views", "Sunset Viewpoints", "Beaches", "Wine Tasting", "Local Villages"],
    flights: "From $550"
  },
  {
    id: 5,
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959375944-7049f642e9cc?q=80&w=1000",
    temperature: "15°C",
    season: "Best in Spring",
    hotels: 350,
    experiences: 220,
    description: "Japan's vibrant capital blends ancient traditions with cutting-edge technology. Experience temples, gardens, and bustling markets.",
    highlights: ["Tokyo Tower", "Senso-ji Temple", "Shibuya Crossing", "Cherry Blossoms", "Sushi Markets"],
    flights: "From $700"
  },
  {
    id: 6,
    city: "New York",
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000",
    temperature: "12°C",
    season: "Best in Fall",
    hotels: 500,
    experiences: 300,
    description: "The city that never sleeps offers Broadway shows, world-class museums, and iconic landmarks. Experience urban energy and culture.",
    highlights: ["Statue of Liberty", "Times Square", "Central Park", "Broadway Shows", "Empire State Building"],
    flights: "From $500"
  },
  {
    id: 7,
    city: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1552465881-6f3ee5f786b4?q=80&w=1000",
    temperature: "32°C",
    season: "Best in Nov-Feb",
    hotels: 280,
    experiences: 250,
    description: "Thailand's vibrant capital combines ornate shrines, bustling markets, and world-renowned street food in an electrifying atmosphere.",
    highlights: ["Grand Palace", "Floating Markets", "Street Food", "Temples", "Night Bazaars"],
    flights: "From $400"
  },
  {
    id: 8,
    city: "Iceland",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    temperature: "-5°C",
    season: "Best in Winter",
    hotels: 120,
    experiences: 180,
    description: "Land of fire and ice features volcanic landscapes, massive waterfalls, geysers, and the magical Northern Lights.",
    highlights: ["Northern Lights", "Blue Lagoon", "Waterfalls", "Glaciers", "Golden Circle Route"],
    flights: "From $650"
  }
];

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter(dest =>
    dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-gray-600 text-lg mb-8">Discover the world's most beautiful and exciting places</p>

          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-purple-500 transition"
          />
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedDestination(destination)}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white">{destination.city}</h2>
                    <p className="text-gray-200">{destination.country}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4 line-clamp-2">{destination.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaThermometerHalf className="text-red-500" />
                    <span className="font-semibold">{destination.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCalendar className="text-purple-500" />
                    <span className="font-semibold">{destination.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaUsers className="text-blue-500" />
                    <span className="font-semibold">{destination.hotels} Hotels</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span className="font-semibold">{destination.experiences} Exp.</span>
                  </div>
                </div>

                <button className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition flex items-center justify-center gap-2">
                  View Details
                  <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detail Modal */}
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selectedDestination.image}
                alt=""
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h1 className="text-4xl font-bold mb-2">{selectedDestination.city}</h1>
              <p className="text-gray-600 mb-6">{selectedDestination.country}</p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedDestination.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Temperature</div>
                  <div className="text-2xl font-bold text-red-600">
                    {selectedDestination.temperature}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Best Season</div>
                  <div className="text-lg font-bold text-purple-600">
                    {selectedDestination.season}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Top Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedDestination.highlights.map((highlight, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg">
                      ✨ {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-sm text-gray-600 mb-2">Flights from:</p>
                <p className="text-2xl font-bold text-blue-600">{selectedDestination.flights}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition">
                  Browse Hotels
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition">
                  Book Experiences
                </button>
              </div>

              <button
                onClick={() => setSelectedDestination(null)}
                className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
