"use client";

import { LogOut, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathname = usePathname();

  // Function to get page title based on current path
  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/batch":
        return "Batch Data";
      case "/analytic":
        return "Analytics";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-background flex h-16 w-full items-center justify-between border-b px-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
        {/* <p className="text-muted-foreground text-sm">Welcome to your admin dashboard</p> */}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-lg border py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Notifications */}
        {/* <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </Button> */}

        {/* User Profile */}
        <div className="group flex items-center p-4 hover:cursor-pointer hover:bg-blue-100">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white group-hover:bg-blue-100">
            <LogOut className="h-4 w-4 text-black group-hover:text-blue-600" />
          </div>
          <div className="hidden sm:block">
            <p className="text-muted-foreground text-sm font-semibold group-hover:text-blue-600">
              Log Out
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
