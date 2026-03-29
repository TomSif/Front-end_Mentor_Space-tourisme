import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../data/data.json";

function Destination() {
  const [activeTab, setActiveTab] = useState<string>("Moon");
  const currentTitle = data.destinations.find(
    (title) => title.name === activeTab,
  );
  return (
    <main
      className="min-h-screen  flex flex-col items-center bg-cover bg-center px-6 md:px-10 lg:px-40 lg:justify-center
                bg-[url('/assets/home/background-home-mobile.jpg')]
                md:bg-[url('/assets/home/background-home-tablet.jpg')]
                lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      {/* CONTENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center  justify-center pt-28 md:pt-34 md:pb-32 gap-8 w-full">
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <div className="w-full flex-col items-center ">
            <h1 className="text-center md:text-left md:self-start text-preset-6-mobile lg:text-preset-5 text-white ">
              <strong className="text-preset-8-bold text-white/25 pr-6 lg:text-[1.75rem]">
                01
              </strong>
              PICK YOUR DESTINATION
            </h1>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="w-full py-6 md:py-10 flex items-center justify-center lg:pt-32 ">
                <img
                  className="w-37 md:w-75 md:h-75 h-37 xl:min-w-120 xl:min-h-120"
                  src={currentTitle?.images.webp}
                  alt={`image of the ${activeTab}`}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-full flex  flex-col items-center max-w-lg lg:max-w-111 justify-self-center md:pt-6 lg:items-start lg:pt-32">
          <ul className="flex w-full gap-8 items-center justify-center px-10 text-preset-8-mobile md:text-preset-8 lg:items-start lg:justify-start lg:px-2">
            {data.destinations.map((tab, index) => (
              <li className="h8" key={index}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={` flex  lg:items-start w-full md:w-auto items-center border-b-3 hover:border-white/50 h-8 active:border-white ${tab.name === activeTab ? "border-white text-white" : "border-transparent text-blue-300"}`}
                >
                  {tab.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: -15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <h2 className="text-preset-2-mobile md:text-preset-2-tablet text-center text-white pt-6 lg:text-left">
                {activeTab.toUpperCase()}
              </h2>
              {currentTitle && (
                <p className="text-center text-preset-9-mobile md:text-preset-9-tablet text-blue-300 pt-4 md:pt-6 pb-6 lg:text-left min-h-44 lg:min-h-41">
                  {currentTitle.description}
                </p>
              )}
              <div className="flex flex-col md:items-start justify-center md:grid-cols-2 md:grid border-t-2 w-full border-grey-border gap-6 pt-8 md:pt-6 lg:justify-start">
                <dl className="flex flex-col  gap-3 items-center justify-center text-center lg:text-left lg:items-start">
                  <dt className="text-preset-7 text-blue-300">AVG. DISTANCE</dt>
                  {currentTitle && (
                    <dd className="text-preset-6 text-white">
                      {currentTitle.distance}
                    </dd>
                  )}
                </dl>
                <dl className="flex  flex-col  items-center justify-center gap-3 text-center lg:text-left lg:items-start">
                  <dt className="text-preset-7 text-blue-300">
                    EST. TRAVEL TIME
                  </dt>
                  {currentTitle && (
                    <dd className="text-preset-6 text-white">
                      {currentTitle.travel.toUpperCase()}
                    </dd>
                  )}
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default Destination;
