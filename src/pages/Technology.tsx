import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import data from "../data/data.json";

function Technology() {
  const [activeTab, setActiveTab] = useState<string>("Launch vehicle");
  const currentTech = data.technology.find((tech) => tech.name === activeTab);

  return (
    <main
      id="main-content"
      className="overflow-hidden min-h-screen max-h-screen flex flex-col items-center bg-cover bg-center px-6 md:px-10 lg:px-0 lg:items-end 
                bg-[url('/assets/technology/background-technology-mobile.jpg')]
                md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
                lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      {/* CONTENT */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center  lg:grid-rows-1 justify-center pt-28 md:pt-34 md:pb-32 lg:pt-50 lg:mb-8 gap-6 lg:gap-0 w-full  lg:overflow-hidden lg:max-w-319">
        <div className="w-full flex-col items-center md:items-start lg:col-span-2">
          <h1 className="text-center md:text-left md:self-start text-preset-6-mobile lg:text-preset-5 text-white ">
            <strong className="text-preset-8-bold text-white/25 pr-6 lg:text-[1.75rem]">
              03
            </strong>
            SPACE LAUNCH 101
          </h1>
        </div>
        <div className="w-full flex  gap-8 flex-col items-center  pt-16 md:pt-6  lg:pt-20  lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_1fr] lg:col-span-2 lg:items-center">
          <div className="overflow-hidden min-w-screen lg:min-w-0 flex flex-col items-center lg:items-end  md:h-100 lg:h-150 lg:col-start-2 ">
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
                <picture className="w-full  md:h-89 lg:h-150 lg:w-150">
                  <source
                    className=""
                    media="(min-width: 1024px)"
                    srcSet={currentTech?.images.portrait}
                  />
                  <source
                    className={`object-cover   w-full h-auto `}
                    media="(min-width: 768px)"
                    srcSet={currentTech?.images.landscape}
                  />
                  <source
                    className={`object-cover   w-full   h-64`}
                    media="(min-width: 1px)"
                    srcSet={currentTech?.images.landscape}
                  />
                  <img
                    className={`object-cover   w-full h-auto `}
                    src={currentTech?.images.landscape}
                    alt={currentTech?.name}
                  />
                </picture>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col items-center w-full h-auto lg:col-start-1 lg:row-start-1 lg:flex-row lg:items-center gap-10 lg:gap-16">
            <fieldset className="lg:col-start-1">
              <legend className="sr-only">Select a technology</legend>
              <ul className="flex w-full gap-4 lg:gap-8 items-center justify-center lg:flex-col lg:w-auto">
                {data.technology.map((tab, index) => (
                  <li
                    className="h-10  w-10  relative flex md:w-14 md:h-14 lg:w-20 lg:h-20"
                    key={index}
                  >
                    <input
                      id={tab.name}
                      name={tab.name}
                      value={tab.name}
                      checked={activeTab === tab.name}
                      type="radio"
                      onChange={() => setActiveTab(tab.name)}
                      className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-transparent  border-2 checked:bg-white hover:bg-white/70 transition-all duration-300 ease-in  appearance-none  ${tab.name === activeTab ? "border-white" : "border-grey-border"}`}
                    />
                    <label
                      className={`absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-preset-4-mobile  md:text-preset-4-tablet lg:text-preset-4  ${tab.name === activeTab ? "text-blue-900 " : "text-white"}`}
                      htmlFor={tab.name}
                    >
                      {index + 1}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
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
                <div className="w-full flex flex-col lg:min-h-158 justify-center gap-4 lg:gap-4  md:max-w-lg  justify-self-center lg:col-start-2 lg:max-w-123">
                  {currentTech && (
                    <h2 className="text-preset-4-mobile md:text-preset-4-tablet lg:text-preset-4 text-center  text-white/50  lg:text-left">
                      THE TERMINOLOGY
                    </h2>
                  )}
                  <h3 className="text-preset-3-mobile md:text-preset-3-tablet lg:text-preset-3 text-center text-white lg:text-left">
                    {activeTab.toUpperCase()}
                  </h3>
                  {currentTech && (
                    <p className="text-center text-preset-9-mobile md:text-preset-9-tablet lg:text-preset-9 text-blue-300 lg:pt-2 min-h-46.5 lg:text-left">
                      {currentTech.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Technology;
