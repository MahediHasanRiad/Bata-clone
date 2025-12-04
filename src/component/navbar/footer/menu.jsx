import { Link } from "react-router";

function Menu({
  heading = "",
  text1 = "",
  text2 = "",
  text3 = "",
  text4 = "",
  text5 = "",
  text6 = "",
}) {
  return (
    <section className="text-white grid grid-rows space-y-2">
      <p className="font-semibold text-2xl">{heading}</p>
      <br />
      <Link to={"#"}>{text1}</Link>
      <Link to={"#"}>{text2}</Link>
      <Link to={"#"}>{text3}</Link>
      <Link to={"#"}>{text4}</Link>
      <Link to={"#"}>{text5}</Link>
      <Link to={"#"}>{text6}</Link>
    </section>
  );
}

export default Menu;
