/* created by heisama Wang */
/* eslint-disable */
import Mock from 'mockjs'
import urls from '@/api/createOrder'

// 获取工单种类
function getOrderTypes() {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'data': [
      {
        'baseschema': 'ITSM_REQUEST',
        'createtime': 1464076097,
        'exportvalue': '流水号-basesn、工单类别-basename、主题-worksheettitle、建单时间-basecreatetime、当前状态-basestatus、建单人-fullname、当前处理人-dealer',
        'isopen': '1',
        'name': '服务请求单',
        'nameen': 'Service Request',
        'orderby': 1,
        'pid': '402898e354e17d1f0154e1bc57960001',
        'showTime': '2016-05-24 15:48:17'
      },
      {
        'baseschema': 'ITSM_TASK',
        'createtime': 1464076097,
        'exportvalue': '流水号-basesn、工单类别-basename、主题-worksheettitle、建单时间-basecreatetime、当前状态-basestatus、建单人-fullname、当前处理人-dealer',
        'isopen': '1',
        'name': '任务单',
        'nameen': 'Task',
        'orderby': 1,
        'pid': '402898e354e17d1f0154e1bc57960001',
        'showTime': '2016-05-24 15:48:17'
      },
      {
        'baseschema': 'HISENSE_ITSM_INCIDENT',
        'createtime': 1464076097,
        'exportvalue': '流水号-basesn、工单类别-basename、主题-worksheettitle、建单时间-basecreatetime、当前状态-basestatus、建单人-fullname、当前处理人-dealer',
        'isopen': '1',
        'name': '事件单',
        'nameen': 'event request',
        'orderby': 1,
        'pid': '402898e354e17d1f0154e1bc57960001',
        'showTime': '2016-05-24 15:48:17'
      },
      {
        'baseschema': 'ITSM_QUESTION',
        'createtime': 1464076097,
        'exportvalue': '流水号-basesn、工单类别-basename、主题-worksheettitle、建单时间-basecreatetime、当前状态-basestatus、建单人-fullname、当前处理人-dealer',
        'isopen': '1',
        'name': '问题单',
        'nameen': 'Problem',
        'orderby': 1,
        'pid': '402898e354e17d1f0154e1bc57960001',
        'showTime': '2016-05-24 15:48:17'
      }
    ]
  })
}
Mock.mock(new RegExp('^' + urls['queryOrderType']), 'post', getOrderTypes)

