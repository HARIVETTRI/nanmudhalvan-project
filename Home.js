import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    className="p-10 text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-xl">Explore my work and feel free to reach out!</p>
  </motion.div>
);

export default Home;
