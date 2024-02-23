import type { IAnimeResult } from "@asianwarriors/consumet-extensions";
import { getTitle } from "../utils";
import StatusIcon from "./StatusIcon";
import { RatingDisplay } from "./RatingDisplay";

const tempImg =
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105228-9KSgNMIX3kPa.jpg";

export default function AnimeCard({
  animeResult,
}: {
  animeResult: IAnimeResult;
}) {
  const title = getTitle(animeResult.title);
  return (
    <article className="w-48 overflow-hidden rounded-lg border border-gray-300 shadow">
      <div>
        <img
          src={animeResult.image ?? tempImg}
          alt={`Broadcast: ${title}`}
          className="aspect-square w-full h-auto rounded-lg md:aspect-{4/5} bg-gradient-to-t from-gray-800 to-gray-500 object-cover"
        />
      </div>
      <section className="box-border p-1">
        <div className="min-w-0 flex content-center gap-x-1">
          {/* @Incomplete: we should have a tooltip to hover over titles
              the problem i encountered was that it messed with the title ellipsis/truncation styling
          */}
          <h5 className="truncate text-sm font-semibold">{title}</h5>
          {animeResult.status && (
            <StatusIcon status={animeResult.status} iconStyle="size-4" />
          )}
        </div>
        {animeResult.rating && (
          <RatingDisplay rating={animeResult.rating} size={3} />
        )}
      </section>
    </article>
  );
}
