<template>
  <div class="RecycleView">
    <div>
      <img style="width: 100%; height: 100vh"
           src="@/assets/03-manager.jpg"/>
    </div>
  </div>
  <el-row class="transform_view">
    <el-col :span=11>
      <el-card class="form">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="80px"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="ruleForm.account" :placeholder="form.user_id===-1? '2120200411':form.account" disabled/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <!--            placeholder="请填写密码"-->
            <el-input v-model="ruleForm.password" :placeholder="form.user_id===-1? '请填写密码':form.password"/>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" :placeholder="form.user_id===-1? '请填写姓名':form.name"/>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="ruleForm.age" :placeholder="form.user_id===-1? '请填写年龄':form.age"/>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleForm.sex" :placeholder="form.user_id===-1? '请选择性别':form.sex" style="width: 50%;">
              <el-option label="男" value="男"/>
              <el-option label="女" value="女"/>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address" type="textarea"
                      :placeholder="form.user_id===-1? '请填写详细地址':form.address"/>
          </el-form-item>
          <el-form-item label="个人介绍" prop="remark">
            <el-input v-model="ruleForm.remark" type="textarea" :placeholder="form.user_id===-1? '请填写个人介绍':form.remark"/>
          </el-form-item>
          <el-form-item>
            <i style="line-height: 20px;margin: 0;color: #838383;">Ps:请完善个人信息</i>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">提交修改</el-button>
            <el-button @click="resetForm(ruleFormRef)">取消修改</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="13"></el-col>
  </el-row>

  <el-card class="absolute_view">
    <div style="width: 100%;height: calc(70vh - 40px);background: #f1f2f3;">
      <mine-view/>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import {onBeforeMount, reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {ElMessage} from "element-plus";
import axios from "@/axios";
import router from "@/router";
import MineView from "@/views/pc/manage/MineView.vue";

const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive({
  user_id: -1,
  account: '',
  age: '',
  name: '',
  password: '',
  sex: '',
})
let form = reactive({
  user_id: -1,
  account: '',
  age: '',
  name: '',
  password: '',
  sex: '',
})

const rules = reactive<FormRules>({
  password: [
    {required: true, message: '请填写密码', trigger: 'blur'},
    {min: 6, max: 10, message: '长度应该在6~10个字数', trigger: 'blur'},
  ],
  name: [
    {required: true, message: '请填写姓名', trigger: 'blur'},
    {min: 3, max: 5, message: '长度应该在3~5个字数', trigger: 'blur'},
  ],
  age: [
    {required: true, message: '请填写年龄', trigger: 'blur'},
    {min: 1, max: 3, message: '长度应该在1~3位', trigger: 'blur'},
  ],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user === null) {
      ElMessage.error({
        message: '请先登录',
        duration: 800,
      })
      return;
    }
    if (valid) {
      ruleForm.user_id = user.user_id
      ruleForm.account = user.account
      axios.put('/user/update', ruleForm).then((res) => {
        console.log(res)
        if (res.data.code === "200") {
          ElMessage.success({
            message: "修改成功，请重新登录",
            duration: 1000,
          })
          router.push({name: 'login'})
        }
      }).catch((err) => {
        console.log(err)
      })
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const readLocalStorage = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user === null) {
    user = {
      user_id: -1,
      account: '',
      age: '',
      name: '',
      password: '',
      sex: '',
    }
    form = user
  } else {
    form = user
  }
}
onBeforeMount(() => {
  readLocalStorage();
})

</script>

<style scoped>
.transform_view {
  transform: translateY(-100vh);
  height: 70vh;
}

.form {
  height: 80vh;
  transform: translate(40px, 90px);
  border-radius: 20px;
  background: rgba(255, 255, 255, .5);
}

.absolute_view {
  position: absolute;
  width: calc(100% - 0px);
  height: 70vh;
  top: calc(100vh + 0px);
  background: rgba(255, 105, 0, .7);
  border: none;
  border-radius: 0;
}

.absolute_view /deep/ .el-menu-item {
  --el-menu-active-color: #00a563;
  --el-menu-text-color: #4c4c4c;
  --el-menu-hover-text-color: #00a563;
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
  --el-menu-item-height: 56px;
  --el-menu-border-color: none;
  --el-menu-background-color: #ccc;
}
</style>