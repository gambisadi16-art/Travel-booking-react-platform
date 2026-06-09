import { motion } from "framer-motion";

const destinations = [
    {
        city: "Dubai",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200"
    },
    {
        city: "Paris",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200"
    },
    {
        city: "Maldives",
        image:
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200"
    },
    {
        city: "Santorini",
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200"
    }
];

export default function Destinations() {
    return (
        <section className="bg-white py-28">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold mb-4">
                    Popular Destinations
                </h2>

                <p className="text-gray-500 mb-16">
                    Explore our most booked locations.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {destinations.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                        >

                            <img
                                src={item.image}
                                alt=""
                                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-white text-3xl font-bold">
                                    {item.city}
                                </h3>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
}