// 查询表单内的下拉选
function queryOrderSelect(o) {
  console.log('req: ', JSON.parse(o.body).dicParas)
  let res = []
  if (JSON.parse(o.body).dicParas === '业务分类' || JSON.parse(o.body).dicParas === '事件分类') {
    res = [
      {
        "dnIDs": "计算机终端及桌面端",
        "dnen": "计算机终端及桌面端",
        "dns": "计算机终端及桌面端",
        "key": "",
        "pid": "ff8080816710a775016710fafbb10004",
        "remark": "欢迎进入工单系统提工单！资费58元/每单，支付后请及时联系客服获取提单权限，否则将无法为您处理工单。客服微信：XXX工单助手。支付链接：@url",
        "subMenus": [],
        "text": "计算机终端及桌面端",
        "type": "C",
        "value": "4"
      },
      {
        "dnIDs": "网络与信息安全",
        "dnen": "网络与信息安全",
        "dns": "网络与信息安全",
        "key": "",
        "pid": "ff8080816710a7750167110752e60018",
        "remark": "",
        "subMenus": [],
        "text": "网络与信息安全",
        "type": "A",
        "value": "6"
      },
      {
        "dnIDs": "音视频及电话",
        "dnen": "音视频及电话",
        "dns": "音视频及电话",
        "key": "",
        "pid": "ff8080816710a775016710fb29680005",
        "remark": "",
        "subMenus": [],
        "text": "音视频及电话",
        "type": "C",
        "value": "5"
      },
      {
        "dnIDs": "基础建设",
        "dnen": "基础建设",
        "dns": "基础建设",
        "key": "",
        "pid": "ff8080816710a77501671102bf170009",
        "remark": "",
        "subMenus": [
          {
            "dnIDs": "备份系统",
            "dnen": "备份系统",
            "dns": "备份系统",
            "key": "",
            "pid": "ff8080816710a77501671105db0b0013",
            "remark": "",
            "subMenus": [],
            "text": "备份系统",
            "type": "C",
            "value": "803"
          },
          {
            "dnIDs": "云平台",
            "dnen": "云平台",
            "dns": "云平台",
            "key": "",
            "pid": "ff8080816710a7750167110630800015",
            "remark": "",
            "subMenus": [],
            "text": "云平台",
            "type": "C",
            "value": "805"
          },
          {
            "dnIDs": "F5负载均衡",
            "dnen": "F5负载均衡",
            "dns": "F5负载均衡",
            "key": "",
            "pid": "ff8080816710a77501671105acc20012",
            "remark": "",
            "subMenus": [],
            "text": "F5负载均衡",
            "type": "C",
            "value": "802"
          },
          {
            "dnIDs": "虚拟桌面",
            "dnen": "虚拟桌面",
            "dns": "虚拟桌面",
            "key": "",
            "pid": "ff8080816710a7750167110658070016",
            "remark": "",
            "subMenus": [],
            "text": "虚拟桌面",
            "type": "C",
            "value": "806"
          },
          {
            "dnIDs": "IT常规软硬件线上招标系统",
            "dnen": "IT常规软硬件线上招标系统",
            "dns": "IT常规软硬件线上招标系统",
            "key": "",
            "pid": "ff8080816710a77501671106900e0017",
            "remark": "",
            "subMenus": [],
            "text": "IT常规软硬件线上招标系统",
            "type": "C",
            "value": "807"
          },
          {
            "dnIDs": "堡垒机",
            "dnen": "堡垒机",
            "dns": "堡垒机",
            "key": "",
            "pid": "ff8080816710a7750167110576dc0011",
            "remark": "",
            "subMenus": [],
            "text": "堡垒机",
            "type": "C",
            "value": "801"
          },
          {
            "dnIDs": "监控系统",
            "dnen": "监控系统",
            "dns": "监控系统",
            "key": "",
            "pid": "ff8080816710a7750167110607a80014",
            "remark": "",
            "subMenus": [],
            "text": "监控系统",
            "type": "C",
            "value": "804"
          }
        ],
        "text": "基础建设",
        "type": "",
        "value": "8"
      },
      {
        "dnIDs": "业务应用系统",
        "dnen": "业务应用系统",
        "dns": "业务应用系统",
        "key": "",
        "pid": "ff8080816710a775016710fcfe6e0008",
        "remark": "",
        "subMenus": [
          {
            "dnIDs": "大数据",
            "dnen": "大数据",
            "dns": "大数据",
            "key": "",
            "pid": "ff8080816710a77501671103cda4000a",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "XXX手机全生命周期渠道流转大数据平台",
                "dnen": "XXX手机全生命周期渠道流转大数据平台",
                "dns": "XXX手机全生命周期渠道流转大数据平台",
                "key": "",
                "pid": "ff8080816710a77501671109212c001e",
                "remark": "",
                "subMenus": [],
                "text": "XXX手机全生命周期渠道流转大数据平台",
                "type": "A",
                "value": "70106"
              },
              {
                "dnIDs": "通信公司质量追溯系统",
                "dnen": "通信公司质量追溯系统",
                "dns": "通信公司质量追溯系统",
                "key": "",
                "pid": "ff8080816710a7750167110a00ae0022",
                "remark": "",
                "subMenus": [],
                "text": "通信公司质量追溯系统",
                "type": "B",
                "value": "70110"
              },
              {
                "dnIDs": "门店客源分信息平台CIP",
                "dnen": "门店客源分信息平台CIP",
                "dns": "门店客源分信息平台CIP",
                "key": "",
                "pid": "ff8080816710a7750167110830e1001b",
                "remark": "",
                "subMenus": [],
                "text": "门店客源分信息平台CIP",
                "type": "C",
                "value": "70103"
              },
              {
                "dnIDs": "技术标准管理系统",
                "dnen": "技术标准管理系统",
                "dns": "技术标准管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110a37580023",
                "remark": "",
                "subMenus": [],
                "text": "技术标准管理系统",
                "type": "C",
                "value": "70111"
              },
              {
                "dnIDs": "营销E系统",
                "dnen": "营销E系统",
                "dns": "营销E系统",
                "key": "",
                "pid": "ff8080816710a775016711089091001d",
                "remark": "",
                "subMenus": [],
                "text": "营销E系统",
                "type": "B",
                "value": "70105"
              },
              {
                "dnIDs": "通信手机LOG共享平台",
                "dnen": "通信手机LOG共享平台",
                "dns": "通信手机LOG共享平台",
                "key": "",
                "pid": "ff8080816710a7750167110998a30020",
                "remark": "",
                "subMenus": [],
                "text": "通信手机LOG共享平台",
                "type": "B",
                "value": "70108"
              },
              {
                "dnIDs": "集团决策分析系统（BI）",
                "dnen": "集团决策分析系统（BI）",
                "dns": "集团决策分析系统（BI）",
                "key": "",
                "pid": "ff8080816710a77501671107c28b0019",
                "remark": "",
                "subMenus": [],
                "text": "集团决策分析系统（BI）",
                "type": "A",
                "value": "70101"
              },
              {
                "dnIDs": "通信手机活跃度与终端行为大数据平台",
                "dnen": "通信手机活跃度与终端行为大数据平台",
                "dns": "通信手机活跃度与终端行为大数据平台",
                "key": "",
                "pid": "ff8080816710a7750167110960ab001f",
                "remark": "",
                "subMenus": [],
                "text": "通信手机活跃度与终端行为大数据平台",
                "type": "A",
                "value": "70107"
              },
              {
                "dnIDs": "XXX集团主数据管理系统",
                "dnen": "XXX集团主数据管理系统",
                "dns": "XXX集团主数据管理系统",
                "key": "",
                "pid": "ff8080816710a77501671109bc5f0021",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团主数据管理系统",
                "type": "A",
                "value": "70109"
              },
              {
                "dnIDs": "XXX冰箱报表门户",
                "dnen": "XXX冰箱报表门户",
                "dns": "XXX冰箱报表门户",
                "key": "",
                "pid": "ff8080816710a775016711085f22001c",
                "remark": "",
                "subMenus": [],
                "text": "XXX冰箱报表门户",
                "type": "A",
                "value": "70104"
              },
              {
                "dnIDs": "顾客画像大数据平台DMP",
                "dnen": "顾客画像大数据平台DMP",
                "dns": "顾客画像大数据平台DMP",
                "key": "",
                "pid": "ff8080816710a77501671107ff10001a",
                "remark": "",
                "subMenus": [],
                "text": "顾客画像大数据平台DMP",
                "type": "C",
                "value": "70102"
              }
            ],
            "text": "大数据",
            "type": "",
            "value": "701"
          },
          {
            "dnIDs": "人资",
            "dnen": "人资",
            "dns": "人资",
            "key": "",
            "pid": "ff8080816710a775016711044ea4000c",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "人力资源管理平台e-HR",
                "dnen": "人力资源管理平台e-HR",
                "dns": "人力资源管理平台e-HR",
                "key": "",
                "pid": "ff8080816710a7750167110dbd320030",
                "remark": "",
                "subMenus": [],
                "text": "人力资源管理平台e-HR",
                "type": "A",
                "value": "70301"
              },
              {
                "dnIDs": "股份一线员工管理系统",
                "dnen": "股份一线员工管理系统",
                "dns": "股份一线员工管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110e206e0032",
                "remark": "",
                "subMenus": [],
                "text": "股份一线员工管理系统",
                "type": "C",
                "value": "70303"
              },
              {
                "dnIDs": "员工健康管理信息系统",
                "dnen": "员工健康管理信息系统",
                "dns": "员工健康管理信息系统",
                "key": "",
                "pid": "ff8080816710a7750167110f667e0037",
                "remark": "",
                "subMenus": [],
                "text": "员工健康管理信息系统",
                "type": "C",
                "value": "70308"
              },
              {
                "dnIDs": "黄岛访客系统",
                "dnen": "黄岛访客系统",
                "dns": "黄岛访客系统",
                "key": "",
                "pid": "ff8080816710a7750167110fde590039",
                "remark": "",
                "subMenus": [],
                "text": "黄岛访客系统",
                "type": "B",
                "value": "70310"
              },
              {
                "dnIDs": "集团官僚作风评价系统",
                "dnen": "集团官僚作风评价系统",
                "dns": "集团官僚作风评价系统",
                "key": "",
                "pid": "ff8080816710a7750167110ee3c00036",
                "remark": "",
                "subMenus": [],
                "text": "集团官僚作风评价系统",
                "type": "C",
                "value": "70307"
              },
              {
                "dnIDs": "车辆管理系统",
                "dnen": "车辆管理系统",
                "dns": "车辆管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110fa8d60038",
                "remark": "",
                "subMenus": [],
                "text": "车辆管理系统",
                "type": "B",
                "value": "70309"
              },
              {
                "dnIDs": "工作绩效管理系统",
                "dnen": "工作绩效管理系统",
                "dns": "工作绩效管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110e7abe0034",
                "remark": "",
                "subMenus": [],
                "text": "工作绩效管理系统",
                "type": "C",
                "value": "70305"
              },
              {
                "dnIDs": "冰箱制造中心人资岗位SHR系统",
                "dnen": "冰箱制造中心人资岗位SHR系统",
                "dns": "冰箱制造中心人资岗位SHR系统",
                "key": "",
                "pid": "ff8080816710a7750167110df6a30031",
                "remark": "",
                "subMenus": [],
                "text": "冰箱制造中心人资岗位SHR系统",
                "type": "B",
                "value": "70302"
              },
              {
                "dnIDs": "员工自注册系统",
                "dnen": "员工自注册系统",
                "dns": "员工自注册系统",
                "key": "",
                "pid": "ff8080816710a7750167110e4cdf0033",
                "remark": "",
                "subMenus": [],
                "text": "员工自注册系统",
                "type": "A",
                "value": "70304"
              },
              {
                "dnIDs": "集团干部考评系统",
                "dnen": "集团干部考评系统",
                "dns": "集团干部考评系统",
                "key": "",
                "pid": "ff8080816710a7750167110eaf3e0035",
                "remark": "",
                "subMenus": [],
                "text": "集团干部考评系统",
                "type": "A",
                "value": "70306"
              }
            ],
            "text": "人资",
            "type": "",
            "value": "703"
          },
          {
            "dnIDs": "营销物流",
            "dnen": "营销物流",
            "dns": "营销物流",
            "key": "",
            "pid": "ff8080816710a775016711047e29000d",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "XXX集团电商ECP2平台",
                "dnen": "XXX集团电商ECP2平台",
                "dns": "XXX集团电商ECP2平台",
                "key": "",
                "pid": "ff8080816710a77501671111b0ec003f",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团电商ECP2平台",
                "type": "A",
                "value": "70406"
              },
              {
                "dnIDs": "品端信联出入库管理系统",
                "dnen": "品端信联出入库管理系统",
                "dns": "品端信联出入库管理系统",
                "key": "",
                "pid": "ff8080816710a77501671112019b0040",
                "remark": "",
                "subMenus": [],
                "text": "品端信联出入库管理系统",
                "type": "A",
                "value": "70407"
              },
              {
                "dnIDs": "门店地图",
                "dnen": "门店地图",
                "dns": "门店地图",
                "key": "",
                "pid": "ff8080816710a775016711140d120048",
                "remark": "",
                "subMenus": [],
                "text": "门店地图",
                "type": "C",
                "value": "70411"
              },
              {
                "dnIDs": "精准营销广告投放平台DSP",
                "dnen": "精准营销广告投放平台DSP",
                "dns": "精准营销广告投放平台DSP",
                "key": "",
                "pid": "ff8080816710a775016711149286004b",
                "remark": "",
                "subMenus": [],
                "text": "精准营销广告投放平台DSP",
                "type": "C",
                "value": "70414"
              },
              {
                "dnIDs": "XXX日立移动端",
                "dnen": "XXX日立移动端",
                "dns": "XXX日立移动端",
                "key": "",
                "pid": "ff8080816710a77501671115439d004f",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立移动端",
                "type": "A",
                "value": "70418"
              },
              {
                "dnIDs": "数字化营销系统MCM",
                "dnen": "数字化营销系统MCM",
                "dns": "数字化营销系统MCM",
                "key": "",
                "pid": "ff8080816710a775016711159ec70051",
                "remark": "",
                "subMenus": [],
                "text": "数字化营销系统MCM",
                "type": "A",
                "value": "70420"
              },
              {
                "dnIDs": "营销物流平台",
                "dnen": "营销物流平台",
                "dns": "营销物流平台",
                "key": "",
                "pid": "ff8080816710a775016711161e5e0054",
                "remark": "",
                "subMenus": [],
                "text": "营销物流平台",
                "type": "A",
                "value": "70423"
              },
              {
                "dnIDs": "XXX集团CRM系统",
                "dnen": "XXX集团CRM系统",
                "dns": "XXX集团CRM系统",
                "key": "",
                "pid": "ff8080816710a775016711165bf80056",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团CRM系统",
                "type": "A",
                "value": "70424"
              },
              {
                "dnIDs": "XXX集团CSS系统",
                "dnen": "XXX集团CSS系统",
                "dns": "XXX集团CSS系统",
                "key": "",
                "pid": "ff8080816710a77501671116882b0057",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团CSS系统",
                "type": "A",
                "value": "70425"
              },
              {
                "dnIDs": "科龙中央空调终端销售管理系统",
                "dnen": "科龙中央空调终端销售管理系统",
                "dns": "科龙中央空调终端销售管理系统",
                "key": "",
                "pid": "ff8080816710a775016711102708003a",
                "remark": "",
                "subMenus": [],
                "text": "科龙中央空调终端销售管理系统",
                "type": "C",
                "value": "70401"
              },
              {
                "dnIDs": "信商-终端管理系统",
                "dnen": "信商-终端管理系统",
                "dns": "信商-终端管理系统",
                "key": "",
                "pid": "ff8080816710a775016711107786003c",
                "remark": "",
                "subMenus": [],
                "text": "信商-终端管理系统",
                "type": "A",
                "value": "70403"
              },
              {
                "dnIDs": "XXXTMS管理系统",
                "dnen": "XXXTMS管理系统",
                "dns": "XXXTMS管理系统",
                "key": "",
                "pid": "ff8080816710a775016711117dda003e",
                "remark": "",
                "subMenus": [],
                "text": "XXXTMS管理系统",
                "type": "A",
                "value": "70405"
              },
              {
                "dnIDs": "销售管理系统",
                "dnen": "销售管理系统",
                "dns": "销售管理系统",
                "key": "",
                "pid": "ff8080816710a7750167111232880041",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "通信",
                    "dnen": "通信",
                    "dns": "通信",
                    "key": "",
                    "pid": "ff8080816710a7750167111279ec0042",
                    "remark": "",
                    "subMenus": [],
                    "text": "通信",
                    "type": "A",
                    "value": "7040801"
                  },
                  {
                    "dnIDs": "海外",
                    "dnen": "海外",
                    "dns": "海外",
                    "key": "",
                    "pid": "ff8080816710a775016711130fcb0045",
                    "remark": "",
                    "subMenus": [],
                    "text": "海外",
                    "type": "A",
                    "value": "7040804"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a77501671112d5390044",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7040803"
                  },
                  {
                    "dnIDs": "模具",
                    "dnen": "模具",
                    "dns": "模具",
                    "key": "",
                    "pid": "ff8080816710a77501671112aabe0043",
                    "remark": "",
                    "subMenus": [],
                    "text": "模具",
                    "type": "A",
                    "value": "7040802"
                  }
                ],
                "text": "销售管理系统",
                "type": "",
                "value": "70408"
              },
              {
                "dnIDs": "物流管理系统",
                "dnen": "物流管理系统",
                "dns": "物流管理系统",
                "key": "",
                "pid": "ff8080816710a7750167111439820049",
                "remark": "",
                "subMenus": [],
                "text": "物流管理系统",
                "type": "A",
                "value": "70412"
              },
              {
                "dnIDs": "商家直连系统",
                "dnen": "商家直连系统",
                "dns": "商家直连系统",
                "key": "",
                "pid": "ff8080816710a775016711146109004a",
                "remark": "",
                "subMenus": [],
                "text": "商家直连系统",
                "type": "A",
                "value": "70413"
              },
              {
                "dnIDs": "冰箱三包机系统",
                "dnen": "冰箱三包机系统",
                "dns": "冰箱三包机系统",
                "key": "",
                "pid": "ff8080816710a775016711156ef30050",
                "remark": "",
                "subMenus": [],
                "text": "冰箱三包机系统",
                "type": "B",
                "value": "70419"
              },
              {
                "dnIDs": "XXX日立费用管理平台",
                "dnen": "XXX日立费用管理平台",
                "dns": "XXX日立费用管理平台",
                "key": "",
                "pid": "ff8080816710a77501671114e213004d",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立费用管理平台",
                "type": "A",
                "value": "70416"
              },
              {
                "dnIDs": "DMS",
                "dnen": "DMS",
                "dns": "DMS",
                "key": "",
                "pid": "ff8080816710a775016711151504004e",
                "remark": "",
                "subMenus": [],
                "text": "DMS",
                "type": "A",
                "value": "70417"
              },
              {
                "dnIDs": "渠道信息化系统",
                "dnen": "渠道信息化系统",
                "dns": "渠道信息化系统",
                "key": "",
                "pid": "ff8080816710a775016711104b72003b",
                "remark": "",
                "subMenus": [],
                "text": "渠道信息化系统",
                "type": "A",
                "value": "70402"
              },
              {
                "dnIDs": "信商-订单交易系统",
                "dnen": "信商-订单交易系统",
                "dns": "信商-订单交易系统",
                "key": "",
                "pid": "ff8080816710a7750167111363f10046",
                "remark": "",
                "subMenus": [],
                "text": "信商-订单交易系统",
                "type": "A",
                "value": "70409"
              },
              {
                "dnIDs": "销售过程管理系统",
                "dnen": "销售过程管理系统",
                "dns": "销售过程管理系统",
                "key": "",
                "pid": "ff8080816710a77501671113a4530047",
                "remark": "",
                "subMenus": [],
                "text": "销售过程管理系统",
                "type": "A",
                "value": "70410"
              },
              {
                "dnIDs": "顾客及市场情报分析系统VOC",
                "dnen": "顾客及市场情报分析系统VOC",
                "dns": "顾客及市场情报分析系统VOC",
                "key": "",
                "pid": "ff8080816710a77501671114b8f5004c",
                "remark": "",
                "subMenus": [],
                "text": "顾客及市场情报分析系统VOC",
                "type": "C",
                "value": "70415"
              },
              {
                "dnIDs": "超级服务号项目",
                "dnen": "超级服务号项目",
                "dns": "超级服务号项目",
                "key": "",
                "pid": "ff8080816710a77501671115c74a0052",
                "remark": "",
                "subMenus": [],
                "text": "超级服务号项目",
                "type": "A",
                "value": "70421"
              },
              {
                "dnIDs": "XXX集团会员管理与用户运营系统",
                "dnen": "XXX集团会员管理与用户运营系统",
                "dns": "XXX集团会员管理与用户运营系统",
                "key": "",
                "pid": "ff8080816710a77501671115f2d90053",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团会员管理与用户运营系统",
                "type": "A",
                "value": "70422"
              },
              {
                "dnIDs": "XXX集团全媒体服务接入平台",
                "dnen": "XXX集团全媒体服务接入平台",
                "dns": "XXX集团全媒体服务接入平台",
                "key": "",
                "pid": "ff8080816710a77501671116b1c20058",
                "remark": "",
                "subMenus": [],
                "text": "XXX集团全媒体服务接入平台",
                "type": "A",
                "value": "70426"
              },
              {
                "dnIDs": "信商-智慧门店系统",
                "dnen": "信商-智慧门店系统",
                "dns": "信商-智慧门店系统",
                "key": "",
                "pid": "ff8080816710a7750167111156d1003d",
                "remark": "",
                "subMenus": [],
                "text": "信商-智慧门店系统",
                "type": "A",
                "value": "70404"
              },
              {
                "dnIDs": "营销物流平台",
                "dnen": "营销物流平台",
                "dns": "营销物流平台",
                "key": "",
                "pid": "ff8080816710a775016711161e6d0055",
                "remark": "",
                "subMenus": [],
                "text": "营销物流平台",
                "type": "A",
                "value": "70423"
              }
            ],
            "text": "营销物流",
            "type": "",
            "value": "704"
          },
          {
            "dnIDs": "供应链",
            "dnen": "供应链",
            "dns": "供应链",
            "key": "",
            "pid": "ff8080816710a77501671104bac5000e",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "质量部CRM数据分析优化",
                "dnen": "质量部CRM数据分析优化",
                "dns": "质量部CRM数据分析优化",
                "key": "",
                "pid": "ff8080816710a7750167111c4566006c",
                "remark": "",
                "subMenus": [],
                "text": "质量部CRM数据分析优化",
                "type": "C",
                "value": "70507"
              },
              {
                "dnIDs": "XXX集团采购共享平台SRM",
                "dnen": "XXX集团采购共享平台SRM",
                "dns": "XXX集团采购共享平台SRM",
                "key": "",
                "pid": "ff8080816710a7750167111db8770072",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "空调",
                    "dnen": "空调",
                    "dns": "空调",
                    "key": "",
                    "pid": "ff8080816710a7750167111f31e00078",
                    "remark": "",
                    "subMenus": [],
                    "text": "空调",
                    "type": "A",
                    "value": "7051006"
                  },
                  {
                    "dnIDs": "智动精工",
                    "dnen": "智动精工",
                    "dns": "智动精工",
                    "key": "",
                    "pid": "ff8080816710a7750167111e20570073",
                    "remark": "",
                    "subMenus": [],
                    "text": "智动精工",
                    "type": "A",
                    "value": "7051001"
                  },
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a7750167111e96e30075",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7051003"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a7750167111ed0be0076",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7051004"
                  },
                  {
                    "dnIDs": "通信",
                    "dnen": "通信",
                    "dns": "通信",
                    "key": "",
                    "pid": "ff8080816710a7750167111e68ae0074",
                    "remark": "",
                    "subMenus": [],
                    "text": "通信",
                    "type": "A",
                    "value": "7051002"
                  },
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a7750167111f01390077",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7051005"
                  }
                ],
                "text": "XXX集团采购共享平台SRM",
                "type": "",
                "value": "70510"
              },
              {
                "dnIDs": "原材料WMS管理系统",
                "dnen": "原材料WMS管理系统",
                "dns": "原材料WMS管理系统",
                "key": "",
                "pid": "ff8080816710a775016711203c7d007a",
                "remark": "",
                "subMenus": [],
                "text": "原材料WMS管理系统",
                "type": "A",
                "value": "70511"
              },
              {
                "dnIDs": "股份物资管理系统",
                "dnen": "股份物资管理系统",
                "dns": "股份物资管理系统",
                "key": "",
                "pid": "ff8080816710a775016711221f01007f",
                "remark": "",
                "subMenus": [],
                "text": "股份物资管理系统",
                "type": "C",
                "value": "70513"
              },
              {
                "dnIDs": "仓库条码系统",
                "dnen": "仓库条码系统",
                "dns": "仓库条码系统",
                "key": "",
                "pid": "ff8080816710a77501671122544a0080",
                "remark": "",
                "subMenus": [],
                "text": "仓库条码系统",
                "type": "A",
                "value": "70514"
              },
              {
                "dnIDs": "AGV中央控制管理系统",
                "dnen": "AGV中央控制管理系统",
                "dns": "AGV中央控制管理系统",
                "key": "",
                "pid": "ff8080816710a775016711239b390084",
                "remark": "",
                "subMenus": [],
                "text": "AGV中央控制管理系统",
                "type": "B",
                "value": "70516"
              },
              {
                "dnIDs": "股份电子作业指导书ESOP",
                "dnen": "股份电子作业指导书ESOP",
                "dns": "股份电子作业指导书ESOP",
                "key": "",
                "pid": "ff8080816710a7750167112427f40086",
                "remark": "",
                "subMenus": [],
                "text": "股份电子作业指导书ESOP",
                "type": "A",
                "value": "70518"
              },
              {
                "dnIDs": "冰箱设备备件系统",
                "dnen": "冰箱设备备件系统",
                "dns": "冰箱设备备件系统",
                "key": "",
                "pid": "ff8080816710a7750167111bf9d2006a",
                "remark": "",
                "subMenus": [],
                "text": "冰箱设备备件系统",
                "type": "B",
                "value": "70505"
              },
              {
                "dnIDs": "MPS主计划系统",
                "dnen": "MPS主计划系统",
                "dns": "MPS主计划系统",
                "key": "",
                "pid": "ff8080816710a7750167111ccc5f006e",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a7750167111d0626006f",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7050901"
                  },
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a7750167111d345a0070",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7050902"
                  },
                  {
                    "dnIDs": "空调",
                    "dnen": "空调",
                    "dns": "空调",
                    "key": "",
                    "pid": "ff8080816710a7750167111d60f80071",
                    "remark": "",
                    "subMenus": [],
                    "text": "空调",
                    "type": "A",
                    "value": "7050903"
                  }
                ],
                "text": "MPS主计划系统",
                "type": "",
                "value": "70509"
              },
              {
                "dnIDs": "XXX成品WMS系统",
                "dnen": "XXX成品WMS系统",
                "dns": "XXX成品WMS系统",
                "key": "",
                "pid": "ff8080816710a775016711209429007b",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a77501671120c276007c",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7051201"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a77501671120ebb4007d",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7051202"
                  }
                ],
                "text": "XXX成品WMS系统",
                "type": "",
                "value": "70512"
              },
              {
                "dnIDs": "股份自动码垛系统",
                "dnen": "股份自动码垛系统",
                "dns": "股份自动码垛系统",
                "key": "",
                "pid": "ff8080816710a77501671123e0390085",
                "remark": "",
                "subMenus": [],
                "text": "股份自动码垛系统",
                "type": "A",
                "value": "70517"
              },
              {
                "dnIDs": "企业资源计划SAP",
                "dnen": "企业资源计划SAP",
                "dns": "企业资源计划SAP",
                "key": "",
                "pid": "ff8080816710a77501671124a3280088",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a775016711268e7d008f",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7052007"
                  },
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a775016711259280008c",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7052004"
                  },
                  {
                    "dnIDs": "空调",
                    "dnen": "空调",
                    "dns": "空调",
                    "key": "",
                    "pid": "ff8080816710a775016711251bc8008a",
                    "remark": "",
                    "subMenus": [],
                    "text": "空调",
                    "type": "A",
                    "value": "7052002"
                  },
                  {
                    "dnIDs": "电子信息集团",
                    "dnen": "电子信息集团",
                    "dns": "电子信息集团",
                    "key": "",
                    "pid": "ff8080816710a7750167112540d0008b",
                    "remark": "",
                    "subMenus": [],
                    "text": "电子信息集团",
                    "type": "A",
                    "value": "7052003"
                  },
                  {
                    "dnIDs": "家电",
                    "dnen": "家电",
                    "dns": "家电",
                    "key": "",
                    "pid": "ff8080816710a77501671124d72e0089",
                    "remark": "",
                    "subMenus": [],
                    "text": "家电",
                    "type": "A",
                    "value": "7052001"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a77501671125bfd3008d",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7052005"
                  },
                  {
                    "dnIDs": "模具",
                    "dnen": "模具",
                    "dns": "模具",
                    "key": "",
                    "pid": "ff8080816710a77501671125eb2e008e",
                    "remark": "",
                    "subMenus": [],
                    "text": "模具",
                    "type": "A",
                    "value": "7052006"
                  },
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a77501671126e17b0090",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7052008"
                  }
                ],
                "text": "企业资源计划SAP",
                "type": "",
                "value": "70520"
              },
              {
                "dnIDs": "成本管理系统",
                "dnen": "成本管理系统",
                "dns": "成本管理系统",
                "key": "",
                "pid": "ff8080816710a7750167112727a90091",
                "remark": "",
                "subMenus": [],
                "text": "成本管理系统",
                "type": "B",
                "value": "70521"
              },
              {
                "dnIDs": "实验室管理系统",
                "dnen": "实验室管理系统",
                "dns": "实验室管理系统",
                "key": "",
                "pid": "ff8080816710a7750167113c0ff300b3",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a7750167113c8bd800b5",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "B",
                    "value": "7050002"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a7750167113c5add00b4",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "B",
                    "value": "7050001"
                  }
                ],
                "text": "实验室管理系统",
                "type": "",
                "value": "70500"
              },
              {
                "dnIDs": "制造执行系统MES",
                "dnen": "制造执行系统MES",
                "dns": "制造执行系统MES",
                "key": "",
                "pid": "ff8080816710a775016711173638005a",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "激光",
                    "dnen": "激光",
                    "dns": "激光",
                    "key": "",
                    "pid": "ff8080816710a775016711183632005e",
                    "remark": "",
                    "subMenus": [],
                    "text": "激光",
                    "type": "A",
                    "value": "7050204"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a7750167111912fe0062",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7050208"
                  },
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a77501671117a2cd005c",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7050202"
                  },
                  {
                    "dnIDs": "通信",
                    "dnen": "通信",
                    "dns": "通信",
                    "key": "",
                    "pid": "ff8080816710a77501671118bd410061",
                    "remark": "",
                    "subMenus": [],
                    "text": "通信",
                    "type": "A",
                    "value": "7050207"
                  },
                  {
                    "dnIDs": "智动精工",
                    "dnen": "智动精工",
                    "dns": "智动精工",
                    "key": "",
                    "pid": "ff8080816710a7750167111892ba0060",
                    "remark": "",
                    "subMenus": [],
                    "text": "智动精工",
                    "type": "A",
                    "value": "7050206"
                  },
                  {
                    "dnIDs": "空调",
                    "dnen": "空调",
                    "dns": "空调",
                    "key": "",
                    "pid": "ff8080816710a775016711176f27005b",
                    "remark": "",
                    "subMenus": [],
                    "text": "空调",
                    "type": "A",
                    "value": "7050201"
                  },
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a775016711180409005d",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7050203"
                  },
                  {
                    "dnIDs": "商显",
                    "dnen": "商显",
                    "dns": "商显",
                    "key": "",
                    "pid": "ff8080816710a7750167111866da005f",
                    "remark": "",
                    "subMenus": [],
                    "text": "商显",
                    "type": "A",
                    "value": "7050205"
                  }
                ],
                "text": "制造执行系统MES",
                "type": "",
                "value": "70502"
              },
              {
                "dnIDs": "数据采集与监视控制系统",
                "dnen": "数据采集与监视控制系统",
                "dns": "数据采集与监视控制系统",
                "key": "",
                "pid": "ff8080816710a7750167111c1dfe006b",
                "remark": "",
                "subMenus": [],
                "text": "数据采集与监视控制系统",
                "type": "B",
                "value": "70506"
              },
              {
                "dnIDs": "后勤采购管理系统",
                "dnen": "后勤采购管理系统",
                "dns": "后勤采购管理系统",
                "key": "",
                "pid": "ff8080816710a77501671127ab760093",
                "remark": "",
                "subMenus": [],
                "text": "后勤采购管理系统",
                "type": "C",
                "value": "70523"
              },
              {
                "dnIDs": "江门工厂散件优化系统",
                "dnen": "江门工厂散件优化系统",
                "dns": "江门工厂散件优化系统",
                "key": "",
                "pid": "ff8080816710a7750167111707660059",
                "remark": "",
                "subMenus": [],
                "text": "江门工厂散件优化系统",
                "type": "B",
                "value": "70501"
              },
              {
                "dnIDs": "配套制造执行系统MES",
                "dnen": "配套制造执行系统MES",
                "dns": "配套制造执行系统MES",
                "key": "",
                "pid": "ff8080816710a775016711195b110063",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "激光",
                    "dnen": "激光",
                    "dns": "激光",
                    "key": "",
                    "pid": "ff8080816710a7750167111a1b9b0065",
                    "remark": "",
                    "subMenus": [],
                    "text": "激光",
                    "type": "A",
                    "value": "7050302"
                  },
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a7750167111991590064",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7050301"
                  },
                  {
                    "dnIDs": "商显",
                    "dnen": "商显",
                    "dns": "商显",
                    "key": "",
                    "pid": "ff8080816710a7750167111a8f770066",
                    "remark": "",
                    "subMenus": [],
                    "text": "商显",
                    "type": "A",
                    "value": "7050303"
                  }
                ],
                "text": "配套制造执行系统MES",
                "type": "",
                "value": "70503"
              },
              {
                "dnIDs": "APS工序计划系统",
                "dnen": "APS工序计划系统",
                "dns": "APS工序计划系统",
                "key": "",
                "pid": "ff8080816710a7750167111c8cda006d",
                "remark": "",
                "subMenus": [],
                "text": "APS工序计划系统",
                "type": "A",
                "value": "70508"
              },
              {
                "dnIDs": "XXX自动测试管理平台 ",
                "dnen": "XXX自动测试管理平台 ",
                "dns": "XXX自动测试管理平台 ",
                "key": "",
                "pid": "ff8080816710a77501671122ab700081",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "股份",
                    "dnen": "股份",
                    "dns": "股份",
                    "key": "",
                    "pid": "ff8080816710a77501671122ee100082",
                    "remark": "",
                    "subMenus": [],
                    "text": "股份",
                    "type": "A",
                    "value": "7051501"
                  },
                  {
                    "dnIDs": "智动精工",
                    "dnen": "智动精工",
                    "dns": "智动精工",
                    "key": "",
                    "pid": "ff8080816710a775016711231bf30083",
                    "remark": "",
                    "subMenus": [],
                    "text": "智动精工",
                    "type": "A",
                    "value": "7051502"
                  }
                ],
                "text": "XXX自动测试管理平台 ",
                "type": "",
                "value": "70515"
              },
              {
                "dnIDs": "央采物流查询系统",
                "dnen": "央采物流查询系统",
                "dns": "央采物流查询系统",
                "key": "",
                "pid": "ff8080816710a7750167112456f70087",
                "remark": "",
                "subMenus": [],
                "text": "央采物流查询系统",
                "type": "A",
                "value": "70519"
              },
              {
                "dnIDs": "质量管理系统",
                "dnen": "质量管理系统",
                "dns": "质量管理系统",
                "key": "",
                "pid": "ff8080816710a775016711277db90092",
                "remark": "",
                "subMenus": [],
                "text": "质量管理系统",
                "type": "B",
                "value": "70522"
              },
              {
                "dnIDs": "原材料仓储管理系统",
                "dnen": "原材料仓储管理系统",
                "dns": "原材料仓储管理系统",
                "key": "",
                "pid": "ff8080816710a7750167111b3c5e0067",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "冰箱",
                    "dnen": "冰箱",
                    "dns": "冰箱",
                    "key": "",
                    "pid": "ff8080816710a7750167111ba7e80069",
                    "remark": "",
                    "subMenus": [],
                    "text": "冰箱",
                    "type": "A",
                    "value": "7050402"
                  },
                  {
                    "dnIDs": "空调",
                    "dnen": "空调",
                    "dns": "空调",
                    "key": "",
                    "pid": "ff8080816710a7750167111b75330068",
                    "remark": "",
                    "subMenus": [],
                    "text": "空调",
                    "type": "A",
                    "value": "7050401"
                  }
                ],
                "text": "原材料仓储管理系统",
                "type": "",
                "value": "70504"
              }
            ],
            "text": "供应链",
            "type": "",
            "value": "705"
          },
          {
            "dnIDs": "研发",
            "dnen": "研发",
            "dns": "研发",
            "key": "",
            "pid": "ff8080816710a775016711053c200010",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "空调产品挑刺需求管理系统",
                "dnen": "空调产品挑刺需求管理系统",
                "dns": "空调产品挑刺需求管理系统",
                "key": "",
                "pid": "ff8080816710a7750167112ab84a00a1",
                "remark": "",
                "subMenus": [],
                "text": "空调产品挑刺需求管理系统",
                "type": "A",
                "value": "70709"
              },
              {
                "dnIDs": "PLM系统",
                "dnen": "PLM系统",
                "dns": "PLM系统",
                "key": "",
                "pid": "ff8080816710a7750167112b2c3a00a3",
                "remark": "",
                "subMenus": [
                  {
                    "dnIDs": "电子信息集团",
                    "dnen": "电子信息集团",
                    "dns": "电子信息集团",
                    "key": "",
                    "pid": "ff8080816710a7750167112bf99e00a7",
                    "remark": "",
                    "subMenus": [],
                    "text": "电子信息集团",
                    "type": "A",
                    "value": "7071104"
                  },
                  {
                    "dnIDs": "日立",
                    "dnen": "日立",
                    "dns": "日立",
                    "key": "",
                    "pid": "ff8080816710a7750167112b590900a4",
                    "remark": "",
                    "subMenus": [],
                    "text": "日立",
                    "type": "A",
                    "value": "7071101"
                  },
                  {
                    "dnIDs": "家电",
                    "dnen": "家电",
                    "dns": "家电",
                    "key": "",
                    "pid": "ff8080816710a7750167112b90cf00a5",
                    "remark": "",
                    "subMenus": [],
                    "text": "家电",
                    "type": "A",
                    "value": "7071102"
                  },
                  {
                    "dnIDs": "模具",
                    "dnen": "模具",
                    "dns": "模具",
                    "key": "",
                    "pid": "ff8080816710a7750167112bb6af00a6",
                    "remark": "",
                    "subMenus": [],
                    "text": "模具",
                    "type": "A",
                    "value": "7071103"
                  }
                ],
                "text": "PLM系统",
                "type": "",
                "value": "70711"
              },
              {
                "dnIDs": "加拿大jamdeo代码同步系统",
                "dnen": "加拿大jamdeo代码同步系统",
                "dns": "加拿大jamdeo代码同步系统",
                "key": "",
                "pid": "ff8080816710a7750167112c7ba800a9",
                "remark": "",
                "subMenus": [],
                "text": "加拿大jamdeo代码同步系统",
                "type": "A",
                "value": "70713"
              },
              {
                "dnIDs": "与运营商交互系统",
                "dnen": "与运营商交互系统",
                "dns": "与运营商交互系统",
                "key": "",
                "pid": "ff8080816710a7750167112d259500ad",
                "remark": "",
                "subMenus": [],
                "text": "与运营商交互系统",
                "type": "C",
                "value": "70717"
              },
              {
                "dnIDs": "Service系统",
                "dnen": "Service系统",
                "dns": "Service系统",
                "key": "",
                "pid": "ff8080816710a7750167112da65500b0",
                "remark": "",
                "subMenus": [],
                "text": "Service系统",
                "type": "B",
                "value": "70720"
              },
              {
                "dnIDs": "版本及文件系统",
                "dnen": "版本及文件系统",
                "dns": "版本及文件系统",
                "key": "",
                "pid": "ff8080816710a7750167112d47c500ae",
                "remark": "",
                "subMenus": [],
                "text": "版本及文件系统",
                "type": "B",
                "value": "70718"
              },
              {
                "dnIDs": "移动技术OA",
                "dnen": "移动技术OA",
                "dns": "移动技术OA",
                "key": "",
                "pid": "ff8080816710a7750167112d822500af",
                "remark": "",
                "subMenus": [],
                "text": "移动技术OA",
                "type": "B",
                "value": "70719"
              },
              {
                "dnIDs": "文档安全管理系统",
                "dnen": "文档安全管理系统",
                "dns": "文档安全管理系统",
                "key": "",
                "pid": "ff8080816710a7750167112dc84c00b1",
                "remark": "",
                "subMenus": [],
                "text": "文档安全管理系统",
                "type": "B",
                "value": "70721"
              },
              {
                "dnIDs": "XXX日立固定资产管理系统",
                "dnen": "XXX日立固定资产管理系统",
                "dns": "XXX日立固定资产管理系统",
                "key": "",
                "pid": "ff8080816710a775016711292ba50099",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立固定资产管理系统",
                "type": "C",
                "value": "70701"
              },
              {
                "dnIDs": "冰箱公司研发标杆系统",
                "dnen": "冰箱公司研发标杆系统",
                "dns": "冰箱公司研发标杆系统",
                "key": "",
                "pid": "ff8080816710a7750167112a8ce600a0",
                "remark": "",
                "subMenus": [],
                "text": "冰箱公司研发标杆系统",
                "type": "C",
                "value": "70708"
              },
              {
                "dnIDs": "手机产品线中软加密系统",
                "dnen": "手机产品线中软加密系统",
                "dns": "手机产品线中软加密系统",
                "key": "",
                "pid": "ff8080816710a7750167112cae5500aa",
                "remark": "",
                "subMenus": [],
                "text": "手机产品线中软加密系统",
                "type": "A",
                "value": "70714"
              },
              {
                "dnIDs": "easyconnect系统",
                "dnen": "easyconnect系统",
                "dns": "easyconnect系统",
                "key": "",
                "pid": "ff8080816710a7750167112dec9600b2",
                "remark": "",
                "subMenus": [],
                "text": "easyconnect系统",
                "type": "B",
                "value": "70722"
              },
              {
                "dnIDs": "XXX日立员工考评系统",
                "dnen": "XXX日立员工考评系统",
                "dns": "XXX日立员工考评系统",
                "key": "",
                "pid": "ff8080816710a77501671129633e009a",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立员工考评系统",
                "type": "C",
                "value": "70702"
              },
              {
                "dnIDs": "XXX日立一线员工信息录入系统",
                "dnen": "XXX日立一线员工信息录入系统",
                "dns": "XXX日立一线员工信息录入系统",
                "key": "",
                "pid": "ff8080816710a775016711299875009b",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立一线员工信息录入系统",
                "type": "C",
                "value": "70703"
              },
              {
                "dnIDs": "XXX日立会议室预约系统",
                "dnen": "XXX日立会议室预约系统",
                "dns": "XXX日立会议室预约系统",
                "key": "",
                "pid": "ff8080816710a77501671129c2eb009c",
                "remark": "",
                "subMenus": [],
                "text": "XXX日立会议室预约系统",
                "type": "C",
                "value": "70704"
              },
              {
                "dnIDs": "CMDLJ设计软件",
                "dnen": "CMDLJ设计软件",
                "dns": "CMDLJ设计软件",
                "key": "",
                "pid": "ff8080816710a7750167112a35bd009e",
                "remark": "",
                "subMenus": [],
                "text": "CMDLJ设计软件",
                "type": "C",
                "value": "70706"
              },
              {
                "dnIDs": "人资员工凋令生成发放系统",
                "dnen": "人资员工凋令生成发放系统",
                "dns": "人资员工凋令生成发放系统",
                "key": "",
                "pid": "ff8080816710a7750167112a5e67009f",
                "remark": "",
                "subMenus": [],
                "text": "人资员工凋令生成发放系统",
                "type": "C",
                "value": "70707"
              },
              {
                "dnIDs": "产品选型软件（海外版）",
                "dnen": "产品选型软件（海外版）",
                "dns": "产品选型软件（海外版）",
                "key": "",
                "pid": "ff8080816710a7750167112a00c2009d",
                "remark": "",
                "subMenus": [],
                "text": "产品选型软件（海外版）",
                "type": "C",
                "value": "70705"
              },
              {
                "dnIDs": "研发项目管理系统",
                "dnen": "研发项目管理系统",
                "dns": "研发项目管理系统",
                "key": "",
                "pid": "ff8080816710a7750167112b005c00a2",
                "remark": "",
                "subMenus": [],
                "text": "研发项目管理系统",
                "type": "A",
                "value": "70710"
              },
              {
                "dnIDs": "研发中心云桌面平台",
                "dnen": "研发中心云桌面平台",
                "dns": "研发中心云桌面平台",
                "key": "",
                "pid": "ff8080816710a7750167112c3a7f00a8",
                "remark": "",
                "subMenus": [],
                "text": "研发中心云桌面平台",
                "type": "A",
                "value": "70712"
              },
              {
                "dnIDs": "各公司研发用文件虚拟化系统",
                "dnen": "各公司研发用文件虚拟化系统",
                "dns": "各公司研发用文件虚拟化系统",
                "key": "",
                "pid": "ff8080816710a7750167112cd48800ab",
                "remark": "",
                "subMenus": [],
                "text": "各公司研发用文件虚拟化系统",
                "type": "A",
                "value": "70715"
              },
              {
                "dnIDs": "与外协厂商版本交付系统",
                "dnen": "与外协厂商版本交付系统",
                "dns": "与外协厂商版本交付系统",
                "key": "",
                "pid": "ff8080816710a7750167112cfe3700ac",
                "remark": "",
                "subMenus": [],
                "text": "与外协厂商版本交付系统",
                "type": "C",
                "value": "70716"
              }
            ],
            "text": "研发",
            "type": "",
            "value": "707"
          },
          {
            "dnIDs": "财务",
            "dnen": "财务",
            "dns": "财务",
            "key": "",
            "pid": "ff8080816710a7750167110501b5000f",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "集团管理报表平台",
                "dnen": "集团管理报表平台",
                "dns": "集团管理报表平台",
                "key": "",
                "pid": "ff8080816710a775016711284e7c0096",
                "remark": "",
                "subMenus": [],
                "text": "集团管理报表平台",
                "type": "B",
                "value": "70603"
              },
              {
                "dnIDs": "SSC业务辅助系统",
                "dnen": "SSC业务辅助系统",
                "dns": "SSC业务辅助系统",
                "key": "",
                "pid": "ff8080816710a77501671128d4860098",
                "remark": "",
                "subMenus": [],
                "text": "SSC业务辅助系统",
                "type": "C",
                "value": "70605"
              },
              {
                "dnIDs": "财务共享报账平台（老）",
                "dnen": "财务共享报账平台（老）",
                "dns": "财务共享报账平台（老）",
                "key": "",
                "pid": "ff8080816710a7750167112803b20094",
                "remark": "",
                "subMenus": [],
                "text": "财务共享报账平台（老）",
                "type": "B",
                "value": "70601"
              },
              {
                "dnIDs": "影像系统",
                "dnen": "影像系统",
                "dns": "影像系统",
                "key": "",
                "pid": "ff8080816710a77501671128293b0095",
                "remark": "",
                "subMenus": [],
                "text": "影像系统",
                "type": "B",
                "value": "70602"
              },
              {
                "dnIDs": "新业务报账系统",
                "dnen": "新业务报账系统",
                "dns": "新业务报账系统",
                "key": "",
                "pid": "ff8080816710a775016711287f5d0097",
                "remark": "",
                "subMenus": [],
                "text": "新业务报账系统",
                "type": "B",
                "value": "70604"
              }
            ],
            "text": "财务",
            "type": "",
            "value": "706"
          },
          {
            "dnIDs": "办公",
            "dnen": "办公",
            "dns": "办公",
            "key": "",
            "pid": "ff8080816710a7750167110422f5000b",
            "remark": "",
            "subMenus": [
              {
                "dnIDs": "档案管理系统",
                "dnen": "档案管理系统",
                "dns": "档案管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110be1fe002a",
                "remark": "",
                "subMenus": [],
                "text": "档案管理系统",
                "type": "C",
                "value": "70207"
              },
              {
                "dnIDs": "HCM合同管理系统",
                "dnen": "HCM合同管理系统",
                "dns": "HCM合同管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110c9214002e",
                "remark": "",
                "subMenus": [],
                "text": "HCM合同管理系统",
                "type": "C",
                "value": "70211"
              },
              {
                "dnIDs": "案件管理系统",
                "dnen": "案件管理系统",
                "dns": "案件管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110cb98a002f",
                "remark": "",
                "subMenus": [],
                "text": "案件管理系统",
                "type": "C",
                "value": "70212"
              },
              {
                "dnIDs": "信鸿平台",
                "dnen": "信鸿平台",
                "dns": "信鸿平台",
                "key": "",
                "pid": "ff8080816710a7750167110b3a850026",
                "remark": "",
                "subMenus": [],
                "text": "信鸿平台",
                "type": "A",
                "value": "70203"
              },
              {
                "dnIDs": "XXX驿站",
                "dnen": "XXX驿站",
                "dns": "XXX驿站",
                "key": "",
                "pid": "ff8080816710a7750167110b90890028",
                "remark": "",
                "subMenus": [],
                "text": "XXX驿站",
                "type": "B",
                "value": "70205"
              },
              {
                "dnIDs": "OA系统",
                "dnen": "OA系统",
                "dns": "OA系统",
                "key": "",
                "pid": "ff8080816710a7750167110ae7630024",
                "remark": "",
                "subMenus": [],
                "text": "OA系统",
                "type": "A",
                "value": "70201"
              },
              {
                "dnIDs": "冰箱合同管理系统",
                "dnen": "冰箱合同管理系统",
                "dns": "冰箱合同管理系统",
                "key": "",
                "pid": "ff8080816710a7750167110bb8bd0029",
                "remark": "",
                "subMenus": [],
                "text": "冰箱合同管理系统",
                "type": "B",
                "value": "70206"
              },
              {
                "dnIDs": "督察督办系统",
                "dnen": "督察督办系统",
                "dns": "督察督办系统",
                "key": "",
                "pid": "ff8080816710a7750167110c58b9002d",
                "remark": "",
                "subMenus": [],
                "text": "督察督办系统",
                "type": "C",
                "value": "70210"
              },
              {
                "dnIDs": "门户系统",
                "dnen": "门户系统",
                "dns": "门户系统",
                "key": "",
                "pid": "ff8080816710a7750167110b12ca0025",
                "remark": "",
                "subMenus": [],
                "text": "门户系统",
                "type": "A",
                "value": "70202"
              },
              {
                "dnIDs": "114通讯录",
                "dnen": "114通讯录",
                "dns": "114通讯录",
                "key": "",
                "pid": "ff8080816710a7750167110c3029002c",
                "remark": "",
                "subMenus": [],
                "text": "114通讯录",
                "type": "C",
                "value": "70209"
              },
              {
                "dnIDs": "邮件平台",
                "dnen": "邮件平台",
                "dns": "邮件平台",
                "key": "",
                "pid": "ff8080816710a7750167110b60380027",
                "remark": "",
                "subMenus": [],
                "text": "邮件平台",
                "type": "A",
                "value": "70204"
              },
              {
                "dnIDs": "XXX云盘(文档系统)",
                "dnen": "XXX云盘(文档系统)",
                "dns": "XXX云盘(文档系统)",
                "key": "",
                "pid": "ff8080816710a7750167110c0ae3002b",
                "remark": "",
                "subMenus": [],
                "text": "XXX云盘(文档系统)",
                "type": "C",
                "value": "70208"
              }
            ],
            "text": "办公",
            "type": "",
            "value": "702"
          }
        ],
        "text": "业务应用系统",
        "type": "",
        "value": "7"
      }
    ]
  } else if (JSON.parse(o.body).dicParas === '紧急程度') {
    res =  [{"dnIDs":"低(3工作日内解决)","dnen":"Low(3 Business Days)","dns":"低(3工作日内解决)","key":"","pid":"40288fcf384a93db01384b7bceed000a","subMenus":[],"text":"低(3工作日内解决)","type":"","value":"低"},{"dnIDs":"中(2工作日内解决)","dnen":"Medium(2 Business Days)","dns":"中(2工作日内解决)","key":"","pid":"40288fcf384a93db01384b7b8f400009","subMenus":[],"text":"中(2工作日内解决)","type":"","value":"中"},{"dnIDs":"高(8小时内解决)","dnen":"High(8 Hours)","dns":"高(8小时内解决)","key":"","pid":"40288fcf384a93db01384b7b5b330008","subMenus":[],"text":"高(8小时内解决)","type":"","value":"高"},{"dnIDs":"紧急(2小时内解决)","dnen":"Critical(2 Hourss)","dns":"紧急(2小时内解决)","key":"","pid":"40288fcf384a93db01384b7b1dc60007","subMenus":[],"text":"紧急(2小时内解决)","type":"","value":"紧急"}]
  } else if (JSON.parse(o.body).dicParas === '影响度') {
    res = [{"dnIDs":"一般","dnen":"General","dns":"一般","key":"","pid":"ff80808165d818b80165e672cf910017","subMenus":[],"text":"一般","type":"","value":"一般"},{"dnIDs":"中等","dnen":"Moderate","dns":"中等","key":"","pid":"ff80808165d818b80165e672a9c90016","subMenus":[],"text":"中等","type":"","value":"中等"},{"dnIDs":"严重","dnen":"Critical","dns":"严重","key":"","pid":"ff80808165d818b80165e672775e0015","subMenus":[],"text":"严重","type":"","value":"严重"},{"dnIDs":"重大","dnen":"Importance","dns":"重大","key":"","pid":"ff80808165d818b80165e67237990014","subMenus":[],"text":"重大","type":"","value":"重大"}]
  } else if (JSON.parse(o.body).dicParas === '优先级') {
    res =  [{"dnIDs":"P1","dnen":"P1","dns":"P1","key":"","pid":"ff80808165d818b80165e6767f700019","subMenus":[],"text":"P1","type":"","value":"P1"},{"dnIDs":"P2","dnen":"P2","dns":"P2","key":"","pid":"ff80808165d818b80165e676aa00001a","subMenus":[],"text":"P2","type":"","value":"P2"},{"dnIDs":"P3","dnen":"P3","dns":"P3","key":"","pid":"ff80808165d818b80165e676ea41001b","subMenus":[],"text":"P3","type":"","value":"P3"},{"dnIDs":"P4","dnen":"P4","dns":"P4","key":"","pid":"ff80808165d818b80165e6770e44001c","subMenus":[],"text":"P4","type":"","value":"P4"}]
  } else if (JSON.parse(o.body).dicParas === '中断时长') {
    res = [{"dnIDs":"6小时以上","dnen":"Interruption\u003e6Hrs","dns":"6小时以上","key":"","pid":"ff808081670c112201670c904d7b0015","subMenus":[],"text":"6小时以上","type":"","value":"3"},{"dnIDs":"10分钟-6小时","dnen":"10Mins\u003cInterruption\u003c6Hrs","dns":"10分钟-6小时","key":"","pid":"ff808081670c112201670c8ff3a10014","subMenus":[],"text":"10分钟-6小时","type":"","value":"2"},{"dnIDs":"10分钟以内","dnen":"Interruption\u003c10Mins","dns":"10分钟以内","key":"","pid":"ff808081670c112201670c8fa4960013","subMenus":[],"text":"10分钟以内","type":"","value":"1"}]
  } else if (JSON.parse(o.body).dicParas === '影响范围') {
    res = [{"dnIDs":"个人","dnen":"","dns":"个人","key":"","pid":"ff80808166fb33ac016707852014000e","subMenus":[],"text":"个人","type":"","value":"个人"},{"dnIDs":"部门","dnen":"Department","dns":"部门","key":"","pid":"ff80808166fb33ac01670784fe80000d","subMenus":[],"text":"部门","type":"","value":"部门"},{"dnIDs":"公司","dnen":"","dns":"公司","key":"","pid":"ff80808166fb33ac01670784d022000c","subMenus":[],"text":"公司","type":"","value":"公司"}]
  } else if (JSON.parse(o.body).dicParas === '事件性质') {
    res=[{"dnIDs":"故障申告","dnen":"Incident Mgmt","dns":"故障申告","key":"","pid":"40288fcf3869abee01386af541800005","subMenus":[],"text":"故障申告","type":"","value":"故障申告"},{"dnIDs":"咨询","dnen":"Consultant","dns":"咨询","key":"","pid":"40288fcf3869abee01386af5c9540007","subMenus":[],"text":"咨询","type":"","value":"咨询"}]
  } else {
    res = [
      {
        "dnIDs": "高",
        "dns": "高",
        "dnen": "c1",
        "subMenus": [],
        "text": "选择1",
        pid: 's98',
        "value": "c1"
      },
      {
        "dnIDs": "高",
        "dns": "高",
        "dnen": "c2",
        "subMenus": [],
        "text": "选择2",
        "value": "c2",
        pid: 't24'
      }
    ]
  }
  return Mock.mock(res)
}
Mock.mock(new RegExp('^' + urls['querySelect']), 'post', queryOrderSelect)

