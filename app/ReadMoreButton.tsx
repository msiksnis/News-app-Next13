"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: DataEntry;
};

export default function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-emerald-600 h-10 rounded-b-lg dark:text-gray-900 hover:bg-emerald-800 text-white uppercase font-medium tracking-wide"
    >
      Read More
    </button>
  );
}
