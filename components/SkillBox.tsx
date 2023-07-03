"use client";

import { motion } from "framer-motion";

interface SkillBoxProps {
  text: string;
  children: React.ReactNode;
  delay: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, borderRadius: "100px" }}
      whileInView={{ opacity: 1, x: 0 , borderRadius: "12px" }}
      transition={{  duration: 1, delay: delay }}
      className="h-40 w-40 bg-light rounded-xl text-dark flex flex-col justify-center items-center text-2xl duration-500 hover:bg-accent"
    >
      <span className="text-5xl">{children}</span>
      <p className="text-center">{text}</p>
    </motion.div>
  );
};

export default SkillBox;
