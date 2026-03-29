import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import data from "../data/data.json";

function Crew() {
  const [activeTab, setActiveTab] = useState<string>("Douglas Hurley");
  const currentMember = data.crew.find((member) => member.name === activeTab);
  return (
    <main
      className="overflow-hidden min-h-screen max-h-screen flex flex-col items-center bg-cover bg-center px-6 md:px-10 lg:px-40 lg:justify-center lg:pt-24
                bg-[url('/assets/crew/background-crew-mobile.jpg')]
                md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
                lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    >
      {/* CONTENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:grid-rows-1 justify-center pt-30 md:pt-34 md:pb-32 lg:mb-8 gap-6  lg:gap-0 lg:gap-x-10 w-full lg:max-w-277 ">
        <div className="w-full flex-col items-center md:items-start lg:col-start-1">
          <h1 className="text-center md:text-left md:self-start text-preset-6-mobile lg:text-preset-5 text-white ">
            <strong className="text-preset-8-bold text-white/25 pr-6 lg:text-[1.75rem]">
              02
            </strong>
            MEET YOUR CREW
          </h1>
        </div>
        <div className="w-full flex  flex-col items-center  md:max-w-lg lg:max-w-full justify-self-center pt-10 md:pt-6 lg:items-start lg:pt-32 gap-2 lg:col-start-1 relative">
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
              <div className="w-full flex flex-col lg:min-h-158 justify-center lg:gap-4">
                {currentMember && (
                  <h2 className="text-preset-4-mobile md:text-preset-4-tablet lg:text-preset-4 text-center  text-white/50  lg:text-left">
                    {currentMember.role.toUpperCase()}
                  </h2>
                )}
                <h3 className="text-preset-3-mobile md:text-preset-3-tablet lg:text-preset-3 text-center text-white lg:text-left">
                  {activeTab.toUpperCase()}
                </h3>
                {currentMember && (
                  <p className="text-center text-preset-9-mobile md:text-preset-9-tablet lg:text-preset-9 text-blue-300 pt-6 lg:pt-2 min-h-46.5 lg:text-left">
                    {currentMember.bio}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <fieldset className="lg:absolute lg:bottom-0 lg:-translate-y-15">
            <legend className="sr-only">Select a crew member</legend>
            <ul className="flex w-full gap-4 lg:gap-10 items-center justify-center  ">
              {data.crew.map((tab, index) => (
                <li className="h3 lg:h5" key={index}>
                  <input
                    id={tab.name}
                    name={tab.name}
                    value={tab.name}
                    checked={activeTab === tab.name}
                    type="radio"
                    onChange={() => setActiveTab(tab.name)}
                    className="w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full bg-grey-border checked:bg-white hover:bg-white/70 transition-all duration-300 ease-in  appearance-none"
                  />
                  <label htmlFor={tab.name}></label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
        <div className="w-full pt-2 md:py-10 flex items-center lg:items-start lg:justify-center md:max-w-lg justify-center lg:pt-32 justify-self-center item-self-start lg:col-start-2 ">
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
              <div className="flex flex-col items-center   w-68 md:w-111 min-h-85 aspect-4/3 lg:aspect-3/4 z-30 ">
                <img
                  className="w-auto h-auto object-cover mask-b-from-75% md:mask-b-from-45% lg:mask-b-from-80%"
                  src={currentMember?.images.webp}
                  alt={`image of the ${activeTab}`}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
export default Crew;
