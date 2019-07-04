import Mock from 'mockjs'
import api from '@/api/index'

// 获取沟通记录数据
let getCommunicationData = function (option) {
  return Mock.mock({
    'result': [
      {
        'commentId': '10025',
        'baseSchema': 'ITSM_REQUEST',
        'baseId': 'fbf9f75865484f838be40e72c3227503',
        'commentDesc': '测试',
        'commentUser': '超级管理员',
        'commentLoginName': 'root',
        'createDate': '2018-09-12 16:26:49',
        'attachmentGroupId': '',
        'type': '',
        'taskId': '',
        'attachments': [
          {
            'savePath': 'eoms_workSheet//ITSM_REQUEST//2018-11-02',
            'attachmentId': 'ff80808166863df70166d2103165000e',
            'fileFileName': '支付宝.jpg',
            'remark': '',
            'attUserPid': '4cf9d617bd8943a186497b2da9d1ce7b',
            'attUser': '超级管理员',
            'attSize': '0.0KB',
            'uploadTime': '2018-11-02 09:36:08',
            'fileNewName': '637942b04d91495698e051ce536c9a9c.jpg',
            'relationcode': '04bb52a426cb4c6bbb41e2322b1cadf7'
          }
        ]
      }
    ],
    'flag': 'true',
    'total': '100'
  })
}
Mock.mock(new RegExp('^' + api.getCommunicationData), 'post', getCommunicationData)

// 保存沟通记录数据
let saveCommunicationData = function (option) {
  return Mock.mock({
    'flag': true,
    'msg': '成功'
  })
}
Mock.mock(new RegExp('^' + api.saveCommunicationData), 'post', saveCommunicationData)

// 获取沟通记录数据
let getCommunicationRecordData = function (option) {
  return Mock.mock({
    'result': [
      {
        'result': '',
        'logUser': '王若飞',
        'userDep': '',
        'logTime': '2018-11-26 08:54:19',
        'stepModel': {
          'id': '4694737ede6b44449c7ba16d81395fe2',
          'stepNo': 'step01',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '新建',
          'descriptionen': 'New',
          'roleName': '建单人',
          'roleID': 'CreateRole',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Submit',
        'actionName': '提交'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 08:56:44',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Accept',
        'actionName': '受理'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 10:11:54',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Assign',
        'actionName': '转派'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 10:12:42',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Accept',
        'actionName': '受理'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 10:12:53',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Assign',
        'actionName': '转派'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 10:17:01',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Accept',
        'actionName': '受理'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'change': [
          {
            'fieldName': 'EventClassify',
            'label': '事件分类',
            'labelen': 'Categorization',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'EventReson',
            'label': '事件原因',
            'labelen': 'Rootcause',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          },
          {
            'fieldName': 'DealInfo',
            'label': '解决方案',
            'labelen': 'Resolution Information',
            'old': '',
            'new': '',
            'olden': '',
            'newen': ''
          }
        ],
        'logTime': '2018-11-26 10:17:29',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Assign',
        'actionName': '转派'
      },
      {
        'result': '',
        'logUser': '王若飞',
        'logTime': '2018-11-26 11:00:38',
        'stepModel': {
          'id': '4ea2f1554c204c4aa8429404797dfada',
          'stepNo': 'step02',
          'baseSchema': 'HISENSE_ITSM_INCIDENT',
          'description': '处理',
          'descriptionen': 'Dispose',
          'roleName': '处理人',
          'roleID': 'Dealer',
          'roleProcessRoleType': '5',
          'actionType': 'DEAL',
          'taskPolicy': 'SHARE',
          'acceptOver': '0',
          'dealOver': '0',
          'hasDeploy': 0,
          'operate': 'add',
          'hasSubFlow': 0,
          'isAuto': 0
        },
        'actionNameen': 'Accept',
        'actionName': '受理'
      }
    ],
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.getCommunicationRecordData), 'post', getCommunicationRecordData)
