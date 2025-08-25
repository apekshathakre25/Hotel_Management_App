import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setImage] = useState(null);

  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setImage(foundRoom.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
          {/* Header Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {room.hotel.name}
                  <span className="text-2xl md:text-3xl text-gray-600 ml-2">({room.roomType})</span>
                </h1>
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mt-3 shadow-lg">
                  <span className="animate-pulse mr-1">🔥</span>
                  20% Off - Limited Time
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <StarRating rating={room.rating} />
                <span className="text-lg font-semibold text-gray-700">{room.rating}</span>
                <span className="text-gray-500">•</span>
                <p className="text-gray-600 font-medium">200+ Reviews</p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <div className="p-2 bg-blue-100 rounded-full">
                  <img src={assets.locationIcon} className="w-4 h-4" alt="Location" />
                </div>
                <span className="font-medium">{room.hotel.address}</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2 w-full">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={mainImage}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Main room view"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
                {room?.images.length > 1 &&
                  room.images.map((image, index) => {
                    return (
                      <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                        <img
                          onClick={() => setImage(image)}
                          className={`w-full h-44 object-cover cursor-pointer transition-all duration-300 group-hover:scale-105 ${
                            mainImage === image 
                              ? "ring-4 ring-blue-500 ring-offset-2" 
                              : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-1"
                          }`}
                          src={image}
                          alt={`Room view ${index + 1}`}
                        />
                        {mainImage === image && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Amenities and Pricing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Experience Luxury Like Never Before
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {room.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:from-blue-100 hover:to-purple-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:scale-105"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <img src={facilityIcons[item]} className="w-5 h-5" alt={item} />
                      </div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:text-right">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <p className="text-sm font-medium opacity-90">Starting from</p>
                      <p className="text-2xl font-bold">${room.pricePerNight}</p>
                      <p className="text-sm opacity-90">/night</p>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Book Your Stay
              </h3>
              <p className="text-gray-600">Select your dates and number of guests</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <label htmlFor="checkInDate" className="block text-sm font-semibold text-gray-700">
                  Check-In
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="checkInDate"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white/80"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="checkOutDate" className="block text-sm font-semibold text-gray-700">
                  Check-Out
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="checkOutDate"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white/80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700">
                  Guests
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="guests"
                    placeholder="1"
                    min="1"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white/80"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Check Availability
              </button>
            </form>
          </div>

          {/* Room Specifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Room Features & Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roomCommonData.map((spec, index) => {
                return (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 hover:from-blue-100/50 hover:to-purple-100/50 transition-all duration-300 hover:shadow-md">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <img src={spec.icon} className="w-6 h-6" alt={spec.title} />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{spec.title}</p>
                      <p className="text-gray-600 mt-1 leading-relaxed">{spec.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About This Property
            </h3>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-gray-600 leading-relaxed">
                Guests will be allocated on the ground floor according to
                availability. You get a comfortable Two bedroom apartment has a true
                city feeling. The price quoted is for two guest, at the guest slot
                please mark the number of guests to get the exact price for groups.
                The Guests will be allocated ground floor according to availability.
                You get the comfortable two bedroom apartment that has a true city
                feeling.
              </p>
            </div>
          </div>

          {/* Host Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Your Host
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={room.hotel.owner.image}
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-4 ring-blue-100 shadow-lg"
                    alt="Host"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-800">Hosted by {room.hotel.name}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <StarRating rating={4.8} />
                    <span className="text-lg font-semibold text-gray-700">4.8</span>
                    <span className="text-gray-500">•</span>
                    <p className="text-gray-600 font-medium">200+ Reviews</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Superhost • Joined in 2020</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Host
              </button>
            </div>
          </div>
        </div>
        </div>
      )
    );
  };

  export default RoomDetail;
