import { motion } from 'framer-motion'
import type { CaseItem } from '../data/cases'
import ImageCarousel from './ImageCarousel'

interface CaseCardProps {
  caseItem: CaseItem
  index: number
}

export default function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4"
    >
      {/* 图片轮播 */}
      <ImageCarousel images={caseItem.images} />

      {/* 内容区域 */}
      <div className="p-4">
        {/* 标题和地址 */}
        <h3 className="text-base font-semibold text-gray-800 mb-1">
          {caseItem.name}
        </h3>
        <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {caseItem.address}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2.5 py-1 bg-primary-50 text-primary-600 text-xs rounded-full font-medium">
            {caseItem.houseType}
          </span>
          <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
            {caseItem.roofType}
          </span>
          <span className="px-2.5 py-1 bg-orange-50 text-orange-600 text-xs rounded-full font-medium">
            {caseItem.techType}
          </span>
        </div>

        {/* 技术参数 */}
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
          <div className="flex text-sm">
            <span className="text-gray-400 w-20 flex-shrink-0">技术方案</span>
            <span className="text-gray-700">{caseItem.techInfo}</span>
          </div>
          <div className="flex text-sm">
            <span className="text-gray-400 w-20 flex-shrink-0">光伏容量</span>
            <span className="text-gray-700">{caseItem.pvCapacity}</span>
          </div>
          {caseItem.storageCapacity && (
            <div className="flex text-sm">
              <span className="text-gray-400 w-20 flex-shrink-0">储能容量</span>
              <span className="text-gray-700">{caseItem.storageCapacity}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
