"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 xl:px-0"
    >
      <input
        placeholder="Search Keywords..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="px-2 flex-1 w-full rounded-full placeholder-gray-500 text-emerald-500 outline-none bg-transparent dark:text-emerald-600"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-white disabled:text-gray-400 bg-emerald-600 disabled:bg-transparent px-4 rounded-full"
      >
        Search
      </button>
    </form>
  );
}
