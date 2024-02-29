import { motion } from "framer-motion";
import { redirectToGoogleAuth } from "../../scripts/login/redirectToGoogleAuth";

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
      className="absolute right-0 top-[6.5rem] flex h-[20rem] w-[30rem] items-center justify-center rounded-[1rem] bg-white"
    >
      <button
        className="h-[3rem] w-[12rem] rounded-[1rem] bg-black text-[1.1rem] font-bold uppercase text-white"
        onClick={redirectToGoogleAuth}
      >
        Google Login
      </button>
    </motion.div>
  );
}

export default LoginCard;
