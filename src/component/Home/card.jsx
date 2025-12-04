import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function Card({ image, name, price }) {
  return (
    <Link to={"/"}>
      <section className="rounded p-4  bg-white shadow-md m-2">
        {/* image section  */}
        <div>
          <img
            src={image}
            alt={name}
            className="hover:delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 h-50"
          />
        </div>
        <div className="space-y-3">
          {/* name section  */}
          <p className="font-semibold">{name}</p>

          {/* price section  */}
          <p className="font-semibold">Price: {price}/-</p>

          {/* rating section  */}
          <p className="flex space-y-1">
            <Star strokeWidth={1} />
            <Star strokeWidth={1} />
            <Star strokeWidth={1} />
          </p>

          {/* button section  */}
          <section className="flex justify-between pt-2 items-center">
            <div className="px-4 py-2 bg-red-500 text-white rounded-xl">
              <button>Shop now</button>
            </div>
            <div className="space-x-2">
              <button className="cursor-pointer">
                <Heart />
              </button>
              <button className="cursor-pointer">
                <ShoppingCart />
              </button>
            </div>
          </section>
        </div>
      </section>
    </Link>
  );
}

export default Card;
