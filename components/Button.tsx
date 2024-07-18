import { ButtonStyle } from "@/interfaces/button-style";

export default function Button(props: ButtonStyle) {
  return (
    <button
      className={`text-white ${props.color} font-medium rounded-lg text-lg px-8 py-2.5 m-2 shadow-md`}
    >
      {props.text}
    </button>
  );
}
