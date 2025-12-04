function Item({ text, id }) {
  return (
    <div className="flex items-center gap-2 my-2">
      <input
        type="checkbox"
        id={id}
        className="w-4 h-4 rounded cursor-pointer"
      />
      <label htmlFor={id} className="text-gray-600 text-md cursor-pointer">
        {text}
      </label>
    </div>
  );
}
export default Item;
