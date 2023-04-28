<template>
  <div class="CommonFooter">
    <el-row>
      <el-col :span="18" style="padding: 20px;">
        <el-row>
          <el-col :span="4">
          </el-col>
          <el-col :span="4">
            <p class="title">回收分类</p>
            <div class="item" v-for="item in recycleGuide" :key="item"><a>{{item}}</a></div>
          </el-col>
          <el-col :span="4">
            <p class="title">服务中心</p>
            <div class="item" v-for="item in serveCenter" :key="item"><a>{{item}}</a></div>
          </el-col>
          <el-col :span="4">
            <p class="title">线下门店</p>
            <div class="item" v-for="item in lineShop" :key="item"><a>{{item}}</a></div>
          </el-col>
          <el-col :span="4">
            <p class="title">关于小梦</p>
            <div class="item" v-for="item in aboutOur" :key="item"><a>{{item}}</a></div>
          </el-col>
          <el-col :span="4">
            <p class="title">关注我们</p>
            <div class="item" v-for="item in attentionOur" :key="item"><a>{{item}}</a></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div class="card">
          <p>400-198-0237</p>
          <p>8:00-18:00（仅收市话费）</p>
          <el-button type="success" plain><el-icon><ChatDotSquare /></el-icon>人工客服</el-button>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script setup>
import {ref} from "vue";

const recycleGuide=ref(['塑料','废纸','金属','衣物','电子产品'])
const serveCenter=ref(['订单查询','售后政策','申请售后','保障服务','服务电话','F码通道'])
const lineShop=ref(['小梦之家','服务网点','授权体验店'])
const aboutOur=ref(['关于小梦','加入小梦','投资者关系','环境及社会','廉洁举报'])
const attentionOur=ref(['新浪微博','官方微信','联系我们','公益基金会'])

</script>

<style scoped>
.title{
  font-size: 14px;
}
.item{
  color: #666;
  width: 60px;
  height: 28px;
  font-size: 10px;
  line-height: 28px;
}
.item:hover{
  cursor: pointer;
  color: #00a563;
}
.card{
  padding: 10px;
}

.card p:nth-child(1){
  color: #00a563;
  font-size: 24px;
}
.card p{
  color: #666;
  font-size: 12px;
}

</style>
