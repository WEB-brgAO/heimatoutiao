<template>
    <div class="min">
        <el-card class="box-card">
            <div class="top">
                <img src="../assets/img/logo_index.png" alt="">
            </div>
            <el-form class="formD">
                <el-form-item>
                    <!-- 手机号 -->
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input style="width:240px"></el-input>
                    <el-button style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox>我已阅读并同意用户协议及条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:100%" type="primary">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {

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
