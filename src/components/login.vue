/* eslint-disable no-undef */
<template>
    <div class="min">
        <el-card class="box-card">
            <div class="top">
                <img src="../assets/img/logo_index.png" alt="">
            </div>
            <el-form class="formD" ref="loginForm" :rules="rules" :model="loginForm">
                <el-form-item prop="mobile">
                 <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop='code'>
                    <el-input v-model="loginForm.code" style="width:240px"   placeholder="请输入验证码"></el-input>
                    <el-button style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item prop="agree" >
                    <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议及条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <!-- 自动校验 -->
                    <!-- 给button一个点击事件 然后传入的参数是整个规则 在methods 里面写方法 -->
                    <el-button style="width:100%" type="primary" @click="fn(loginForm)">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      rules: {
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }
        ],
        code: [
          { required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '请输入合法的验证码' }
        ],

        agree: [{ validator: function (rule, value, callback) {
          // rule 当前规则
          // value 代表当前的值=》表单agree的值
          // res回调函数
          if (value) {
            callback() // 直接执行res() 表示直接通过
          } else {
            callback(new Error('请你勾选')) // 不通过也要执行res()但是得带一个参数 new Error('提示信息')
          }
        } }]
      }
    }
  },
  methods: {
    fn (loginForm) {
      this.$refs.loginForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验成功')
        }
      })
    }
  }
  // methods: {
  //   login () {
  //     // 校验整个表单的规则
  //     // validate 是一个方法 => 方法中传入的一个函数 两个校验参数  是否校验成功/未校验成功的字段
  //     this.$refs.myForm.validate(function (isOK) {
  //       if (isOK) {
  //         console.log('校验成功')
  //       }
  //     })
  //   }
  // }
}
</script>

<style lang="less" scoped>
    .min {

        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../assets/img/login_bg.jpg');
        height: 100vh;
        background-size: cover;
        .box-card {
            width: 400px;
            .top {
                text-align: center;
                img {
                    width: 160px;
                }
            }
            .formD{
                margin-top: 10px;
            }

        }
    }
</style>
