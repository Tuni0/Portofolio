import { motion } from "framer-motion";

export default function GlowingBlob() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Primary Violet Blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] sm:w-[900px] sm:h-[900px]
                   bg-[radial-gradient(circle,rgba(139,92,246,0.3),rgba(139,92,246,0)_70%)]
                   blur-[100px] rounded-full left-[-250px] sm:left-[-450px] top-[-150px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.05, 0.95, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary Indigo/Blue Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] sm:w-[700px] sm:h-[700px]
                   bg-[radial-gradient(circle,rgba(99,102,241,0.25),rgba(99,102,241,0)_70%)]
                   blur-[90px] rounded-full right-[-150px] sm:right-[10%] bottom-[-150px]"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Tertiary Soft Pink Blob for Warmth */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]
                   bg-[radial-gradient(circle,rgba(217,70,239,0.15),rgba(217,70,239,0)_70%)]
                   blur-[80px] rounded-full left-[30%] top-[30%]"
        animate={{
          x: [0, 60, -90, 0],
          y: [0, 120, -30, 0],
          scale: [1, 1.15, 0.85, 1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
}
