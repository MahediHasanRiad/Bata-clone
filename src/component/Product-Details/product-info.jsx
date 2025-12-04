import ProductCounter from "../../utils/Product-Counter";
import Button from '../../utils/button'
import Size from "./size";

function ProductInfo({
  productName,
  brandName,
  productCode,
  regularPrice,
  discountedPrice,
}) {
  return (
    <section className="p-6 bg-white space-y-4">
      {/* Product Name */}
      <h1 className="text-3xl font-bold text-gray-900 leading-tight">
        {productName}
      </h1>

      {/* Brand & Code Details */}
      <div className="space-y-1 pb-2 border-b border-gray-200">
        <p className="text-lg font-semibold text-gray-700">
          <span className="text-gray-500 font-normal mr-2">Brand:</span>
          {brandName}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Product Code:</span>
          {productCode}
        </p>
      </div>

      {/* Price  */}
      <div className="flex items-baseline space-x-3 pt-2">
        <span className="text-xl text-gray-500 line-through">
          Tk {regularPrice}/-
        </span>
        <span className="text-3xl font-bold text-red-600">
          {discountedPrice}/-
        </span>
      </div>

      {/* Offer Messages */}
      <div className="pt-2 space-y-1 text-sm">
        <p className="text-red-500 font-semibold flex items-center">
          <span className="mr-1 text-base">•</span> PLEASE CHECK THE PRODUCT IN
          FRONT OF DELIVERY MAN
        </p>
        <p className="text-red-500 font-semibold flex items-center">
          <span className="mr-1 text-base">•</span> OFFER IS ONLY VALID AT
          BATABD.COM
        </p>
        <p className="text-green-600 font-bold flex items-center">
          <span className="mr-1 text-base">•</span> FREE SHIPPING
        </p>
      </div>

      {/* Product Size Selector */}
      <div className="pt-4">
        <p className="font-bold text-lg text-gray-800 mb-2">Size *</p>
        <div className="flex space-x-3">
          <Size size={"8"} />
          <Size size={"9"} />
          <Size size={"10"} />
          <Size size={"11"} />
        </div>
      </div>

      {/* product counter  */}
      <div className="flex space-x-4 my-8">
        <h1 className="text-2xl font-semibold">Quantity: </h1>
        <ProductCounter value={"1"} />
      </div>

      {/* add-to-card button  */}
      <Button text={'ADD TO CARD'} />
    </section>
  );
}

export default ProductInfo;
