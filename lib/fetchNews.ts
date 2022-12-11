import { gql } from "graphql-request";
import sortNewsWithImageFirst from "./sortNewsWithImageFirst";

export const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDyanmic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "us"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch function with Next.js 13 caching
  const res = await fetch(
    `https://matanzas.stepzen.net/api/agile-seal/__graphql`,
    {
      method: "POST",
      cache: isDyanmic ? "no-cache" : "default",
      next: isDyanmic ? { revalidate: 0 } : { revalidate: 10 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("Loading new data from API for category >>", category, keywords);

  const newResponse = await res.json();

  // Sort function by images vs no images
  const news = sortNewsWithImageFirst(newResponse.data.myQuery);

  // Return res
  return news;
};
