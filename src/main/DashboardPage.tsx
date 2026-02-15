"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import RevenueChart from "../components/dashboard/RevenueChart";

type KPI = {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  color: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const { isAuthenticated, isLoggingOut } = useAuth();
  const isDark = theme === "dark";
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const periodOptions = [
    { label: "Last 7 Days", value: "7d" },
    { label: "Last 30 Days", value: "30d" },
  ];
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  useEffect(() => {
    if (!isAuthenticated && !isLoggingOut) {
      toast.error("Please login to access dashboard");
      router.push("/login");
    }
  }, [isAuthenticated, isLoggingOut, router]);

  const kpis: KPI[] = [
    {
      label: "Total Revenue",
      value: "Rp 45.2M",
      change: "+12.5%",
      isPositive: true,
      icon: "solar:dollar-minimalistic-bold",
      color: "#4A7043",
    },
    {
      label: "Total Orders",
      value: "3,842",
      change: "+8.2%",
      isPositive: true,
      icon: "solar:bag-3-bold",
      color: "#5A7B9A",
    },
    {
      label: "Active Products",
      value: "1,240",
      change: "+24",
      isPositive: true,
      icon: "solar:box-bold",
      color: "#4A7043",
    },
    {
      label: "Growth Rate",
      value: "24.5%",
      change: "+3.2%",
      isPositive: true,
      icon: "solar:graph-up-bold",
      color: "#5A7B9A",
    },
  ];

  const recentOrders = [
    { id: "#ORD-2401", customer: "Ahmad Rizki", amount: "Rp 450,000", status: "Completed", time: "2 hours ago" },
    { id: "#ORD-2402", customer: "Siti Nurhaliza", amount: "Rp 325,000", status: "Processing", time: "4 hours ago" },
    { id: "#ORD-2403", customer: "Budi Santoso", amount: "Rp 780,000", status: "Completed", time: "5 hours ago" },
    { id: "#ORD-2404", customer: "Dewi Lestari", amount: "Rp 210,000", status: "Pending", time: "1 day ago" },
  ];

  const topProducts = [
    { name: "Premium Coffee Blend", sold: 1240, revenue: "Rp 12.4M", trend: "+15%" },
    { name: "Handwoven Batik Shirt", sold: 856, revenue: "Rp 8.3M", trend: "+8%" },
    { name: "Wireless Earbuds Pro", sold: 2104, revenue: "Rp 21.0M", trend: "+22%" },
    { name: "Natural Face Serum", sold: 1567, revenue: "Rp 15.6M", trend: "+18%" },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Background */}
      <div
        className={`fixed top-0 w-full h-screen -z-10 saturate-200 brightness-105 scale-110 blur-lg bg-cover bg-center transition-opacity duration-500 ${
          isDark ? "invert opacity-25" : "invert-0 opacity-35"
        }`}
        style={{
          backgroundImage: "url(/Background/BG-After.jpg)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      />

      <DashboardSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      <DashboardNavbar
        onMobileMenuToggle={() => setIsMobileSidebarOpen(true)}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div
        className={`transition-all duration-300 ml-0 md:ml-20 ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <main className="pt-24 px-4 pb-4 md:pt-28 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl border backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${
                  isDark
                    ? "bg-neutral-800/50 border-neutral-700 hover:bg-neutral-800 hover:shadow-neutral-900/50"
                    : "bg-white/80 border-gray-200 hover:bg-white hover:shadow-gray-300/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${kpi.color}15` }}
                  >
                    <Icon icon={kpi.icon} width={24} style={{ color: kpi.color }} />
                  </div>
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-lg ${
                      kpi.isPositive
                        ? "text-green-600 bg-green-50 dark:bg-green-900/20"
                        : "text-red-600 bg-red-50 dark:bg-red-900/20"
                    }`}
                  >
                    {kpi.change}
                  </span>
                </div>
                <h3
                  className={`text-3xl font-bold mb-1 transition-colors duration-500 ${
                    isDark ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {kpi.value}
                </h3>
                <p
                  className={`text-sm transition-colors duration-500 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Analytics Chart */}
            <div
              className={`lg:col-span-2 p-6 rounded-2xl border backdrop-blur-xl transition-all ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700"
                  : "bg-white/80 border-gray-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div>
                  <h3
                    className={`text-lg font-bold transition-colors duration-500 ${
                      isDark ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    Revenue Analytics
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Sales performance over last 7 days
                  </p>
                </div>
                <Dropdown
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.value)}
                  options={periodOptions}
                  optionLabel="label"
                  optionValue="value"
                  unstyled
                  transitionOptions={{
                    timeout: { enter: 200, exit: 150 },
                    classNames: {
                      enter: "dropdown-panel-enter",
                      enterActive: "dropdown-panel-enter-active",
                      exit: "dropdown-panel-exit",
                      exitActive: "dropdown-panel-exit-active",
                    },
                  }}
                  pt={{
                    root: {
                      className: `text-sm rounded-xl border outline-none cursor-pointer px-3 py-2 transition-all flex items-center justify-between gap-3 ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`,
                    },
                    input: {
                      className: "text-sm font-medium cursor-pointer flex-shrink-0",
                    },
                    trigger: {
                      className: `transition-colors ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`,
                    },
                    panel: {
                      className: `mt-2 rounded-xl border backdrop-blur-xl shadow-2xl overflow-hidden z-50 ${
                        isDark
                          ? "bg-neutral-800/95 border-neutral-700 shadow-neutral-900/60"
                          : "bg-white/95 border-gray-200 shadow-gray-300/50"
                      }`,
                    },
                    wrapper: {
                      className: "py-1",
                    },
                    list: {
                      className: "list-none m-0 p-0",
                    },
                    item: ({ context }: { context: { selected: boolean } }) => ({
                      className: `px-4 py-2.5 text-sm cursor-pointer transition-all ${
                        context.selected
                          ? isDark
                            ? "bg-[#4A7043]/20 text-[#6aa560] font-semibold"
                            : "bg-[#4A7043]/10 text-[#4A7043] font-semibold"
                          : isDark
                          ? "text-gray-300 hover:bg-white/5"
                          : "text-gray-700 hover:bg-gray-50"
                      }`,
                    }),
                  }}
                />
              </div>

              {/* Revenue Line Chart */}
              <div className="h-64">
                <RevenueChart isDark={isDark} />
              </div>
            </div>

            {/* Category Donut Chart */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl transition-all flex flex-col ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700"
                  : "bg-white/80 border-gray-200"
              }`}
            >
              <h3
                className={`text-lg font-bold transition-colors duration-500 mb-6 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Top Categories
              </h3>

              <div className="flex-1 flex items-center justify-center relative">
                <div
                  className="w-48 h-48 rounded-full relative"
                  style={{
                    background:
                      "conic-gradient(#4A7043 0% 40%, #5A7B9A 40% 70%, #D4AF37 70% 85%, #94a3b8 85% 100%)",
                  }}
                >
                  <div
                    className={`absolute inset-0 m-auto w-32 h-32 rounded-full flex flex-col items-center justify-center transition-colors ${
                      isDark ? "bg-neutral-800" : "bg-white"
                    }`}
                  >
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Total</span>
                    <span
                      className={`text-2xl font-bold ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      100%
                    </span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 space-y-2.5">
                {[
                  { label: "Electronics", pct: "40%", color: "#4A7043" },
                  { label: "Fashion", pct: "30%", color: "#5A7B9A" },
                  { label: "Food & Beverage", pct: "15%", color: "#D4AF37" },
                  { label: "Others", pct: "15%", color: "#94a3b8" },
                ].map((cat) => (
                  <div key={cat.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                        {cat.label}
                      </span>
                    </div>
                    <span className={`font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                      {cat.pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div
            className={`p-6 rounded-2xl border backdrop-blur-xl transition-all mb-8 ${
              isDark
                ? "bg-neutral-800/50 border-neutral-700"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-lg font-bold transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Top Products
              </h3>
              <button
                onClick={() => toast.info("Coming Soon")}
                className={`text-sm font-medium transition-colors ${
                  isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topProducts.map((product, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors cursor-pointer ${
                    isDark ? "hover:bg-neutral-700/50 bg-neutral-700/20" : "hover:bg-gray-100 bg-gray-50/50"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] flex items-center justify-center text-white font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm truncate ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {product.sold} sold • {product.revenue}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{product.trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div
            className={`p-6 rounded-2xl border backdrop-blur-xl transition-all ${
              isDark
                ? "bg-neutral-800/50 border-neutral-700"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-lg font-bold transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Recent Orders
              </h3>
              <button
                onClick={() => toast.info("Coming Soon")}
                className={`text-sm font-medium transition-colors ${
                  isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className={`border-b ${
                      isDark ? "border-neutral-700" : "border-gray-200"
                    }`}
                  >
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Order ID
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Customer
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Amount
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Status
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr
                      key={i}
                      className={`border-b transition-colors cursor-pointer ${
                        isDark
                          ? "border-neutral-700 hover:bg-neutral-700/30"
                          : "border-gray-100 hover:bg-gray-50"
                      }`}
                    >
                      <td className={`py-4 px-4 font-semibold text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {order.id}
                      </td>
                      <td className={`py-4 px-4 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {order.customer}
                      </td>
                      <td className={`py-4 px-4 font-semibold text-sm ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                        {order.amount}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : order.status === "Processing"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-400">{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
