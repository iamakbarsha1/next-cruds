import { useState } from "react";
import { SearSearchNormalS } from "lovedicons/dist/searS";
import Image from "next/image";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <main className="px-3 md:px-4 py-2 md:py-3 w-full flex items-center justify-between border-b-2 border-gray-800">
      <section className="relative">
        <input
          className="py-1.5 px-2 w-40 md:w-full bg-slate-600 placeholder-white rounded-md outline-none"
          value={search}
          placeholder="wanna search here?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearSearchNormalS className="absolute top-1 right-1.5 w-6 h-7 p-1" />
      </section>
      <section className="flex items-center text-[13px]">
        <div className="mr-2 flex flex-col items-end">
          <div className="font-semibold">Akbar Sha</div>
          <div>iamakbarsha1@gmail.com</div>
        </div>
        <Image
          src=""
          alt="profile pic"
          // width={50}
          // height={50}
          className="w-10 h-10 bg-black rounded-full"
        />
      </section>
    </main>
  );
};

export default Navbar;
