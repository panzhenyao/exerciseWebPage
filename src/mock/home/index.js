import Mock from 'mockjs'
import home from '@/api/home'
import api from '@/api/index'

// 获取工单
let handleHomeOrder = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'total': 100,
      'workList|5': [{
        'c1': '@id',
        'basesummary': '@cword(10, 15)',
        'basesn': '@id',
        'IsVIP|1': [true, false],
        'baseschema|1': ['HISENSE_ITSM_INCIDENT', 'HISENSE_ITSM_PROBLEM', 'ITSM_REQUEST'],
        'basename': '@cword(3, 7)',
        'basenameen': '@word(3, 7)',
        'creatorname': '@cname',
        'basestatus|1': ['待处理', '处理中', '已完成', '已关闭', '挂起', '已废除'],
        'basestatusen|1': ['@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)', '@word(3, 7)'],
        'dealer': '@cname',
        'priority|1': ['P1', 'P2', 'P3', 'P4'],
        'priorityen|1': ['P1', 'P2', 'P3', 'P4'],
        'createtime': Mock.mock('@date("yyyy-MM-dd")') + Mock.mock('@time'),
        'isFocus|1': [true, false],
        'isOrder|1': [true, false],
        'orderComments|5': [{
          'commentId': '@id',
          'commentDesc': '@cword(4, 30)',
          'createDate': Mock.mock('@date("yyyy-MM-dd")'),
          'commentUser': '@cname'
        }]
      }]
    }
  })
}
Mock.mock(new RegExp('^' + home.handleHomeOrder), 'post', handleHomeOrder)

// 获取it服务
let getItService = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'data|4': [{
        'serviceName|+1': [
          Mock.mock('@ctitle(5)'),
          Mock.mock('@ctitle(6)'),
          Mock.mock('@ctitle(7)'),
          Mock.mock('@ctitle(8)')
        ],
        'serviceImage': 'el-icon-document',
        'serviceDesc|+1': [
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph')
        ],
        'serviceId|1-100': 100
      }],
      'total': '20'
    }
  })
}
Mock.mock(new RegExp('^' + home.getItService), 'post', getItService)

// 获取猜你喜欢
let getRecommend = function (option) {
  return Mock.mock({
    'flag': true,
    'result': {
      'data|8': [{
        'serviceName|+1': [
          Mock.mock('@ctitle(5)'),
          Mock.mock('@ctitle(6)'),
          Mock.mock('@ctitle(7)'),
          Mock.mock('@ctitle(8)'),
          Mock.mock('@ctitle(8)'),
          Mock.mock('@ctitle(8)'),
          Mock.mock('@ctitle(8)'),
          Mock.mock('@ctitle(8)')
        ],
        'serviceImage': 'el-icon-document',
        'serviceDesc|+1': [
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph'),
          Mock.mock('@cparagraph')
        ],
        'serviceId|1-100': 100
      }],
      'total': '20'
    }
  })
}
Mock.mock(new RegExp('^' + home.getRecommend), 'post', getRecommend)

// 获取跑马灯的通知
let getNotice = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '',
    'lists|5': [{
      'noticeTitle|+1': [
        Mock.mock('@csentence(30)'),
        Mock.mock('@csentence(30)'),
        Mock.mock('@csentence(30)'),
        Mock.mock('@csentence(30)'),
        Mock.mock('@csentence(30)')
      ],
      'noticeContent': [
        Mock.mock('@cparagraph(1)'),
        Mock.mock('@cparagraph(1)'),
        Mock.mock('@cparagraph(1)'),
        Mock.mock('@cparagraph(1)'),
        Mock.mock('@cparagraph(1)')
      ],
      'noticeLostTime|+1': [
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date'),
        Mock.mock('@date')
      ],
      'creatorName|+1': [
        Mock.mock('@cname()'),
        Mock.mock('@cname()'),
        Mock.mock('@cname()'),
        Mock.mock('@cname()'),
        Mock.mock('@cname()')
      ],
      'deptName|+1': [
        Mock.mock('@ctitle(30)'),
        Mock.mock('@ctitle(30)'),
        Mock.mock('@ctitle(30)'),
        Mock.mock('@ctitle(30)'),
        Mock.mock('@ctitle(30)')
      ]
    }],
    'total': '5'
  })
}
Mock.mock(new RegExp('^' + home.getNotice), 'post', getNotice)

// 获取猜你喜欢
let addService = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': ''
  })
}
Mock.mock(new RegExp('^' + home.addService), 'post', addService)

