import { AppSidebar } from "@/components/app-side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <main className="w-max flex-1 transition-all duration-300">
          <div className="p-4">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
