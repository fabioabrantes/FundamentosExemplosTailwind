import { useState } from "react";

export function ExemploDarkMode() {
  const [dark, setDark] = useState(false)

  function toggleTheme() {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center 
    dark:bg-black dark:text-white ">
      <h1 className="font-bold text-4xl">Dark Mode em React usando Tailwind CSS</h1>

      <p className="text-lg mt-4">Este é um simples exemplo de dark mode em Tailwind CSS</p>

      <button onClick={toggleTheme} className="mt-4 px-4 py-2 dark:bg-white 
        dark:text-black bg-black text-white rounded-md">
        modo dark/não
      </button>
    </div>

  );
}