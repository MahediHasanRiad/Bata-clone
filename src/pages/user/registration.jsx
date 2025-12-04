import { UserPen, Mail, BookUser, LockKeyhole } from "lucide-react";
import Input from "../../utils/input";
import Button from "../../utils/button";

function Registration() {
  return (
    <section className="w-screen h-screen bg-gray-100 content-center">
      <section className="w-2/6 h-4/6 bg-white rounded m-auto content-center">
        <h1 className="text-3xl text-red-500 text-center">Sign Up</h1>
        <Input icon={UserPen} placeholder={"Mahedi Hasan Riad"} />
        <Input icon={Mail} placeholder={"example@gmail.com"} />
        <Input icon={BookUser} placeholder={"015************"} />
        <Input icon={LockKeyhole} placeholder={"************"} />

        <div className="flex max-w-md mx-auto space-x-2 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <span>Accept all Term's and Conditions.</span>
        </div>

        {/* sign up Button  */}
        <div className="max-w-md mx-auto my-4">
            <Button text={'Sign Up'} />
        </div>
      </section>
    </section>
  );
}

export default Registration;
