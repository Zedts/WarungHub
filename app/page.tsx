import LandingPage from "@/src/main/LandingPage";
import LoginPage from "@/src/main/LoginPage";
import MarketplacePage from "@/src/main/MarketplacePage";
import MarketplaceDemoPage from "@/src/main/MarketplaceDemoPage";
import DashboardPage from "@/src/main/DashboardPage";

type SearchParams = {
  view?: string;
};

type PageProps = {
  searchParams?: Promise<SearchParams>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const view = resolvedParams?.view;

  if (view === "login") {
    return <LoginPage />;
  }

  if (view === "marketplace") {
    return <MarketplacePage />;
  }

  if (view === "marketplace-demo") {
    return <MarketplaceDemoPage />;
  }

  if (view === "dashboard") {
    return <DashboardPage />;
  }

  return <LandingPage />;
}