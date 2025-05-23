import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    className="p-10"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold">About Me</h2>
    <p className="mt-4">I'm a React developer passionate about modern web design and Firebase integrations.</p>
  </motion.section>
);

export default About;
