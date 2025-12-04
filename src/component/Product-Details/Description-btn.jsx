import { NavLink } from "react-router";

function DescriptionBtn({ text }) {
  return (
    <NavLink
      to={`#`}
      style={({ isActive }) => ({ background: isActive ? "white" : "gray" })}
    >
      <div className="px-8 py-4 bg-gray-100 font-semibold cursor-pointer">
        <span>{text}</span>
      </div>
    </NavLink>
  );
}

export default DescriptionBtn;
