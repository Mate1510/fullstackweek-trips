"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { data, status } = useSession();

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <header className="container py-0 h-[93px] mx-auto flex justify-between p-4 items-center">
      <div className="relative w-[183px] h-[32px]">
        <Image fill src="/Logo.png" alt="Logo do site"></Image>
      </div>

      {status === "unauthenticated" && (
        <button
          className="text-primary-purple text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && (
        <div className="flex gap-3 border border-primary-gray border-solid rounded-full p-2 items-center relative">
          <AiOutlineMenu
            className="cursor-pointer"
            color={"primary-gray"}
            size={16}
            onClick={handleMenuClick}
          />

          <Image
            className="rounded-full"
            width={32}
            height={32}
            src={data?.user?.image ?? ""}
            alt={data?.user?.name ?? "Usuário"}
          ></Image>

          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full rounded-lg shadow-md bg-white flex flex-col justify-center items-center">
              <button
                className="text-primary-purple text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
