import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TapGuide from '../components/TapGuide'
import {
  useFilterStore,
  ROOF_AREA_RANGES,
  type RoofAreaRange,
} from '../store/filterStore'
import { regions, getCitiesByProvince, getDistrictsByCity } from '../data/regions'

type PickerType = 'province' | 'city' | 'district' | 'area' | null

export default function ElectricInfo() {
  const navigate = useNavigate()
  const {
    province,
    city,
    district,
    roofArea,
    setProvince,
    setCity,
    setDistrict,
    setRoofArea,
  } = useFilterStore()

  const [activePicker, setActivePicker] = useState<PickerType>(null)

  const cities = province ? getCitiesByProvince(province) : []
  const districts = province && city ? getDistrictsByCity(province, city) : []

  const handleNext = () => {
    navigate('/package')
  }

  const handleBack = () => {
    navigate('/filter')
  }

  const canProceed = province && city && district && roofArea

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
          src="https://picsum.photos/seed/villa-electric/800/400"
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
            <StepIndicator step={2} label="用电信息" active />
            <div className="w-8 h-px bg-gray-300" />
            <StepIndicator step={3} label="套餐选用" />
          </div>
        </div>

        {/* 表单滚动区 */}
        <div className="flex-1 overflow-auto px-5 pb-4">
          {/* 房屋地址 */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">您的房屋地址</h3>
            <button
              onClick={() => setActivePicker('province')}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200"
            >
              <span className={province ? 'text-gray-800' : 'text-gray-400'}>
                {province && city && district
                  ? `${province}${city}${district}`
                  : '请选择省市区'}
              </span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* 屋顶面积 */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">您的屋顶面积</h3>
            <button
              onClick={() => setActivePicker('area')}
              className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200"
            >
              <span className={roofArea ? 'text-gray-800' : 'text-gray-400'}>
                {roofArea || '请选择屋顶面积'}
              </span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* 信息提示 */}
          <div className="bg-primary-50 rounded-xl p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-primary-700 font-medium">温馨提示</p>
                <p className="text-xs text-primary-600 mt-1">
                  屋顶面积越大，可安装的光伏容量越高，发电收益也越可观。我们会根据您的屋顶面积为您推荐最优方案。
                </p>
              </div>
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
                onClick={handleNext}
                disabled={!canProceed}
                className={`w-full py-3.5 rounded-full font-medium text-base transition-colors ${
                  canProceed
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200 active:bg-primary-600'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                下一步
              </button>
              {canProceed && <TapGuide />}
            </div>
          </div>
        </div>
      </div>

      {/* 选择器弹窗 */}
      <AnimatePresence>
        {activePicker === 'province' && (
          <PickerSheet
            title="选择省份"
            options={regions.map((r) => r.name)}
            value={province}
            onSelect={(v) => {
              setProvince(v)
              setActivePicker('city')
            }}
            onClose={() => setActivePicker(null)}
          />
        )}
        {activePicker === 'city' && cities.length > 0 && (
          <PickerSheet
            title="选择城市"
            options={cities.map((c) => c.name)}
            value={city}
            onSelect={(v) => {
              setCity(v)
              setActivePicker('district')
            }}
            onClose={() => setActivePicker(null)}
          />
        )}
        {activePicker === 'district' && districts.length > 0 && (
          <PickerSheet
            title="选择区县"
            options={districts.map((d) => d.name)}
            value={district}
            onSelect={(v) => {
              setDistrict(v)
              setActivePicker(null)
            }}
            onClose={() => setActivePicker(null)}
          />
        )}
        {activePicker === 'area' && (
          <PickerSheet
            title="选择屋顶面积"
            options={ROOF_AREA_RANGES.filter(Boolean) as string[]}
            value={roofArea}
            onSelect={(v) => {
              setRoofArea(v as RoofAreaRange)
              setActivePicker(null)
            }}
            onClose={() => setActivePicker(null)}
          />
        )}
      </AnimatePresence>
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

// 选择器弹窗组件
function PickerSheet({
  title,
  options,
  value,
  onSelect,
  onClose,
}: {
  title: string
  options: string[]
  value: string | null
  onSelect: (value: string) => void
  onClose: () => void
}) {
  return (
    <>
      {/* 遮罩层 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      {/* 弹窗 */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[70vh] flex flex-col"
      >
        {/* 标题栏 */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <button onClick={onClose} className="text-gray-500">
            取消
          </button>
          <span className="font-medium text-gray-800">{title}</span>
          <div className="w-10" />
        </div>
        {/* 选项列表 */}
        <div className="flex-1 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full px-5 py-4 text-left border-b border-gray-50 flex items-center justify-between ${
                value === option ? 'bg-primary-50' : ''
              }`}
            >
              <span className={value === option ? 'text-primary-600 font-medium' : 'text-gray-700'}>
                {option}
              </span>
              {value === option && (
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
        {/* 底部安全区 */}
        <div className="safe-area-bottom" />
      </motion.div>
    </>
  )
}