// 流程查询
function process(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "result": [
      {
        "stepModel":{
          "description":"@cword(4,5)",
          "descriptionen":"@word(4,5)",
        },
        "change": [
          {
            "fieldName": "Urgency",
            "label": "紧急程度",
            "old": "低",
            "new": "高"
          },
          {
            "fieldName": "EmergencyDegree",
            "label": "影响度",
            "old": "一般",
            "new": "严重"
          }
        ],
        "level": 0,
        "clazz": "",
        "processstatusen": "Submitted",
        stprocessactionen: 'en',
        dpdescen: 'en',
        actionnameen: 'aeng',
        "modifyFieldViews": [
          {
            "name": "标题",
            "dbName": "BaseSummary",
            "value": "测试",
            "printOneLine": "4"
          },
          {
            "name": "联系人姓名",
            "dbName": "ContactFullName",
            "value": "root",
            "printOneLine": "1"
          },
          {
            "name": "联系人登录名",
            "dbName": "ContactLoginName",
            "value": "root",
            "printOneLine": "1"
          },
          {
            "name": "联系人手机",
            "dbName": "ContactPhone",
            "value": "18515572890",
            "printOneLine": "1"
          },
          {
            "name": "联系人电话",
            "dbName": "ContactTel",
            "value": "010665555",
            "printOneLine": "1"
          },
          {
            "name": "联系人单位",
            "dbName": "ContactCompany",
            "value": "",
            "printOneLine": "2"
          },
          {
            "name": "联系人部门",
            "dbName": "ContactDepartment",
            "value": "",
            "printOneLine": "2"
          },
          {
            "name": "事件来源",
            "dbName": "Source",
            "value": "电话",
            "printOneLine": "1"
          },
          {
            "name": "事件紧急程度",
            "dbName": "Urgency",
            "value": "紧急",
            "printOneLine": "1"
          },
          {
            "name": "事件影响度",
            "dbName": "EmergencyDegree",
            "value": "严重故障",
            "printOneLine": "1"
          },
          {
            "name": "优先级",
            "dbName": "Priority",
            "value": "中",
            "printOneLine": "1"
          },
          {
            "name": "发生时间",
            "dbName": "OccurredTime",
            "value": "2018-08-15 10:23:28",
            "printOneLine": "1"
          },
          {
            "name": "事件性质",
            "dbName": "Quality",
            "value": "申告",
            "printOneLine": "1"
          },
          {
            "name": "IT分类",
            "dbName": "ITClassify",
            "value": "01-A",
            "printOneLine": "1"
          },
          {
            "name": "恢复时间",
            "dbName": "RecoveryTime",
            "value": "",
            "printOneLine": "2"
          },
          {
            "name": "服务中断时长-分钟",
            "dbName": "BreakDuration",
            "value": "",
            "printOneLine": "2"
          },
          {
            "name": "解决方案类型",
            "dbName": "SolutionType",
            "value": "",
            "printOneLine": "2"
          },
          {
            "name": "事件结束代码",
            "dbName": "EndCode",
            "value": "",
            "printOneLine": "2"
          },
          {
            dbName: "SendTurn",
            name: "转派原因",
            printOneLine: "4",
            value: "水平不够，不好意思不好意思不好意思不好意思不好意思不好意思不好意思不好意思不好意思不好意思"
          }
        ],
        "dpLogs": [
          {
            "logUser": "root",
            "actionName": "提交一线",
            "logTime": "2018-08-30 10:24:01",
            "result": ""
          }
        ],
        "processid": "cbf0b0b23e9947cc99fb4a25b33b0b67",
        "processtype": "DEAL",
        "taskid": "3eb02f79aa3d4f57ad9c152c18ea755e",
        "phaseno": "dp_2",
        "stepid": "e2ed477930ad4df7b7ae81c9b49ea4b5",
        "forwardstepid": "BEGIN",
        "prephaseno": "BEGIN",
        "processstatus": "已提交一线",
        "flagactive": 0,
        "flagduplicated": 0,
        "flagendduplicated": 1,
        "flagendphase": 0,
        "flagpredefined": 1,
        "stprocessaction": "新建",
        "edprocessaction": "下一步",
        "selfdeallength": 1,
        "basestartdate": 1535595838,
        "baseid": "175409f582554f20b92xd47f61862768c",
        "baseschema": "ITSM_INCIDENT",
        "entryid": "eca8d75ca07c483cbf2e05c2b8e2d2db",
        "topentryid": "eca8d75ca07c483cbf2e05c2b8e2d2db",
        "actortype": "USER",
        "dealtype": "SHARE",
        "assigneeid": "root",
        "assignee": "root",
        "assigneedepid": "0",
        "flagassigntype": "主办",
        "dealerid": "root",
        "dealerdepid": "0",
        "assignerid": "root",
        "assigner": "root",
        "assignerdepid": "0",
        "stdate": 1535595838,
        "bgdate": 1535595839,
        "eddate": 1535595839,
        "assignovertimedate": 0,
        "acceptovertimedate": 0,
        "dealovertimedate": 0,
        "flagassign": 0,
        "flagassist": 0,
        "flagcopy": 0,
        "flagtransfer": 0,
        "flagturnup": 0,
        "flagrecall": 1,
        "flagcancel": 0,
        "flagclose": 0,
        "flagturndown": 0,
        "flagtoassistauditing": 0,
        "flagtoauditing": 0,
        "flagstartinsideflow": 1,
        "flagauditingresult": 0,
        "insideflowscount": 0,
        "finishinsideflowscount": 0,
        "hastencount": 0,
        "basecreatetime": 1535595837,
        "roleid": "CreateRole",
        "rolename": "建单人",
        "actionname": "提交一线",
        "dpdesc": "建单",
        "formData": {
          "label": "汉字",
          "labelen": "English",
          "content": "<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试<b>一段加粗字体</b>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测<i>一段倾斜字体</i>试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539247483674&di=6ab455c7dd33aea17ba7c550f46d29ec&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170819%2F7a529e72f7c74663bc23afda97dc3bdb.jpeg' style='width: 50%'/><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539247529477&di=e886cb63cd25989b960f5b602edb6595&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20175_25_0%2Fa9aurt7941161683542.jpg' style='width: 50%'/><p>上面是两张<span style='font-size: 20px'>图片</span></p><p>下面还有好几张图片</p><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539247483674&di=90225616c525a1e4ce9e4de9f3cfbe4f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170114%2F82de7d49ebff4d488a9aa804ae610b21_th.jpeg' width='50%'/><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539247529477&di=07d41c5e77b50448e23c8c4169419f80&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161206%2Fa4ca1f1e27854a85a85afd86e32a07f7_th.jpeg' width='70%'/>"
        }
      },
      {
        "stepModel":{
          "description":"@cword(4,5)",
          "descriptionen":"@word(4,5)",
        },
        "change": [
          {
            "fieldName": "Urgency",
            "label": "紧急程度",
            "old": "低",
            "new": "高"
          },
          {
            "fieldName": "EmergencyDegree",
            "label": "影响度",
            "old": "一般",
            "new": "严重"
          }
        ],
        "level": 0,
        "clazz": "current",
        "modifyFieldViews": [],
        "dpLogs": [],
        "processid": "8d8d17ba94db44ee95634f86dcd6dd0e",
        "processtype": "DEAL",
        "taskid": "05a1927e239f44ba9a8f2d554122d0c9",
        "phaseno": "dp_3",
        "stepid": "9fe3f44d3a5f44ac979a74d0372add1c",
        "forwardstepid": "e2ed477930ad4df7b7ae81c9b49ea4b5",
        "prephaseno": "dp_2",
        "processstatus": "待处理",
        "processstatusen": "Submitted",
        stprocessactionen: 'en',
        dpdescen: 'en',
        actionnameen: 'aeng',
        "flagactive": 1,
        "flagduplicated": 0,
        "flagendduplicated": 1,
        "flagendphase": 1,
        "flagpredefined": 1,
        "stprocessaction": "下一步",
        "selfdeallength": 0,
        "basestartdate": 1535595839,
        "baseid": "175409f582554f20b92d47f61862768c",
        "baseschema": "ITSM_INCIDENT",
        "entryid": "eca8d75ca07c483cbf2e05c2b8e2d2db",
        "topentryid": "eca8d75ca07c483cbf2e05c2b8e2d2db",
        "actortype": "USER",
        "dealtype": "ONLY",
        "assigneeid": "root",
        "assigneedepid": "0",
        "flagassigntype": "主办",
        "assignerid": "root",
        "assigner": "root",
        "assignerdepid": "0",
        "stdate": 1535595839,
        "bgdate": 0,
        "eddate": 0,
        "assignovertimedate": 0,
        "acceptovertimedate": 0,
        "dealovertimedate": 0,
        "flagassign": 0,
        "flagassist": 0,
        "flagcopy": 0,
        "flagtransfer": 0,
        "flagturnup": 0,
        "flagrecall": 0,
        "flagcancel": 0,
        "flagclose": 0,
        "flagturndown": 0,
        "flagtoassistauditing": 0,
        "flagtoauditing": 0,
        "flagstartinsideflow": 1,
        "flagauditingresult": 0,
        "insideflowscount": 0,
        "finishinsideflowscount": 0,
        "hastencount": 0,
        "basecreatetime": 1535595837,
        "roleid": "Dealer01",
        "rolename": "一线处理人",
        "actionname": "提交一线",
        "dpdesc": "一线处理",
        assigngroup: 'taobao',
        dealer: 'sb',
        "formData": {
          label: 'SOC',
          labelen: 'osp',
          content: '<p>dsssssssssssssssdfdsfsdfsdfdsfdsfsdsssssssssssssssssssssssssss</p>'
        }
      }
    ]
  }
  )
}
Mock.mock(new RegExp('^' + urls['fetchProcess']), 'post', process)

