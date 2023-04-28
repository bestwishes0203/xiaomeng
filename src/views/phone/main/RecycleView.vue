<template>
  <div class="img_item">
    <img src="@/assets/recycle.jpg"/>
  </div>

  <div class="transform_view">
    <el-card class="form_box">
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="60px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="姓名"/>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="电话"/>
        </el-form-item>
        <el-form-item label="校区" prop="university">
          <el-select v-model="ruleForm.university" placeholder="校区" style="width: 50%;">
            <el-option label="安义校区" value="安义校区"/>
            <el-option label="职教城校区" value="职教城校区"/>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" required prop="date">
          <el-date-picker
              v-model="ruleForm.date"
              type="date"
              placeholder="日期"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              style="width: 50%;"
          />
          <el-time-select
              v-model="ruleForm.time"
              start="08:30"
              step="00:15"
              end="18:30"
              placeholder="时间"
              style="width: 50%;"
          />
        </el-form-item>
        <el-form-item label="上门" prop="toSchool">
          <el-switch v-model="ruleForm.toSchool"/>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="塑料" name="type"/>
            <el-checkbox label="废纸" name="type"/>
            <el-checkbox label="衣物" name="type"/>
            <el-checkbox label="废铁" name="type"/>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="重量" prop="weight">
          <el-radio-group v-model="ruleForm.weight">
            <el-radio label="1~10KG"/>
            <el-radio label="10KG以上"/>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address" type="textarea" placeholder="请填写详细地址"/>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="ruleForm.remark" type="textarea" placeholder="请填写备注"/>
        </el-form-item>
        <el-form-item>
          <i style="line-height: 0px;margin: 0;color: #838383;">Ps:上门回收需要额外收取费用<i style="color: #f56c6c;">￥1</i></i>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交订单
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">取消订单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

  <div class="absolute_view">
    <div>
      <el-menu
          default-active="/phone-total"
          mode="horizontal"
          background-color="#ccc"
          router
      >
        <el-menu-item v-for="item in menu" :key="item" :index="item.path" style="font-weight: 800;">
          {{ item.label }}
        </el-menu-item>
      </el-menu>
      <el-scrollbar height="100vh">
        <div style="height: calc(100% - 0px);border-radius: 0;background-color: #ccc;">
          <router-view/>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {ElMessage} from "element-plus";
import axios from "@/axios";

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: null,
  name: '',
  phone: '',
  university: '',
  date: '',
  time: '',
  toSchool: false,
  type: [],
  weight: '',
  address: '',
  remark: '',
})

const rules = reactive<FormRules>({
  name: [
    {required: true, message: '请填写姓名', trigger: 'blur'},
    {min: 3, max: 5, message: '长度应该在3~5个字数', trigger: 'blur'},
  ],
  phone: [
    {required: true, message: '请填写电话', trigger: 'blur'},
    {min: 11, max: 11, message: '电话填写错误', trigger: 'blur'},
  ],
  university: [
    {
      required: true,
      message: '请选择校区',
      trigger: 'change',
    },
  ],
  date: [
    {
      type: 'date',
      required: true,
      message: '请填写回收日期和时间',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请选择回收类型',
      trigger: 'change',
    },
  ],
  weight: [
    {
      required: true,
      message: '请选择回收重量',
      trigger: 'change',
    },
  ],
  address: [
    {required: true, message: '请填写回收地址', trigger: 'blur'},
  ],
})

const menu = reactive([{
  label: '全部订单',
  path: '/phone-total',
}, {
  label: '未完成',
  path: '/phone-unpay',
}, {
  label: '已完成',
  path: '/phone-payed',
}])

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (localStorage.getItem("user") == null) {
        ElMessage.error("请先登录")
        return;
      } else {
        let user = JSON.parse(localStorage.getItem("user"))
        ruleForm.account = user.account
      }
      let typeString = ruleForm.type.toString()
      console.log(typeString)
      axios.post('/order/add', {
        name: ruleForm.name,
        phone: ruleForm.phone,
        account: ruleForm.account,
        university: ruleForm.university,
        date: ruleForm.date,
        time: ruleForm.time,
        to_home: ruleForm.toSchool,
        type: typeString,
        weight: ruleForm.weight,
        address: ruleForm.address,
        remark: ruleForm.remark
      }).then((res) => {
        console.log(res)
        if (res.data.code === "200") {
          ElMessage.success("提交成功")
          formEl.resetFields()
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped>
.img_item {
  width: 100%;
  height: 100vh;
}

.transform_view {
  transform: translateY(-100vh);
  height: 100vh;
}

.absolute_view {
  position: absolute;
  width: calc(100vw - 0px);
  height: 100vh;
  top: calc(100vh + 0px);
  background: #f1f1f1;
  border: none;
  border-radius: 0;
}

div >>> .el-card__body{
  padding: 6px 20px !important;
}

.form_box {
  width: 90%;
  margin: 0 auto;
  transform: translateY(55px);
  border-radius: 12px;
  background: rgba(255, 255, 255, .3);
}

.absolute_view >>> .el-menu-item {
  --el-menu-active-color: #00a563;
  --el-menu-text-color: #4c4c4c;
  --el-menu-hover-text-color: #00a563;
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
  --el-menu-item-height: 56px;
  --el-menu-border-color: none;
  --el-menu-background-color: #ccc;
}
</style>