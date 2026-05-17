import { motion } from 'framer-motion'

export default function TapGuide() {
  return (
    <motion.div
      className="absolute -right-2 -top-8 text-3xl pointer-events-none"
      animate={{
        y: [0, -8, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C10.9 2 10 2.9 10 4V11.5L8.45 10.63C7.8 10.27 7 10.63 7 11.39V11.61C7 11.98 7.18 12.32 7.47 12.53L11.29 15.35C11.69 15.63 12.31 15.63 12.71 15.35L16.53 12.53C16.82 12.32 17 11.98 17 11.61V11.39C17 10.63 16.2 10.27 15.55 10.63L14 11.5V4C14 2.9 13.1 2 12 2Z"
          fill="currentColor"
          className="text-primary-600"
        />
        <path
          d="M7 19H17C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19Z"
          fill="currentColor"
          className="text-primary-400"
        />
      </svg>
    </motion.div>
  )
}
