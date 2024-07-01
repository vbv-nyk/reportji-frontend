"use client"
import { BACKEND_PORT, BACKEND_URL } from "../constants";

export default function Navbar() {
  async function login() {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }
  return (
    <div className="flex justify-between items-center px-10 font-extrabold text-white uppercase">
      <div>Home</div>
        <div className="" onClick={login}>Sign In</div>
      <div>Docs</div>
      <div>Contact Us</div>
    </div>
  );
}