// 获取工单结构与工单内容与既有表单内容
function createOrder(o) {
  let res = {
    "result": {
      "formFolder": "HISENSE_ITSM_INCIDENT",
      "form": {
        "chiNodes": [
          {
            "baseField": {
              "titleVisible": 1,
              "colspan": 8,
              "type": "tab",
              "id": "c6495d4b95ec4e079878daeeabbdbade",
              "label": "工单主体部分",
              "fieldName": "PG_Main",
              "fieldType": "PanelGroupField",
              "baseSchema": "HISENSE_ITSM_INCIDENT",
              "visiable": 1,
              "orderNum": 0,
              "hasDeploy": 1,
              "operate": "add",
              "parentID": "main",
              "labelen": "Main Body"
            },
            "chiNodes": [
              {
                "baseField": {
                  "id": "6eacf61623304bd8bcf39701c25e1482",
                  "label": "基本信息",
                  "fieldName": "P_BaseInfo",
                  "fieldType": "PanelField",
                  "baseSchema": "HISENSE_ITSM_INCIDENT",
                  "visiable": 3,
                  "orderNum": 1,
                  "hasDeploy": 1,
                  "operate": "add",
                  "parentID": "c6495d4b95ec4e079878daeeabbdbade",
                  "labelen": "Base Info"
                },
                "chiNodes": [
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 6,
                      "id": "0f63f33e278c4b429f7c320fbafab608",
                      "label": "标题",
                      "fieldName": "BaseSummary",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 1,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Description"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "property",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 3,
                      "id": "3ea8970ee2364d63acab13698fcd1213",
                      "label": "事件性质",
                      "fieldName": "Nature",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 2,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Incident Type"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "businessSystem",
                      "needSave": 1,
                      "length": 200,
                      "colspan": 4,
                      "id": "7340ffc8a8ce4169adb414db5a16592c",
                      "label": "业务分类",
                      "fieldName": "businessSystem",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Business Category"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "Reach",
                      "needSave": 1,
                      "length": 200,
                      "colspan": 2,
                      "id": "3851e49abff0478fa74fdcaecabbc0c5",
                      "label": "影响范围",
                      "fieldName": "Reach",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 4,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Impact Area"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "Interrupt",
                      "needSave": 1,
                      "length": 200,
                      "colspan": 3,
                      "id": "d59144c22f954ce18b6119d93e68d4b3",
                      "label": "中断时长",
                      "fieldName": "InterruptTime",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 5,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Interruption"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "emergency",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 2,
                      "id": "68a28655b67049c88f758763450cefe9",
                      "label": "紧急程度",
                      "fieldName": "Urgency",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 6,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Urgency"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "EmergencyDegree",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 3,
                      "id": "fdddca3444364343bc99433ccec5e2c1",
                      "label": "影响度",
                      "fieldName": "EmergencyDegree",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 7,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Impact"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "eventPriority",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 3,
                      "id": "3db33bbf96704cdd84ae406444636e9b",
                      "label": "优先级",
                      "fieldName": "Priority",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 8,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Priority"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "hisenseEventSource",
                      "needSave": 1,
                      "defaultValue": "6",
                      "length": 20,
                      "colspan": 3,
                      "id": "aa3ed5da710a4df2a678fcded7f12d05",
                      "label": "事件来源",
                      "fieldName": "Source",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 9,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Incident Source"
                    }
                  },
                  {
                    "baseField": {
                      "timeFormat": "yyyy-MM-dd HH:mm:ss",
                      "needSave": 1,
                      "length": 15,
                      "colspan": 4,
                      "id": "195b054e70fa4366856a9ec91c5df707",
                      "label": "发生时间",
                      "fieldName": "HappenTime",
                      "fieldType": "TimeField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 10,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Occur Time"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "needSave": 1,
                      "length": 4000,
                      "colspan": 7,
                      "id": "b2d7b1f9e4534bb1a45704e0c0395742",
                      "label": "事件描述",
                      "fieldName": "Description",
                      "fieldType": "RichtextField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 11,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6eacf61623304bd8bcf39701c25e1482",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Detailed Description"
                    }
                  }
                ]
              },
              {
                "baseField": {
                  "id": "4fefcd72301f463993eaac91b3fb1c48",
                  "label": "附件信息",
                  "fieldName": "P_AttachInfo",
                  "fieldType": "PanelField",
                  "baseSchema": "HISENSE_ITSM_INCIDENT",
                  "visiable": 3,
                  "orderNum": 2,
                  "hasDeploy": 1,
                  "operate": "add",
                  "parentID": "c6495d4b95ec4e079878daeeabbdbade",
                  "labelen": "Attachment Info"
                },
                "chiNodes": [
                  {
                    "baseField": {
                      "showType": "self",
                      "id": "11230b029ae44d39bfc8d57298ceec59",
                      "label": "附件",
                      "fieldName": "Attachments",
                      "fieldType": "AttachmentField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 1,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "4fefcd72301f463993eaac91b3fb1c48",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Attachment"
                    }
                  }
                ]
              },
              {
                "baseField": {
                  "id": "6feeea7d8b0c496598fa4de72f6fd5b7",
                  "label": "申请人信息",
                  "fieldName": "P_ContactInfo",
                  "fieldType": "PanelField",
                  "baseSchema": "HISENSE_ITSM_INCIDENT",
                  "visiable": 3,
                  "orderNum": 3,
                  "hasDeploy": 1,
                  "operate": "add",
                  "parentID": "c6495d4b95ec4e079878daeeabbdbade",
                  "labelen": "Requestor Info"
                },
                "chiNodes": [
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 4,
                      "id": "2afdc3d0c79742e38a6fda64b6424acd",
                      "label": "请求人登录名",
                      "fieldName": "ContactLoginName",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 1,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Login ID"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 3,
                      "id": "8107d6c25ab8464b82ef0534a779ab3a",
                      "label": "请求人姓名",
                      "fieldName": "ContactFullName",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 2,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Name"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 4,
                      "id": "bba4c3b46a284479809204f8030dd5d8",
                      "label": "请求人部门",
                      "fieldName": "ContactDepartment",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Department"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 3,
                      "id": "373fa6a12cc34059ba1c6cfe3e322f92",
                      "label": "请求人手机",
                      "fieldName": "ContactPhone",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Mobile"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "isVIP",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 1,
                      "id": "5974f198ff6e4ea091d831ca6c0d1665",
                      "label": "是否VIP",
                      "fieldName": "IsVIP",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Is VIP"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 3,
                      "id": "8081321c2e44453a9bd040885f3356a2",
                      "label": "请求人电话",
                      "fieldName": "ContactTel",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 4,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 0,
                      "labelen": "Telphone"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 4,
                      "id": "9c57db837ba9454eb3ecfa1f580cd9e6",
                      "label": "请求人邮件",
                      "fieldName": "ContactMail",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 5,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "6feeea7d8b0c496598fa4de72f6fd5b7",
                      "editable": 1,
                      "required": 1,
                      "labelen": "Email"
                    }
                  }
                ]
              },
              {
                "baseField": {
                  "id": "7be388dd1a6a478691b60fb4ea3a6825",
                  "label": "受理信息",
                  "fieldName": "P_AcceptInfo",
                  "fieldType": "PanelField",
                  "baseSchema": "HISENSE_ITSM_INCIDENT",
                  "visiable": 3,
                  "orderNum": 4,
                  "hasDeploy": 1,
                  "operate": "add",
                  "parentID": "c6495d4b95ec4e079878daeeabbdbade",
                  "labelen": "Response Info"
                },
                "chiNodes": [
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 2,
                      "id": "c8e93acedc2649abaf707bc5a737b415",
                      "label": "受理人",
                      "fieldName": "Dealer",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 1,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "7be388dd1a6a478691b60fb4ea3a6825",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Assignee"
                    }
                  },
                  {
                    "baseField": {
                      "timeFormat": "yyyy-MM-dd HH:mm:ss",
                      "needSave": 1,
                      "length": 15,
                      "colspan": 2,
                      "id": "9e5688d90e634840980a3ef38d0541b7",
                      "label": "受理时间",
                      "fieldName": "DealTime",
                      "fieldType": "TimeField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 2,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "7be388dd1a6a478691b60fb4ea3a6825",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Response Time"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "isVIP",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 2,
                      "id": "509df0302bc34e2289d768ad3e1226cb",
                      "label": "响应是否超时",
                      "fieldName": "IsRespondOutTime",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "7be388dd1a6a478691b60fb4ea3a6825",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Is Response Overtime"
                    }
                  }
                ]
              },
              {
                "baseField": {
                  "id": "e85fa34b67864f9bb16c2b38281d6d47",
                  "label": "处理信息",
                  "fieldName": "P_DealInfo",
                  "fieldType": "PanelField",
                  "baseSchema": "HISENSE_ITSM_INCIDENT",
                  "visiable": 3,
                  "orderNum": 5,
                  "hasDeploy": 1,
                  "operate": "add",
                  "parentID": "c6495d4b95ec4e079878daeeabbdbade",
                  "labelen": "Process  Information"
                },
                "chiNodes": [
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "EventClassify",
                      "needSave": 1,
                      "length": 200,
                      "colspan": 5,
                      "id": "faf96ca2649f4b2eb0d02f1eabb9f9b5",
                      "label": "事件分类",
                      "fieldName": "EventClassify",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 3,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Categorization"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 4,
                      "id": "08403da2401b4ddf8b0d6bafcda42396",
                      "label": "故障厂商",
                      "fieldName": "FaultManufacturers",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 4,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Vendor"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 3,
                      "needSave": 1,
                      "length": 4000,
                      "colspan": 7,
                      "id": "7ff4a803669349b7a26ab4a6df377177",
                      "label": "事件原因",
                      "fieldName": "EventReson",
                      "fieldType": "RichtextField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 4,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Rootcause"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "isVIP",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 2,
                      "id": "11f56419ce8f4d908f810da3516aef53",
                      "label": "是否重复事件",
                      "fieldName": "RepeatEvent",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 4,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Is Duplicated?"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "needSave": 1,
                      "length": 4000,
                      "colspan": 7,
                      "id": "0b8e266a1dfe46cb8f6c9c4a8355c209",
                      "label": "解决方案",
                      "fieldName": "DealInfo",
                      "fieldType": "RichtextField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 5,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Resolution Information"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "incidentcode",
                      "paras": "事件结束代码",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 3,
                      "id": "9db9e915f5ae4def83662bcf3093a418",
                      "label": "事件结束代码",
                      "fieldName": "EndCode",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 1,
                      "orderNum": 6,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 1,
                      "labelen": "Closure Code"
                    }
                  },
                  {
                    "baseField": {
                      "rowspan": 1,
                      "isClob": 0,
                      "needSave": 1,
                      "length": 256,
                      "colspan": 1,
                      "id": "e76683b20ecf4b30bbdfe853b3bf2102",
                      "label": "解决人",
                      "fieldName": "EventDealer",
                      "fieldType": "CharacterField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 7,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Resolving Person"
                    }
                  },
                  {
                    "baseField": {
                      "type": "sysdic",
                      "typeResource": "isVIP",
                      "needSave": 1,
                      "length": 20,
                      "colspan": 1,
                      "id": "b04ee91486134017ac2bf6ae04fa7e59",
                      "label": "处理是否超时",
                      "fieldName": "IsOutTime",
                      "fieldType": "SelectField",
                      "baseSchema": "HISENSE_ITSM_INCIDENT",
                      "visiable": 0,
                      "orderNum": 9,
                      "hasDeploy": 1,
                      "operate": "add",
                      "parentID": "e85fa34b67864f9bb16c2b38281d6d47",
                      "editable": 0,
                      "required": 0,
                      "labelen": "Is Processing Overtime"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "currentTask": {
        "acceptDate": 0,
        "sendDate": 0,
        "dueDate": 0,
        "defName": "HISENSE_ITSM_INCIDENT-20181106100437",
        "roleId": "Dealer",
        "roleName": "处理人",
        "flagActive": 1,
        "flagAssignType": "主办",
        "processType": "DEAL",
        "prePhaseNo": "dp_2",
        "flagDuplicated": 1,
        "flagEndDuplicated": 1,
        "flagEndPhase": 0,
        "flagPreDefined": 1,
        "baseStartDate": 1542614492,
        "flagAssign": 0,
        "flagAssist": 0,
        "flagCopy": 1,
        "flagTransfer": 0,
        "flagTurnUp": 0,
        "flagRecall": 0,
        "flagCancel": 0,
        "flagClose": 0,
        "flagTurnDown": 0,
        "flagToAssistAuditing": 0,
        "flagToAuditing": 0,
        "flagAuditingResult": 0,
        "insideFlowsCount": 0,
        "finishInsideFlowsCount": 0,
        "hastenCount": 0,
        "stProcessAction": "下一步",
        "dealTypeStr": "11",
        "id": "98e7281bab8d449281e478bafdb93422",
        "entryId": "4d48505f33ef4ac1b69390599e7478bf",
        "topEntryId": "4d48505f33ef4ac1b69390599e7478bf",
        "actorType": "GROUP",
        "stepId": "03d7ded50fc44db1a143417edd2972f4",
        "stepCode": "dp_4",
        "processState": "待处理",
        "entryState": "待处理",
        "createTime": 1542614492,
        "acceptTime": 0,
        "finishTime": 0,
        "baseCreateTime": 1542614492,
        "dealType": "ONLY",
        "serialNum": "INC201811190004",
        "taskName": "待处理：#",
        "actionName": "提交",
        "actionCode": "NEXT",
        "creator": "libing",
        "creatorName": "李冰",
        "creatorType": "USER",
        "assignGroupId": "d07219cf622c4e54af2cfdba8751fbc5",
        "assignGroup": "运维支持组",
        "assignerId": "libing",
        "assigner": "李冰",
        "assignerDepId": "dc8423bb4f7c4ff999ee76d4e505bf98",
        "assignerDep": "test-L1",
        "assignerCorpId": "dc8423bb4f7c4ff999ee76d4e505bf98",
        "assignerCorp": "test-L1",
        "assignerDnid": "002",
        "assignerDn": "test-L1",
        "dealActorID": "d07219cf622c4e54af2cfdba8751fbc5",
        "dealActorName": "运维支持组",
        "dealActorType": "GROUP",
        "baseSchema": "HISENSE_ITSM_INCIDENT",
        "baseName": "事件单",
        "baseId": "7a86027137ae416289e36044c1e92532",
        "workSheetTitle": "测试事件单弹出的确认消息的床空通知组信息设置不对",
        "stepNo": "step02"
      },
      "theme": {
        "name": "responsive",
        "type": "pc",
        "folder": "responsive",
        "labelWidth": 95,
        "mainWidth": 1000,
        "rowHeight": 30,
        "cell": 4,
      },
      "mainPage": "main",
      "defCode": "HISENSE_ITSM_INCIDENT-20181106100437",
      "baseNameen": "Incident",
      "taskID": "98e7281bab8d449281e478bafdb93422",
      "fixActionList": [
        {
          "id": "33be7c2868ed4c61b94d571fd23adfc7",
          "stepNo": "step02",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "label": "解决",
          "actionName": "DealComplete",
          "actionType": "NEXT",
          "isFree": 0,
          "hasNext": 1,
          "description": "处理",
          "isClose": 0,
          "hasDeploy": 0,
          "operate": "add",
          "labelen": "Resolve"
        },
        {
          "id": "33be7c2868ed4c61b94d571fd23adfc7",
          "stepNo": "step02",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "label": "受理",
          "actionName": "shouli",
          "actionType": "ACCEPT",
          "isFree": 0,
          "hasNext": 1,
          "description": "受理",
          "isClose": 0,
          "hasDeploy": 0,
          "operate": "add",
          "labelen": "shouli"
        },
        {
          "id": "a17e147bb4ea479a8073cca181334c4b",
          "stepNo": "step02",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "label": "转派",
          "actionName": "ToReNext",
          "actionType": "RENEXT",
          "isFree": 0,
          "hasNext": 1,
          "description": "转派",
          "isClose": 1,
          "hasDeploy": 0,
          "operate": "add",
          "labelen": "Assign"
        },
        {
          "id": "816538c922fa4fffb663ededd1f11cad",
          "stepNo": "step02",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "label": "创建问题",
          "actionName": "CreateQuestion01",
          "actionType": "CreateQuestion",
          "isFree": 0,
          "hasNext": 0,
          "description": "创建问题",
          "isClose": 1,
          "hasDeploy": 0,
          "operate": "add",
          "labelen": "Create Problem"
        },
        {
          "id": "55c84980feab41e796d64ac93cc87451",
          "stepNo": "step02",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "label": "创建知识",
          "actionName": "CreateKM01",
          "actionType": "CreateKM",
          "isFree": 0,
          "hasNext": 0,
          "description": "创建经验",
          "isClose": 1,
          "hasDeploy": 0,
          "operate": "add",
          "labelen": "Create Knowledge"
        }
      ],
      "attachmentGroupId": "4292f4cc3d634e54b0e415331848fe09",
      "formData": {
        "BASENAME": "事件单",
        "BASECATAGORYID": "133482475661385",
        "Urgency": "低",
        "DealTime": "0",
        "EmergencyDegree": "一般",
        "BASECREATORCONNECTWAY": "",
        "BASESN": "INC201811190004",
        "BASEACCEPTDATE": "0",
        "ContactTel": "",
        "BASEENTRYID": "4d48505f33ef4ac1b69390599e7478bf",
        "ContactDepartment": "test-L1",
        "BASECREATORDEP": "test-L1",
        "BASECREATORCORP": "test-L1",
        "BASESCHEMA": "HISENSE_ITSM_INCIDENT",
        "BASEISTRUECLOSE": "",
        "ContactPhone": "13661186406",
        "Nature": "故障申告",
        "Source": "Web开单",
        "BASECATAGORYNAME": "",
        "BASECREATORDNID": "002",
        "ContactFullName": "李冰",
        "BASECREATORFULLNAME": "李冰",
        "BASEISARCHIVE": "",
        "EventClassify": "",
        "BASECREATORLOGINNAME": "libing",
        "EventDealer": "",
        EventReson: '<p>sdfffs</p>',
        "BASEID": "7a86027137ae416289e36044c1e92532",
        "BASESENDDATE": "0",
        "FaultManufacturers": "",
        "isFocus": "false",
        "IsVIP": "否",
        "BASECREATORDEPID": "dc8423bb4f7c4ff999ee76d4e505bf98",
        "SendTurn": "",
        "BASEFINISHDATE": "0",
        "Reach": "个人",
        "BaseSummary": "测试事件单弹出的确认消息的床空通知组信息设置不对",
        "FinishedTime": "",
        "BASECREATORDN": "test-L1",
        "HappenTime": "1542614458",
        "ContactMail": "libing2@ultrapower.com.cn",
        "BASEWORKFLOWFLAG": "1",
        "BASETPLID": "HISENSE_ITSM_INCIDENT-20181106100437",
        "IsRespondOutTime": "否",
        "Description": "<p>纯纯粹粹次</p>",
        "ContactLoginName": "libing",
        "Attachments": "",
        "BASECREATORCORPID": "dc8423bb4f7c4ff999ee76d4e505bf98",
        "Priority": "P4",
        "starLevel": "",
        "ReOpenDesc": "",
        "Dealer": "",
        "IsOutTime": "否",
        "businessSystem": "ff8080816710a77501671128d4860098",
        "BASESTATUS": "待处理",
        "InterruptTime": "1",
        "BASECREATEDATE": "1542614492",
        "BASECLOSEDATE": "0"
      },
      "baseSchema": "HISENSE_ITSM_INCIDENT",
      "layoutJSON": "[{\"childNameArray\":[],\"fieldName\":\"FaultManufacturers\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"BaseSummary\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactFullName\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactMail\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactPhone\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactLoginName\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"EventDealer\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactTel\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"ContactDepartment\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"Dealer\",\"parentName\":\"P_AcceptInfo\"},{\"childNameArray\":[],\"fieldName\":\"HappenTime\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"DealTime\",\"parentName\":\"P_AcceptInfo\"},{\"childNameArray\":[],\"fieldName\":\"FinishedTime\",\"parentName\":\"\"},{\"childNameArray\":[],\"fieldName\":\"DealInfo\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"Description\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"EventReson\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"Attachments\",\"parentName\":\"P_AttachInfo\"},{\"childNameArray\":[],\"fieldName\":\"EmergencyDegree\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"InterruptTime\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"Nature\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"businessSystem\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"IsRespondOutTime\",\"parentName\":\"P_AcceptInfo\"},{\"childNameArray\":[],\"fieldName\":\"Reach\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"IsVIP\",\"parentName\":\"P_ContactInfo\"},{\"childNameArray\":[],\"fieldName\":\"EndCode\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"RepeatEvent\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"Priority\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"EventClassify\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"Urgency\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"Source\",\"parentName\":\"P_BaseInfo\"},{\"childNameArray\":[],\"fieldName\":\"IsOutTime\",\"parentName\":\"P_DealInfo\"},{\"childNameArray\":[],\"fieldName\":\"P_DealInfo\",\"parentName\":\"PG_Main\"},{\"childNameArray\":[],\"fieldName\":\"P_BaseInfo\",\"parentName\":\"PG_Main\"},{\"childNameArray\":[\"P_DealInfo\",\"P_BaseInfo\",\"P_ContactInfo\",\"P_AcceptInfo\",\"P_AttachInfo\"],\"fieldName\":\"PG_Main\",\"parentName\":\"main\"},{\"childNameArray\":[],\"fieldName\":\"P_ContactInfo\",\"parentName\":\"PG_Main\"},{\"childNameArray\":[],\"fieldName\":\"P_AcceptInfo\",\"parentName\":\"PG_Main\"},{\"childNameArray\":[],\"fieldName\":\"P_AttachInfo\",\"parentName\":\"PG_Main\"}]",
      "freeActionList": [],
      "baseName": "事件单",
      "baseID": "7a86027137ae416289e36044c1e92532",
      "flagActive": 1,
      "editType": "MODIFY"
    },
    "flag": true,
    "msg": ""
  }
  return Mock.mock(res)
}
Mock.mock(new RegExp('^' + urls['createOrder']), 'post', createOrder)

