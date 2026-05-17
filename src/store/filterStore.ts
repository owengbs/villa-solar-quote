import { create } from 'zustand'

export type HouseType = '独栋' | '双拼' | '联排' | null
export type RoofType = '平屋面' | '斜屋面' | null
export type TechType = '阳光房' | '贴面安装' | '轻型支架' | '阵列式' | null

// 屋顶面积选项
export type RoofAreaRange = '0-50㎡' | '50-100㎡' | '100-200㎡' | '200㎡以上' | null

// 套餐类型
export type PackageType = '经济型' | '标准型' | '豪华型' | null

interface FilterState {
  // 步骤1 - 房型信息
  houseType: HouseType
  roofType: RoofType
  techType: TechType
  
  // 步骤2 - 用电信息
  province: string
  city: string
  district: string
  roofArea: RoofAreaRange
  
  // 步骤3 - 套餐选用
  packageType: PackageType
  
  // Actions
  setHouseType: (type: HouseType) => void
  setRoofType: (type: RoofType) => void
  setTechType: (type: TechType) => void
  setProvince: (province: string) => void
  setCity: (city: string) => void
  setDistrict: (district: string) => void
  setRoofArea: (area: RoofAreaRange) => void
  setPackageType: (type: PackageType) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  // 步骤1
  houseType: null,
  roofType: null,
  techType: null,
  
  // 步骤2
  province: '',
  city: '',
  district: '',
  roofArea: null,
  
  // 步骤3
  packageType: null,
  
  // Actions
  setHouseType: (type) => set({ houseType: type }),
  setRoofType: (type) => set({ roofType: type }),
  setTechType: (type) => set({ techType: type }),
  setProvince: (province) => set({ province, city: '', district: '' }),
  setCity: (city) => set({ city, district: '' }),
  setDistrict: (district) => set({ district }),
  setRoofArea: (area) => set({ roofArea: area }),
  setPackageType: (type) => set({ packageType: type }),
  resetFilters: () => set({
    houseType: null,
    roofType: null,
    techType: null,
    province: '',
    city: '',
    district: '',
    roofArea: null,
    packageType: null,
  }),
}))

export const HOUSE_TYPES: HouseType[] = ['独栋', '双拼', '联排']
export const ROOF_TYPES: RoofType[] = ['平屋面', '斜屋面']
export const TECH_TYPES: TechType[] = ['阳光房', '贴面安装', '轻型支架', '阵列式']
export const ROOF_AREA_RANGES: RoofAreaRange[] = ['0-50㎡', '50-100㎡', '100-200㎡', '200㎡以上']
export const PACKAGE_TYPES: PackageType[] = ['经济型', '标准型', '豪华型']

// 套餐信息
export const PACKAGE_INFO = {
  '经济型': {
    name: '经济型',
    description: '基础光伏发电，满足日常用电需求',
    pricePerKw: 4500,
    features: ['标准组件', '基础逆变器', '3年质保'],
  },
  '标准型': {
    name: '标准型', 
    description: '高效光伏+智能监控，推荐选择',
    pricePerKw: 6000,
    features: ['高效组件', '智能逆变器', '智能监控', '5年质保'],
  },
  '豪华型': {
    name: '豪华型',
    description: '光伏+储能一体化，全屋能源解决方案',
    pricePerKw: 8500,
    features: ['顶级组件', '智能逆变器', '储能电池', '全屋智控', '10年质保'],
  },
}

// 面积对应的预估装机容量 (kW)
export const AREA_TO_CAPACITY: Record<string, number> = {
  '0-50㎡': 5,
  '50-100㎡': 10,
  '100-200㎡': 20,
  '200㎡以上': 35,
}
