import React from 'react';
import { motion } from 'framer-motion';

export default function NationalEmblem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-full"
    >
      <img 
        src="/emblem.png"
        alt="National Emblem of India"
        className="h-full w-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg';
        }}
      />
    </motion.div>
  );
}