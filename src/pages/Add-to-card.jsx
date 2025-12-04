import CardItem from "../component/Add-to-card/Card-Item";
import PriceItem from "../component/Add-to-card/price-item";

// image
import image1 from "../Image/women/1_258618b4-134b-4214-9448-12784d4ff47f_300x.avif";
import Button from "../utils/button";

function AddToCard() {
  return (
    // ---------- left section ----------
    
    <section className=" bg-gray-50">
      <section className="w-3/5 mx-auto flex h-screen space-x-4 p-4 rounded-sm">
        {/* product display section  */}
        <section className="basis-3/4 h-3/5">
          <CardItem
            image={image1}
            name={"New Air 5"}
            brandName={"Bata"}
            discountedPrice={"550"}
            regularPrice={"1020"}
          />
        </section>

      {/* --------- right section ------------ */}

        {/* total price section  */}
        <section className="basis-1/4 h-2/5 p-4 bg-white shadow-sm flex flex-col">
          <h1 className="text-2xl font-semibold">Order Summary</h1>

          {/* total calculation  */}
          <PriceItem text={"Total Items"} total={"10"} />
          <PriceItem text={"Shipping Fee"} total={"70"} />

          {/* cupon  */}
          <div className="flex">
            <input
              type="text"
              placeholder="CUPON"
              className="py-2 px-4 border border-gray-200 rounded"
            />
            <button className="border border-gray-100 px-4 py-2 bg-red-500 text-white cursor-pointer">
              ADD
            </button>
          </div>

          {/* total Price and submit */}
          <div className="mt-auto">
            <PriceItem text={"Total Price"} total={"550"} />
            <Button text={"PROCEED TO CHECKOUT"} />
          </div>
        </section>
      </section>
    </section>
  );
}

export default AddToCard;