// 登出
let logout = function (option) {
  return Mock.mock({
    'flag': true,
    'isLogin': false
  })
}
Mock.mock(new RegExp('^' + home.logout), 'get', logout)

// 获取当前登录用户
let getUser = function (option) {
  return Mock.mock({
    'result': {
      'menu|2': [
        {
          'level': 1,
          'id': '402894f5295d39ec01295e5724bf0002',
          'text': '工单管理',
          'mark': 'sheet',
          'parentid': '0',
          'child': '',
          'implClassId': '',
          'userdata': {'openway': '1', 'url': 'sheet/myWaitingDealSheetQuery.action'},
          'im0': '',
          'im1': '',
          'im2': ''
        }
      ],
      'user': {
        'pid': '655d48d35d4043188e3f94e86f76604b',
        'loginName': 'root',
        'fullName': '超级管理员',
        'pwd': '5bNdbzpE6j4\u003d',
        'position': '',
        'type': '用户类型1',
        'mobile': '13910874572',
        'phone': '01058847554',
        'fax': '',
        'email': 'maozhiqian@ultrapower.com.cn',
        'image': 'default.png',
        'orderNum': '0',
        'companyId': 'ffe504943b99403eb489108ed1d24f4f',
        'companyName': 'XXX集团有限公司',
        'depId': 'ffe504943b99403eb489108ed1d24f4f',
        'depName': 'XXX集团有限公司',
        'depDns': '001',
        'depFullName': 'XXX集团有限公司',
        'groupId': '1',
        'groupName': '',
        'ptdepId': '',
        'ptdepName': '',
        'isAdmin': '0',
        'creater': '',
        'createTime': '2014-02-26 15:01:50',
        'lastModifier': '655d48d35d4043188e3f94e86f76604b',
        'lastModifyTime': '2018-09-12 17:48:14',
        'lastLoginTime': '2018-09-13 19:29:22',
        'loginDate': '2018-09-13 19:30:40',
        'skinType': 'blue',
        'childRoleIds': '',
        'managerChildRoleIds': '',
        'managerGroupId': '',
        'menuList': [
          {
            'id': 'sysBpm0111',
            'flag': true
          },
          {
            'id': 'sysBpm0110',
            'flag': true
          },
          {
            'id': 'sysBpm0100',
            'flag': true
          },
          {
            'id': 'sysBpm0101',
            'flag': true
          },
          {
            'id': 'sysBpm01011',
            'flag': true
          },
          {
            'id': 'sysBpm01012',
            'flag': true
          },
          {
            'id': 'sysBpm01013',
            'flag': true
          },
          {
            'id': 'sysBpm01014',
            'flag': true
          },
          {
            'id': 'sysBpm01015',
            'flag': true
          },
          {
            'id': 'sysBpm01016',
            'flag': true
          }, {
            'id': 'sysBpm01017',
            'flag': true
          },
          {
            'id': 'sysBpm01018',
            'flag': true
          },
          {
            'id': 'sysBpm0102',
            'flag': true
          },
          {
            'id': 'sysBpm01021',
            'flag': true
          },
          {
            'id': 'sysBpm01022',
            'flag': true
          },
          {
            'id': 'sysBpm0103',
            'flag': true
          },
          {
            'id': 'sysBpm0104',
            'flag': true
          },
          {
            'id': 'sysBpm0105',
            'flag': true
          },
          {
            'id': 'sysBpm0106',
            'flag': true
          },
          {
            'id': 'sysBpm0107',
            'flag': true
          },
          {
            'id': 'sysBpm01071',
            'flag': true
          },
          {
            'id': 'sysBpm01073',
            'flag': true
          },
          {
            'id': 'tttt',
            'flag': true
          },
          {
            'id': 'sysBpm01072',
            'flag': true
          },
          {
            'id': 'sysBpm0108',
            'flag': true
          }, {
            'id': 'sysBpm01081',
            'flag': true
          }, {
            'id': 'sysBpm0109',
            'flag': true
          }, {
            'id': 'sysBpm01091',
            'flag': true
          }, {
            'id': 'sysBpm01092',
            'flag': true
          }, {
            'id': 'sysBpm01093',
            'flag': true
          }
        ],
        'wfTypes|5': [
          {'id': '6fecde8532aa4d91bd6e45985e78c550',
            'sortId': '133482475661385',
            'code': 'ITSM_TEST_PROBLEM',
            'name': '测试问题工单',
            'entryCount': 33,
            'todayEntryCount': 1,
            'wfCountType': 'D',
            'wfType': 1,
            'wfDefaultVersion': 'ITSM_TEST_PROBLEM-20160809101640',
            'orderby': 0,
            'lastEntryTime': 1470965230,
            'baseCategoryCode': 'ITP',
            'baseCategoryIsDefaultFix': 0,
            'baseCategoryState': 1,
            'panelGroupID': '540809c648534c3891aa38e184b02a03',
            'flowType': 'JSP',
            'theme': 'responsive'
          } ],
        'agencys': [],
        'invalidTime': 0,
        'searchCondition': {},
        'rongtoken': '61odE8Y1qTwexxniRwrlsvPvY72I4IQsSuuywn3gmp0hED/0mdyQ05DSDFUI5N3xLNvH13/yvWlUSddUb62s9fMrin1PLEXZR5xlK9t65sg+eNX+4NnMkQ0sbzFTlgPETwuvCN+XXtg\u003d'
      }
    },
    'flag': true})
}
Mock.mock(new RegExp('^' + home.getUser), 'post', getUser)

