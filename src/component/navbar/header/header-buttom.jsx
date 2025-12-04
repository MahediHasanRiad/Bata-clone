import MenuItem from "./MenuItem";

function HeaderButtom() {
  return (
    <section className="justify-items-center">
      <section className="flex items-center w-3/4 h-15 space-x-6 my-4 font-semibold">
        <MenuItem link={'mega-deals'} text={'Mega Deals'}/>
        <MenuItem link={'sneaker-studio'} text={'Sneaker Studio'}/>
        <MenuItem link={'men'} text={'Men'}/>
        <MenuItem link={'women'} text={'Women'}/>
        <MenuItem link={'children'} text={'Children'}/>
        <MenuItem link={'accessories'} text={'Accessories'}/>
        <MenuItem link={'club'} text={'Club'}/>
        <MenuItem link={'blog'} text={'Blog'}/>
      </section>


      {/* mobile  */}
    </section>
  );
}

export default HeaderButtom;
