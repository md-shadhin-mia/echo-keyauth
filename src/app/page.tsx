"use client";

import React from "react";
import { SideNav } from "./SideNav";
import { SideNav as SideNavH } from "./SideNavH";
import ThemeToggle from "@/components/controls/ToggleTheme";
import SelectRealm from "./SelectRealm";
import Button from "@/components/ui/Button";



export default function () {

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900">
      <SideNav />
      <div className="fixed right-0 top-0 w-full pl-80">
        <nav className="bg-white dark:bg-gray-800 min-h-16 flex items-center p-2">
          <a href="/" className="flex items-center text-xl font-bold gap-2 mr-auto">
            <span className="text-blue-600 dark:text-blue-600">KEYAuth</span>
          </a>
          <SideNavH />
          {/* <ThemeToggle /> */}
        </nav>
      </div>
      <main className="pl-80 w-full pt-16">
        <div className="p-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            KEYAuth is a free and open-source key management and authentication
            platform.
          </p>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <div>
            <SelectRealm />
            <Button variant="solid" >Test</Button>
          </div>
        </div>
      </main>
    </div>
  )
}