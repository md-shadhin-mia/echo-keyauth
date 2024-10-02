"use client";

import React from "react";
import { SideNav } from "./SideNav";
import { SideNav as SideNavH } from "./SideNavH";
import ThemeToggle from "@/components/controls/ToggleTheme";



export default function () {

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900">
      <SideNav />
      <div className="fixed right-0 top-0 w-full pl-80">
        <nav
          className="bg-white dark:bg-gray-800">
          <SideNavH />
          <ThemeToggle />
        </nav>
      </div>
    </div>
  )
}