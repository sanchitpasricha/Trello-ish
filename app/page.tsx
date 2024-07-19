import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-nav-blue opacity-95 px-52 flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center px-8 text-center">
          <p className="text-white font-bold text-5xl">
            Trello lets you work more collaboratively and get more done.
          </p>
          <p className="text-white font-thin my-4 text-2xl">
            Trello boards, lists, and cards enable you to organize and
            prioritize your projects in a fun, flexible and rewarding way.
          </p>
          <Button
            color={"bg-signin-green"}
            text={"Sign Up - it's Free"}
            href="/signup"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
