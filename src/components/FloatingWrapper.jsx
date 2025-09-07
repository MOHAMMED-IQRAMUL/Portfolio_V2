import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const FloatingWrapper = ({ children, className = "block w-full md:inline-block md:w-auto" }) => {
  return (
    <motion.div
  className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingWrapper;
