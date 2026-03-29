import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center px-6 md:px-10 lg:px-40
                bg-[url('/assets/home/background-home-mobile.jpg')]
                md:bg-[url('/assets/home/background-home-tablet.jpg')]
                lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      {/* CONTENT */}
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center py-12 md:pt-56 md:pb-32 gap-12 lg:max-w-277 self-center">
        <article className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg mx-auto lg:mx-0">
          <h1 className="text-preset-9-mobile md:text-preset-5 text-blue-300">
            YOU TRAVELED TOO FAR
          </h1>

          <h2 className="text-preset-1-mobile md:text-preset-1 text-white">
            ERROR 404
          </h2>

          <p className="text-preset-9-mobile md:text-preset-9 text-blue-300">
            Let’s go back to Home.
          </p>
        </article>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end items-center">
          <button
            aria-label="Explore destinations"
            onClick={() => navigate("/")}
            className="rounded-full w-36 h-36 md:w-68 md:h-68 bg-white text-blue-900 hover:text-blue-900/50 flex items-center justify-center text-preset-4-mobile md:text-preset-4 transition-shadow duration-300 ease-in-out shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]"
          >
            HOME
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
