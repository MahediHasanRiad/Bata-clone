import { UserPen, LockKeyhole } from "lucide-react";
import Input from "../../utils/input";
import Button from "../../utils/button";
import { Link } from "react-router";

function Login() {
  return (
    <section className="bg-gray-100 h-screen w-screen justify-items-center content-center">
      <section className="w-2/6 h-2/4 bg-white rounded-2xl justify-items-center space-x-4 pt-6">
        <div>
          <p className="text-3xl font-semibold text-red-500 text-center pt-6">
            LogIn
          </p>
        </div>

        <div>
          <Input icon={UserPen} placeholder={"example@gmail.com"} />
          <Input icon={LockKeyhole} placeholder={"**************"} />
        </div>

        {/* signup link  */}
        <div>
          <Link
            to={"/signup"}
            className="underline decoration-2 mb-4 decoration-red-200 italic"
          >
            Create New Account
          </Link>
        </div>

        {/* login Button  */}
        <div className="w-2/4 pt-6">
          <Button text={"Log In"} />
        </div>
      </section>
    </section>
  );
}

export default Login;
