import Mock from 'mockjs'
import Api from '@/api/statisticalAnalysis'
/* 获取部门工单量统计数据 */
let deptCountNew = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功',
    'result': {
      'data': {
        'HISENSE_ITSM_REQUEST_HAVE_DONE': [36, 17, 13, 9, 18, 8, 5],
        'HISENSE_ITSM_PROBLEM_HAVE_DONE': [34, 17, 13, 15, 24, 18, 20],
        'HISENSE_ITSM_INCIDENT_HAVE_DONE': [43, 17, 13, 21, 10, 8, 10],
        'HISENSE_ITSM_REQUEST': [70, 47, 63, 65, 30, 35, 40],
        'HISENSE_ITSM_PROBLEM': [90, 77, 33, 35, 60, 38, 40],
        'HISENSE_ITSM_INCIDENT': [100, 57, 43, 25, 40, 48, 40]

      },
      'menus': {
        'HISENSE_ITSM_REQUEST': '服务请求单未解决',
        'HISENSE_ITSM_PROBLEM': '问题单未解决',
        'HISENSE_ITSM_INCIDENT': '事件单未解决',
        'HISENSE_ITSM_REQUEST_HAVE_DONE': '服务请求单已解决',
        'HISENSE_ITSM_PROBLEM_HAVE_DONE': '问题单已解决',
        'HISENSE_ITSM_INCIDENT_HAVE_DONE': '事件单已解决'
      },
      'menusen': {
        'HISENSE_ITSM_REQUEST': 'New ticket in-process',
        'HISENSE_ITSM_PROBLEM': 'Closed ticket in-process',
        'HISENSE_ITSM_INCIDENT': 'Finished rate in-process',
        'HISENSE_ITSM_REQUEST_HAVE_DONE': 'New ticket done',
        'HISENSE_ITSM_PROBLEM_HAVE_DONE': 'Closed ticket done',
        'HISENSE_ITSM_INCIDENT_HAVE_DONE': 'Finished rate done'
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
        '开发九部'

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
        'nine'
      ]
    }
  })
}
Mock.mock(new RegExp('^' + Api.deptCountNew), 'post', deptCountNew)

/* 部门工单量统计下载 */
let exportDepCount = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + Api.exportDepCount), 'post', exportDepCount)
/* 获取KPI */
let dealKPI = function (option) {
  return Mock.mock({
    'result': {
      'dataList': [
        {
          'ID': '1111',
          'NAME': 'dsdssd',
          'EVENTOUT': 'sdsd',
          'EVENTRESOUT': 'sdsd',
          'EVENTTOTAL': 'sdsd',
          'PROENDABL': 'sdsd',
          'PROTOTAL': 'sds',
          'REQCOUNT': 'sds',
          'REQTOTAL': 'sdsd'
        }
      ],
      'total': 19
    },
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + Api.dealKPI + '$'), 'post', dealKPI)

/* 处理组按状态统计工单量 */
let getDealGroupCount = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'result': {
      'total': '125',
      'List|10': [
        {
          'deptid': '@string("number", 6)',
          'deptname': '@cword(15)',
          'deptnameen': '@word(4)',
          'done': '1',
          'close': '1',
          'event': 1,
          'problem': '20%',
          'services': '30%',
          'count': '20'
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + Api.getDealGroupCount), 'post', getDealGroupCount)

// 处理组趋势分析
let getDealGroupAnalyse = function (option) {
  return Mock.mock({
    'result': {
      'menus': {
        'HISENSE_ITSM_REQUEST': '服务请求单',
        'HISENSE_ITSM_PROBLEM': '问题单',
        'HISENSE_ITSM_INCIDENT': '事件单'
      },
      'pcre': {
        'donepcre': Mock.mock('@integer(20, 50)') + '%',
        'response': Mock.mock('@integer(10, 30)') + '%',
        'slip': Mock.mock('@integer(40, 60)') + '%',
        'request': Mock.mock('@integer(40, 60)') + '%'
      },
      'time': [
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date')
      ],
      'menusen': {
        'HISENSE_ITSM_REQUESTen': 'Service Request',
        'HISENSE_ITSM_PROBLEMen': 'Problem',
        'HISENSE_ITSM_INCIDENTen': 'Incident'
      },
      'data': {
        'HISENSE_ITSM_REQUEST': [
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)')
        ],
        'HISENSE_ITSM_PROBLEM': [
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)')
        ],
        'HISENSE_ITSM_INCIDENT': [
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)')
        ]
      }
    },
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + Api.getDealGroupAnalyse), 'post', getDealGroupAnalyse)

// SLA统计分析
let getSLAAnalyse = function (option) {
  return Mock.mock({
    'result': {
      'menus': {
        'SLA': 'SLA达标率',
        'response': '响应时长达标率',
        'dealpcre': '处理时长达标率'
      },
      'pcre': {
        'responsepcre': '10%',
        'dealpcre': '14%',
        'totalpcre': '33%',
        'responseout': '10%',
        'dealout': '14%',
        'responsedeal': '33%',
        'total': '10'
      },
      'time': [
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date')
      ],
      'menusen': {
        'SLAen': 'Service Request',
        'responseen': 'Problem',
        'dealpcreen': 'Incident'
      },
      'data': {
        'SLA': [
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)'),
          Mock.mock('@integer(60, 100)')
        ],
        'response': [
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)'),
          Mock.mock('@integer(200, 300)')
        ],
        'dealpcre': [
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)'),
          Mock.mock('@integer(50, 90)')
        ]
      }
    },
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + Api.getSLAAnalyse), 'post', getSLAAnalyse)
/* 按部门统计工单量 */
let getPersonCount = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'result': {
      'total': 18,
      'List|10': [
        {
          'userid': '@id',
          'username': '@cname',
          'response': '10%',
          'eventpcre': '16%',
          'Satisfaction': '23%',
          'problem': '1',
          'services': '34%',
          'count': 1,
          'even': '1',
          'deptid': '@id',
          'deptname': '@cword(4)'
        }
      ]
    }
  })
}
Mock.mock(new RegExp('^' + Api.getPersonCount), 'post', getPersonCount)

/* 获取部门 */
let getDept = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'deptList|5': [
      {
        'deptid': '@string("number", 6)',
        'deptname': '@cword(6)'
      }
    ]
  })
}
Mock.mock(new RegExp('^' + Api.getDept), 'post', getDept)

/* 下载按状态统计工单 */
let exportGroup = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + Api.exportGroup), 'post', exportGroup)

/* 下载部门KPI统计 */
let exportDepKPI = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + Api.exportDepKPI), 'post', exportDepKPI)

/* 下载按部门个人KPI统计 */
let exportPerson = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + Api.exportPerson), 'post', exportPerson)
