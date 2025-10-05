import AppHeader from "@/components/app-header";
import { AppSidebar } from "@/components/app-side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="grid h-screen w-full grid-cols-[auto_1fr]">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex min-w-0 flex-col">
          {/* Top Header */}
          <AppHeader />

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
