import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TapGuide from '../components/TapGuide'
import {
  useFilterStore,
  HOUSE_TYPES,
  ROOF_TYPES,
  TECH_TYPES,
  type HouseType,
  type RoofType,
  type TechType,
} from '../store/filterStore'

// 屋顶类型图片
const roofImages: Record<string, string> = {
  '平屋面': 'https://picsum.photos/seed/roof1/200/150',
  '斜屋面': 'https://picsum.photos/seed/roof2/200/150',
}

// 技术方案图片
const techImages: Record<string, string> = {
  '阳光房': 'https://picsum.photos/seed/tech1/200/150',
  '贴面安装': 'https://picsum.photos/seed/tech2/200/150',
  '轻型支架': 'https://picsum.photos/seed/tech3/200/150',
  '阵列式': 'https://picsum.photos/seed/tech4/200/150',
}

export default function Filter() {
  const navigate = useNavigate()
  const {
    houseType,
    roofType,
    techType,
    setHouseType,
    setRoofType,
    setTechType,
  } = useFilterStore()

  const handleViewCases = () => {
    navigate('/electric')
  }

  const handleBack = () => {
    navigate('/')
  }

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
          src="https://picsum.photos/seed/villa/800/400"
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
            <StepIndicator step={1} label="房型信息" active />
            <div className="w-8 h-px bg-gray-300" />
            <StepIndicator step={2} label="用电信息" />
            <div className="w-8 h-px bg-gray-300" />
            <StepIndicator step={3} label="套餐选用" />
          </div>
        </div>

        {/* 表单滚动区 */}
        <div className="flex-1 overflow-auto px-5 pb-4">
          {/* 房型选择 */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">您的房型</h3>
            <div className="flex gap-3">
              {HOUSE_TYPES.filter(Boolean).map((type) => (
                <button
                  key={type}
                  onClick={() => setHouseType(type === houseType ? null : type as HouseType)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all ${
                    houseType === type
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 屋顶类型选择 - 带图片 */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">您的屋顶类型</h3>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
              {ROOF_TYPES.filter(Boolean).map((type) => (
                <ImageSelectCard
                  key={type}
                  label={type!}
                  image={roofImages[type!]}
                  selected={roofType === type}
                  onClick={() => setRoofType(type === roofType ? null : type as RoofType)}
                />
              ))}
            </div>
          </div>

          {/* 技术方案选择 - 带图片 */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">您喜欢的安装方案</h3>
            <div className="grid grid-cols-2 gap-3">
              {TECH_TYPES.filter(Boolean).map((type) => (
                <ImageSelectCard
                  key={type}
                  label={type!}
                  image={techImages[type!]}
                  selected={techType === type}
                  onClick={() => setTechType(type === techType ? null : type as TechType)}
                />
              ))}
            </div>
          </div>
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
                onClick={handleViewCases}
                className="w-full py-3.5 rounded-full bg-primary-500 text-white font-medium text-base shadow-lg shadow-primary-200 active:bg-primary-600 transition-colors"
              >
                下一步
              </button>
              <TapGuide />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// 步骤指示器组件
function StepIndicator({ step, label, active = false }: { step: number; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
          active
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 text-gray-500'
        }`}
      >
        {step}
      </div>
      <span className={`text-xs ${active ? 'text-primary-600 font-medium' : 'text-gray-400'}`}>
        {label}
      </span>
    </div>
  )
}

// 图片选择卡片组件
function ImageSelectCard({
  label,
  image,
  selected,
  onClick,
}: {
  label: string
  image: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden border-2 transition-all ${
        selected
          ? 'border-primary-500 shadow-md shadow-primary-100'
          : 'border-transparent'
      }`}
    >
      <div className="aspect-[4/3] bg-gray-100">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className={`py-2 text-center text-sm font-medium ${
        selected ? 'bg-primary-50 text-primary-600' : 'bg-gray-50 text-gray-700'
      }`}>
        {label} {selected && '>'}
      </div>
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </motion.button>
  )
}
