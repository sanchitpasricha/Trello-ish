"use client";

import { ButtonStyle } from "@/interfaces/button-style";
import { useRouter } from "next/navigation";

export default function Button(props: ButtonStyle) {
  const router = useRouter();

  const handleClick = () => {
    if (props.href) {
      router.push(props.href);
    }
  };

  return (
    <button
      className={`text-white ${props.color} font-medium rounded-lg text-lg px-8 py-2.5 m-2 shadow-md`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}
