<template>
 <el-row type="flex" class="min">
   <el-col class="left" :span="12">
    <i class="el-icon-s-fold"></i>
    <span>江苏传智播客教育科技股份有限公司</span>
   </el-col>
   <el-col class="right" :span="3">
     <img src="../../assets/img/avatar.jpg" alt="">
     <el-dropdown trigger="click">
       <span class="el-dropdown-link">
        用户名<i class="el-icon-arrow-down el-icon--right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >黄金糕</el-dropdown-item>
          <el-dropdown-item >狮子头</el-dropdown-item>
          <el-dropdown-item >螺蛳粉</el-dropdown-item>
          <el-dropdown-item >双皮奶</el-dropdown-item>
          <el-dropdown-item >蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
      </span>
     </el-dropdown>
   </el-col>
 </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .min {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    .left {
      display: flex;
      align-items: center;
      i {
        font-size: 30px;
      }
      span {
        margin-left: 6px;
      }
    }
    .right {
      vertical-align: middle;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        border-radius: 25px;
      }
      span {
        margin-left: 20px;
      }

    }
  }
</style>
