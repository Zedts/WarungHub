import LandingPage from "../src/main/LandingPage";
import LoginPage from "../src/main/LoginPage";

type SearchParams = {
  view?: string;
};

type PageProps = {
  searchParams?: Promise<SearchParams>;
};

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;

  if (resolvedParams?.view === "login") {
    return <LoginPage />;
  }

  return <LandingPage />;
}