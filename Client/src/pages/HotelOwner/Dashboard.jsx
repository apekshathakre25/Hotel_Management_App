import { useState } from "react";
import { assets, dashboardDummyData } from "../../assets/assets";
import Title from "../../components/Title"

const Dashboard = () => {

    const [bookingDatas, setBookingDatas] = useState(dashboardDummyData)
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 p-6">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <Title align={"left"} font="outfit" title="Dashboard" subTitle="Monitor your room listings, track bookings and analyze revenue-all in one place. stay updated with real-time insights to ensure smooth operations" />

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                                <img src={assets.totalBookingIcon} className="h-8 w-8 filter brightness-0 invert" alt="Total Bookings" />
                            </div>
                            <div className="ml-6">
                                <p className="text-slate-600 text-sm font-medium mb-1">Total Bookings</p>
                                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{bookingDatas?.totalBookings}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                                <img src={assets.totalRevenueIcon} className="h-8 w-8 filter brightness-0 invert" alt="Total Revenue" />
                            </div>
                            <div className="ml-6">
                                <p className="text-slate-600 text-sm font-medium mb-1">Total Revenue</p>
                                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$ {bookingDatas?.totalRevenue}</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Recent Bookings Section */}
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">Recent Bookings</h2>
                        <p className="text-slate-600 text-sm">Latest booking activities and payment status</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="max-h-80 overflow-y-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 sticky top-0">
                                    <tr>
                                        <th className="py-4 px-6 text-left font-semibold text-slate-700 text-sm">
                                            User Name
                                        </th>
                                        <th className="py-4 px-6 text-left font-semibold text-slate-700 text-sm max-sm:hidden">
                                            Room Name
                                        </th>
                                        <th className="py-4 px-6 text-center font-semibold text-slate-700 text-sm">
                                            Total Amount
                                        </th>
                                        <th className="py-4 px-6 text-center font-semibold text-slate-700 text-sm">
                                            Payment Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-slate-100">
                                    {
                                        bookingDatas?.bookings?.map((data, index) => {
                                            return (
                                                <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                                                    <td className="py-4 px-6 text-slate-800 font-medium">
                                                        <div className="flex items-center">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                                                                {data.user.username.charAt(0).toUpperCase()}
                                                            </div>
                                                            {data.user.username}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-slate-600 max-sm:hidden">
                                                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                                                            {data.room.roomType}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <span className="font-bold text-slate-800">${data.totalPrice}</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="flex flex-col items-center gap-1">
                                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                                data.isPaid 
                                                                    ? "bg-green-100 text-green-700 border border-green-200" 
                                                                    : "bg-orange-100 text-orange-700 border border-orange-200"
                                                            }`}>
                                                                {data.isPaid ? "Completed" : "Pending"}
                                                            </span>
                                                            <span className={`text-xs font-medium ${
                                                                data.isPaid ? "text-green-600" : "text-red-600"
                                                            }`}>
                                                                {data.isPaid ? "Paid" : "Not Paid"}
                                                            </span>
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
    );
};

export default Dashboard;
