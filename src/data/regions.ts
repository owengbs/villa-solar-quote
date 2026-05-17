// 省市区数据（简化版，包含主要城市）
export interface Region {
  code: string
  name: string
  children?: Region[]
}

export const regions: Region[] = [
  {
    code: '11',
    name: '北京市',
    children: [
      {
        code: '1101',
        name: '北京市',
        children: [
          { code: '110101', name: '东城区' },
          { code: '110102', name: '西城区' },
          { code: '110105', name: '朝阳区' },
          { code: '110106', name: '丰台区' },
          { code: '110107', name: '石景山区' },
          { code: '110108', name: '海淀区' },
          { code: '110109', name: '门头沟区' },
          { code: '110111', name: '房山区' },
          { code: '110112', name: '通州区' },
          { code: '110113', name: '顺义区' },
          { code: '110114', name: '昌平区' },
          { code: '110115', name: '大兴区' },
        ],
      },
    ],
  },
  {
    code: '12',
    name: '天津市',
    children: [
      {
        code: '1201',
        name: '天津市',
        children: [
          { code: '120101', name: '和平区' },
          { code: '120102', name: '河东区' },
          { code: '120103', name: '河西区' },
          { code: '120104', name: '南开区' },
          { code: '120105', name: '河北区' },
          { code: '120106', name: '红桥区' },
          { code: '120110', name: '东丽区' },
          { code: '120111', name: '西青区' },
          { code: '120112', name: '津南区' },
          { code: '120113', name: '北辰区' },
          { code: '120114', name: '武清区' },
          { code: '120115', name: '宝坻区' },
        ],
      },
    ],
  },
  {
    code: '31',
    name: '上海市',
    children: [
      {
        code: '3101',
        name: '上海市',
        children: [
          { code: '310101', name: '黄浦区' },
          { code: '310104', name: '徐汇区' },
          { code: '310105', name: '长宁区' },
          { code: '310106', name: '静安区' },
          { code: '310107', name: '普陀区' },
          { code: '310109', name: '虹口区' },
          { code: '310110', name: '杨浦区' },
          { code: '310112', name: '闵行区' },
          { code: '310113', name: '宝山区' },
          { code: '310114', name: '嘉定区' },
          { code: '310115', name: '浦东新区' },
          { code: '310116', name: '金山区' },
          { code: '310117', name: '松江区' },
          { code: '310118', name: '青浦区' },
          { code: '310120', name: '奉贤区' },
        ],
      },
    ],
  },
  {
    code: '32',
    name: '江苏省',
    children: [
      {
        code: '3201',
        name: '南京市',
        children: [
          { code: '320102', name: '玄武区' },
          { code: '320104', name: '秦淮区' },
          { code: '320105', name: '建邺区' },
          { code: '320106', name: '鼓楼区' },
          { code: '320111', name: '浦口区' },
          { code: '320113', name: '栖霞区' },
          { code: '320114', name: '雨花台区' },
          { code: '320115', name: '江宁区' },
          { code: '320116', name: '六合区' },
          { code: '320117', name: '溧水区' },
        ],
      },
      {
        code: '3202',
        name: '无锡市',
        children: [
          { code: '320205', name: '锡山区' },
          { code: '320206', name: '惠山区' },
          { code: '320211', name: '滨湖区' },
          { code: '320213', name: '梁溪区' },
          { code: '320214', name: '新吴区' },
          { code: '320281', name: '江阴市' },
          { code: '320282', name: '宜兴市' },
        ],
      },
      {
        code: '3211',
        name: '镇江市',
        children: [
          { code: '321102', name: '京口区' },
          { code: '321111', name: '润州区' },
          { code: '321112', name: '丹徒区' },
          { code: '321181', name: '丹阳市' },
          { code: '321182', name: '扬中市' },
          { code: '321183', name: '句容市' },
        ],
      },
      {
        code: '3205',
        name: '苏州市',
        children: [
          { code: '320505', name: '虎丘区' },
          { code: '320506', name: '吴中区' },
          { code: '320507', name: '相城区' },
          { code: '320508', name: '姑苏区' },
          { code: '320509', name: '吴江区' },
          { code: '320581', name: '常熟市' },
          { code: '320582', name: '张家港市' },
          { code: '320583', name: '昆山市' },
          { code: '320585', name: '太仓市' },
        ],
      },
    ],
  },
  {
    code: '33',
    name: '浙江省',
    children: [
      {
        code: '3301',
        name: '杭州市',
        children: [
          { code: '330102', name: '上城区' },
          { code: '330105', name: '拱墅区' },
          { code: '330106', name: '西湖区' },
          { code: '330108', name: '滨江区' },
          { code: '330109', name: '萧山区' },
          { code: '330110', name: '余杭区' },
          { code: '330111', name: '富阳区' },
          { code: '330112', name: '临安区' },
          { code: '330113', name: '临平区' },
          { code: '330114', name: '钱塘区' },
        ],
      },
      {
        code: '3302',
        name: '宁波市',
        children: [
          { code: '330203', name: '海曙区' },
          { code: '330205', name: '江北区' },
          { code: '330206', name: '北仑区' },
          { code: '330211', name: '镇海区' },
          { code: '330212', name: '鄞州区' },
          { code: '330213', name: '奉化区' },
        ],
      },
      {
        code: '3303',
        name: '温州市',
        children: [
          { code: '330302', name: '鹿城区' },
          { code: '330303', name: '龙湾区' },
          { code: '330304', name: '瓯海区' },
          { code: '330305', name: '洞头区' },
        ],
      },
    ],
  },
  {
    code: '44',
    name: '广东省',
    children: [
      {
        code: '4401',
        name: '广州市',
        children: [
          { code: '440103', name: '荔湾区' },
          { code: '440104', name: '越秀区' },
          { code: '440105', name: '海珠区' },
          { code: '440106', name: '天河区' },
          { code: '440111', name: '白云区' },
          { code: '440112', name: '黄埔区' },
          { code: '440113', name: '番禺区' },
          { code: '440114', name: '花都区' },
          { code: '440115', name: '南沙区' },
          { code: '440117', name: '从化区' },
          { code: '440118', name: '增城区' },
        ],
      },
      {
        code: '4413',
        name: '惠州市',
        children: [
          { code: '441302', name: '惠城区' },
          { code: '441303', name: '惠阳区' },
          { code: '441322', name: '博罗县' },
          { code: '441323', name: '惠东县' },
          { code: '441324', name: '龙门县' },
        ],
      },
      {
        code: '4407',
        name: '江门市',
        children: [
          { code: '440703', name: '蓬江区' },
          { code: '440704', name: '江海区' },
          { code: '440705', name: '新会区' },
          { code: '440781', name: '台山市' },
          { code: '440783', name: '开平市' },
          { code: '440784', name: '鹤山市' },
          { code: '440785', name: '恩平市' },
        ],
      },
      {
        code: '4403',
        name: '深圳市',
        children: [
          { code: '440303', name: '罗湖区' },
          { code: '440304', name: '福田区' },
          { code: '440305', name: '南山区' },
          { code: '440306', name: '宝安区' },
          { code: '440307', name: '龙岗区' },
          { code: '440308', name: '盐田区' },
          { code: '440309', name: '龙华区' },
          { code: '440310', name: '坪山区' },
          { code: '440311', name: '光明区' },
        ],
      },
    ],
  },
]

// 根据省名获取城市列表
export function getCitiesByProvince(provinceName: string): Region[] {
  const province = regions.find((r) => r.name === provinceName)
  return province?.children || []
}

// 根据城市名获取区县列表
export function getDistrictsByCity(provinceName: string, cityName: string): Region[] {
  const cities = getCitiesByProvince(provinceName)
  const city = cities.find((c) => c.name === cityName)
  return city?.children || []
}
