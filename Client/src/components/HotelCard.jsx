import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ rooms, index }) => {
  return (
    <Link
      to={`/rooms/${rooms._id}`}
      className="relative max-w-sm w-full rounded-xl overflow-hidden bg-white text-gray-500 shadow-lg hover:shadow-xl transition-shadow duration-300 block"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="relative">
        <img 
          src={rooms.images[0]} 
          alt={rooms.name}
          className="w-full h-64 object-cover"
        />
        
        {index % 2 === 0 && (
          <span className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-xl font-medium text-gray-800 truncate">
            {rooms.hotel.name}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
            <span className="text-gray-600">4.5</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <span className="truncate">{rooms.hotel.address}</span>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-xl font-semibold text-gray-800">
              ${rooms.pricePerNight}
            </span>
            <span className="text-gray-600">/night</span>
          </div>
          <button className="px-4 py-2 cursor-pointer text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;