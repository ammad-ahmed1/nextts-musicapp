"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        (className = "dark")
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={null} item="Home"></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem setActive={setActive} active={active} item="Our courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/basic-music-theory">
                Basic Music Theory
              </HoveredLink>
              <HoveredLink href="/advanced-composition">
                Advanced Composition
              </HoveredLink>
              <HoveredLink href="/song-writing">Song Writing</HoveredLink>
              <HoveredLink href="/music-production">
                Music Production
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact-us"}>
          <MenuItem
            setActive={setActive}
            active={null}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
