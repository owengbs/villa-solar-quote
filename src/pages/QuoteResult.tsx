import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  useFilterStore,
  PACKAGE_INFO,
  AREA_TO_CAPACITY,
} from '../store/filterStore'

export default function QuoteResult() {
  const navigate = useNavigate()
  const {
    houseType,
    roofType,
    techType,
    province,
    city,
    district,
    roofArea,
    packageType,
    resetFilters,
  } = useFilterStore()

  // 计算报价
  const estimatedCapacity = roofArea ? AREA_TO_CAPACITY[roofArea] || 10 : 10
  const pkg = packageType ? PACKAGE_INFO[packageType] : null
  const totalPrice = pkg ? pkg.pricePerKw * estimatedCapacity : 0

  // 预估年发电量 (1kW约1000-1200度/年，取1100)
  const annualPower = estimatedCapacity * 1100
  // 预估年收益 (假设电价0.6元/度)
  const annualIncome = annualPower * 0.6
  // 预估回本周期
  const paybackYears = totalPrice / annualIncome

  const handleViewCases = () => {
    navigate('/cases')
  }

  const handleRestart = () => {
    resetFilters()
    navigate('/')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col bg-gray-100"
    >
      {/* 顶部成功提示 */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 pt-12 pb-20 px-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white"
        >
          <h1 className="text-xl font-semibold mb-2">报价生成成功</h1>
          <p className="text-white/80 text-sm">以下是您的专属光伏方案报价</p>
        </motion.div>
      </div>

      {/* 报价卡片 */}
      <div className="flex-1 -mt-12 px-4 overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* 价格区域 */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-5 text-white">
            <p className="text-sm opacity-90">预估总价</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold">¥{totalPrice.toLocaleString()}</span>
              <span className="text-sm opacity-80">起</span>
            </div>
            <p className="text-xs opacity-75 mt-2">*最终价格以实际勘测后的正式报价为准</p>
          </div>

          {/* 方案详情 */}
          <div className="p-5">
            <h3 className="font-semibold text-gray-800 mb-4">方案详情</h3>
            
            <div className="space-y-3">
              <InfoRow label="安装地址" value={`${province}${city}${district}`} />
              <InfoRow label="房型" value={houseType || '-'} />
              <InfoRow label="屋顶类型" value={roofType || '-'} />
              <InfoRow label="安装方案" value={techType || '-'} />
              <InfoRow label="屋顶面积" value={roofArea || '-'} />
              <InfoRow label="套餐类型" value={pkg?.name || '-'} highlight />
              <InfoRow label="装机容量" value={`${estimatedCapacity} kW`} highlight />
            </div>
          </div>

          {/* 收益预估 */}
          <div className="px-5 pb-5">
            <h3 className="font-semibold text-gray-800 mb-4">收益预估</h3>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-xs text-green-600 mb-1">年发电量</p>
                <p className="text-lg font-bold text-green-700">{(annualPower / 1000).toFixed(1)}</p>
                <p className="text-xs text-green-600">千度</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-600 mb-1">年收益</p>
                <p className="text-lg font-bold text-blue-700">{(annualIncome / 1000).toFixed(1)}</p>
                <p className="text-xs text-blue-600">千元</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-3 text-center">
                <p className="text-xs text-purple-600 mb-1">回本周期</p>
                <p className="text-lg font-bold text-purple-700">{paybackYears.toFixed(1)}</p>
                <p className="text-xs text-purple-600">年</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center mt-3">
              *以上数据为预估值，实际收益受地区日照、电价等因素影响
            </p>
          </div>

          {/* 套餐特性 */}
          {pkg && (
            <div className="px-5 pb-5">
              <h3 className="font-semibold text-gray-800 mb-3">套餐包含</h3>
              <div className="flex flex-wrap gap-2">
                {pkg.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 text-sm text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* 底部安全区占位 */}
        <div className="h-32" />
      </div>

      {/* 底部操作区 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 safe-area-bottom">
        <div className="flex gap-3">
          <button
            onClick={handleViewCases}
            className="flex-1 py-3.5 rounded-full border-2 border-primary-500 text-primary-600 font-medium text-base active:bg-primary-50 transition-colors"
          >
            查看案例
          </button>
          <button
            onClick={handleRestart}
            className="flex-1 py-3.5 rounded-full bg-primary-500 text-white font-medium text-base shadow-lg shadow-primary-200 active:bg-primary-600 transition-colors"
          >
            重新定制
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// 信息行组件
function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className={`text-sm ${highlight ? 'text-primary-600 font-medium' : 'text-gray-800'}`}>
        {value}
      </span>
    </div>
  )
}
