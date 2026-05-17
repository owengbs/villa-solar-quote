import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface HeaderProps {
  title?: string
  showBack?: boolean
  onBack?: () => void
}

export default function Header({ title = 'TCL光伏科技', showBack = false, onBack }: HeaderProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 flex items-center h-12 px-4 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      {showBack && (
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-8 h-8 -ml-2 rounded-full active:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      <h1 className="flex-1 text-center text-base font-medium text-gray-900">
        {title}
      </h1>
      {showBack && <div className="w-8" />}
    </motion.header>
  )
}
