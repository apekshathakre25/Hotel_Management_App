import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isLoaded } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to={"/"} className="hover:opacity-80 transition-opacity">
        <img src={assets.logo} className="h-9 invert opacity-80" alt="Hotel Management Logo" />
      </Link>

      {isLoaded ? (
        <UserButton />
      ) : (
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default Navbar;
