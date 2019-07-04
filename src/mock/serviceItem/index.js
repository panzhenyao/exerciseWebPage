import Mock from 'mockjs'
import Api from '@/api'
import ServiceApi from '@/api/ServicePackage'
import ServiceItemApi from '@/api/ServiceItem'

// 获取工单模型列表
let getWorkListModuleList = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'array|4': [{
        'label|+1': ['事件工单', '问题工单', '服务请求工单', '变更工单'],
        'value': '@integer'
      }]
    })
}
Mock.mock(new RegExp('^' + Api.getWorkListModuleList), 'post', getWorkListModuleList)

// 获取服务包tab页签
let getTabList = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'array|2': [{
        'id': '@id',
        'name': '@cname'
      }]
    })
}
Mock.mock(new RegExp('^' + ServiceApi.getTabList), 'post', getTabList)

let getFormData = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'data': {
        'packageName': '@cname',
        'desc': '@cparagraph(2)',
        'icon|1': [' icon-shezhi', 'icon-wangluo1', 'icon-xinfeng', 'icon-_gerenzonglan'],
        'isRecommend': false
      }
    })
}
Mock.mock(new RegExp('^' + ServiceApi.getFormData), 'post', getFormData)

// 获取table表格列表内容
let getTableData = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'data|6': [{
        'name': '@cname',
        'code': 's' + '@zip',
        'time': '@date("yyyy-MM-dd")',
        'person': '@cname',
        'status|1': ['启用', '停用'],
        'id': '@id'
      }]
    })
}
Mock.mock(new RegExp('^' + ServiceApi.getTableData), 'post', getTableData)

// 服务包表格的删除行
let delTableCol = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'data': {}
    })
}
Mock.mock(new RegExp('^' + ServiceApi.getDelCol), 'post', delTableCol)

// 获取所有服务项
let getAllServeItem = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '',
      'data|2': [{
        'disabled': false,
        'name': '@cname',
        'code': 's' + '@zip',
        'time': '@date("yyyy-MM-dd")',
        'person': '@cname',
        'status|1': ['启用', '停用'],
        'id': '@id'
      }]
    })
}
Mock.mock(new RegExp('^' + ServiceApi.getAllServeItem), 'post', getAllServeItem)

// 服务包中添加服务项
let addServeItem = function () {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + ServiceApi.addServeItem), 'post', addServeItem)

let addServePackage = function () {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + ServiceApi.addServePackage), 'post', addServePackage)

/** 服务项所有接口 */
/** 获取tab列表 */
let getServeItemList = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'data': {
      'lists|5': [{
        'id': '@id',
        'name': '@cword(4)'
      }]
    }
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.getServeItemList), 'post', getServeItemList)

/** 获取服务项表单数据 */
let getServeItemFormData = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'data': {
      'form': {
        'baseInfo': {
          'name': '@cword(4)',
          'code': '@string("number", 6)',
          'person': '@cname',
          'tel': '@string("number", 11)',
          'desc': '@cword(14)',
          'icon|1': ['icon-icon-test', 'icon-zhankai1', 'icon-mima', 'icon-shezhi', 'icon-xinfeng', 'icon-_gerenzonglan', 'icon-wangluo1'],
          'recommend|1': [false, true],
          'online|1': [false, true]
        },
        'workListModule|1': ['事件工单', '问题工单', '服务请求工单'],
        // 服务参数
        'serviceParam': {
          // 请求人
          'requestPerson': '0',
          'email': '0',
          'tel': '1',
          'desc': '1',
          'urgency': '1'
        },
        // 服务时间
        'serverTime|1': ['5*8小时工作制', '8小时工作制']
      }
    }
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.getServeItemFormData), 'post', getServeItemFormData)

/** 保存修改的服务项 */
let updateServeItem = function () {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'data': {}
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.updateServeItem), 'post', updateServeItem)

/** 删除服务项 */
let deleteServiceItem = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '删除成功',
    'data': {}
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.deleteServiceItem), 'post', deleteServiceItem)

/** 置顶服务项 */
let getTop = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '置顶成功',
    'data': {}
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.getTop), 'post', getTop)

