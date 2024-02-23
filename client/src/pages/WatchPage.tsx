import type { IAnimeInfo } from "@asianwarriors/consumet-extensions";
import { Avatar, Badge, Box, Card, Flex, Heading } from "@radix-ui/themes";
import type { ComponentProps } from "react";

import { RatingDisplay } from "@/app/components/RatingDisplay";
import StatusIcon from "@/app/components/StatusIcon";
import ToggleText from "@/app/components/ToggleText";
import { anilist, getTitle } from "../utils";
import { useLoaderData } from "react-router-dom";

interface WatchPageBaseProps extends ComponentProps<"div"> {
  animeInfo: IAnimeInfo;
}

export async function loader({ params }): Promise<IAnimeInfo> {
  const animeInfo = await anilist.fetchAnimeInfo(params["anime-id"]);
  return animeInfo;
}

// @Incomplete: setup a grid for episode selection
//  - we should also separate episode selection into a separate component
//  - build the layout for mobile & desktop (mobile-first)
//  - add anime info/details/description layout
//  - useEffect to redirect to /ep-id after this loads
export default function WatchPage() {
  const animeInfo = useLoaderData() as IAnimeInfo;
  return (
    <div>
      <div className="md:flex">
        <div className="w-full aspect-video rounded-md overflow-hidden">
          <img
            src={animeInfo.cover ?? animeInfo.image ?? ""}
            alt={getTitle(animeInfo.title)}
            className="size-full object-cover"
          />
        </div>
        <div className="p-2 align-center flex flex-wrap gap-2">
          {animeInfo.episodes &&
            animeInfo.episodes.map((episode) => (
              <div
                key={episode.id}
                className="w-1/5 rounded bg-slate-200 p-0.5 text-center"
              >
                {episode.number + "14"}
              </div>
            ))}
        </div>
      </div>
      <div className="flex">
        <picture className="relative">
          <img
            src={animeInfo.image ?? ""}
            alt={getTitle(animeInfo.title)}
            className="aspect-square w-full h-auto rounded-lg md:aspect-{4/5} bg-gradient-to-t from-gray-800 to-gray-500 object-cover"
          />
        </picture>
        Anime details/description
      </div>
    </div>
  );
}

// export default function WatchPageBase({
//   animeInfo,
//   children,
// }: WatchPageBaseProps) {
//   /*
//     TODO(thomas):
//     - add subOrDub
//     - add status
//     - add totalEpisodes (?)
//     - add isAdult
//     - add countryOfOrigin
//     - add studios
//     - add startDate and endDate
//     - fix cover
//   */
//   return (
//     // TODO(thomas): fix width (should always be max of container), layout shift issues
//     // TODO(thomas): fix background cover
//     <Box style={{ backgroundImage: animeInfo.cover }}>
//       <Flex>
//         <Card>
//           <Flex gap="3" align="center">
//             <Avatar
//               size="9"
//               src={animeInfo.image ?? ""} // note: cover or image? we should definitely do something cool with the cover (if it exists!!)
//               radius="small"
//               fallback={getTitle(animeInfo.title)}
//             />
//             <Box>
//               <Flex gap="4" align="center">
//                 <Heading size="7" weight="bold" color="teal">
//                   {getTitle(animeInfo.title)}
//                 </Heading>
//                 {animeInfo.status && (
//                   <StatusIcon
//                     status={animeInfo.status}
//                     width="1.2em"
//                     height="1.2em"
//                   />
//                 )}
//               </Flex>
//               <Flex direction="column" gap="2">
//                 {animeInfo.rating && (
//                   <RatingDisplay
//                     rating={animeInfo.rating}
//                     textProps={{
//                       surroundingTextProps: {
//                         as: "p",
//                         weight: "regular",
//                         size: "3",
//                       },
//                       ratingTextProps: {
//                         as: "span",
//                         weight: "medium",
//                         size: "4",
//                       },
//                     }}
//                     iconProps={{ width: "1em", height: "1em" }}
//                   />
//                 )}
//                 {animeInfo.genres && (
//                   <Flex gap="2">
//                     {animeInfo.genres.map((genre: string) => (
//                       <Badge key={genre} color="iris" size="1" variant="soft">
//                         {genre}
//                       </Badge>
//                     ))}
//                   </Flex>
//                 )}
//                 {animeInfo.description && (
//                   <ToggleText
//                     size="2"
//                     color="gray"
//                     text={animeInfo.description}
//                   />
//                 )}
//               </Flex>
//             </Box>
//           </Flex>
//         </Card>
//       </Flex>

//       {children}
//     </Box>
//   );
// }
