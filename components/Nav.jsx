"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
    const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full h-20 pt-3 bg-[#D3BFB4]">
        <Link href="/" className="flex gap-2 flex-center">
            <h2>MyStore</h2> 
        </Link>
        {/*Mobile Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">

                </div>
            ):(
                <></>
            )}
        </div>
    </nav>
  )
}

export default Nav