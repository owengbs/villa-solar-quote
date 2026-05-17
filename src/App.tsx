import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Filter from './pages/Filter'
import ElectricInfo from './pages/ElectricInfo'
import PackageSelect from './pages/PackageSelect'
import QuoteResult from './pages/QuoteResult'
import CaseList from './pages/CaseList'

function App() {
  return (
    <div className="h-full w-full bg-gray-50">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/electric" element={<ElectricInfo />} />
          <Route path="/package" element={<PackageSelect />} />
          <Route path="/quote" element={<QuoteResult />} />
          <Route path="/cases" element={<CaseList />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
