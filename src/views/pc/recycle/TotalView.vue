<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="订单号" prop="order_id"/>
    <el-table-column label="订单状态" prop="statues"/>
    <!--    <el-table-column label="提交时间" prop="createtime"/>-->
    <!--    <el-table-column label="姓名" prop="name"/>-->
    <!--    <el-table-column label="电话" prop="phone"/>-->
    <!--    <el-table-column label="账号" prop="account"/>-->
    <!--    <el-table-column label="学校" prop="university"/>-->
    <el-table-column label="回收日期" prop="date"/>
    <el-table-column label="回收时间" prop="time"/>
    <el-table-column label="上门" prop="to_home"/>
    <el-table-column label="类型" prop="type"/>
    <el-table-column label="重量" prop="weight"/>
    <!--    <el-table-column label="地址" prop="address"/>-->
    <!--    <el-table-column label="备注" prop="remark"/>-->
    <el-table-column align="right">
      <template #header>
        <div class="search">
          <el-input v-model="search" size="small" prefix-icon="Search" placeholder="输入订单号进行搜索"/>
          <el-button type="primary" size="small" @click="searchTable">搜索</el-button>
        </div>
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        <el-popconfirm
            confirm-button-text="确认"
            confirm-button-type="danger"
            cancel-button-text="取消"
            cancel-button-type="info"
            title="你确认要删除吗?"
            @confirm="handleDelete(scope.$index, scope.row)"
            @cancel="cancelEvent">
          <template #reference>
            <el-button
                size="small"
                type="danger"
            >删除
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from 'vue'
import axios from "@/axios";
import {ElMessage} from "element-plus";

const search = ref('')
const tableData = ref([])
const searchTable = () => {
  axios.post('/', {}).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
const cancelEvent = () => {
  ElMessage.success('已取消')
}
const handleDelete = (index: number, row: never) => {
  console.log(index, row)
  axios({
    method: 'DELETE',
    url: '',
    data: {},
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
const handleEdit = (index: number, row: never) => {
  console.log(index, row)
}

onBeforeMount(() => {
  let user = JSON.parse(localStorage.getItem("user"))
  if (user !== null) {
    let account = user.account
    axios({
      method: 'GET',
      url: `/order/list/${account}`,
      params: {},
    }).then((res) => {
      // console.log(res.data.data)
      tableData.value = res.data.data
      tableData.value.forEach(item => {
        if (item.statues === false) item.statues = "未完成"
        else item.statues = "已完成"
        if (item.to_home === false) item.to_home = "否"
        else item.to_home = "是"
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})

</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.el-table {
  background-color: var(--el-menu-background-color);
  color: var(--el-menu-text-color);
}

div /deep/ .el-table__cell {
  background-color: #ccc;
  color: var(--el-menu-text-color);
}
</style>