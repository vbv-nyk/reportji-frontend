"use client"
import { BACKEND_PORT, BACKEND_URL } from "../constants";

export default function Navbar() {
  async function login() {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }
  return (
    <div className="flex flex-wrap text-sm justify-center gap-2 px-2 items-center md:px-0 font-extrabold text-white uppercase md:text-md md:justify-evenly md:w-full">
      <button className="flex-grow uppercase hover:text-lg" onClick={login}>Sign In</button>
      <button className="flex-grow uppercase hover:text-lg">Documents</button>
      <button className="flex-grow uppercase hover:text-lg">About Us</button>
      <button className="hidden sm:inline flex-grow uppercase hover:text-lg">Github</button>
    </div>
  );
}
