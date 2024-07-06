"use client"
import { BACKEND_PORT, BACKEND_URL } from "../constants";

export default function Navbar() {
  async function login() {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }
  return (
    <div className="flex flex-wrap text-sm justify-center gap-2 items-center md:px-10 font-extrabold text-white uppercase">
        <button className="uppercase " onClick={login}>Sign In</button>
      <button className="uppercase">Docs</button>
      <button className="uppercase">Contact Us</button>
    </div>
  );
}
