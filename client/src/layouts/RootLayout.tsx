import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col size-full px-4">
      <Navbar className="box-content flex h-9 items-center justify-between px-4 py-2 shadow -mx-4 flex-grow-0" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
