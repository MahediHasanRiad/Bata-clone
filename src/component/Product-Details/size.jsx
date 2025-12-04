function Size({ size }) {
  return (
    <div className="px-4 py-2 mx-2 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-100">
      <span>{size}</span>
    </div>
  );
}

export default Size;
