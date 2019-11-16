<template>
  <div class="add">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布文章</span>
      </div>
      <el-form ref="form" :model="article" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="article.title"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input type="textarea" v-model="article.content"></el-input>
          </el-form-item>
          <el-form-item label="频道">
            <el-select v-model="article.channel_id" placeholder="请选择活动区域">
              <el-option
                      :label="channel.name"
                      :value="channel.id"
                      v-for="channel in channels"
                      :key="channel.id"
                    ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="频道" >
            <el-radio-group v-model="article.cover.type">
              <el-radio label="单图"></el-radio>
              <el-radio label="三图"></el-radio>
              <el-radio label="无图"></el-radio>
              <el-radio label="自动"></el-radio>
            </el-radio-group>
          </el-form-item> -->

          <el-form-item>
            <el-button type="primary" @click="onSubmit(false)">发表</el-button>
            <el-button @click="onSubmit(true)">存入草稿</el-button>
          </el-form-item>
        </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型
          images: []// 图片
        },
        channel_id: ''
      },
      channels: [] // 频道列表
    }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    loadChannels () {
      // 有些接口需要 token，有些接口不需要 token
      // 是否需要，应该由接口文档指示
      this.$axios({
        // 调用接口
        method: 'GET',
        url: '/channels'
      }).then(res => {
        // 成功了
        this.channels = res.data.data.channels
      }).catch(err => {
        // 失败了
        console.log(err, '获取数据失败')
      })
    },
    // 发布文章

    onSubmit (draft) {
      this.$axios({
        method: 'post',
        url: '/articles',
        // headers参数
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('toutiao')}`
        },
        // query数据
        params: {
          draft
        },
        // body数据
        data: this.article

      }).then(res => {
        // console.log(res)
        this.$message({
          message: '发布成功',
          type: 'success'
        })
        this.$router.push('/liebiao')
      }).catch(res => {
        this.$message.error('发布失败')
      })
    }
  }
}
</script>

<style>

</style>