// 根据id查找组
function queryOriAndPerson(o) {
  let id = JSON.parse(o.body).id
  console.log('req: ', o)

    return Mock.mock({
      "flag": true,
      "leaf|1": [true, false],
      "result": [
        {
          "id": "11111",
          "text": "@cword(3, 7)",
          "deptype": "1",
          "parentid": "0",
          depname: '项目管理与实施部',
          "type": "D",
          loginname: 'root',
          'isChildren': true
        },
        {
          "id": "U_7d7e6052f9314f66987d6b9b0c661df1-T1",
          "loginname": "T1",
          "text": "T1",
          "type": "U",
          "groups": [
            {
              "groupId": "D_b69db8881ba44524972d2e61d9c0a854",
              "groupName": "家电集团支持组"
            },
            {
              "groupId": "D_6753aa1a241c858a59333ba4048eeb28",
              "groupName": "项目管理与实施部"
            }
          ],
          "depname": "项目管理与实施部"
        },
        {
          "id": "22222",
          "text": "信息科技公司",
          "deptype": "1",
          "parentid": "0",
          depname: '运维部',
          "type": "D",
          loginname: 'root',
          'isChildren': true
        },
        {
          "id": "33333",
          "text": "测试公司",
          "deptype": "1",
          "parentid": "0",
          depname: '研发部',
          "type": "D",
          loginname: 'root',
          'isChildren': false
        },
        {
          "id": "44444",
          "text": "北京zm总部",
          "deptype": "1",
          "parentid": "0",
          depname: '研发部',
          "type": "D",
          loginname: 'root',
          'isChildren': false
        },
        {
          "id": "55555",
          "text": "XXX集团有限公司",
          "deptype": "1",
          "parentid": "0",
          depname: '销售部',
          "type": "D",
          loginname: 'root',
          'isChildren': true
        },
        {
          "id": "66666",
          "text": "正启测试3",
          "deptype": "1",
          depname: '搞笑艺人',
          "parentid": "0",
          "type": "D",
          loginname: 'dsaf',
          'isChildren': false
        },
        {
          "id": "77777",
          "text": "正启测试2",
          "deptype": "1",
          depname: '搞笑艺人',
          "parentid": "0",
          "type": "D",
          loginname: 'dsf',
          'isChildren': false
        },
        {
          "id": "88888",
          "text": "正启测试4",
          "deptype": "1",
          "parentid": "0",
          depname: '歌手',
          "type": "D",
          loginname: 'root',
          'isChildren': false
        },
        {
          "id": "99999",
          "text": "应用系统",
          "deptype": "1",
          "parentid": "0",
          "type": "D",
          depname: '项目管理与实施部',
          loginname: 'root',
          'isChildren': false
        },
        {
          "id": "00000",
          "text": "总公司",
          "deptype": "1",
          "parentid": "0",
          "type": "D",
          depname: '研发部',
          loginname: 'root',
          'isChildren': true
        }
      ]
    })
}
Mock.mock(new RegExp('^' + urls['queryOriAndPerson']), 'post', queryOriAndPerson)

