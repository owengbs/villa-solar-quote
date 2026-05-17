import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PhotoProvider } from 'react-photo-view'
import CaseCard from '../components/CaseCard'
import FilterSheet from '../components/FilterSheet'
import { cases } from '../data/cases'
import {
  useFilterStore,
  HOUSE_TYPES,
  ROOF_TYPES,
  TECH_TYPES,
  type HouseType,
  type RoofType,
  type TechType,
} from '../store/filterStore'

type FilterType = 'house' | 'roof' | 'tech'

export default function CaseList() {
  const navigate = useNavigate()
  const {
    houseType,
    roofType,
    techType,
    setHouseType,
    setRoofType,
    setTechType,
  } = useFilterStore()

  const [activeSheet, setActiveSheet] = useState<FilterType | null>(null)

  // 筛选案例
  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      if (houseType && c.houseType !== houseType) return false
      if (roofType && c.roofType !== roofType) return false
      if (techType && c.techType !== techType) return false
      return true
    })
  }, [houseType, roofType, techType])

  const getSheetConfig = () => {
    switch (activeSheet) {
      case 'house':
        return {
          title: '房型',
          options: HOUSE_TYPES,
          value: houseType,
          onChange: (v: string | null) => setHouseType(v as HouseType),
        }
      case 'roof':
        return {
          title: '屋面结构',
          options: ROOF_TYPES,
          value: roofType,
          onChange: (v: string | null) => setRoofType(v as RoofType),
        }
      case 'tech':
        return {
          title: '技术方案',
          options: TECH_TYPES,
          value: techType,
          onChange: (v: string | null) => setTechType(v as TechType),
        }
      default:
        return null
    }
  }

  const sheetConfig = getSheetConfig()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col bg-gray-100"
    >
      {/* 顶部区域 */}
      <div className="bg-white pt-3 pb-4 px-4">
        {/* 返回和标题 */}
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/filter')}
            className="flex items-center justify-center w-8 h-8 -ml-1 rounded-full active:bg-gray-100"
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
          <h1 className="flex-1 text-center text-lg font-semibold text-gray-800 -ml-8">
            为您找到 {filteredCases.length} 个案例
          </h1>
        </div>

        {/* 快捷筛选条 */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <FilterChip
            label="房型"
            value={houseType}
            onClick={() => setActiveSheet('house')}
          />
          <FilterChip
            label="屋面结构"
            value={roofType}
            onClick={() => setActiveSheet('roof')}
          />
          <FilterChip
            label="技术方案"
            value={techType}
            onClick={() => setActiveSheet('tech')}
          />
        </div>
      </div>

      {/* 案例列表 */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {filteredCases.length > 0 ? (
          <PhotoProvider>
            {filteredCases.map((caseItem, index) => (
              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
                index={index}
              />
            ))}
          </PhotoProvider>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-64 text-gray-400"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">暂无匹配的案例</p>
            <p className="text-sm text-gray-400 mt-1">请尝试调整筛选条件</p>
          </motion.div>
        )}

        {/* 底部安全区 */}
        <div className="h-8" />
      </div>

      {/* 筛选弹窗 */}
      {sheetConfig && (
        <FilterSheet
          isOpen={activeSheet !== null}
          onClose={() => setActiveSheet(null)}
          title={sheetConfig.title}
          options={sheetConfig.options}
          value={sheetConfig.value}
          onChange={sheetConfig.onChange}
        />
      )}
    </motion.div>
  )
}

// 筛选标签组件
function FilterChip({
  label,
  value,
  onClick,
}: {
  label: string
  value: string | null
  onClick: () => void
}) {
  const hasValue = value !== null

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all border ${
        hasValue
          ? 'bg-primary-500 text-white border-primary-500'
          : 'bg-white text-gray-600 border-gray-200'
      }`}
    >
      <span>{value || label}</span>
      <svg
        className={`w-4 h-4 ${hasValue ? 'text-white/80' : 'text-gray-400'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
}
