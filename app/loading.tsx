"use client";

import { usePathname } from "next/navigation";
import LandingSkeleton from "@/src/components/skeletons/LandingSkeleton";
import LoginSkeleton from "@/src/components/skeletons/LoginSkeleton";
import MarketplaceSkeleton from "@/src/components/skeletons/MarketplaceSkeleton";
import DashboardSkeleton from "@/src/components/skeletons/DashboardSkeleton";

export default function Loading() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <LoginSkeleton />;
  }

  if (pathname === "/marketplace") {
    return <MarketplaceSkeleton />;
  }

  if (pathname === "/dashboard") {
    return <DashboardSkeleton />;
  }

  return <LandingSkeleton />;
}
