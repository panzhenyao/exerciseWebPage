import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Step,
  Steps,
  CheckboxGroup,
  Checkbox,
  Upload,
  Image
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Tag)
Vue.use(Alert)
// 分页组件
Vue.use(Pagination)
// home第三方element-ui
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
// 麵包屑導航
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
// 卡片組件
Vue.use(Card)
// 佈局組件
Vue.use(Row)
Vue.use(Col)
// 表格組件
Vue.use(Table)
Vue.use(TableColumn)
// tab栏组件
Vue.use(Tabs)
Vue.use(TabPane)
// 复选框组件
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
// 树形控件
Vue.use(Tree)
// 编辑区域组件
Vue.use(Dialog)
// 选择框控件
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
// 步骤条组件
Vue.use(Step)
Vue.use(Steps)
// 图片上传组件
Vue.use(Upload)
Vue.use(Image)

// 全局配置
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
