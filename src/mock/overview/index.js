import Mock from 'mockjs'
import api from '@/api/index'

// 个人工单总览-相应模块的数量
let personalModuleNum = function (option) {
  return Mock.mock({
    'total_num': Mock.mock('@natural(0,100)'),
    'deal_num': Mock.mock('@natural(0,100)'),
    'follow_num': Mock.mock('@natural(0,100)'),
    'audit_num': Mock.mock('@natural(0,100)'),
    'create_num': Mock.mock('@natural(0,100)'),
    'mydeal_num': Mock.mock('@natural(0,100)')
  })
}
Mock.mock(new RegExp('^' + api.personalModuleNum), 'post', personalModuleNum)

// 获取我的待处理工单--饼图数据
let myDealPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'list': [
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 6, 'PCRE': 28.57},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 7, 'PCRE': 33.33},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 3, 'PCRE': 14.29},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76}]
  })
}
Mock.mock(new RegExp('^' + api.myDealPie), 'post', myDealPie)

// 获取我的待处理工单--表格数据
let myDealTable = function (option) {
  return Mock.mock({
    'result': {
      'total': Mock.mock('@natural(10,100)'),
      'workList|5': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['@cword(3, 7)', '@cword(3, 7)', '@cword(3, 7)', '@cword(3, 7)', '@cword(3, 7)', '@cword(3, 7)'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname'
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myDealTable), 'post', myDealTable)

// 获取我创建的工单--饼图数据
let myCreatePie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'list': [
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 6, 'PCRE': 28.57},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 7, 'PCRE': 33.33},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 3, 'PCRE': 14.29},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76},
      {'NAMEEN': '@word(3, 5)', 'NAME': '@cword(3, 5)', 'VALUE': 1, 'PCRE': 4.76}]
  })
}
Mock.mock(new RegExp('^' + api.myCreatePie), 'post', myCreatePie)

