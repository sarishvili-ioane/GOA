import React from "react";

const Button = ({ variant = "primary", size = "md", children }) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      <Button variant="primary" size="md">Primary Button</Button>
      <Button variant="secondary" size="lg">Secondary Button</Button>
      <Button variant="outline" size="sm">Outline Button</Button>
    </div>
  );
};

export default Homepage