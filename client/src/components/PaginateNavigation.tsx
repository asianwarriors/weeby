import type { ISearch } from "@asianwarriors/consumet-extensions";
import { useSearchParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export default function PaginateNavigation({
  iSearch,
}: {
  iSearch: ISearch<unknown>;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = iSearch.currentPage ?? 1;

  return (
    <div className="flex justify-center items-center content-center gap-x-3 p-2">
      <button
        className={currentPage <= 1 ? "invisible" : ""}
        onClick={() => {
          searchParams.set("page", (currentPage - 1).toString());
          setSearchParams(searchParams);
        }}
        color="gray"
      >
        <ArrowLeftIcon className="size-4" />
      </button>
      <span>{currentPage}</span>
      <button
        className={!iSearch.hasNextPage ? "invisible" : ""}
        onClick={() => {
          searchParams.set("page", (currentPage + 1).toString());
          setSearchParams(searchParams);
        }}
        color="gray"
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </div>
  );
}