// 获取我创建的工单--表格数据
let myCreateTable = function (option) {
  return Mock.mock({
    'result': {
      'total': Mock.mock('@natural(10,100)'),
      'workList|5': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单1', '服务请求1', '问题工单1', '变更工单1'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname'
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myCreateTable), 'post', myCreateTable)

// 近一周处理工单类型趋势--折线图数据
let orderTypeWeek = function (option) {
  return Mock.mock(
    {'msg': '成功',
      'result': {
        'data': {
          'ITSM_INCIDENT': [0, 0, 0, '1', '3', '3', 0],
          'ITSM_REQUEST': [0, 0, 0, '3', '7', '7', 0],
          'ITSM_RELEASE': [0, 0, 0, '5', 0, 0, 0],
          'ITSM_PROBLEM': [0, 0, 0, 0, 0, '1', 0],
          'ITSM_CHANGETASK': [0, 0, '43', 0, 0, 0, 0],
          'ITSM_CHANGE': [0, 0, 0, '4', 0, 0, 0]},
        'menusen': {
          'ITSM_PROBLEMen': 'questionnaire',
          'ITSM_CHANGETASKen': 'service',
          'ITSM_CHANGEen': 'publish',
          'ITSM_RELEASEen': 'problem',
          'ITSM_REQUESTen': 'service request',
          'ITSM_INCIDENTen': 'event'},
        'time': ['2018-09-08', '2018-09-09', '2018-09-10', '2018-09-11', '2018-09-12', '2018-09-13', '2018-09-14'],
        'menus': {
          'ITSM_INCIDENT': '事件单',
          'ITSM_REQUEST': '服务请求单',
          'ITSM_RELEASE': '发布管理单',
          'ITSM_PROBLEM': '问题单',
          'ITSM_CHANGETASK': '变更任务单',
          'ITSM_CHANGE': '变更工单'}
      },
      'flag': true}
  )
}
Mock.mock(new RegExp('^' + api.orderTypeWeek), 'post', orderTypeWeek)

// 近一周我处理的服务请求
let handleServe = function (option) {
  return Mock.mock({'result': {'time': ['2016-07-04', '2016-07-05', '2016-07-06', '2016-07-07', '2016-07-08', '2016-07-09', '2016-07-10', '2016-07-11'], 'data': ['18', 0, '6', 0, 0, 0, 0, 0]}, 'flag': true, 'msg': '成功'})
}
Mock.mock(new RegExp('^' + api.handleServe), 'post', handleServe)

// 近一周我的工作量统计
let workTotal = function (option) {
  return Mock.mock({'result': {'time': ['2016-07-04', '2016-07-05', '2016-07-06', '2016-07-07', '2016-07-08', '2016-07-09', '2016-07-10', '2016-07-11'], 'data': ['108', 0, '36', 0, 0, 0, 0, 0]}, 'flag': true, 'msg': '成功'})
}
Mock.mock(new RegExp('^' + api.workTotal), 'post', workTotal)

// 用户组工单总览-相应模块的数量
let groupModuleNum = function (option) {
  return Mock.mock({
    'result': {
      'tdAddNum': Mock.mock('@natural(0,100)'),
      'weekDealNum': Mock.mock('@natural(0,100)'),
      'DealedNum': Mock.mock('@natural(0,100)')
    }
  })
}
Mock.mock(new RegExp('^' + api.groupModuleNum), 'post', groupModuleNum)

// 待处理工单优先级分布统计--饼图数据
let groupDealPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'list': [
      {'NAMEEN': 'high', 'NAME': '高', 'VALUE': 1, 'PCRE': 20},
      {'NAMEEN': 'very low', 'NAME': '极低', 'VALUE': 1, 'PCRE': 20},
      {'NAMEEN': 'very high', 'NAME': '极高', 'VALUE': 1, 'PCRE': 20},
      {'NAMEEN': 'middle', 'NAME': '中', 'VALUE': 2, 'PCRE': 40}]
  })
}
Mock.mock(new RegExp('^' + api.groupDealPie), 'post', groupDealPie)

// 工单趋势--折线图数据
let OrderTrend = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': {
      'data': {
        'orderSum': [0, 0, 0, 4, 11, 11, 0],
        'orderFinishedSum': [0, 0, 0, 0, 0, 0, 0]},
      'menus': {
        'orderSum': '工单总数', 'orderFinishedSum': '工单完成数'},
      'menusen': {'orderSumen': 'All tickets', 'orderFinishedSumen': 'Closed tickets'},
      'time': ['2018-09-08', '2018-09-09', '2018-09-10', '2018-09-11', '2018-09-12', '2018-09-13', '2018-09-14']
    }
  })
}
Mock.mock(new RegExp('^' + api.OrderTrend), 'post', OrderTrend)

// 工单统计--折线图数据
let orderStatistical = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': {
      'data': {'tdAdd': [0, 0, 0, 4, 11, 11, 0],
        'tdFinished': [0, 0, 0, 0, 0, 0, 0],
        'dealed': ['100', '100', '100', '1.00', '1.00', '1.00', '100']},
      'menus': {'tdAdd': '新增', 'tdFinished': '完成', 'dealed': '解决率'},
      'menusen': {'tdAdden': 'New ticket', 'tdFinisheden': 'Closed ticket', 'dealeden': 'Finished rate'},
      'time': ['2018-09-08', '2018-09-09', '2018-09-10', '2018-09-11', '2018-09-12', '2018-09-13', '2018-09-14']
    }
  })
}
Mock.mock(new RegExp('^' + api.orderStatistical), 'post', orderStatistical)

// 工单模型--饼图数据
let orderModulePie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {'NAME': '测试数据1', 'NAMEEN': 'test1', 'VALUE': '14'},
      {'NAME': '测试数据2', 'NAMEEN': 'test2', 'VALUE': '6'},
      {'NAME': '测试数据3', 'NAMEEN': 'test3', 'VALUE': '1'}
    ]
  })
}
Mock.mock(new RegExp('^' + api.orderModulePie), 'post', orderModulePie)

