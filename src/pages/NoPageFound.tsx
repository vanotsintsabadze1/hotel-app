import { useEffect } from "react";
import { LiaThumbsUp } from "react-icons/lia";

function NoPageFound() {
  const reloadPage = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2500);
  };

  useEffect(reloadPage, []);

  return (
    <section className="flex h-[60rem] w-full items-center justify-center bg-gray-400">
      <div className="flex h-[30rem] w-[40rem] flex-col items-center justify-center gap-[2rem] rounded-[2rem] bg-white">
        <h1 className="text-[2rem] font-semibold">404 Page Not Found</h1>
        <p className="text-[1.2rem] font-bold">We'll automatically navigate you to the home page</p>
        <LiaThumbsUp className="h-[2rem] w-[2rem]" />
      </div>
    </section>
  );
}

export default NoPageFound;
