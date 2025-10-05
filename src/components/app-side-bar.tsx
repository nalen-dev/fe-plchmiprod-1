"use client";

import { useState } from "react";
import {
  Home,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  User,
  TableProperties,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// Define navigation items
const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Batch Data",
    href: "/batch",
    icon: TableProperties,
  },
  {
    title: "Analytics",
    href: "/analytic",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Function to check if a nav item is active
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div
      className={cn(
        "bg-background flex h-screen flex-col border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-sm">
              <span className="text-primary-foreground text-xs font-bold">A</span>
            </div>
            <span className="text-lg font-semibold">Admin Panel</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className={cn(
            "h-8 w-8 p-0 hover:bg-blue-200 hover:text-blue-600",
            collapsed ? "mx-auto" : ""
          )}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-auto px-3 py-4">
        <nav>
          <div className="space-y-6">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        // Default state
                        "text-muted-foreground hover:bg-blue-200 hover:text-blue-600",
                        // Active state
                        active && "border-r-2 border-blue-600 bg-blue-100 text-blue-600"
                      )}
                    >
                      <Icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                      {!collapsed && <span>{item.title}</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* Footer with User Info */}
      <div className="border-t p-4">
        {!collapsed ? (
          <div className="flex items-center space-x-3">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
              <User className="text-primary-foreground h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Admin 1</p>
              <p className="text-muted-foreground truncate text-xs">Email is not set</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
              <User className="text-primary-foreground h-4 w-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
