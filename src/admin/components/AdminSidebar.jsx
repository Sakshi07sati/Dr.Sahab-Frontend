import React, { useState } from "react";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  ShoppingCart,
  Tag,
  Users,
  MessageSquare,
  ShoppingBag,
  X,
  ShoppingCartIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../global_redux/features/auth/authSlice";
// import { logout } from "@/global_redux/features/auth/authSlice";

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      id: "users",
      name: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      id: "bookings",
      name: "Bookings",
      icon: ShoppingCartIcon,
      path: "/admin/bookings",
    },
    {
      id: "Clinic",
      name: "Clinics",
      icon: Package,
      // path: "/admin/create-clinic",
      subItems: [
        {
          id: "allClinics",
          name: "Manage Clinics",
          path: "/admin/all-clinics",
        },
        {
          id: "createClinic",
          name: "Create Clinic",
          path: "/admin/create-clinic",
        },
      ],
    },
  ];

  const toggleSubMenu = (itemId) => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
    setOpenSubMenu(openSubMenu === itemId ? null : itemId);
  };

  const handleLogout = () => {
    // Implement logout logic here
    dispatch(logout());
    localStorage.removeItem("admintoken");
    navigate("/admin/login");
  }

  return (
    <div
      className={`bg-gray-900 text-white sticky top-0 h-screen flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1
          className={`font-bold text-xl transition-all duration-300 ${
            sidebarOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          ADMIN
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.subItems ? (
              <>
                {/* Parent Button with SubMenu */}
                <button
                  onClick={() => toggleSubMenu(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-800 transition-all ${
                    openSubMenu === item.id ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && (
                      <span className="whitespace-nowrap">{item.name}</span>
                    )}
                  </div>
                  {sidebarOpen && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openSubMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {openSubMenu === item.id && sidebarOpen && (
                  <div className="bg-gray-800">
                    {item.subItems.map((sub) => (
                      <NavLink
                        key={sub.id}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 ml-6 pl-7 border-l-2 border-gray-500 text-sm hover:bg-gray-700 transition-colors ${
                            isActive ? "bg-gray-700 text-white" : "text-gray-300"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Regular Menu Item
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-800 transition-all ${
                    isActive ? "bg-gray-800 border-l-4 border-blue-500" : ""
                  }`
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-800 p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {sidebarOpen && (
            <span className="whitespace-nowrap">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;