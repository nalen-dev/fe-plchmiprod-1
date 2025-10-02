export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans">
      <section className="flex h-[28rem] w-full max-w-4xl flex-col rounded-lg bg-white">
        {/* Header */}
        <section className="h-16 rounded-t-lg shadow-md">
          <h1 className="pt-5 text-center text-lg font-semibold">Admin Panel</h1>
        </section>

        {/* Konten */}
        <section className="grid flex-1 grid-cols-2 overflow-auto">
          <section className="">
            <h2>Welcome to HMI-PLC app</h2>
            <p>
              The world most powerfull onboarding tool. In this notification panel well keep you up
              to date on enhancments and notices.
            </p>
            <p>Curent notices: None</p>
            <section>
              <p>v0.0.1</p>
              <p>Developed by nalendev.com</p>
            </section>
          </section>
          <section className="border-l">
            <p>Sign-in</p>
          </section>
        </section>
      </section>
    </div>
  );
}
