import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TapGuide from '../components/TapGuide'

export default function Home() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full w-full flex flex-col bg-gray-100"
    >
      {/* 顶部大图区域 */}
      <div className="relative flex-1 min-h-[50%]">
        <img
          src="https://picsum.photos/seed/villa-home/800/600"
          alt="别墅光伏"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        
        {/* Logo */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">
              TCL光伏科技
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 白色卡片区域 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="-mt-8 bg-white rounded-t-3xl px-6 pt-8 pb-6 safe-area-bottom"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            墅野新居
          </h2>
          <p className="text-gray-500 text-sm">
            为您定制专属的别墅光伏解决方案
          </p>
        </div>

        {/* 特性展示 */}
        <div className="flex justify-around mb-8">
          <FeatureItem icon="🏠" label="多种房型" />
          <FeatureItem icon="⚡" label="高效储能" />
          <FeatureItem icon="🌿" label="绿色环保" />
        </div>

        {/* 入口按钮 */}
        <div className="relative">
          <button
            onClick={() => navigate('/filter')}
            className="w-full py-4 bg-primary-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-primary-200 active:bg-primary-600 transition-colors"
          >
            开始定制方案
          </button>
          <TapGuide />
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          3步快速获取您的专属报价
        </p>
      </motion.div>
    </motion.div>
  )
}

function FeatureItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  )
}
