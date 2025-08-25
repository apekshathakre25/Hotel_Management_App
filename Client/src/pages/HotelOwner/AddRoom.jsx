import { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
    const [images, setImages] = useState({
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    })

    const [input, setInput] = useState({
        roomType: "",
        price: "",
        description: "",
        amenities: {
            "Free Wifi": false,
            "Free Breakfast": false,
            "Room Service": false,
            "Pool Access": false,
            "Mountain View": false,
        }
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Room data:', { images, ...input });
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Title 
                    align="center" 
                    title="Add New Room" 
                    subTitle="Create an attractive room listing with detailed information to enhance guest booking experience" 
                />
                
                <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                    {/* Image Upload Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Room Images
                        </h3>
                        <p className="text-gray-600 mb-6">Upload high-quality images to showcase your room (Maximum 4 images)</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.keys(images).map((key, index) => (
                                <div key={key} className="space-y-3">
                                    <label className="block text-sm font-medium text-gray-700 capitalize">
                                        Image {index + 1}
                                    </label>
                                    <label htmlFor={`roomImage${key}`} className="cursor-pointer group">
                                        <div className="relative w-full h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-all duration-200 group-hover:bg-blue-50">
                                            {images[key] ? (
                                                <img 
                                                    src={URL.createObjectURL(images[key])} 
                                                    className="w-full h-full object-cover rounded-lg" 
                                                    alt={`Room ${index + 1}`}
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-full text-gray-400 group-hover:text-blue-500">
                                                    <img src={assets.uploadArea} className="w-8 h-8 mb-2" alt="Upload" />
                                                    <span className="text-xs font-medium">Click to upload</span>
                                                </div>
                                            )}
                                        </div>
                                    </label>
                                    <input 
                                        id={`roomImage${key}`} 
                                        hidden 
                                        type="file" 
                                        accept="image/*" 
                                        name={key} 
                                        onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Room Details Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Room Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Room Type *
                                </label>
                                <select 
                                    name="roomType" 
                                    value={input.roomType}
                                    onChange={handleInput}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                                    required
                                >
                                    <option value="">Select Room Type</option>
                                    <option value="Single">Single Room</option>
                                    <option value="Double">Double Room</option>
                                    <option value="Suite">Suite</option>
                                    <option value="Deluxe">Deluxe Room</option>
                                    <option value="Presidential">Presidential Suite</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price per Night *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-500 font-medium">$</span>
                                    <input 
                                        type="number" 
                                        name="price" 
                                        value={input.price}
                                        onChange={handleInput}
                                        placeholder="0.00"
                                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        required
                                        min="0"
                                        step="0.01"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Room Description
                            </label>
                            <textarea
                                name="description"
                                value={input.description}
                                onChange={handleInput}
                                rows={4}
                                placeholder="Describe the room features, size, view, and any special characteristics..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                            />
                        </div>
                    </div>

                    {/* Amenities Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            Room Amenities
                        </h3>
                        <p className="text-gray-600 mb-6">Select all amenities available in this room</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.keys(input.amenities).map((amenity) => (
                                <label key={amenity} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group">
                                    <input
                                        type="checkbox"
                                        name={amenity}
                                        checked={input.amenities[amenity]}
                                        onChange={(e) => setInput({
                                            ...input,
                                            amenities: {
                                                ...input.amenities,
                                                [amenity]: e.target.checked,
                                            }
                                        })}
                                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <span className="ml-3 text-gray-700 font-medium group-hover:text-gray-900">{amenity}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Add Room
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default AddRoom;
