"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LandingSkeleton from "../src/components/skeletons/LandingSkeleton";
import LoginSkeleton from "../src/components/skeletons/LoginSkeleton";

function LoadingContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  if (view === "login") {
    return <LoginSkeleton />;
  }

  return <LandingSkeleton />;
}

export default function Loading() {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <LoadingContent />
    </Suspense>
  );
}