// 获取工单模型列表
let getWorkList = function () {
  return Mock.mock({
    'flag': true,
    'msg': '置顶成功',
    'data': {
      'list': [
        {
          'id': '01',
          'label': '事件工单',
          'detail': [
            {'id': '000', 'name': '工单标题', 'checked': false},
            {'id': '111', 'name': '优先级', 'checked': false},
            {'id': '333', 'name': '工单描述', 'checked': false},
            {'id': '444', 'name': '创建时间', 'checked': false},
            {'id': '555', 'name': '报告人', 'checked': false},
            {'id': '666', 'name': '事件类型', 'checked': false}
          ]
        },
        {
          'id': '02',
          'label': '服务请求工单',
          'detail': [
            {'id': '000', 'name': '工单标题', 'checked': false},
            {'id': '111', 'name': '优先级', 'checked': false},
            {'id': '333', 'name': '工单描述', 'checked': false},
            {'id': '444', 'name': '创建时间', 'checked': false},
            {'id': '555', 'name': '报告人', 'checked': false},
            {'id': '666', 'name': '事件类型', 'checked': false}
          ]
        },
        {
          'id': '03',
          'label': '问题工单',
          'detail': [
            {'id': '000', 'name': '工单标题', 'checked': false},
            {'id': '111', 'name': '优先级', 'checked': false},
            {'id': '333', 'name': '工单描述', 'checked': false},
            {'id': '444', 'name': '创建时间', 'checked': false},
            {'id': '555', 'name': '报告人', 'checked': false},
            {'id': '777', 'name': '紧急程度', 'checked': false},
            {'id': '888', 'name': '手机号', 'checked': false},
            {'id': '999', 'name': '邮箱', 'checked': false}
          ]
        },
        {
          'id': '04',
          'label': '变更工单',
          'detail': [
            {'id': '000', 'name': '工单标题', 'checked': false},
            {'id': '111', 'name': '优先级', 'checked': false},
            {'id': '333', 'name': '工单描述', 'checked': false},
            {'id': '777', 'name': '紧急程度', 'checked': false},
            {'id': '1010', 'name': '重要程度', 'checked': false}
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.getWorkList), 'post', getWorkList)

// 获取服务时间选项
let getServiceTime = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '成功',
      'data': {
        'serverTimeList': [
          {
            'id': '000',
            'value': '5*8小时工作制'
          },
          {
            'id': '111',
            'value': '8小时工作制'
          },
          {
            'id': '222',
            'value': '7*24小时工作制'
          }
        ]
      }
    }
  )
}
Mock.mock(new RegExp('^' + ServiceItemApi.getServiceTime), 'post', getServiceTime)

// 创建服务时间
let createdServiceTime = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '新建服务时间成功',
    'data': {}
  })
}
Mock.mock(new RegExp('^' + ServiceItemApi.createdServiceTime), 'post', createdServiceTime)

// 删除服务时间选项
let deleteServiceTime = function () {
  return Mock.mock(
    {
      'flag': true,
      'msg': '删除服务时间选项成功',
      'data': {}
    }
  )
}
Mock.mock(new RegExp('^' + ServiceItemApi.deleteServiceTime), 'post', deleteServiceTime)

// 查看服务项详情
let seeServiceDetails = function () {
  return Mock.mock({
    'flag': true,
    'data': {
      'baseInfo': {
        'text1': '@cname',
        'text3': '@increment(100)',
        'text5': '@cname',
        'text7|1': ['13201233244', '18032934827'],
        'text9': '@cparagraph()',
        'text11|1': ['icon-icon-test', 'icon-zhankai1', 'icon-mima', 'icon-shezhi', 'icon-xinfeng', 'icon-_gerenzonglan', 'icon-wangluo1'],
        'text12|1': ['是', '否'],
        'text13|1': [true, false]
      },
      'workListModule|1': ['事件工单', '问题工单', '服务请求工单', '变更工单'],
      'dynamicParam': {
        'titleChecked|1': [false, true],
        'text34': '@ctitle()',
        'priorityChecked|1': [false, true],
        'text38|1': ['中', '高', '低', '极高', '极低'],
        'desChecked|1': [false, true],
        'text36': '@cparagraph(1, 3)',
        'urgencyChecked|1': [false, true],
        'text28|1': ['中', '高', '低', '极高', '极低'],
        'createdTimeChecked|1': [false, true],
        'text39': '@date(yyyy-MM-dd)',
        'personChecked|1': [false, true],
        'text41': '@cname()',
        'eventTypeChecked|1': [false, true],
        'text43|1': ['事件工单', '问题工单', '服务请求工单', '变更工单'],
        'emailChecked|1': [false, true],
        'text25': '@email()',
        'telChecked|1': [false, true],
        'text26|1': ['13920394823', '13283746573', '15384657983', '18029474364', '13627384059']

      },
      'serviceParam': {
        'text24': '必填',
        'text25': '必填',
        'text26|1': ['必填', '选填', '隐藏'],
        'text27|1': ['必填', '选填', '隐藏'],
        'text28|1': ['必填', '选填', '隐藏']
      }
    }

  })
}
Mock.mock(new RegExp('^' + ServiceApi.seeServiceDetails), 'post', seeServiceDetails)
