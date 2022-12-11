import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center max-w-screen-2xl mx-auto">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center underline underline-offset-4 decoration-4 decoration-emerald-600">
            News
          </h1>
        </Link>
        <div className="flex space-x-4 justify-end items-center">
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-900 hover:bg-slate-800 text-white py-2 px-4 lg:px-10 rounded-full dark:bg-slate-800">
            Subscribe
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}
