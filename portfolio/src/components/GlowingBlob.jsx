import { motion } from "framer-motion";

export default function GlowingBlob() {
  return (
    <>
      {/* Blob 1 – większy, ciemny fiolet, przy lewej krawędzi */}
      <motion.div
        className="fixed w-[800px] h-[800px]
                   bg-[radial-gradient(circle,rgba(109,40,217,1),rgba(109,40,217,0)_70%)]
                   blur-[160px] rounded-full -z-10 top-1/2 left-[-400px]"
        animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
