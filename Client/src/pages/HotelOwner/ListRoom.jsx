import { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {

    const [rooms, setRooms] = useState(roomsDummyData)
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 p-6">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <Title title="List Room" align="left" font="outfit" subTitle="view, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users" />
                
                {/* Room List Section */}
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl mt-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">All Rooms</h2>
                        <p className="text-slate-600 text-sm">Manage room availability and view details</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="max-h-80 overflow-y-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 sticky top-0">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-semibold text-slate-700 text-sm">
                                            Name
                                        </th>
                                        <th className="py-4 px-6 text-left font-semibold text-slate-700 text-sm max-sm:hidden">
                                            Facility
                                        </th>
                                        <th className="py-4 px-6 text-center font-semibold text-slate-700 text-sm">
                                            Price/Night
                                        </th>
                                        <th className="py-4 px-6 text-center font-semibold text-slate-700 text-sm">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-slate-100">
                                    {
                                        rooms?.map((data, index) => {
                                            return (
                                                <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                                                    <td className="py-4 px-6 text-slate-800 font-medium">
                                                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                                                            {data.roomType}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-slate-600 max-sm:hidden">
                                                        <div className="flex flex-wrap gap-1">
                                                            {data.amenities.slice(0, 3).map((amenity, idx) => (
                                                                <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                                                                    {amenity}
                                                                </span>
                                                            ))}
                                                            {data.amenities.length > 3 && (
                                                                <span className="text-slate-500 text-xs">+{data.amenities.length - 3} more</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <span className="font-bold text-slate-800">${data.pricePerNight}</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="flex justify-center items-center">
                                                            <label className="relative inline-flex items-center cursor-pointer">
                                                                <input type="checkbox" className="sr-only peer" checked={data.isAvailable} />
                                                                <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600 transition-all duration-300 shadow-lg peer-checked:shadow-blue-500/25"></div>
                                                                <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5 shadow-md">
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListRoom;