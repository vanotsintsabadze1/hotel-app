import { motion } from "framer-motion";
import { TbAlertTriangle } from "react-icons/tb";

const divAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

function ErrorModal({ errorMessage }: { errorMessage: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={divAnimation}
      className="absolute left-0 right-0 top-[10rem] mx-auto  flex h-[6rem] w-[35rem] items-center justify-center gap-[.5rem] rounded-[.5rem] bg-white shadow-individual-room-card"
    >
      <TbAlertTriangle className="h-[2.7rem] w-[2.7rem] text-red-500" />
      <p className="text-[1.2rem] font-bold">{errorMessage}</p>
    </motion.div>
  );
}

export default ErrorModal;
