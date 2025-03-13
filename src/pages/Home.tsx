import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-white text-gray-900 py-10">
      <motion.div 
        className="text-center p-8 bg-white rounded-3xl shadow-lg max-w-2xl w-full border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full text-white text-5xl font-bold">
            🛍️
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Elsa Shop</h1>
        <p className="text-xl font-medium text-gray-700 mb-8">
        Find your favorite products at the best prices!
        </p>

        {/* Hero Illustration */}
        <motion.div 
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img 
            src="https://illustrations.popsy.co/amber/shopping-cart.svg" 
            alt="Shopping Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.button
          className="mt-6 px-8 py-4 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-600 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Shopping Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;