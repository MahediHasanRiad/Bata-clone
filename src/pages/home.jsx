import Category from "../component/Home/banner";
import Slider from "../component/Home/slider";

import poster1 from "../Image/banner/GV-new-3-web-strip-banner-25 (1).webp";
import poster2 from "../Image/banner/SF-strip-banner.webp";

// banner image
import bm1 from "../Image/banner/B-R-L-web-banner.webp";
import bm2 from "../Image/banner/ballerina-web-banner.webp";
import bm3 from "../Image/banner/Men_s-casuals-web-banner.webp";
import bm4 from "../Image/banner/SF-25-26-web-banner-com.webp";
import bm5 from "../Image/banner/Up-to-50_-off-5-web-banner_400f8e38-5628-44c2-ae9d-e115abacdc3a.webp";
import CardSlider from "../component/Home/card-slider";

function Home() {
  return (
    <section>
      {/* slider section  */}
      <Slider
        image1={bm1}
        image2={bm2}
        image3={bm3}
        image4={bm4}
        image5={bm5}
      />

      <section className="w-3/4 mx-auto">
        {/* Banner section  */}
        <section className="">
          <Category />
          <div className="w-full space-y-2">
            <img src={poster1} alt="" />
            <img src={poster2} alt="" />
          </div>
        </section>

        {/* best selling product  */}
        <section className="my-10">
          <h1 className="text-2xl font-semibold my-4">Best Seller</h1>
          <section>
              <CardSlider />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Home;
