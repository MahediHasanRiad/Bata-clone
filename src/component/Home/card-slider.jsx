import Card from "../../component/Home/card";

// images
import image1 from "../../Image/man/1_3812e238-6943-4eeb-8d03-d9c6555d2934_300x.avif";
import image2 from "../../Image/man/03_300x.avif";
import image3 from "../../Image/man/1_3baf70f5-9b45-4f7a-a6e7-4eba306e9d92_300x.avif";
import image4 from "../../Image/man/1_a5976897-c032-4063-b971-0b9182bfee4e_300x.avif";
import image5 from "../../Image/man/1_ebd34e85-a61c-4d8c-9058-3df1bc2817c2_300x.avif";
import image6 from "../../Image/man/1_fcdd89a1-82c9-4b0a-a6bc-77a94eb8fc7a_300x.webp";

function CardSlider() {
  return (
    <section className="grid grid-cols-5 overflow-x-scroll">
      <Card image={image1} name={"North Star Canvas Shoe"} price={"102"} />
      <Card image={image2} name={"North Star Canvas Shoe"} price={"102"} />
      <Card image={image3} name={"North Star Canvas Shoe"} price={"102"} />
      <Card image={image4} name={"North Star Canvas Shoe"} price={"102"} />
      <Card image={image5} name={"North Star Canvas Shoe"} price={"102"} />
      <Card image={image6} name={"North Star Canvas Shoe"} price={"102"} />
    </section>
  );
}

export default CardSlider;