// 来源--饼图数据
let originPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {'NAME': '测试数据1', 'NAMEEN': 'test1', 'VALUE': '14'},
      {'NAME': '测试数据2', 'NAMEEN': 'test2', 'VALUE': '6'},
      {'NAME': '测试数据3', 'NAMEEN': 'test3', 'VALUE': '1'}
    ]
  })
}
Mock.mock(new RegExp('^' + api.originPie), 'post', originPie)

// 状态--饼图数据
let staticPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {'NAME': '测试数据1', 'NAMEEN': 'test1', 'VALUE': '14'},
      {'NAME': '测试数据2', 'NAMEEN': 'test2', 'VALUE': '6'},
      {'NAME': '测试数据3', 'NAMEEN': 'test3', 'VALUE': '1'}
    ]
  })
}
Mock.mock(new RegExp('^' + api.staticPie), 'post', staticPie)

// 获取我的任务--表格数据
let myTaskTable = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'data|10': [{
        'id': '@id',
        'taskdesc': '测试',
        'checkerfullname': '@name',
        'checkerloginname': '@name',
        'effectfullname': '@name',
        'effectloginname': '@name',
        'status': '0',
        'baseid': '@id',
        'createtime': Mock.mock('@date("yyyy-MM-dd")')
      }]
    },
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.myTaskTable), 'post', myTaskTable)

// 获取我的待办--表格数据
let myWaitToDoTable = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname',
          'priority|1': ['P1', 'P2', 'P3', 'P4'],
          'createtime': Mock.mock('@date("yyyy-MM-dd")'),
          'isFocus|1': [true, false],
          'isOrder|1': [true, false],
          'orderComments|5': [
            {
              'commentId': '@id',
              'commentDesc': '@cword(4, 30)',
              'createDate': Mock.mock('@date("yyyy-MM-dd")'),
              'commentUser': '@cname'
            }
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myWaitToDoTable), 'post', myWaitToDoTable)

// 获取待审批的--表格数据
let myWaitToApproveTable = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname',
          'priority|1': ['P1', 'P2', 'P3', 'P4'],
          'createtime': Mock.mock('@date("yyyy-MM-dd")'),
          'isFocus|1': [true, false],
          'isOrder|1': [true, false],
          'orderComments|5': [
            {
              'commentId': '@id',
              'commentDesc': '@cword(4, 30)',
              'createDate': Mock.mock('@date("yyyy-MM-dd")'),
              'commentUser': '@cname'
            }
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myWaitToApproveTable), 'post', myWaitToApproveTable)

// 获取我创建的--表格数据
let myCreateBenchTable = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname',
          'priority|1': ['P1', 'P2', 'P3', 'P4'],
          'createtime': Mock.mock('@date("yyyy-MM-dd")'),
          'isFocus|1': [true, false],
          'isOrder|1': [true, false],
          'orderComments|5': [
            {
              'commentId': '@id',
              'commentDesc': '@cword(4, 30)',
              'createDate': Mock.mock('@date("yyyy-MM-dd")'),
              'commentUser': '@cname'
            }
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myCreateBenchTable), 'post', myCreateBenchTable)

// 获取我的关注--表格数据
let myFocusTable = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname',
          'priority|1': ['P1', 'P2', 'P3', 'P4'],
          'createtime': Mock.mock('@date("yyyy-MM-dd")'),
          'isFocus|1': [true, false],
          'isOrder|1': [true, false],
          'orderComments|5': [
            {
              'commentId': '@id',
              'commentDesc': '@cword(4, 30)',
              'createDate': Mock.mock('@date("yyyy-MM-dd")'),
              'commentUser': '@cname'
            }
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.myFocusTable), 'post', myFocusTable)

