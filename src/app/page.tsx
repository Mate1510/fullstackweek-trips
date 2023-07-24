"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div >

    </div>
  );
}
