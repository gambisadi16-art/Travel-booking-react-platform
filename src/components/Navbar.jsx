import { FaHotel, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between">

                    <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
                        <FaHotel className="text-white text-2xl" />
                        <h1 className="text-white font-bold text-xl">
                            LuxeStay
                        </h1>
                    </Link>

                    <div className="hidden md:flex gap-10 text-white">
                        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                        <Link to="/hotels" className="hover:text-gray-300 transition">Hotels</Link>
                        <Link to="/destinations" className="hover:text-gray-300 transition">Destinations</Link>
                        <Link to="/experiences" className="hover:text-gray-300 transition">Experiences</Link>
                        <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                            <>
                                <div className="hidden sm:block text-white text-sm">
                                    <p className="font-medium">{user?.name}</p>
                                    <p className="text-gray-300 text-xs">{user?.email}</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-600 transition flex items-center gap-2"
                                >
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                                Sign In
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </motion.nav>
    );
}