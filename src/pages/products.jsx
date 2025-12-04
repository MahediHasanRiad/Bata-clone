import Card from "../component/Home/card";
import FilterArea from "../component/products/filter";

// image
import image1 from "../Image/man/03_300x.avif";
import PaginationControlled from "../utils/Pagination";
import SelectItem from "../utils/select-item";

function Products() {
  return (
    <section className="w-3/4 mx-auto flex my-8">
      {/* filter section  */}
      <FilterArea />

      {/* body section  */}
      <section className="w-4/5 mx-4">
        <section className="flex justify-between">
          <h1 className="text-3xl font-semibold m-6">Men Show</h1>
          <SelectItem
            heading={"Sort By ..."}
            item1={"Price, low to high"}
            item2={"Price, high to low"}
            item3={"new arraivel"}
          />
        </section>

        <section className="grid grid-cols-4">
          <Card image={image1} name={"Men Show"} price={"2000"} />
          <Card image={image1} name={"Men Show"} price={"2000"} />
          <Card image={image1} name={"Men Show"} price={"2000"} />
          <Card image={image1} name={"Men Show"} price={"2000"} />
          <Card image={image1} name={"Men Show"} price={"2000"} />
          <Card image={image1} name={"Men Show"} price={"2000"} />
        </section>

        {/* ----- pagination -------  */}
        <PaginationControlled />
      </section>

      <section>
      </section>
    </section>
  );
}

export default Products;
