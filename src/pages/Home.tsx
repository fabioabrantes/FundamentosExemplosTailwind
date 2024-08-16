import { useState } from 'react'
import clsx from "clsx";

export function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItemClassName = clsx("md:block md:text-lg text-4xl", {
    visible: mobileMenuOpen,
    hidden: !mobileMenuOpen,
  });

  return (
    <div>
      <header
        className={clsx(
          "bg-cyan-700 text-white p-5 flex flex-col md:flex-row justify-around mb-5",
          {
            "h-screen": mobileMenuOpen,// aplica h-screen quando for true
          }
        )}
      >
        <a className="text-4xl md:text-lg">Home</a>
        <a className={menuItemClassName}>Quem somos nós</a>
        <a className={menuItemClassName}>Serviços</a>
        <a className={menuItemClassName}>Contatos</a>

        <button
          className="md:hidden absolute right-4 top-6"
          onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
        >
          <div
            className={clsx(
              "w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out ",
              {
                "rotate-45 translate-y-2": mobileMenuOpen,
              }
            )}
          ></div>
          
          <div
            className={clsx("w-10 h-1 bg-white mb-1", {
              hidden: mobileMenuOpen,
            })}
          ></div>
          <div
            className={clsx(
              "w-10 h-1 bg-white mb-1 transition-all duration-500 ease-in-out",
              {
                "-rotate-45": mobileMenuOpen,
              }
            )}
          ></div>
        </button>
      </header>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:bg-slate-200 lg:bg-slate-300">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-contain md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

