import { Trash, Pencil } from "lucide-react"; // Import useful icons for actions

function AddressMenu({
  name,
  address,
  postcode,
  phoneNumber,
  shippingAddress,
}) {
  return (
    // Row Container: Ensure the row is flexible, has vertical padding, and centers items.
    <section className="flex items-center text-sm text-gray-700 py-3">
      <span className="w-1/6 font-medium text-gray-800 line-clamp-1">
        {name}
      </span>
      <span className="w-1/4 line-clamp-1">{address}</span>
      <span className="w-1/6">{postcode}</span>
      <span className="w-1/6">{phoneNumber}</span>
      <span className="w-1/4 line-clamp-1">{shippingAddress}</span>
      <div className="w-1/6 flex justify-end space-x-3 pr-2">
        {/* EDIT Button */}
        <button
          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition"
          aria-label="Edit Address"
        >
          <Pencil className="w-4 h-4 mr-1" />
          <span>EDIT</span>
        </button>

        {/* DELETE Button */}
        <button
          className="text-red-500 hover:text-red-700 font-medium flex items-center transition"
          aria-label="Delete Address"
        >
          <Trash className="w-4 h-4 mr-1" />
          <span>DELETE</span>
        </button>
      </div>
    </section>
  );
}

export default AddressMenu;
