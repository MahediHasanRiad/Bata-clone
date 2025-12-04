import AddressMenu from "../../../component/Dashboard/address-menu";
import DashboardMenu from "../../../component/Dashboard/Dashboard-menu";

function UserAddress() {
  return (
    <section className="w-3/4 min-h-[70vh] mx-auto flex">
      {/* ----------- left section ----------- */}
      <section className="basis-1/6">
        <DashboardMenu />
      </section>

      {/* ------------ right section -------------- */}
      <section className="w-full max-w-5xl h-[50vh] mx-auto p-6 bg-white shadow-sm overflow-y-scroll">
        <section
          className="
          flex items-center 
          bg-gray-50 
          text-gray-600 
          font-semibold 
          text-sm 
          uppercase 
          p-3 
          border-b 
          border-gray-200
        "
        >
          <span className="w-1/6">Name</span>
          <span className="w-1/4">Address</span>
          <span className="w-1/6">Post Code</span>
          <span className="w-1/6">Phone Number</span>
          <span className="w-1/4">Shipping Address</span>
          <span className="w-1/6 text-center pr-2">Actions</span>
        </section>

        {/* 2. Body (Individual Address Menu Items) */}
        <section className="divide-y divide-gray-200">
          <AddressMenu
            name={"Mahedi Hasan Riad"}
            address={"Uttora, mirput Dhaka"}
            postcode={"Mirput 1208"}
            phoneNumber={"02589658545"}
            shippingAddress={"Uttor podua"}
          />
          <AddressMenu
            name={"Mahedi Hasan Riad"}
            address={"Uttora, mirput Dhaka"}
            postcode={"Mirput 1208"}
            phoneNumber={"02589658545"}
            shippingAddress={"Uttor podua"}
          />
        </section>


        {/* add address  */}
        <section>
          <button></button>
        </section>
      </section>
    </section>
  );
}

export default UserAddress;