// 获取所有工单--表格数据
let allOrderTable = function (option) {
  console.log('req: ', option)
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {
          'c1': '@id',
          'basesummary': '@cword(3, 7)',
          'basesn': '@id',
          'IsVIP|1': [true, false],
          'baseschema|1': ['事件工单', '服务请求', '问题工单', '变更工单'],
          'basename': '@cword(3, 7)',
          'basenameen': '@word(3, 7)',
          'creatorname': '@cname',
          'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
          'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
          'dealer': '@cname',
          'priority|1': ['P1', 'P2', 'P3', 'P4'],
          'createtime': Mock.mock('@date("yyyy-MM-dd")'),
          'isFocus|1': [true, false],
          'isOrder|1': [true, false],
          'orderComments|5': [
            {
              'commentId': '@id',
              'commentDesc': '@cword(4, 30)',
              'createDate': Mock.mock('@date("yyyy-MM-dd")'),
              'commentUser': '@cname'
            }
          ]
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.allOrderTable), 'post', allOrderTable)

// 获取“处理人”、“发起人”
let getPeopleData = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '张三', 'label': '张三'},
      {'value': '李四', 'label': '李四'},
      {'value': '王二', 'label': '王二'},
      {'value': '麻子', 'label': '麻子'},
      {'value': '张一', 'label': '张一'},
      {'value': '勇哥哥', 'label': '勇哥哥'},
      {'value': '张二', 'label': '张二'}
    ]
  })
}
Mock.mock(new RegExp('^' + api.getPeopleData), 'post', getPeopleData)

// 优先级
let getPriorityDic = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '数据一', 'text': '数据一'},
      {'value': '数据二', 'text': '数据二'},
      {'value': '数据三', 'text': '数据三'}
    ]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getPriorityDic), 'post', getPriorityDic)

// 事件来源
let getEventSourceDic = function (option) {
  return Mock.mock({
    'resultList': [{'dnIDs': 'Web开单', 'dnen': 'Portal', 'dns': 'Web开单', 'key': '', 'pid': 'ff808081663fede601664390801e0007', 'remark': '', 'subMenus': [], 'text': 'Web开单', 'type': '', 'value': 'Web开单'}, {'dnIDs': '邮件', 'dnen': 'E-mail', 'dns': '邮件', 'key': '', 'pid': 'ff808081663fede60166438f9ae70003', 'remark': '', 'subMenus': [], 'text': '邮件', 'type': '', 'value': '邮件'}, {'dnIDs': '信鸿', 'dnen': 'HiChat', 'dns': '信鸿', 'key': '', 'pid': 'ff808081663fede60166438fd3810004', 'remark': '', 'subMenus': [], 'text': '信鸿', 'type': '', 'value': '信鸿'}, {'dnIDs': '信步圈', 'dnen': 'HiChat Weibo', 'dns': '信步圈', 'key': '', 'pid': 'ff808081663fede6016643900fd20005', 'remark': '', 'subMenus': [], 'text': '信步圈', 'type': '', 'value': '信步圈'}, {'dnIDs': '外部系统', 'dnen': 'External System', 'dns': '外部系统', 'key': '', 'pid': 'ff808081663fede6016643904a850006', 'remark': '', 'subMenus': [], 'text': '外部系统', 'type': '', 'value': '外部系统'}, {'dnIDs': '电话', 'dnen': 'Phone', 'dns': '电话', 'key': '', 'pid': 'ff808081663fede60166438f5c600002', 'remark': '', 'subMenus': [], 'text': '电话', 'type': '', 'value': '电话'}, {'dnIDs': '监控', 'dnen': 'Monitor', 'dns': '监控', 'key': '', 'pid': 'ff808081663fede601664390bb6a0008', 'remark': '', 'subMenus': [], 'text': '监控', 'type': '', 'value': '监控'}]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getEventSourceDic), 'post', getEventSourceDic)

// 工单来源
let getOriginDic = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '数据一', 'text': '数据一'},
      {'value': '数据二', 'text': '数据二'},
      {'value': '数据三', 'text': '数据三'}
    ]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getOriginDic), 'post', getOriginDic)

