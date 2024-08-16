import { useState } from "react";

export function Exemplo2ResponsiveFocus() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="py-8 px-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/face.jpg" alt="face " />

      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-sm text-black font-bold">
            Erin Lindford
          </p>
          <p className="text-slate-500 text-xs font-medium">
            Engenheira de software
          </p>
        </div>
        <button className="px-4 py-1 text-sm 
        text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 
        active:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>

      <form className="w-full">
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <div className="mt-1">
            <input type="email" name="email" id="email" className="px-3 py-2 bg-white border shadow-sm 
            border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500
             disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full 
             rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500
              focus:invalid:ring-pink-500 disabled:shadow-none" placeholder="you@example.com" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1">
            <input type="password" name="password" id="password" className="px-3 py-2 bg-white border shadow-sm
            border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500
            disabled:border-slate-200 focus:outline-none focus:border-sky-500 
            focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 
            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"  required />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Save changes
          </button>
        </div>
      </form>

      <div className="mt-3 flex -space-x-2 overflow-hidden">
        {
          images.length > 0 && (
            images.map((image, index) => (
              <img key={index} className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={image} alt="contributor" />
            ))
          )
        }
      </div>
    </div>
  );
}

