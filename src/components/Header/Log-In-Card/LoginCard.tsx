import { motion } from "framer-motion";
import { redirectToGoogleAuth } from "../../../scripts/authorization/redirectToGoogleAuth";
import LoginForm from "./LoginForm";

function LoginCard() {
  const loginCardAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2, ease: "easeOut", type: "spring" }}
      variants={loginCardAnimation}
      className="absolute right-0 top-[6.5rem] flex h-[38rem] w-[35rem] flex-col items-center justify-center gap-[1rem] rounded-[1rem] bg-white p-[1.5rem]"
    >
      <h1 className="font-bold text-[2rem] uppercase tracking-wider text-black">Sign Up</h1>
      <LoginForm />
      <button
        className="flex h-[4rem] w-[23rem] items-center justify-center gap-[1rem] rounded-[.2rem] border-[.1rem] border-gray-300 text-[1.1rem] font-bold uppercase text-white shadow-soft"
        onClick={redirectToGoogleAuth}
      >
        <img src="/social-icons/google-icon.webp" className="h-[2rem] w-[2rem]" />
        <p className="text-black">Continue with Google</p>
      </button>
    </motion.div>
  );
}

export default LoginCard;