// 根据组id查找所属工程师
function queryPersonOfOri(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "result|7-13": [
      {
        "prefix": "C",
        "type": "U",
        "id": "@id",
        "loginname": "zhachuanzhe",
        "fullname": "@cname"
      }
    ]
  })
}
Mock.mock(new RegExp('^' + urls['queryPersonOfOri']), 'post', queryPersonOfOri)

// 提交表单
function commitOrder(o) {
  console.log('req: ', JSON.parse(o.body))
  return Mock.mock({
    "flag": true,
    "result": {
      "after": "close",
      "baseid": "6aef687c09d64a61b93b06565820ed27",
      "text": "通知动作：提交一线；<br>通知对象：root；<br>通知内容：root提交一线工单；<br>工单类别：事件单；<br>工单主题：；<br>工单流水号：INC2018083000000005；<br><br>",
      "texten": 'action: o, yeah. oh, my god.',
      "taskid": ""
    }
  })
}
Mock.mock(new RegExp('^' + urls['commitOrder']), 'post', commitOrder)

// 获取提交表单
function commitOrderAndNextAction(o) {
  console.log('req: ', o)
  let res = {}
  if (JSON.parse(o.body).actionID === 'Submit') {
    res = {
      "result": {
        "ReAuditUser": {
          "id": "cb5268133c064ab6b8dc8712160f9042",
          "baseSchema": "ITSM_REQUEST",
          "actionType": "AUDITINGPASS",
          "baseStatus": "审批中",
          "actionID": "44d547cece5748b8b1d17190fda1d9e2",
          "fieldID": "c92f748f5e1d433cb01f91091fdb7090",
          "visiable": 1,
          "required": 0,
          "fieldType": "AssignTreeField",
          "baseField": {
            "singleSelect": 1,
            "rowspan": 1,
            "colspan": 2,
            "action": "REAUDIT",
            "next": "1",
            "showStyle": "simple",
            "id": "c92f748f5e1d433cb01f91091fdb7090",
            "label": "审批人",
            labelen: 'shenpiren',
            "fieldName": "ReAuditUser",
            "fieldType": "AssignTreeField",
            "baseSchema": "ITSM_REQUEST",
            "visiable": 3,
            "orderNum": 2,
            "hasDeploy": 1,
            required: 1,
            "operate": "add",
            "parentID": "action"
          },
          "readonly": 0
        },
        "CheckAuditInfo": {
          "id": "5c9512cd1edf47bd90c0eeae0ef04e99",
          "baseSchema": "ITSM_REQUEST",
          "actionType": "AUDITINGPASS",
          "baseStatus": "审批中",
          "actionID": "44d547cece5748b8b1d17190fda1d9e2",
          "fieldID": "f3bd6d9709034da1bc3e79096ae5f722",
          "visiable": 1,
          "required": 0,
          "fieldType": "CharacterField",
          "baseField": {
            "rowspan": 6,
            "isClob": 0,
            labelen: 'shenpiyijian',
            "needSave": 1,
            "length": 1000,
            "colspan": 4,
            "id": "f3bd6d9709034da1bc3e79096ae5f722",
            "label": "审批意见",
            "fieldName": "CheckAuditInfo",
            "fieldType": "CharacterField",
            "baseSchema": "ITSM_REQUEST",
            "visiable": 3,
            "orderNum": 14,
            "hasDeploy": 1,
            required: 1,
            "operate": "add",
            "parentID": "action"
          },
          "readonly": 0
        }
      },
      "flag": true
    }
  } else {
    res = {"result":{"Dealer":{"id":"eed1a12352e147d3b45ccae1c5ca3a85","baseSchema":"ITSM_TASK","stepNo":"step01","actionName":"SubmitTask","fieldID":"d6f39a7bb45e4fd89a1bca433725cf67","visiable":1,"required":1,"fieldType":"AssignTreeField","baseField":{"singleSelect":1,"rowspan":1,"colspan":1,"next":"1","id":"d6f39a7bb45e4fd89a1bca433725cf67","label":"处理人","fieldName":"Dealer","fieldType":"AssignTreeField","baseSchema":"ITSM_TASK","visiable":3,"orderNum":1,"hasDeploy":1,required: 1, "operate":"add","parentID":"action"},"readonly":0}},"flag":true}
  }
  return Mock.mock(res)
}
Mock.mock(new RegExp('^' + urls['commitOrderAndNextAction']), 'post', commitOrderAndNextAction)

