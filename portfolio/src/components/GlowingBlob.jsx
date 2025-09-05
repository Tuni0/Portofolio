import { motion } from "framer-motion";

export default function GlowingBlob() {
  return (
    <>
      <motion.div
        className="fixed w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]
                   bg-[radial-gradient(circle,rgba(109,40,217,1),rgba(109,40,217,0)_70%)]
                   blur-[160px] rounded-full left-[-200px] sm:left-[-400px]"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
