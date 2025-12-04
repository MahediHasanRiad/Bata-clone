import { Trash } from "lucide-react";

function CardItem({ image, name, brandName, discountedPrice, regularPrice }) {
  return (
    <section className="h-24 flex items-center bg-white shadow-md rounded-lg p-3 my-4 border border-gray-100 hover:shadow-lg transition duration-200">
      {/* 1. Product Image & Details */}
      <div className="flex items-center space-x-4 flex-grow basis-4/12">
        {/* Image Container */}
        <div className="flex-shrink-0 w-16 h-16">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md border border-gray-200"
          />
        </div>

        {/* Name and Brand */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800 line-clamp-2">
            {name}
          </span>
          <span className="text-xs text-gray-500">{brandName}</span>
        </div>
      </div>

      {/* 2. Price */}
      <div className="flex flex-col justify-center basis-2/12 text-center ml-auto">
        <p className="text-base font-bold text-indigo-600">
          {discountedPrice}/-
        </p>
        <p className="text-xs text-gray-400 line-through">{regularPrice}/-</p>
      </div>

      {/* 3. Quantity Counter */}
      <div className="flex items-center justify-center space-x-0 basis-3/12 mx-4">
        <button className="px-3 py-1 bg-gray-100 border border-r-0 rounded-l-md text-gray-600 hover:bg-gray-200 transition focus:outline-none cursor-pointer">
          -
        </button>

        <span className="px-4 py-1 border-t border-b text-sm font-medium text-gray-800">
          1
        </span>

        <button className="px-3 py-1 bg-gray-100 border border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200 transition focus:outline-none cursor-pointer">
          +
        </button>
      </div>

      <div className="basis-1/12 flex justify-end">
        <button aria-label="Remove item from cart">
          <Trash
            color="#ef4444"
            className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
          />
        </button>
      </div>
    </section>
  );
}

export default CardItem;
