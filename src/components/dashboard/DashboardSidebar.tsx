"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

type MenuItem = {
  id: string;
  label: string;
  icon: string;
};

type SidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export default function DashboardSidebar({ isCollapsed, onToggle }: SidebarProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const { logout, user } = useAuth();
  const isDark = theme === "dark";
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems: MenuItem[] = [
    { id: "dashboard", label: "Dashboard", icon: "solar:chart-bold" },
    { id: "orders", label: "Orders", icon: "solar:bag-3-bold" },
    { id: "products", label: "Products", icon: "solar:box-bold" },
    { id: "analytics", label: "Analytics", icon: "solar:graph-bold" },
    { id: "inventory", label: "Inventory", icon: "solar:clipboard-list-bold" },
    { id: "customers", label: "Customers", icon: "solar:users-group-rounded-bold" },
  ];

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    setTimeout(() => router.push("/login"), 500);
  };

  const handleMenuClick = (id: string) => {
    if (id !== "dashboard") {
      toast.info("Coming Soon");
    }
    setActiveMenu(id);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen border-r backdrop-blur-xl transition-all duration-300 z-40 ${
        isCollapsed ? "w-20" : "w-64"
      } ${
        isDark
          ? "bg-neutral-900/95 border-neutral-700/50"
          : "bg-white/95 border-gray-200/50"
      }`}
    >
      <div className="flex flex-col h-full p-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={`absolute -right-3 top-6 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
            isDark
              ? "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
              : "bg-white border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Icon
            icon={isCollapsed ? "solar:alt-arrow-right-linear" : "solar:alt-arrow-left-linear"}
            width={14}
            className={isDark ? "text-gray-400" : "text-gray-600"}
          />
        </button>

        {/* Back to Marketplace */}
        <button
          onClick={() => router.push("/marketplace")}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-6 ${
            isDark
              ? "hover:bg-neutral-800 text-gray-300"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <Icon icon="solar:shop-2-bold" width={20} className="text-[#4A7043] shrink-0" />
          <span
            className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-semibold text-sm ${
              isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
            }`}
          >
            Marketplace
          </span>
        </button>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeMenu === item.id
                  ? "bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white shadow-lg shadow-[#4A7043]/20"
                  : isDark
                  ? "hover:bg-neutral-800 text-gray-400 hover:text-gray-300"
                  : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon icon={item.icon} width={20} className="shrink-0" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-medium text-sm ${
                  isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}

          {/* Settings */}
          <div className="pt-4 border-t mt-4" style={{borderColor: isDark ? "#404040" : "#e5e7eb"}}>
            <button
              onClick={() => toast.info("Coming Soon")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isDark
                  ? "hover:bg-neutral-800 text-gray-400 hover:text-gray-300"
                  : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon icon="solar:settings-bold" width={20} className="shrink-0" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-medium text-sm ${
                  isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
                }`}
              >
                Settings
              </span>
            </button>
          </div>
        </nav>

        {/* Profile & Logout */}
        <div className="border-t pt-4" style={{borderColor: isDark ? "#404040" : "#e5e7eb"}}>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isCollapsed ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
            }`}
          >
            <div className={`px-4 py-3 rounded-xl mb-2 ${isDark ? "bg-neutral-800/50" : "bg-gray-50"}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] flex items-center justify-center text-white font-bold shrink-0">
                  {user?.email?.[0].toUpperCase() || "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {user?.email?.split("@")[0] || "User"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{user?.email || ""}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-red-500 ${
              isDark ? "hover:bg-neutral-800" : "hover:bg-red-50"
            }`}
          >
            <Icon icon="solar:logout-2-bold" width={20} className="shrink-0" />
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-medium text-sm ${
                isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
