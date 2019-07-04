import Mock from 'mockjs'
import api from '@/api/index'

// 获取环节数据
let getStepsDataUrl = function (option) {
  return Mock.mock({
    'result': [
      {
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
      {
        'id': '4694737ede6b44449c7ba16d81395fe2',
        'stepNo': 'step01',
        'baseSchema': 'HISENSE_ITSM_INCIDENT',
        'description': '新建tttt',
        'descriptionen': 'Newtttt',
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
      }
    ],
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.getStepsDataUrl), 'post', getStepsDataUrl)

// 获取动作数据
let getActionsDataUrl = function (option) {
  return Mock.mock({
    'result': [
      {
        'id': '3e7f874ac6bf4300a19ef5fea811a15f',
        'stepNo': 'step01',
        'baseSchema': 'HISENSE_ITSM_INCIDENT',
        'label': '提交',
        'actionName': 'Submit',
        'actionType': 'NEXT',
        'isFree': 0,
        'hasNext': 0,
        'description': '提交',
        'isClose': 1,
        'hasDeploy': 0,
        'operate': 'add',
        'labelen': 'Submit'
      },
      {
        'id': '3e7f874ac6bf4300a19ef5fea811a15f',
        'stepNo': 'step01',
        'baseSchema': 'HISENSE_ITSM_INCIDENT',
        'label': '提交tttt',
        'actionName': 'Submit',
        'actionType': 'NEXT',
        'isFree': 0,
        'hasNext': 0,
        'description': '提交',
        'isClose': 1,
        'hasDeploy': 0,
        'operate': 'add',
        'labelen': 'Submittttt'
      }
    ],
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.getActionsDataUrl), 'post', getActionsDataUrl)

// 获取处理人或处理组
let getPeoAndGroupUrl = function (option) {
  return Mock.mock({
    'result': {
      'id': 'd07219cf622c4e54af2cfdba8751fbc5',
      'loginname': '',
      'text': '运维支持组',
      'type': 'D',
      'isChildren': false,
      'depname': '0'
    },
    'flag': true
  })
}
Mock.mock(new RegExp('^' + api.getPeoAndGroupUrl), 'post', getPeoAndGroupUrl)
