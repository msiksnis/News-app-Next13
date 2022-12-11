import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: DataEntry;
};

export default function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: DataEntry = searchParams;

  return (
    <article className="py-6">
      <section className="flex flex-col lg:flex-row pb-24">
        {article.image && (
          <img
            className="h-56 mx-auto max-w-lg lg:max-w-xl object-cover md:rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="p-4 md:py-0 lg:pl-10">
          <h1 className="headerTitle no-underline pb-4">{article.title}</h1>
          <div className="flex divide-x-2 space-x-4 text-sm">
            {(article.author && (
              <h2 className="font-semibold">By: {article.author}</h2>
            )) || <h2 className="font-semibold">Author unknown</h2>}
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <div className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </div>
          </div>
          <p className="py-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
