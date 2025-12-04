import Description from "../component/Product-Details/description";
import DescriptionBtn from "../component/Product-Details/Description-btn";
import Images from "../component/Product-Details/images";
import ProductInfo from "../component/Product-Details/product-info";

// image
import image1 from "../Image/man/single/1_bbab7cc0-f53a-4045-820b-f4a1d01be5d3_1024x1024.webp";
import image2 from "../Image/man/single/2_95a096e7-7c1e-42cd-aebe-6d05f20c397a_1024x1024.webp";
import image3 from "../Image/man/single/3_469bdefc-d811-4c89-81da-3a6c3f2ccb56_1024x1024.webp";
import image4 from "../Image/man/single/4_4d7ea3cc-1ed7-49af-802a-9f47a7580590_1024x1024.webp";
import image5 from "../Image/man/single/5_fa049801-28e4-40df-a3ca-8f2daad0609d_1024x1024 (1).webp";

function ProductDetails({}) {
  return (
    <section className="w-3/4 mx-auto mb-40">
      {/* --------- product ----------- */}
      <section className="flex my-8">
        <section className="w-1/2">
          <Images
            img1={image1}
            img2={image2}
            img3={image3}
            img4={image4}
            img5={image5}
          />
        </section>

        {/* product information  */}
        <section className="w-1/2">
          <ProductInfo
            productName={"Air Jordan 1"}
            brandName={"Bata"}
            productCode={"#1526325"}
            regularPrice={"1200"}
            discountedPrice={"850"}
          />
        </section>
      </section>

      {/* ------------ Product Description ----------------- */}
      <section>
        {/* buttons  */}
        <section className="flex px-4">
          <DescriptionBtn text={"DESCRIPTION"} />
          <DescriptionBtn text={`TERM'S AND CONDITION`} />
          <DescriptionBtn text={"SIZE CHART"} />
        </section>

        {/* description  */}
        <section>
          <Description/>
        </section>
      </section>
    </section>
  );
}

export default ProductDetails;
