import { LongArrowRight } from "../components/icons";

const tempBroadcasts: unknown[] = [];
const tempCommunities: unknown[] = [];

/*
  @Incomplete
    - height spacing between rows (i.e. Broadcasts/Communities) shouldn't change regardless of whether there is content or not
    - empty text should be centered (like hero banner type of thing)
*/
export default function Home() {
  return (
    <main className="h-full pt-4">
      <div className="flex flex-col gap-5">
        <section>
          <h2 className="flex items-center gap-2 py-1 text-2xl font-semibold">
            Broadcasts
            <LongArrowRight />
          </h2>
          {renderBroadcasts(tempBroadcasts)}
        </section>
        <section>
          <h2 className="flex items-center gap-2 py-1 text-2xl font-semibold">
            Communities
            <LongArrowRight />
          </h2>
          {renderCommunities(tempCommunities)}
        </section>
      </div>
    </main>
  );
}

function renderBroadcasts(broadcasts: unknown[]) {
  if (!broadcasts.length) {
    return (
      <span className="text-sm text-gray-500">
        No broadcasts currently!
        <br />
        (Create your own broadcast!)
      </span>
    );
  }
  return <div>Broadcasts!</div>;
}

function renderCommunities(communities: unknown[]) {
  if (!communities.length) {
    return (
      <span className="text-sm text-gray-500">
        No communities currently!
        <br />
        (Create your own community!)
      </span>
    );
  }
  return <div>Broadcasts!</div>;
}
