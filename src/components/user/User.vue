<template>
  <div>
    <!-- 添加用户按钮 -->
    <el-row>
      <el-col>
        <el-button type="primary" class="el-icon-plus" @click="dialogVisible = true">新增用户名</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <el-row>
        <el-col>
          <!-- 搜索功能 -->
          <el-form ref="searchFormRef" :model="searchForm" label-width="80px">
            <el-form-item label="标签名称">
              <el-select v-model="selected" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button>清除</el-button>
              <el-button @click="getMockTask" type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <!-- 用户表格内容 -->
    <el-card>
      <el-table :data="usersData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="150" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名" width="150" align="center"></el-table-column>
        <el-table-column prop="role" label="角色" width="150" align="center"></el-table-column>
        <el-table-column prop="permission_group_title" label="来源" width="220" align="center"></el-table-column>
        <el-table-column prop="create_time" label="创建日期" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.create_time | dateformat }}</template>
        </el-table-column>
        <el-table-column prop="introduction" label="备注" width="150" align="center"></el-table-column>
        <el-table-column prop="is_deleted" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <!--  -->
          <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
          <!-- 禁用 -->
          <el-button type="warning" icon="el-icon-minus
" circle size="mini"></el-button>
          <!-- 删除功能 -->
          <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="pageSize"
          layout="prev, pager,sizes, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-card>
    <!-- 添加用户窗口 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%" @closed="closedDialog">
      <!-- 添加用户的表单 -->
      <el-form
        ref="addUserformRef"
        :model="addUserform"
        :rules="addUserformRules"
        label-width="80px"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="addUserform.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addUserform.password"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="addUserform.mobile"></el-input>
        </el-form-item>
        <el-form-item label="邮件" prop="email">
          <el-input v-model="addUserform.email"></el-input>
        </el-form-item>
        <el-form-item label="权限组id" prop="permission_group_id">
          <el-select autocomplete="false" v-model="permission_group_selected" placeholder="请选择">
            <el-option
              v-for="item in permission_group_options"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 图片上传 -->
        <el-form-item>
          <!-- 图片上传组件 -->
          <el-upload
            class="upload-demo"
            :action="uploadURL"
            list-type="picture"
            :headers="headersInfo"
            :on-success="handleSuccess"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addUserform.email"></el-input>
        </el-form-item>
        <el-form-item label="是否屏蔽">
          <el-switch v-model="addUserform.disabled" active-text="屏蔽" inactive-text="未屏蔽"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendUserForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      // 选择框功能数据
      searchForm: {},
      selected: '',
      options: [{ id: '', value: '', label: '' }],
      // 用户表格数据
      usersData: [],
      // 分页功能数据
      currentPage: 0,
      pageSize: 5,
      total: 0,
      // 添加用户数据
      dialogVisible: false,
      permission_group_selected: '',
      permission_group_options: [
        { id: 0, label: '超级管理员组' },
        { id: 1, label: '编辑组' }
      ],
      // 图片上传功能数据
      uploadURL: 'http://127.0.0.1:7001/frame/file',
      // 设置请求头
      headersInfo: {
        Authorization: window.sessionStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*'
      },
      addUserform: {
        // 账号
        username: '',
        // 密码
        password: '',
        // 权限组id
        permission_group_id: 0,
        // 头像
        avatar: '',
        // 	邮件
        email: '',
        // 是否屏蔽
        disabled: false
      },
      addUserformRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        permission_group_id: [
          { required: true, message: '请选择组权限', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    async getMockTask() {
      const data = await this.$http.get('http://text.com')
      console.log(data)
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getUsersTable()
    },
    handleCurrentChange(CurrentPage) {
      this.currentPage = currentPage
      this.getUsersTable()
    },
    // 获取用户信息列表
    async getUsersTable() {
      const { data: res } = await this.$http.get('/users', {
        params: {
          page: this.currentPage,
          pagesize: this.pageSize,
          keyword: ''
        }
      })
      this.usersData = res.list
      this.total = res.counts
    },
    // 关闭Dialog对话框
    closedDialog() {
      this.$refs.addUserformRef.resetFields()
    },
    // 发送用户信息表单
    sendUserForm() {
      this.$refs.addUserformRef.validate(async valied => {
        if (!valied) {
          return this.$message.error('请正确填写到表单')
        }
        this.addUserform.permission_group_id = this.permission_group_selected
        const data = await this.$http.post('/users', this.addUserform)
        console.log(data)
      })
      // 发生成功关闭窗口
      this.selected = ''
      this.dialogVisible = false
    },
    // 图片上传共功能
    handleSuccess(res) {
      console.log(res)
    }
  },

  created() {
    this.getUsersTable()
  }
}
</script>

<style lang='less' scoped>
.el-row {
  width: 100%;
}
.box-card {
  margin: 17px 0;
}
.el-select {
  margin-right: 22px;
}
.el-table {
  margin-bottom: 30px;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>
