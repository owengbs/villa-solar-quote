import type { HouseType, RoofType, TechType } from '../store/filterStore'

export interface CaseItem {
  id: number
  name: string
  address: string
  houseType: HouseType
  roofType: RoofType
  techType: TechType
  techInfo: string
  pvCapacity: string
  storageCapacity: string
  images: string[]
}

export const cases: CaseItem[] = [
  {
    id: 1,
    name: '浙江杭州市上林湖花园',
    address: '浙江省杭州市富阳区上林湖花园',
    houseType: '双拼',
    roofType: '斜屋面',
    techType: '贴面安装',
    techInfo: '贴面安装',
    pvCapacity: '445纯黑组件14.4kW',
    storageCapacity: '分体式储能30.72kWh',
    images: ['/cases/case1_0.jpg', '/cases/case1_1.jpg', '/cases/case1_2.jpg'],
  },
  {
    id: 2,
    name: '天津南开钻石山',
    address: '天津南开区卫津南路钻石山',
    houseType: '独栋',
    roofType: '平屋面',
    techType: '阵列式',
    techInfo: '平屋顶阵列+阳光房',
    pvCapacity: '445纯黑组件15.5kW',
    storageCapacity: '储能一体机10kWh',
    images: ['/cases/case2_0.jpg', '/cases/case2_1.jpg'],
  },
  {
    id: 3,
    name: '上海金山龙湾1号',
    address: '上海市金山区海芙路龙湾1号澜郡',
    houseType: '联排',
    roofType: '斜屋面',
    techType: '阳光房',
    techInfo: '贴面安装',
    pvCapacity: '715组件10kW',
    storageCapacity: '',
    images: ['/cases/case3_0.jpg', '/cases/case3_1.jpg', '/cases/case3_2.jpg'],
  },
  {
    id: 4,
    name: '上海嘉定魏玛原野',
    address: '上海市嘉定区北安德路魏玛原野',
    houseType: '独栋',
    roofType: '平屋面',
    techType: '轻型支架',
    techInfo: '斜屋顶阳光房',
    pvCapacity: '720组件10kW',
    storageCapacity: '',
    images: ['/cases/case4_0.jpg', '/cases/case4_1.jpg', '/cases/case4_2.jpg', '/cases/case4_3.jpg'],
  },
  {
    id: 5,
    name: '上海嘉定绿地海域观园',
    address: '上海市嘉定区双单路绿地海域观园',
    houseType: '联排',
    roofType: '平屋面',
    techType: '阳光房',
    techInfo: '平屋面轻型支架',
    pvCapacity: '445W纯黑组件27.145kW',
    storageCapacity: '储能一体机20kWh',
    images: ['/cases/case5_0.jpg', '/cases/case5_1.jpg', '/cases/case5_2.jpg'],
  },
  {
    id: 6,
    name: '江苏南京香山美墅',
    address: '江苏省南京市江宁香山美墅',
    houseType: '双拼',
    roofType: '斜屋面',
    techType: '贴面安装',
    techInfo: '常规阳光房',
    pvCapacity: '720W组件11.52kW',
    storageCapacity: '',
    images: ['/cases/case6_0.jpg', '/cases/case6_1.jpg', '/cases/case6_2.jpg'],
  },
  {
    id: 7,
    name: '江苏镇江香山壹境',
    address: '江苏省镇江市句容市宝华镇香山壹境',
    houseType: '联排',
    roofType: '斜屋面',
    techType: '贴面安装',
    techInfo: '贴面安装',
    pvCapacity: '445W全黑组件13kW',
    storageCapacity: '',
    images: ['/cases/case7_0.jpg', '/cases/case7_1.jpg', '/cases/case7_2.jpg'],
  },
  {
    id: 8,
    name: '广东江门碧桂园',
    address: '广东省江门市鹤山市沙坪镇碧桂园',
    houseType: '双拼',
    roofType: '平屋面',
    techType: '阳光房',
    techInfo: '贴面安装',
    pvCapacity: '445纯黑组件12kW',
    storageCapacity: '',
    images: ['/cases/case8_0.jpg', '/cases/case8_1.jpg', '/cases/case8_2.jpg'],
  },
  {
    id: 9,
    name: '广东惠州东江熙园',
    address: '广东省惠州市博罗东江熙园',
    houseType: '独栋',
    roofType: '平屋面',
    techType: '阳光房',
    techInfo: '大跨级阳光房',
    pvCapacity: '445纯黑组件12kW',
    storageCapacity: '储能一体机5kWh',
    images: ['/cases/case9_0.jpg', '/cases/case9_1.jpg', '/cases/case9_2.jpg'],
  },
  {
    id: 10,
    name: '北京朝阳',
    address: '北京市朝阳区',
    houseType: '独栋',
    roofType: '斜屋面',
    techType: '贴面安装',
    techInfo: '大跨距阳光房',
    pvCapacity: '720组件9.45kW',
    storageCapacity: '',
    images: ['/cases/case10_0.jpg', '/cases/case10_1.jpg', '/cases/case10_2.jpg'],
  },
]
