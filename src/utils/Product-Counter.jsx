function ProductCounter({ value }) {
  return (
    <section className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
      <button
        className="
          px-3 py-1 
          bg-gray-100 
          text-gray-600 
          font-medium
          hover:bg-gray-200 
          transition 
          focus:outline-none 
          focus:ring-2 focus:ring-red-500 
          focus:z-10 
          h-full 
          cursor-pointer
        "
        aria-label="Decrement quantity"
      >
        -
      </button>

      <span
        className="
          px-4 py-1 
          text-sm font-semibold 
          text-gray-900 
          bg-white
          border-l border-r border-gray-300
          select-none
          h-full
        "
      >
        {value}
      </span>

      <button
        className="
          px-3 py-1 
          bg-gray-100 
          text-gray-600 
          font-medium
          hover:bg-gray-200 
          transition 
          focus:outline-none 
          focus:ring-2 focus:ring-red-500
          focus:z-10
          h-full
          cursor-pointer
        "
        aria-label="Increment quantity"
      >
        +
      </button>
    </section>
  );
}

export default ProductCounter;