// 获取知识库
let getKnowedge = function (option) {
  return Mock.mock({
    'hotlist|20': [{
      'DEPT_ID': '1',
      'allName': '各系统配置SNMP方法各系统配置SNMP方法',
      'C100001002': '各系统配置SNMP方法各系统配置SNMP方法',
      'C100001020': 5,
      'C100001001': '1538664446046',
      'C100001022': '2018-10-05 14:44:20',
      'C100001024': null,
      'LOGIN_USER': 'root',
      'ROWNUM_': 1,
      'C100001007': 27,
      'C100001025': null,
      'C100001008': 2,
      'CATEGORY_ID': '1374661642968',
      'C100001003': '超级管理员',
      'C100001004': 1538664446046,
      'C100001005': 39
    }, {
      'DEPT_ID': '1',
      'allName': '测试0001',
      'C100001002': '测试0001',
      'C100001020': 0,
      'C100001001': '1538765352818',
      'C100001022': '2018-10-06 02:49:12',
      'C100001024': null,
      'LOGIN_USER': 'root',
      'ROWNUM_': 2,
      'C100001007': 9,
      'C100001025': null,
      'C100001008': 0,
      'CATEGORY_ID': '1374662384906',
      'C100001003': '超级管理员',
      'C100001004': 1538765352818,
      'C100001005': 39
    }, {
      'DEPT_ID': '1',
      'allName': 'cecece',
      'C100001002': 'cecece',
      'C100001020': 0,
      'C100001001': '1538832029260',
      'C100001022': '2018-10-06 21:20:29',
      'C100001024': null,
      'LOGIN_USER': 'root',
      'ROWNUM_': 3,
      'C100001007': 2,
      'C100001025': null,
      'C100001008': 0,
      'CATEGORY_ID': '1374661702015',
      'C100001003': '超级管理员',
      'C100001004': 1538832029260,
      'C100001005': 39
    }],
    'morelist': [{
      'DEPT_ID': '1',
      'allName': '各系统配置SNMP方法',
      'icon_type': 'doc',
      'icon': ' title="SNMP安装配置手册_For OS_20111020.doc" class="doc icon"',
      'LOGIN_USER': 'root',
      'KNOWLEDGE_ID': null,
      'C100001002': '各系统配置SNMP方法',
      'C100001001': '1538664446046',
      'imagePath': 'olreader_images/201810/1538664446046small.jpg',
      'C100001008': 2,
      'CATEGORY_ID': '1374661642968',
      'C100001005': 39
    }, {
      'DEPT_ID': '1',
      'allName': '测试0001',
      'LOGIN_USER': 'root',
      'KNOWLEDGE_ID': null,
      'C100001002': '测试0001',
      'C100001001': '1538765352818',
      'C100001008': 0,
      'CATEGORY_ID': '1374662384906',
      'C100001005': 39
    }, {
      'DEPT_ID': '1',
      'allName': 'cecece',
      'LOGIN_USER': 'root',
      'KNOWLEDGE_ID': null,
      'C100001002': 'cecece',
      'C100001001': '1538832029260',
      'C100001008': 0,
      'CATEGORY_ID': '1374661702015',
      'C100001005': 39
    }]
  })
}
Mock.mock(new RegExp('^' + home.getKnowedge), 'post', getKnowedge)

// 获取知识库
let getProperty = function (option) {
  return Mock.mock('@url')
}
Mock.mock(new RegExp('^' + api.getProperty), 'get', getProperty)

// 顶部闹钟小图标消息通知数据获取
let getMess = function (option) {
  return Mock.mock({
    'result': {
      'total': 100,
      'workList|10': [
        {'id': '@id', 'url': '@url', 'name': '@word(10,12)'}
      ]
    },
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.getMess), 'post', getMess)
