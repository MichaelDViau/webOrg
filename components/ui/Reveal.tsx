"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { revealContainer, revealItem } from "@/lib/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?: number;
  amount?: number;
}

export function Reveal({ stagger = 0.08, delay = 0, amount = 0.2, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={revealContainer(stagger, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={revealItem} {...props}>
      {children}
    </motion.div>
  );
}
