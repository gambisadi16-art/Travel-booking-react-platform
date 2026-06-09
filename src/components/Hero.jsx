import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen">

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="uppercase tracking-[0.4em] text-gray-300"
                >
                    Luxury Hotel Booking
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-white text-6xl md:text-8xl font-bold max-w-5xl mt-4"
                >
                    Discover Extraordinary Places To Stay
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="text-gray-300 text-lg mt-8 max-w-xl"
                >
                    Handpicked luxury hotels, premium resorts and unforgettable travel experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                    className="bg-white rounded-3xl mt-12 p-4 shadow-2xl max-w-6xl"
                >

                    <div className="grid md:grid-cols-5 gap-4">

                        <input
                            type="text"
                            placeholder="Destination"
                            className="border rounded-2xl p-4 outline-none"
                        />

                        <input
                            type="date"
                            className="border rounded-2xl p-4"
                        />

                        <input
                            type="date"
                            className="border rounded-2xl p-4"
                        />

                        <select className="border rounded-2xl p-4">
                            <option>Guests</option>
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                        </select>

                        <button className="bg-black text-white rounded-2xl font-semibold hover:scale-105 transition">
                            Search
                        </button>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}