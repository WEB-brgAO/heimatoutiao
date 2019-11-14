<template>
  <div>
    <!-- 外部容器 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside class="left" style="width:180px;background-color:red" >
        <div>
          <img src="../../assets/img/logo_admin.png" alt="">
        </div>
        <el-menu style="width:181px" background-color="#353b4e" active-text-color="#ffd04b" text-color=" #adafb5" >
          <el-menu-item>首页</el-menu-item>
          <el-submenu>
            <template slot="title">内容管理</template>
            <el-menu-item>发布文章</el-menu-item>
            <el-menu-item>内容列表</el-menu-item>
            <el-menu-item>评论列表</el-menu-item>
            <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
          <el-submenu>
            <template slot="title">粉丝管理</template>
            <el-menu-item>图文数据</el-menu-item>
            <el-menu-item>粉丝概况</el-menu-item>
            <el-menu-item>粉丝画像</el-menu-item>
            <el-menu-item>粉丝列表</el-menu-item>
          </el-submenu>
          <el-menu-item>账户信息</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-container>
        <el-header>
          <!-- 头部 -->
          <ls-header></ls-header>
        </el-header>
        <el-main>
          <!-- 二级容器 -->
          容器
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headers from './home-header.vue'
export default {
  path: 'home',
  components: {
    'ls-header': headers
  }
}
</script>

<style lang="less" scoped>
  .left {
    overflow: hidden;
    background-color:#353b4e ;
    div {
      text-align: center;
      padding: 10px 0;
      img {
        width: 120px;
      }
    }
  }
</style>
