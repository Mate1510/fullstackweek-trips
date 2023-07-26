"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  );
}
