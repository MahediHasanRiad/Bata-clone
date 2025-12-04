import image1 from "../../Image/category/accessories_1_2d07230f-c6d9-40d0-a6d4-65e560acdf93.avif";
import image2 from "../../Image/category/kids_1_5c489cfe-ec4b-4ea2-94dc-933f182557ae_1200x_crop_center.avif";
import image3 from "../../Image/category/men_1_9aa725ad-22f1-4b68-b28e-a382799b0e19_1200x_crop_center.avif";
import image4 from "../../Image/category/women_1_8528057d-f632-4127-8c37-11acc43f717d_1200x_crop_center.avif";

function Category() {
  return (
    <section className="grid grid-cols-4 space-x-6">
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
      <div>
        <img src={image4} alt="" />
      </div>
    </section>
  );
}

export default Category;
