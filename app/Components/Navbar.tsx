import { BACKEND_URL } from "../constants";

"use client"
export default function Navbar() {
  async function login() {
    window.open("http://localhost:4000/auth/google", "_self");
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
