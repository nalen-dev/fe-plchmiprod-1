import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Factory } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans">
      <section className="flex h-[25rem] w-full max-w-4xl flex-col rounded-lg bg-white">
        {/* Header */}
        <section className="h-16 rounded-t-lg shadow-md">
          <h1 className="pt-3 text-center text-lg font-semibold">Admin Panel</h1>
        </section>

        {/* Konten */}
        <section className="grid flex-1 grid-cols-2">
          <section className="flex flex-col px-6 pt-16 pb-7 text-center">
            <Factory size={60} className="mx-auto" />
            <h2 className="my-2 text-2xl font-semibold">Welcome to HMI-PLC app</h2>
            <p className="text-sm">
              The world most powerfull onboarding tool. In this notification panel well keep you up
              to date on enhancments and notices.
            </p>
            <p className="my-2 text-sm font-semibold">Curent Notices: None</p>

            {/* Footer selalu di bawah */}
            <section className="mt-auto flex justify-between text-xs text-gray-500">
              <p>v0.0.1</p>
              <p>Developed by nalendev.com</p>
            </section>
          </section>
          <section className="w-7/8 border-l px-6 py-10">
            <h3 className="text-lg font-semibold">Sign-in</h3>

            <div className="mt-4 flex flex-col gap-2">
              <Label htmlFor="username" className="pl-1">
                Username
              </Label>
              <Input type="text" id="username" placeholder="Username" />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Label htmlFor="password" className="pl-1">
                Password
              </Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>

            <Button className="mt-4 w-full">Login</Button>
            <p className="mt-4 text-center text-xs text-gray-500">
              The world most powerfull onboarding tool. In this notification panel well keep you up
              to date on enhancments and notices.
            </p>
          </section>
        </section>
      </section>
    </div>
  );
}
