import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <div>
      <div className="w-full bg-nav-blue p-4 flex justify-between ">
        <Image src="/logo-white.webp" alt="Logo" width={150} height={150} />
        <div className="flex flex-row justify-around space-x-4">
          <Button color={"bg-login-blue"} text={"Log In"} href="/login" />
          <Button color={"bg-signin-green"} text={"Sign Up"} href="/signup" />
        </div>
      </div>
    </div>
  );
}
