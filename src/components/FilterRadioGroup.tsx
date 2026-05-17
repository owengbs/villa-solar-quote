import { motion } from 'framer-motion'

interface FilterRadioGroupProps<T extends string> {
  label: string
  options: (T | null)[]
  value: T | null
  onChange: (value: T | null) => void
}

export default function FilterRadioGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterRadioGroupProps<T>) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-3">{label}</h3>
      <div className="flex flex-wrap gap-3">
        {options.filter(Boolean).map((option) => (
          <motion.button
            key={option}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(option === value ? null : option)}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              value === option
                ? 'bg-primary-500 text-white shadow-md shadow-primary-200'
                : 'bg-white text-gray-700 border border-gray-200 active:bg-gray-50'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
