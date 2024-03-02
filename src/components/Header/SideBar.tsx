import { motion } from "framer-motion";
import SideBarNavigation from "./SideBarNavigation";
import { IoMdExit } from "react-icons/io";

function SideBar({ toggleBar }: { toggleBar: () => void }) {
  const sideBarAnimationVariants = {
    hidden: { x: 200 },
    visible: { x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={sideBarAnimationVariants}
      className="slate-400 fixed right-0 top-0 h-screen w-[17rem] bg-secondary pt-[3rem]"
    >
      <nav className="flex w-full flex-col items-end justify-center gap-[4.5rem] p-[2rem] uppercase">
        <SideBarNavigation />
        <button onClick={toggleBar}>
          <IoMdExit className="h-[2.5rem] w-[2.5rem] text-white" />
        </button>
      </nav>
    </motion.div>
  );
}

export default SideBar;
