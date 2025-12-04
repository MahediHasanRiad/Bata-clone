import { Trash } from "lucide-react";
import Button from "../../utils/button";

function WishListItem({ image, name, price }) {
  return (
    <section className="flex items-center h-24 bg-white shadow-md p-2"> 
      <img 
        src={image} 
        alt={name} 
        className="basis-1/6 w-full h-full object-cover rounded-md" 
      />
      <span className="basis-2/6 px-4 font-semibold text-gray-800">{name}</span>
      <span className="basis-1/6 text-center text-lg font-medium">{price}/-</span>
      
      {/* Delete Icon */}
      <span className="basis-1/6 flex justify-center">
        <Trash color="red" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
      </span>
      
      {/* Shop Now Button */}
      <span className="basis-1/6 flex justify-center">
        <Button text={'Shop now'} />
      </span>
    </section>
  );
}

export default WishListItem;