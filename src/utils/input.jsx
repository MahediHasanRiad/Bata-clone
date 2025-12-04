function Input({ icon: Icon, placeholder = '', value = '', disabled = false, type = 'text' }) {
  return (
    <div className="flex w-full max-w-md mx-auto my-6">
      <div className="flex items-center w-full bg-gray-100 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500 transition duration-150 ease-in-out p-3">
        <div className="text-gray-500 mr-3">
          <Icon className="w-5 h-5" />
        </div>

        <input
          type= {type}
          placeholder={placeholder}
          disabled = {disabled}
          value={value}
          className="w-full bg-transparent border-none outline-none focus:ring-0 text-gray-800 placeholder-gray-500"
        />
      </div>
    </div>
  );
}

export default Input;