// 工单状态
let getStatusDic = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '数据一', 'text': '数据一'},
      {'value': '数据二', 'text': '数据二'},
      {'value': '数据三', 'text': '数据三'}
    ]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getStatusDic), 'post', getStatusDic)

// 模型
let getOrderTypeDic = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '数据一', 'text': '数据一'},
      {'value': '数据二', 'text': '数据二'},
      {'value': '数据三', 'text': '数据三'}
    ]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getOrderTypeDic), 'post', getOrderTypeDic)

// 逾期状态
let getTimeLimitDic = function (option) {
  return Mock.mock({
    'resultList': [
      {'value': '数据一', 'text': '数据一'},
      {'value': '数据二', 'text': '数据二'},
      {'value': '数据三', 'text': '数据三'}
    ]
  }).resultList
}
Mock.mock(new RegExp('^' + api.getTimeLimitDic), 'post', getTimeLimitDic)

// 工单模型获取
let getModelData = function (option) {
  return Mock.mock({
    'data': [
      {'name': '事件工单', 'baseschema': '@id'},
      {'name': '服务请求', 'baseschema': '@id'},
      {'name': '问题工单', 'baseschema': '@id'},
      {'name': '我是动态请求工单模型示例哦～', 'baseschema': '@id'}
    ]
  })
}
Mock.mock(new RegExp('^' + api.getModelData), 'post', getModelData)

// 关注/取消关注
let makeFocusStatus = function (option) {
  return Mock.mock({
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.makeFocusStatus), 'post', makeFocusStatus)

// 接单
let makeOrderStatus = function (option) {
  return Mock.mock({
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.makeOrderStatus), 'post', makeOrderStatus)

// 删除评论
let deleteComment = function (option) {
  return Mock.mock({
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.deleteComment), 'post', deleteComment)

// 添加评论
let addComment = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'commentId': '@id',
      'commentDesc': '@cword(4, 30)',
      'createDate': Mock.mock('@date("yyyy-MM-dd")'),
      'commentUser': '@cname'
    }
  })
}
Mock.mock(new RegExp('^' + api.addComment), 'post', addComment)

/**
 * 统计分析模块假数据
 */
// 获取驾驶舱响应模块数量
let analysisModuleNum = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'deal_num': '@natural(0,100)',
      'create_num': '@natural(0,100)',
      'done_num': '@natural(0,100)'
    },
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + api.analysisModuleNum), 'post', analysisModuleNum)

// 获取事件单类型占比饼图数据
let myAnalysisPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      }
    ]
  })
}
Mock.mock(new RegExp('^' + api.myAnalysisPie), 'post', myAnalysisPie)

// 当日新增分类趋势--折线图数据
let department = function (option) {
  return Mock.mock({
    'result': {
      'menus': {
        'HISENSE_ITSM_REQUEST': '服务请求单',
        'HISENSE_ITSM_PROBLEM': '问题单',
        'ITSM_CHANGE': '变更工单',
        'HISENSE_ITSM_INCIDENT': '事件单',
        'ITSM_TASK': '任务单'
      },
      'pcre': {
        'HISENSE_ITSM_REQUEST': '10%',
        'HISENSE_ITSM_PROBLEM': '14%',
        'ITSM_CHANGE': '45%',
        'HISENSE_ITSM_INCIDENT': '33%',
        'ITSM_TASK': '10%'
      },
      'time': [
        '2018-10-04',
        '2018-10-05',
        '2018-10-06',
        '2018-10-07',
        '2018-10-08',
        '2018-10-09',
        '2018-10-10'
      ],
      'menusen': {
        'HISENSE_ITSM_REQUESTen': 'Service Request',
        'ITSM_TASKen': 'Task',
        'ITSM_CHANGEen': 'change',
        'HISENSE_ITSM_PROBLEMen': 'Problem',
        'HISENSE_ITSM_INCIDENTen': 'Incident'
      },
      'data': {
        'HISENSE_ITSM_REQUEST': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_PROBLEM': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'ITSM_CHANGE': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_INCIDENT': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'ITSM_TASK': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ]
      }
    },
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + api.department), 'post', department)

