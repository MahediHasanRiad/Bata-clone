import profile from "../../Image/profile/profile.png";
import Input from "../../utils/input";
import { UserRoundPen, AtSign, Contact, MapPinHouse } from "lucide-react";

function Profile() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <section className="w-full max-w-4xl min-h-[70vh] mx-auto flex bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* --------- Right Section ------------ */}
        <section className="basis-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center space-y-4">
          
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-400 shadow-xl">
            <img 
              src={profile} 
              alt="User Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* User Details */}
          <div className="text-center space-y-1">
            <p className="text-2xl font-bold">{`Mahedi Hasan Riad`}</p>
            <p className="text-sm font-light opacity-80">{`mahedihasan@gmail.com`}</p>
            <p className="text-sm font-light opacity-80">{`01854859655`}</p>
            <p className="text-sm font-light opacity-80">{`Uttora, Azomput Dhaka`}</p>
          </div>
        </section>

        {/* -------------- Left Section (Editable Inputs - Basis 2/3) --------------- */}
        <section className="basis-2/3 p-10 flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Edit Profile</h2>

          <Input icon={UserRoundPen} placeholder="Full Name" value="Mahedi Hasan Riad" />
          <Input icon={AtSign} placeholder="Email" value="riad@gmail.com" disabled={true} />
          <Input icon={Contact} placeholder="Phone Number" value="01859654562" />
          <Input icon={MapPinHouse} placeholder="Address" value="Uttora, Azomput Dhaka" />

          {/* Save Button */}
          <div className="mt-8">
            <button 
              className="
                px-6 py-2 
                rounded-lg 
                bg-red-600 
                text-white 
                font-semibold 
                shadow-md 
                float-right 
                cursor-pointer
                hover:bg-red-700
                focus:ring-4 focus:ring-indigo-300
                transition duration-150
              "
            >
              Save Changes
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Profile;