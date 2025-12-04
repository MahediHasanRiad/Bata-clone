import { NavLink } from "react-router";

function MenuItem({ text, link }) {
  return (
    <div className="hover:text-red-500 transition delay-75 tracking-wide">
      <NavLink
        to={`/${link}`}
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        {text}
      </NavLink>
    </div>
  );
}

export default MenuItem;