// 当日已完成占比--仪表盘数据
let donePie = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'done_num': '@natural(0,100)',
      'deal_num': '@natural(0,100)',
      'done_pcre': '',
      'deal_pcre': ''
    },
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + api.donePie), 'post', donePie)

//   当日各处理组占比--饼图数据
let handlePie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      }
    ]
  })
}
Mock.mock(new RegExp('^' + api.handlePie), 'post', handlePie)

// 日处理趋势--折线图数据
let handleDepartment = function (option) {
  return Mock.mock({
    'result': {
      'menus': {
        'HISENSE_ITSM_REQUEST': '服务请求单',
        'HISENSE_ITSM_PROBLEM': '问题单',
        'ITSM_CHANGE': '变更工单',
        'HISENSE_ITSM_INCIDENT': '事件单',
        'ITSM_TASK': '任务单'
      },
      'pcre': {
        'HISENSE_ITSM_REQUEST': '10%',
        'HISENSE_ITSM_PROBLEM': '14%',
        'ITSM_CHANGE': '45%',
        'HISENSE_ITSM_INCIDENT': '33%',
        'ITSM_TASK': '10%'
      },
      'time': [
        '2018-10-04',
        '2018-10-05',
        '2018-10-06',
        '2018-10-07',
        '2018-10-08',
        '2018-10-09',
        '2018-10-10'
      ],
      'menusen': {
        'HISENSE_ITSM_REQUESTen': 'Service Request',
        'ITSM_TASKen': 'Task',
        'ITSM_CHANGEen': 'change',
        'HISENSE_ITSM_PROBLEMen': 'Problem',
        'HISENSE_ITSM_INCIDENTen': 'Incident'
      },
      'data': {
        'HISENSE_ITSM_REQUEST': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_PROBLEM': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'ITSM_CHANGE': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_INCIDENT': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'ITSM_TASK': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ]
      }
    },
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + api.handleDepartment), 'post', handleDepartment)

//  今日各处理组事件单占比--饼图数据
let departmentPie = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': [
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      },
      {
        'NAME': '@cword(4)',
        'NAMEEN': '@string(4)',
        'VALUE': '@natural(0,100)',
        'pcre': ''
      }
    ]
  })
}
Mock.mock(new RegExp('^' + api.departmentPie), 'post', departmentPie)

//  今日工各部门工单量--饼图数据
let departmentBar = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': {
      'data': {
        'HISENSE_ITSM_REQUEST': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_PROBLEM': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ],
        'HISENSE_ITSM_INCIDENT': [
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)',
          '@natural(0,100)'
        ]
      },
      'menus': {
        'HISENSE_ITSM_REQUEST': '服务请求单',
        'HISENSE_ITSM_PROBLEM': '问题单',
        'HISENSE_ITSM_INCIDENT': '事件单'
      },
      'menusen': {
        'HISENSE_ITSM_REQUEST': 'New ticket',
        'HISENSE_ITSM_PROBLEM': 'Closed ticket',
        'HISENSE_ITSM_INCIDENT': 'Finished rate'
      },
      'deptName': [
        '开发一部',
        '开发二部',
        '开发三部',
        '开发四部',
        '开发五部',
        '开发六部',
        '开发七部',
        '开发八部',
        '开发九部',
        '开发十部'
      ],
      'deptNameen': [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
      ]
    }
  })
}
Mock.mock(new RegExp('^' + api.departmentBar + '$'), 'post', departmentBar)
