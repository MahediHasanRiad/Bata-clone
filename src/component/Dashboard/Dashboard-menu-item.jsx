function DashboardMenuItem({ text }) {
  return (
    <div
    onClick={'#'}
      className="
        w-full 
        h-12                
        flex 
        items-center 
        px-4                
        cursor-pointer
        transition duration-150
        hover:bg-gray-100  
        hover:text-red-600 
        rounded-lg         
      "
    >
      <span
        className="
          text-xl          
          font-medium         
          text-gray-700      
          w-full            

        "
      >
        {text}
      </span>
    </div>
  );
}

export default DashboardMenuItem;
