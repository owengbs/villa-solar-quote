import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TapGuide from '../components/TapGuide'
import {
  useFilterStore,
  PACKAGE_TYPES,
  PACKAGE_INFO,
  AREA_TO_CAPACITY,
  type PackageType,
} from '../store/filterStore'

export default function PackageSelect() {
  const navigate = useNavigate()
  const {
    packageType,
    setPackageType,
    roofArea,
  } = useFilterStore()

  // 计算预估装机容量
  const estimatedCapacity = roofArea ? AREA_TO_CAPACITY[roofArea] || 10 : 10

  const handleNext = () => {
    navigate('/quote')
  }

  const handleBack = () => {
    navigate('/electric')
  }

  const canProceed = packageType !== null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col bg-gray-100"
    >
      {/* 顶部大图区域 */}
      <div className="relative h-48 flex-shrink-0">
        <img
          src="https://picsum.photos/seed/villa-package/800/400"
          alt="别墅"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      {/* 白色卡片内容区 */}
      <div className="flex-1 -mt-6 bg-white rounded-t-3xl overflow-hidden flex flex-col">
        {/* 标题和步骤 */}
        <div className="px-5 pt-6 pb-4">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
            填写您的建站信息，3步获取报价
          </h2>
          
          {/* 步骤指示器 */}
          <div className="flex items-center justify-center gap-2">
            <StepIndicator step={1} label="房型信息" completed />
            <div className="w-8 h-px bg-primary-500" />
            <StepIndicator step={2} label="用电信息" completed />
            <div className="w-8 h-px bg-primary-500" />
            <StepIndicator step={3} label="套餐选用" active />
          </div>
        </div>

        {/* 表单滚动区 */}
        <div className="flex-1 overflow-auto px-5 pb-4">
          {/* 装机容量提示 */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 mb-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">根据您的屋顶面积，推荐装机容量</p>
                <p className="text-2xl font-bold mt-1">{estimatedCapacity} kW</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 套餐选择 */}
          <h3 className="text-base font-medium text-gray-800 mb-3">选择您的套餐</h3>
          <div className="space-y-3">
            {PACKAGE_TYPES.filter(Boolean).map((type) => {
              const pkg = PACKAGE_INFO[type!]
              const price = pkg.pricePerKw * estimatedCapacity
              const isSelected = packageType === type
              const isRecommended = type === '标准型'

              return (
                <motion.button
                  key={type}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPackageType(type === packageType ? null : type as PackageType)}
                  className={`w-full text-left rounded-xl border-2 overflow-hidden transition-all ${
                    isSelected
                      ? 'border-primary-500 shadow-md shadow-primary-100'
                      : 'border-gray-200'
                  }`}
                >
                  {/* 推荐标签 */}
                  {isRecommended && (
                    <div className="bg-primary-500 text-white text-xs px-3 py-1 text-center font-medium">
                      推荐选择
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className={`font-semibold ${isSelected ? 'text-primary-600' : 'text-gray-800'}`}>
                          {pkg.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-0.5">{pkg.description}</p>
                      </div>
                      {/* 选中状态 */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-primary-500 bg-primary-500' : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* 特性标签 */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {pkg.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-2 py-0.5 rounded ${
                            isSelected ? 'bg-primary-50 text-primary-600' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* 价格 */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-gray-500">预估价格</span>
                      <span className={`text-xl font-bold ${isSelected ? 'text-primary-600' : 'text-gray-800'}`}>
                        ¥{price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400">起</span>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* 底部说明 */}
          <p className="text-xs text-gray-400 text-center mt-4">
            最终报价以实际勘测结果为准
          </p>
        </div>

        {/* 底部按钮区 */}
        <div className="px-5 py-4 border-t border-gray-100 safe-area-bottom">
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 py-3.5 rounded-full border-2 border-gray-300 text-gray-600 font-medium text-base active:bg-gray-50 transition-colors"
            >
              上一步
            </button>
            <div className="flex-1 relative">
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`w-full py-3.5 rounded-full font-medium text-base transition-colors ${
                  canProceed
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200 active:bg-primary-600'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                获取报价
              </button>
              {canProceed && <TapGuide />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// 步骤指示器组件
function StepIndicator({
  step,
  label,
  active = false,
  completed = false,
}: {
  step: number
  label: string
  active?: boolean
  completed?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
          active
            ? 'bg-primary-500 text-white'
            : completed
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 text-gray-500'
        }`}
      >
        {completed ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          step
        )}
      </div>
      <span className={`text-xs ${active || completed ? 'text-primary-600 font-medium' : 'text-gray-400'}`}>
        {label}
      </span>
    </div>
  )
}
