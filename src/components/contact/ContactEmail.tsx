import React from 'react';
import { motion } from 'framer-motion';

interface ContactEmailProps {
  contactEmail?: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  contactEmail = 'upendrasinghsom1c@gmail.com',
}) => {
  if (!contactEmail) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
      className="flex items-center justify-center text-center select-none"
    >
      <a
        href={`mailto:${contactEmail}`}
        className="font-mono-ui font-bold text-xs sm:text-[13.5px] text-[#2563EB] tracking-wider hover:underline transition-colors cursor-pointer"
      >
        {contactEmail}
      </a>
    </motion.div>
  );
};
