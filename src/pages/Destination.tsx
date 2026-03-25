import { useState } from "react";
import data from "../data/data.json";

function Destination() {
  const [activeTab, setActiveTab] = useState<string>("Moon");
  const currentTitle = data.destinations.find(
    (title) => title.name === activeTab,
  );
  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center px-6 md:px-10 lg:px-40
                bg-[url('/assets/home/background-home-mobile.jpg')]
                md:bg-[url('/assets/home/background-home-tablet.jpg')]
                lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <h1 className="text-center  text-preset-6-mobile text-white">
        <strong className="text-preset-8-bold text-white/25">01</strong> PICK
        YOUR DESTINATION
      </h1>
      {/* CONTENT */}
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center py-12 md:pt-56 md:pb-32 gap-12">
        <div className="flex  items-center justify-center w-full">
          <img
            className="w-57 h-57"
            src={`/assets/destination/image-${activeTab.toLowerCase()}.png`}
            alt={`image of the ${activeTab}`}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <ul className="flex w-full gap-8 items-center justify-center px-10">
            {data.destinations.map((tab, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`text-preset-8-mobile text-white flex w-full md:w-auto items-center border-b-2 border-transparent hover:border-white/50 h-8 active:border-white ${tab.name === activeTab ? "border-white" : "border-transparent"}`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-preset-2-mobile text-center text-white pt-6">
            {activeTab.toUpperCase()}
          </h2>
          {currentTitle && (
            <p className="text-center text-preset-9-mobile text-blue-300">
              {currentTitle.description}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Destination;
