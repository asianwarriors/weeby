import { Form, NavLink } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon, UserProfileIcon } from "./icons";

export default function Navbar({
  className,
}: React.HTMLAttributes<React.PropsWithChildren>) {
  return (
    <nav className={className}>
      <NavLink to="/">
        <HomeIcon />
      </NavLink>
      <Form
        method="GET"
        action="/search"
        className="box-content flex align-middle h-full w-2/3 items-center gap-2 overflow-hidden rounded-full border-2 border-gray-300 px-2 md:w-1/2 lg:w-2/5 xl:w-1/3"
      >
        <MagnifyingGlassIcon className="size-4 shrink-0 stroke-gray-700" />
        <input
          required
          id="q"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Search"
          // @Incomplete: style the cancel button (see search-cancel in tailwind config)
          className="size-full focus:outline-none"
        />
      </Form>
      {/* @Incomplete: add user profile / login+logout */}
      <NavLink to="/">
        <UserProfileIcon />
      </NavLink>
    </nav>
  );
}
