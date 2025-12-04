import { Routes, Route } from "react-router";
import Login from "./pages/user/login";
import Registration from "./pages/user/registration";
import Home from "./pages/home";
import Header from "./component/navbar/header";
import Footer from "./component/navbar/footer";
import Products from "./pages/products";
import WishList from "./pages/wish-List";
import AddToCard from "./pages/Add-to-card";
import Profile from "./pages/user/profile";
import UserAddress from "./pages/user/Dashboard/User-Address";

function App() {
  return (
    <section>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<UserAddress />} />

        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Products />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/addtocard" element={<AddToCard />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
