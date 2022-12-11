import { categories } from "../constants";
import { fetchNews } from "../lib/fetchNews";
import NewsList from "./NewsList";

export default async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div className="">
      <NewsList news={news} />
    </div>
  );
}
