import type { HouseType, RoofType, TechType } from '../store/filterStore'

export type ImageKind = 'aerial' | 'eye-level' | 'detail'

export interface CaseImage {
  url: string
  kind: ImageKind
}

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
  images: CaseImage[]
}

const IMG = (n: number, ext: 'jpg' | 'png' = 'jpg') =>
  `/images/cases/image${n}.${ext}`

// 数据来源：resources/26墅野新居建实景样板库搭建.xlsx「素材」sheet
// 图片映射来源：xl/drawings/drawing1.xml 中 anchor 的单元格定位
//   H 列 = 航拍 (aerial), I 列 = 平视 (eye-level), J 列 = 细节 (detail)
//   K 列也算细节（仅 id=4 案例额外多一张）
// public/images/cases/imageN.{jpg,png} 已与 Excel 内嵌图片逐字节一致

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
    images: [
      { url: IMG(1), kind: 'aerial' },
      { url: IMG(2), kind: 'eye-level' },
      { url: IMG(3, 'png'), kind: 'detail' },
    ],
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
    storageCapacity: '储能一体机 10kWh',
    images: [
      { url: IMG(4), kind: 'aerial' },
      { url: IMG(5), kind: 'eye-level' },
    ],
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
    images: [
      { url: IMG(6), kind: 'aerial' },
      { url: IMG(7), kind: 'eye-level' },
      { url: IMG(8), kind: 'detail' },
    ],
  },
  {
    id: 4,
    name: '上海嘉定魏玛原野',
    address: '上海市嘉定区北安德路魏玛原野',
    houseType: '独栋',
    roofType: '平屋面',
    techType: '轻型支架',
    techInfo: '斜屋顶阳光房',
    pvCapacity: '720组件 10kW',
    storageCapacity: '',
    images: [
      { url: IMG(9), kind: 'aerial' },
      { url: IMG(10), kind: 'eye-level' },
      { url: IMG(11), kind: 'detail' },
      { url: IMG(12), kind: 'detail' },
    ],
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
    images: [
      { url: IMG(13), kind: 'aerial' },
      { url: IMG(14), kind: 'eye-level' },
      { url: IMG(15), kind: 'detail' },
    ],
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
    images: [
      { url: IMG(16), kind: 'aerial' },
      { url: IMG(17), kind: 'eye-level' },
      { url: IMG(18), kind: 'detail' },
    ],
  },
  {
    id: 7,
    name: '江苏镇江香山壹境',
    address: '江苏省镇江市句容市宝华镇香山壹境',
    houseType: '联排',
    roofType: '斜屋面',
    techType: '贴面安装',
    techInfo: '贴面安装',
    pvCapacity: '445W全黑组件 13kW',
    storageCapacity: '',
    images: [
      { url: IMG(19), kind: 'aerial' },
      { url: IMG(20), kind: 'eye-level' },
      { url: IMG(21), kind: 'detail' },
    ],
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
    images: [
      { url: IMG(22), kind: 'aerial' },
      { url: IMG(23), kind: 'eye-level' },
      { url: IMG(24), kind: 'detail' },
    ],
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
    images: [
      { url: IMG(25), kind: 'aerial' },
      { url: IMG(26), kind: 'eye-level' },
      { url: IMG(27), kind: 'detail' },
    ],
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
    images: [
      { url: IMG(28), kind: 'aerial' },
      { url: IMG(29), kind: 'eye-level' },
      { url: IMG(30), kind: 'detail' },
    ],
  },
]
