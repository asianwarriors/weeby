import { anilist } from "../utils";
import AnimeCard from "../components/AnimeCard";
import PaginateNavigation from "../components/PaginateNavigation";
import { NavLink, useLoaderData } from "react-router-dom";
import { IAnimeResult, ISearch } from "@asianwarriors/consumet-extensions";

export async function loader({
  request,
}: {
  request: Request;
}): Promise<ISearch<IAnimeResult>> {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const page = url.searchParams.get("page") ?? "1";
  const data = await anilist.search(q, parseInt(page, 10));
  return data;
}

// @Incomplete: a full fetch should fill the page (currently looks half-full)
export default function Search() {
  // @Temp: casting using 'as' isn't really type-safe
  const data = useLoaderData() as ISearch<IAnimeResult>;
  // console.log('search page', JSON.stringify(data));

  const cards = data.results.map((animeResult: IAnimeResult) => (
    <NavLink key={animeResult.id} to={`/watch/${animeResult.id}`}>
      <AnimeCard animeResult={animeResult} />
    </NavLink>
  ));

  return (
    <div className="flex flex-col size-full">
      <h2 className="text-3xl font-semibold py-5">Search Results</h2>
      <div className="flex-grow">
        <div className="flex flex-wrap gap-5">{cards}</div>
      </div>
      <PaginateNavigation iSearch={data} />
    </div>
  );
}
