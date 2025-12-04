import { MapPin, Handbag, Heart, UserPen } from "lucide-react";
import logo from "../../../Image/logo.png";
import { Link } from "react-router";
import DropDownMenu from "../../../utils/DropDownMenu";
import MenuItem from "@mui/material/MenuItem";

function HeaderTop() {
  return (
    <section className="w-screen bg-gray-50 items-center justify-items-center p-4">
      {/* location  */}
      <section className="flex w-3/4 space-x-4 justify-between ">
        <div className="flex items-center ">
          <MapPin size={20} strokeWidth={1} className="hidden md:block " />
          <span className="ms-2 hidden md:block ">
            Find A Store | Customer care: 09666200300
          </span>
        </div>

        {/* logo  */}
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        {/* search  */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent p-4 rounded-md w-70 h-10 border-1 border-gray-200"
          />
        </div>

        {/* favourite / card / profile  */}
        <div className=" flex space-x-4">
          <Link to={"/addtocard"}>
            <Handbag size={30} strokeWidth={1} />
          </Link>
          <Link to={"/wishlist"}>
            <Heart size={30} strokeWidth={1} />
          </Link>

          {/* profile section  */}
          <DropDownMenu>
            <Link to={"/profile"}>
              <MenuItem>Profile</MenuItem>
            </Link>
            <Link to={"dashboard"}>
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link to={"/login"}>
              <MenuItem>Log-out</MenuItem>
            </Link>
          </DropDownMenu>
        </div>
      </section>
    </section>
  );
}

export default HeaderTop;
