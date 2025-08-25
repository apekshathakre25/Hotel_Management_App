import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets"
const Sidebar = () => {

    const sidebarLink = [
        { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        { name: "Add Rooms", path: "/owner/add-rooms", icon: assets.addIcon },
        { name: "List Rooms", path: "/owner/list-rooms", icon: assets.listIcon },
    ]


    return (
        <>
            <div className="md:w-64 w-16 h-full text-base pt-6 flex flex-col transition-all duration-300">
                {/* Header */}


                {/* Navigation Links */}
                <nav className="flex-1 px-2 md:px-4">
                    {sidebarLink.map((item, i) => (
                        <NavLink
                            to={item.path}
                            key={i}
                            end={item.path === "/owner"}
                            className={({ isActive }) =>
                                `group flex items-center py-3 px-3 md:px-4 gap-3 mb-2 rounded-xl transition-all duration-200 relative overflow-hidden ${isActive
                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-[1.02]"
                                    : "hover:bg-white hover:shadow-md text-slate-700 hover:text-slate-900 hover:transform hover:scale-[1.01]"
                                }`
                            }
                        >
                            {/* Background decoration for active state */}


                            <div className="relative z-10 flex items-center gap-3 w-full">
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-6 h-6 invert transition-transform duration-200 group-hover:scale-110"
                                    />
                                </div>
                                <p className="md:block hidden font-medium transition-all duration-200">
                                    {item.name}
                                </p>
                            </div>
                        </NavLink>
                    ))}
                </nav>



            </div>
        </>
    )
}

export default Sidebar;