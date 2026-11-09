import { m, useReducedMotion } from "motion/react"

const blobs = [
  {
    className:
      "left-[-250px] top-[-150px] size-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.3),rgba(139,92,246,0)_70%)] blur-[100px] sm:left-[-450px] sm:size-[900px]",
    animate: { x: [0, 80, -40, 0], y: [0, -40, 60, 0], scale: [1, 1.05, 0.95, 1] },
    duration: 30,
    delay: 0,
  },
  {
    className:
      "right-[-150px] bottom-[-150px] size-[400px] bg-[radial-gradient(circle,rgba(99,102,241,0.25),rgba(99,102,241,0)_70%)] blur-[90px] sm:right-[10%] sm:size-[700px]",
    animate: { x: [0, -100, 50, 0], y: [0, 80, -60, 0], scale: [1, 1.1, 0.9, 1] },
    duration: 35,
    delay: 2,
  },
  {
    className:
      "left-[30%] top-[30%] size-[300px] bg-[radial-gradient(circle,rgba(217,70,239,0.15),rgba(217,70,239,0)_70%)] blur-[80px] sm:size-[600px]",
    animate: { x: [0, 60, -90, 0], y: [0, 120, -30, 0], scale: [1, 1.15, 0.85, 1] },
    duration: 40,
    delay: 5,
  },
]

/** The slowly drifting violet glow behind the whole page. */
export function BackgroundGlow() {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-70 dark:opacity-100">
      {blobs.map((blob, index) => (
        <m.div
          key={index}
          className={`absolute rounded-full ${blob.className}`}
          animate={reduceMotion ? undefined : blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut", delay: blob.delay }}
        />
      ))}
    </div>
  )
}
