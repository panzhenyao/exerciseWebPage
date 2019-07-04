import Mock from 'mockjs'
import Api from '@/api/notice'

// 通知管理列表
let getTableList = function (option) {
  return Mock.mock({
    'data': {
      'flag': true,
      'msg': '',
      'total': Mock.mock('@natural(10,100)'),
      'lists|5': [{
        'noticeNo': '',
        'noticeTitle|+1': [
          Mock.mock('@csentence(15)'),
          Mock.mock('@csentence(15)'),
          Mock.mock('@csentence(15)'),
          Mock.mock('@csentence(15)'),
          Mock.mock('@csentence(15)')
        ],
        'creatorId': '',
        'creatorName': '@cname',
        'deptId': '@id',
        'deptName|1': ['服务部', '应用部', '运营部', '生产部'],
        'noticeCreateTime': '@date("yyyy-MM-dd")',
        'updateDate': '',
        'noticeStatus': '',
        'noticetype': '',
        'noticeStartTime': '',
        'noticeLostTime': '@date("yyyy-MM-dd")',
        'noticeContent': '@csentence',
        'basesn': ''
      }]
    }
  }).data
}
Mock.mock(new RegExp('^' + Api.getTableList), 'post', getTableList)

// 通知管理-新增（修改）通知
let addAndEdit = function (option) {
  return Mock.mock({
    'data': {
      'flag': true,
      'msg': ''
    }
  }).data
}
Mock.mock(new RegExp('^' + Api.addAndEidt), 'post', addAndEdit)
// 通知管理-新增（修改）通知
let deleteInform = function (option) {
  return Mock.mock({
    'data': {
      'flag': true,
      'msg': ''
    }
  }).data
}
Mock.mock(new RegExp('^' + Api.deleteInformList), 'get', deleteInform)

/** 服务申告 */
// 查询列表
let getLists = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'total': '@string("number", 3)',
    'lists|10': [
      {
        'servicesId': '@string("number", 6)',
        'servicesTitle': '@cword(8)',
        'servicesContent': '@cword(300)',
        'userNo': '',
        'userName': '@cname',
        'deptId': '@string("number", 6)',
        'deptName': '@cword(8)',
        'createDate': '@date',
        'updateDate': '@date',
        'loseDate': '@date',
        'state|1': ['U', 'E'],
        'telephone': '@string("number", 11)'
      }
    ]
  })
}
Mock.mock(new RegExp('^' + Api.getLists), 'post', getLists)

// 删除列表
let getDelete = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + Api.getDelete), 'get', getDelete)
