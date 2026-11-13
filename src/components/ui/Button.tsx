"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-[#5EB6DB] text-[#10385A] hover:bg-[#B7E3EB] shadow-lg hover:shadow-[0_0_24px_rgba(94,182,219,0.5)]",
    outline:
      "border-2 border-[#5EB6DB] text-[#5EB6DB] hover:bg-[#5EB6DB] hover:text-[#10385A] shadow-lg hover:shadow-[0_0_20px_rgba(94,182,219,0.35)]",
    ghost: "text-[#5EB6DB] hover:text-[#B7E3EB] underline-offset-4 hover:underline px-0 py-0",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
