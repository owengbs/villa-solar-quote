import { motion, AnimatePresence } from 'framer-motion'

interface FilterSheetProps {
  isOpen: boolean
  onClose: () => void
  title: string
  options: (string | null)[]
  value: string | null
  onChange: (value: string | null) => void
}

export default function FilterSheet({
  isOpen,
  onClose,
  title,
  options,
  value,
  onChange,
}: FilterSheetProps) {
  const handleSelect = (option: string | null) => {
    onChange(option)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* 底部弹窗 */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 safe-area-bottom"
          >
            <div className="p-5">
              {/* 拖拽指示条 */}
              <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

              <h3 className="text-lg font-semibold text-center text-gray-800 mb-5">
                选择{title}
              </h3>

              <div className="space-y-2.5">
                {/* 全部选项 */}
                <button
                  onClick={() => handleSelect(null)}
                  className={`w-full py-3.5 rounded-xl text-center font-medium transition-all ${
                    value === null
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                  }`}
                >
                  全部
                </button>

                {options.filter(Boolean).map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full py-3.5 rounded-xl text-center font-medium transition-all ${
                      value === option
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 mt-4 text-gray-400 text-center font-medium"
              >
                取消
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