// 获取评论
function fetchComment(o) {
  console.log('req: ', o)
  return Mock.mock({
    "result": [
      {
        "commentId": "10025",
        "baseSchema": "ITSM_REQUEST",
        "baseId": "fbf9f75865484f838be40e72c3227503",
        "commentDesc": "测试1",
        "commentUser": "超级管理员",
        "commentLoginName": "root",
        "createDate": "2018-09-12 16:26:49.0",
        "doneDate": "2018-09-12 16:26:49.0",
        "loseDate": "2099-12-31 00:00:00.0",
        "state": "U"
      },
      {
        "commentId": "10025",
        "baseSchema": "ITSM_REQUEST",
        "baseId": "fbf9f75865484f838be40e72c3227503",
        "commentDesc": "测试2",
        "commentUser": "超级管理员",
        "commentLoginName": "root",
        "createDate": "2018-09-12 16:26:49.0",
        "doneDate": "2018-09-12 16:26:49.0",
        "loseDate": "2099-12-31 00:00:00.0",
        "state": "U"
      },
      {
        "commentId": "10025",
        "baseSchema": "ITSM_REQUEST",
        "baseId": "fbf9f75865484f838be40e72c3227503",
        "commentDesc": "测试3",
        "commentUser": "超级管理员",
        "commentLoginName": "root",
        "createDate": "2018-09-12 16:26:49.0",
        "doneDate": "2018-09-12 16:26:49.0",
        "loseDate": "2099-12-31 00:00:00.0",
        "state": "U"
      }
    ],
    "flag": true
  })
}
Mock.mock(new RegExp('^' + urls['fetchComment']), 'post', fetchComment)

