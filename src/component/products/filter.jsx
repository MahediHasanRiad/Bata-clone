import Item from "./item";

function FilterArea() {
  return <section className="w-1/5 h-screen p-6 bg-white shadow-sm">

    {/* brand section  */}
    <section className="w-auto h-1/4 overflow-y-scroll">
        <h1 className="text-2xl font-semibold my-4">Brand</h1>
        <Item text={'Bata'} />
        <Item text={'Apex'} />
        <Item text={'Lotto'} />
        <Item text={'Co-walk'} />
    </section>

    {/* size section  */}
    <section>
        <h1 className="text-2xl font-semibold my-4 overflow-y-scroll">Size</h1>
        <Item text={'8'} />
        <Item text={'9'} />
        <Item text={'10'} />
        <Item text={'11'} />
    </section>

    {/* price section  */}
    <section>
        <h1 className="text-2xl font-semibold my-4 overflow-y-scroll">Price</h1>
        <Item text={'Under 1000/-'} />
        <Item text={'Under 1001/- to 2000'} />
        <Item text={'Under 2001/- to 3000'} />
        <Item text={'Under 3001/- to 4000'} />
        <Item text={'Under 4001/- to 20000'} />
    </section>

  </section>;
}

export default FilterArea;
