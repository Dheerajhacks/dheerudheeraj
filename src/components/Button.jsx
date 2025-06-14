import React from "react";
import { cn } from '../lib/util'; // Assume cn() combines class names

const Button = ({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default", 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "hover:bg-gray-100 text-gray-700",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };

  const finalClassName = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
