import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import Title from "../components/Title";

const Checkbox = ({ label, selected = false, onchange = () => { } }) => {
  return (
    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onchange(e.target.checked, label)}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded border-2 transition-all duration-300 ${selected
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 shadow-lg'
            : 'border-gray-300 group-hover:border-blue-400'
          }`}>
          {selected && (
            <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 capitalize">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onchange = () => { } }) => {
  return (
    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          checked={selected}
          onChange={(e) => onchange(label)}
          className="sr-only"
        />
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${selected
            ? 'border-blue-500 shadow-lg'
            : 'border-gray-300 group-hover:border-blue-400'
          }`}>
          {selected && (
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full absolute top-1 left-1"></div>
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roomTypes: [],
    priceRanges: [],
    sortBy: ""
  });
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const roomTypes = ["single bed", "double bed", "luxury room", "family suite"];
  const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  const handleFilterChange = (checked, label, type) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: checked
        ? [...prev[type], label]
        : prev[type].filter(item => item !== label)
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({ roomTypes: [], priceRanges: [], sortBy: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 pt-28 py-16 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Enhanced Header Section */}


        <Title
          title="Luxury Hotel Rooms"
          subTitle="Discover exceptional accommodations with premium amenities and unparalleled comfort."

        />

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* View Toggle and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">{roomsDummyData.length}</span> rooms available
                </p>
                <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'list'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2h4a1 1 0 100-2H3zM3 7a1 1 0 000 2h4a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM11 3a1 1 0 100 2h4a1 1 0 100-2h-4zM11 7a1 1 0 100 2h4a1 1 0 100-2h-4zM11 11a1 1 0 100 2h4a1 1 0 100-2h-4z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Room Cards */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-8'}>
              {roomsDummyData.map((room, index) => {
                return (
                  <div
                    key={`${room._id}-${index}`}
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : 'flex flex-col'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-2/5' : 'w-full'
                      }`}>
                      <img
                        onClick={() => {
                          navigate(`/rooms/${room._id}`);
                          scrollTo(0, 0);
                        }}
                        src={room.images[0]}
                        className={`w-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110 ${viewMode === 'list' ? 'h-64 md:h-full' : 'h-64'
                          }`}
                        title="View Room Details"
                        alt={room.hotel.name}
                      />

                      {/* Overlay Elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Favorite Button */}
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                        <svg className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Premium Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Premium
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-6 flex flex-col justify-between ${viewMode === 'list' ? 'md:w-3/5' : 'w-full'
                      }`}>
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {room.hotel.city}
                          </span>
                          <div className="flex items-center gap-1">
                            <StarRating rating={room.rating} />
                            <span className="text-sm text-gray-600 ml-1">({room.rating})</span>
                          </div>
                        </div>

                        <h3
                          onClick={() => {
                            navigate(`/rooms/${room._id}`);
                            scrollTo(0, 0);
                          }}
                          className="text-xl md:text-2xl font-playfair font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-300 mb-2 line-clamp-2"
                        >
                          {room.hotel.name}
                        </h3>

                        <div className="flex items-start gap-2 text-gray-600 mb-4">
                          <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm leading-relaxed">{room.hotel.address}</span>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.amenities.slice(0, 4).map((item, amenityIndex) => {
                            return (
                              <div
                                key={`${item}-${amenityIndex}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                              >
                                <img
                                  src={facilityIcons[item]}
                                  className="w-4 h-4"
                                  alt={item}
                                />
                                <span className="text-xs font-medium text-gray-700">{item}</span>
                              </div>
                            );
                          })}
                          {room.amenities.length > 4 && (
                            <div className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                              +{room.amenities.length - 4} more
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-gray-800">${room.pricePerNight}</span>
                            <span className="text-sm text-gray-500">/night</span>
                          </div>
                          <p className="text-xs text-green-600 font-medium">Free cancellation</p>
                        </div>

                        <button
                          onClick={() => {
                            navigate(`/rooms/${room._id}`);
                            scrollTo(0, 0);
                          }}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Filters Sidebar */}
          <div className="lg:w-80 w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 sticky top-8 overflow-hidden">
              {/* Filter Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setOpenFilters(!openFilters)}
                      className="lg:hidden text-white/80 hover:text-white transition-colors"
                    >
                      {openFilters ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={clearAllFilters}
                      className="hidden lg:block text-xs text-white/80 hover:text-white transition-colors font-medium"
                    >
                      CLEAR ALL
                    </button>
                  </div>
                </div>
              </div>

              {/* Filter Content */}
              <div className={`transition-all duration-500 overflow-hidden ${openFilters ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:max-h-screen lg:opacity-100'
                }`}>
                <div className="p-6 space-y-8">
                  {/* Room Types */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Room Types</h4>
                    </div>
                    <div className="space-y-1">
                      {roomTypes.map((room, index) => (
                        <Checkbox
                          key={`room-${index}`}
                          label={room}
                          selected={selectedFilters.roomTypes.includes(room)}
                          onchange={(checked, label) => handleFilterChange(checked, label, 'roomTypes')}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Price Range</h4>
                    </div>
                    <div className="space-y-1">
                      {priceRanges.map((range, index) => (
                        <Checkbox
                          key={`price-${index}`}
                          label={`$${range}`}
                          selected={selectedFilters.priceRanges.includes(`$${range}`)}
                          onchange={(checked, label) => handleFilterChange(checked, label, 'priceRanges')}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-800">Sort By</h4>
                    </div>
                    <div className="space-y-1">
                      {sortOptions.map((option, index) => (
                        <RadioButton
                          key={`sort-${index}`}
                          label={option}
                          selected={selectedFilters.sortBy === option}
                          onchange={(label) => setSelectedFilters(prev => ({ ...prev, sortBy: label }))}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
