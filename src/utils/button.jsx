import React from "react";

function Button({ text, type = "button" }) {
  return (
    <button
      type={type} // Good practice for accessibility and form submission
      className="
        bg-red-600           
        text-white                  
        font-semibold              
        py-3 px-6                   
        rounded-lg                  
        shadow-md                   
        transition duration-300      
        ease-in-out
        hover:bg-red-700            
        hover:shadow-lg              
        focus:outline-none           
        focus:ring-4                 
        focus:ring-red-300                               
        cursor-pointer
        w-full
      "
    >
      {text}
    </button>
  );
}

export default Button;
