export default function Home() {
  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Upcoming</h2>
        
        {/* Placeholder for Image */}
        <div className="flex flex-col items-center bg-orange-50 rounded-xl p-6 max-w-md mx-auto">
          <div className="w-40 h-28 bg-gray-200 rounded-md mb-4" />
          <h3 className="text-sm font-semibold">No upcoming events</h3>
          <p className="text-sm text-gray-500 text-center">
            You don't have any upcoming events. Check your availability to start scheduling.
          </p>
        </div>
      </section>

      {/* <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Availability</h2>
        <div className="space-y-4 max-w-md">
          <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
            <option>Select option</option>
          </select>
          <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
            <option>Select option</option>
          </select>
        </div>
      </section> */}
    </main>
  );
}