// 根据关键字查询知识库
function queryKmList(o) {
  console.log('req: ', o)
  return Mock.mock(
    Math.random() > 0.5
      ? {
        'RESULT': [
          {
            "attachmentContents": [
              "XXX集团有限公司信息化服务平台项目—事件管理<b><font color=\"#FF0000\">流程</font></b>设计方案文档编号：事件管理<b><font color=\"#FF0000\">流程</font></b>设计方案XXX集团有限公司信息化服务平台项目文档信息文档呈交版本历史版权声明本文件中出现的任何文字叙述、文档格式、插图、照片、方法、过程等内容，除另有特别注明，均为保密信息。任何个人、机构未经XXX集团有限公司与神州泰岳软件股份有限公司的书面授权许可，不得复制、引用或传播本文件的任何片断，无论是通过电子形式或非电子形式",
              null,
              null,
              null,
              null
            ],
            "attachmentName": [
              "03 事件管理<b><font color=\"#FF0000\">流程</font></b>设计说明书V1.5.docx",
              null,
              null,
              null,
              null
            ],
            "contents": " 内容简介: ",
            "contentsLogicStyle": "",
            "contentsLogicType": "",
            "createDate": "2018-10-05 13:44:30",
            "creatorName": "超级管员",
            "creatorNameLogicStyle": "",
            "creatorNameLogicType": "",
            "creatorUnit": "266462",
            "creatorUnitLogicStyle": "",
            "creatorUnitLogicType": "",
            "fileURL": "",
            "kmDealtime": "",
            "kmName": "03 事件管理流程设计说明书V1.5",
            "kmPriority": "03 事件管理流程设计说明书V1.5",
            "kmSN": "1538718270344",
            "kmStatus": "发布",
            "kmSummary": "2099-12-31",
            "kmUrl": "工单URL",
            "kmUrlName": "03 事件管理<b><font color=\"#FF0000\" style=\"font-size:14px\">流程</font></b>设计说明书V1.5",
            "lastmodified": "20181005 01:43:59",
            "path": "",
            "searchType": "1",
            "sid": "",
            "totalNum": 0,
            "userid": "",
            "writer": "",
            "writerUnit": ""
          },
          {
            "attachmentContents": [
              "XXX集团信息化服务平台项目 — 重大事件<b><font color=\"#FF0000\">流程</font></b>设计方案重大事件<b><font color=\"#FF0000\">流程</font></b>设计说明书XXX集团信息化服务平台建设项目文档信息文档呈交版本历史版权声明本文件中出现的任何文字叙述、文档格式、插图、照片、方法、过程等内容，除另有特别注明，均为保密信息。任何个人、机构未经文档被呈交方与北京神州泰岳软件股份有限公司的书面授权许可，不得复制、引用或传播本文件的任何片断，无论是通过电子形式或非电子形式",
              null,
              null,
              null,
              null
            ],
            "attachmentName": [
              "03-1重大事件管理<b><font color=\"#FF0000\">流程</font></b>设计V1.3.docx",
              null,
              null,
              null,
              null
            ],
            "contents": " 内容简介: ",
            "contentsLogicStyle": "",
            "contentsLogicType": "",
            "createDate": "2018-10-05 14:42:28",
            "creatorName": "超级管理员",
            "creatorNameLogicStyle": "",
            "creatorNameLogicType": "",
            "creatorUnit": "266462",
            "creatorUnitLogicStyle": "",
            "creatorUnitLogicType": "",
            "fileURL": "",
            "kmDealtime": "",
            "kmName": "03-1重大事件管理流程设计V1.3",
            "kmPriority": "03-1重大事件管理流程设计V1.3",
            "kmSN": "1538721748239",
            "kmStatus": "发布",
            "kmSummary": "2099-12-31",
            "kmUrl": "工单URL",
            "kmUrlName": "03-1重大事件管理<b><font color=\"#FF0000\" style=\"font-size:14px\">流程</font></b>设计V1.3",
            "lastmodified": "20181005 02:42:13",
            "path": "",
            "searchType": "1",
            "sid": "",
            "totalNum": 0,
            "userid": "",
            "writer": "",
            "writerUnit": ""
          },
          {
            "attachmentContents": [
              null,
              null,
              null,
              null,
              null
            ],
            "attachmentName": [
              "服务请求<b><font color=\"#FF0000\">流程</font></b>优化建议0912.pptx",
              null,
              null,
              null,
              null
            ],
            "contents": " 内容简介: ",
            "contentsLogicStyle": "",
            "contentsLogicType": "",
            "createDate": "2018-10-05 13:24:17",
            "creatorName": "超级管理员",
            "creatorNameLogicStyle": "",
            "creatorNameLogicType": "",
            "creatorUnit": "266462",
            "creatorUnitLogicStyle": "",
            "creatorUnitLogicType": "",
            "fileURL": "",
            "kmDealtime": "",
            "kmName": "服务请求流程优化建议0912",
            "kmPriority": "服务请求流程优化建议0912",
            "kmSN": "1538717057528",
            "kmStatus": "发布",
            "kmSummary": "2099-12-31",
            "kmUrl": "工单URL",
            "kmUrlName": "服务请求<b><font color=\"#FF0000\" style=\"font-size:14px\">流程</font></b>优化建议0912",
            "lastmodified": "",
            "path": "",
            "searchType": "1",
            "sid": "",
            "totalNum": 0,
            "userid": "",
            "writer": "",
            "writerUnit": ""
          },
          {
            "attachmentContents": [
              null,
              null,
              null,
              null,
              null
            ],
            "attachmentName": [
              "神州泰岳IT运维<b><font color=\"#FF0000\">流程</font></b>管理系统解决方案20180110_1387.pptx",
              null,
              null,
              null,
              null
            ],
            "contents": " 内容简介: ",
            "contentsLogicStyle": "",
            "contentsLogicType": "",
            "createDate": "2018-10-04 22:56:40",
            "creatorName": "超级管理员",
            "creatorNameLogicStyle": "",
            "creatorNameLogicType": "",
            "creatorUnit": "266462",
            "creatorUnitLogicStyle": "",
            "creatorUnitLogicType": "",
            "fileURL": "",
            "kmDealtime": "",
            "kmName": "神州泰岳IT运维流程管理系统解决方案20180110_1387",
            "kmPriority": "神州泰岳IT运维流程管理系统解决方案20180110_1387",
            "kmSN": "1538665000145",
            "kmStatus": "发布",
            "kmSummary": "2099-12-31",
            "kmUrl": "工单URL",
            "kmUrlName": "神州泰岳IT运维<b><font color=\"#FF0000\" style=\"font-size:14px\">流程</font></b>管理系统解决方案20180110_1387",
            "lastmodified": "",
            "path": "",
            "searchType": "1",
            "sid": "",
            "totalNum": 0,
            "userid": "",
            "writer": "",
            "writerUnit": ""
          }
        ]
      }
      : {}
  )
}
Mock.mock(new RegExp('^' + urls['queryKmList']), 'post', queryKmList)

// 应用系统标识对应value
function querySystemDic(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "result": [{
      "value": "PC服务器（SPC）",
      "text": "PC服务器（SPC）",
      "dnIDs": "",
      "dns": "",
      "dnen": "SPC",
      "pid": ""
    }]
  })
}
Mock.mock(new RegExp('^' + urls['querySystemDic']), 'post', querySystemDic)

// 查询关联工单
function queryRelaOrders(o) {
  console.log('req: ', o)
  return Mock.mock(
    {
      "flag": true,
      "result": [
        {
          "baseID": "1111111",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "dealor": "asfdfsafsd",
          "createTime": "12313123",
          "baseSn": "dsfafd32234",
          "baseSummary": "我是一个被关联的工单",
          "baseStatus": "啊什么的咖啡们开始",
          "baseName": "马赛克地方煤矿"
        },
        {
          "baseID": "2222222",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "dealor": "asfdfsafsd",
          "createTime": "12313123",
          "baseSn": "dsfafd32234",
          "baseSummary": "测试工单",
          "baseStatus": "啊什么的咖啡们开始",
          "baseName": "马赛克地方煤矿"
        },
        {
          "baseID": "3333333",
          "baseSchema": "HISENSE_ITSM_INCIDENT",
          "dealor": "asfdfsafsd",
          "createTime": "12313123",
          "baseSn": "dsfafd3223334",
          "baseSummary": "美食工单",
          "baseStatus": "啊什么的咖啡们开始",
          "baseName": "马赛克地方煤矿"
        }
      ]
    }
  )
}
Mock.mock(new RegExp('^' + urls['queryRelaOrders']), 'post', queryRelaOrders)

// 添加关联工单
function relaOrder(o) {
  console.log('req: ', o)
  return Mock.mock(
    {
      "flag": true,
      "result": [],
      "msg": "工单关联成功"
    }
  )
}
Mock.mock(new RegExp('^' + urls['relaOrder']), 'post', relaOrder)

// 取消关联
function concalRelaOrder(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "result": []
  })
}
Mock.mock(new RegExp('^' + urls['concalRelaOrder']), 'post', concalRelaOrder)

/**
 * @description 根据用户登录账号获取用户信息
 */
function getUserInfoByLoginId() {
  return Mock.mock({
    "result":
    {
      "ContactFullName": "@cname",
      "ContactLoginName": "root",
      "ContactPhone": "@integer(11)",
      "ContactTel": "@integer(8)",
      "ContactCompany": "@cword(5,10)",
      "ContactDepartment": "@cword(5,10)",
      "ContactMail": "@email",
      "IsVIP|1": ['是', '否']
    },
    "flag": true
  })
}
Mock.mock(new RegExp('^' + urls['getUserInfoByLoginId']), 'post', getUserInfoByLoginId)

// 文件上传
function uploadFiles(o) {
  console.log('req: ', o);
  return Mock.mock({
    flag: true,
    msg: '上传成功',
    result: {
      "savePath": "eoms_workSheet//ITSM_REQUEST//2018-11-02",
      "attachmentId": "@id",  // --文件的唯一标识，在下载和删除时有用
      "fileFileName": "@cword(3, 7)",  // --文件名
      "remark": "",
      "attUserPid": "4cf9d617bd8943a186497b2da9d1ce7b",
      "attUser": "@cname",    // --上传人
      "attSize": "0.0KB",
      "uploadTime": "2018-11-03 19:16:28",   // --上传时间
      "fileNewName": "637942b04d91495698e051ce536c9a9c.jpg",
      "relationcode": "04bb52a426cb4c6bbb41e2322b1cadf7"
    }
  })
}
Mock.mock(new RegExp('^' + urls['uploadFiles']), 'post', uploadFiles);

// 文件列表查询
function queryFiles(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "result|1": [[], [
      {
        "savePath": "eoms_workSheet//ITSM_REQUEST//2018-11-02",
        "attachmentId": "ff80808166863df70166d2103165000e",  //--文件的唯一标识，在下载和删除时有用
        "fileFileName": "支付宝.jpg",  //--文件名
        "remark": "",
        "attUserPid": "4cf9d617bd8943a186497b2da9d1ce7b",
        "attUser": "超级管理员",    //--上传人
        "attSize": "0.0KB",
        "uploadTime": "2018-11-02 09:36:08",   //--上传时间
        "fileNewName": "637942b04d91495698e051ce536c9a9c.jpg",
        "relationcode": "04bb52a426cb4c6bbb41e2322b1cadf7"
      }
    ]],
    'total': '1'
  })
}
Mock.mock(new RegExp('^' + urls['queryFiles']), 'post', queryFiles);

// 文件删除
function deleteFiles(o) {
  console.log('req: ', o)
  return Mock.mock({
    "flag": true,
    "msg": "删除成功"
  })
}
Mock.mock(new RegExp('^' + urls['deleteFiles']), 'get', deleteFiles);