import { motion } from "framer-motion";

const divAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childDivAnimation = {
  hidden: { x: 100 },
  visible: { x: 0 },
};

function DatePickerContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, type: "spring" }}
      variants={divAnimation}
      className="fixed left-1/2 top-1/2 z-[4] flex h-[100dvh] w-[100dvw] translate-x-[-50%] translate-y-[-50%] items-center justify-center p-[2rem] shadow-soft"
    >
      <div className="absolute top-0 h-full w-full bg-black opacity-50" />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, type: "spring" }}
        variants={childDivAnimation}
        className="z-[4] flex h-[25rem] w-full items-center justify-center rounded-[1rem] bg-white shadow-soft sm:w-[40rem] md:w-[40rem] lg:w-[40rem]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default DatePickerContainer;
