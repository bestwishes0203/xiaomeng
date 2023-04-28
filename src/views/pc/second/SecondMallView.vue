<template>
  <div class="page">
    <div class="nav">
      <el-row>
        <el-col :span="8">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router>
            <el-menu-item>登录</el-menu-item>
            <el-menu-item>注册</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="16">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router>
            <el-menu-item :index="item.path" v-for="item in navLst" :key="item">{{ item.label }}</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="top">
      <el-row>
        <el-col :span="6">
          <div class="tit">小梦二手商城</div>
        </el-col>
        <el-col :span="18">
          <div class="titR">
            <div class="search">
              <el-input v-model="input" placeholder=""/>
              <el-button type="success">搜索</el-button>
            </div>
            <div class="tags">
              <div class="tag" v-for="item in tagLst" :key="item">{{ item }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="mallLst">
      <div class="mall" v-for="item in mallLst" :key="item">
        <img src="@/assets/01-second.jpg" alt="">
        <div class="dtl">
          {{ item.dtl }}
        </div>
        <div class="price">￥{{ item.price }}</div>
        <div class="sell">@{{ item.sell }}</div>
        <div class="num">月销{{ item.num }}</div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const activeIndex = ref('1')
const navLst = [{
  label: '小梦首页',
  path: '',
}, {
  label: '我的小梦',
  path: '',
}, {
  label: '购物车',
  path: '',
}, {
  label: '收藏夹',
  path: '',
}, {
  label: '商品分类',
  path: '',
}, {
  label: '卖家中心',
  path: '',
}, {
  label: '联系客服',
  path: '',
}]

const mallLst = [{
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}, {
  dtl: '啊啊啊啊啊啊啊啊啊啊哇哇哇哇酷酷酷酷酷酷酷酷酷酷酷啊啊啊啊啊啊啊',
  price: '899',
  sell: 'xiaohe',
  num: '0',
}]

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const input = ref('');
const tagLst = ["限时优惠", "公益购买", "笔记", "书籍", "学习用具", "生活用品", "电子物品"]
</script>

<style scoped>
body {
  overflow-x: hidden;
  overflow-y: hidden;
  background: #f1f2f3;
}

html {
  overflow-x: hidden;
  overflow-y: hidden;
  background: #f1f2f3;
}

.page {
  --wdsw: 80%;
  width: 100vw;
  height: auto;
}

.nav {
  width: var(--wdsw);
  padding: 0 10%;
  background: #000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, rgb(0, 0, 0), rgb(67, 67, 67)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, rgb(0, 0, 0), rgb(67, 67, 67)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
}

.el-menu {
  width: 100%;
  height: 35px;
  font-weight: 400;
  border-bottom: none;
  background: transparent;
}

div /deep/ .el-menu-item {
  --el-menu-active-color: #00a563;
  --el-menu-text-color: #fff;
  --el-menu-hover-text-color: #00a563;
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: transparent;
  --el-sub-item-hover-bg-color: transparent;
  /*--el-menu-item-height: 56px;*/
  /*--el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);*/
  /*--el-menu-horizontal-sub-item-height: 36px;*/
  /*--el-menu-item-font-size: var(--el-font-size-base);*/
  /*--el-menu-item-hover-fill: var(--el-color-primary-light-9);*/
  --el-menu-border-color: none;
}

/*top*/
.top {
  width: var(--wdsw);
  --topHeight: 160px;
  height: var(--topHeight);
  margin: 0 auto;
  background: #fff;
}

.tit {
  width: 100%;
  height: var(--topHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.titR {
  width: 80%;
  margin: 0 auto;
  height: var(--topHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.tags {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  line-height: 40px;
}

.tag {
  padding: 0 14px;
  cursor: pointer;
  color: #666;
  font-size: 14px;
}

.tag:hover {
  color: #00a86a;
}

/*mallLst*/
.mallLst {
  width: var(--wdsw);
  height: auto;
  margin: 0 auto;
}

.mall {
  --mallHeight: 330px;
  width: calc(20% - 33px);
  height: var(--mallHeight);
  background: white;
  float: left;
  border: 0.5px solid #ccc;
  padding: 15px 15px 0 15px;
  cursor: pointer;
}

.mall:hover {
  border: 0.5px solid #00a86a;
}

.mall img {
  height: 60%;
}

.mall .dtl {
  width: 100%;
  height: 40px;
  color: #666;
  margin-top: 10px;
  line-height: 20px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mall .price {
  color: red;
  font-size: 16px;
}

.mall .sell {
  width: 100%;
  color: #ccc;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  padding: 4px 0;
}

.mall .num {
  width: 100%;
  color: #ccc;
  font-size: 12px;
  padding: 4px 0;
  text-align: right;
}
</style>