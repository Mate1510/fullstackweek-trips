"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div className="flex flex-col">
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>

      <div className="flex flex-col mx-auto mt-4">
        <h1>Olá, {data?.user?.name}</h1>
        <Image
          width={120}
          height={120}
          src={data?.user?.image ?? ""}
          alt="{data?.user?.name}"
        ></Image>
      </div>
    </div>
  );
}
