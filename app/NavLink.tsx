import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-emerald-600 underline-offset-4 font-bold"
      }`}
    >
      {category}
    </Link>
  );
}
