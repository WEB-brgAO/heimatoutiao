<template>
  <div class="liebiao">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>

        </div>
        <div class="text item">
            <el-form label-width="80px">
                <el-form-item label="文章状态">
                    <el-radio-group v-model="filterForm.status">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="草稿"></el-radio>
                        <el-radio label="待审核"></el-radio>
                        <el-radio label="审核通过"></el-radio>
                        <el-radio label="审核失败"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="频道列表" v-model="filterForm.channel_id">
                   <el-select placeholder="请选择频道" v-model="filterForm.channel_id">
                    <el-option
                      :label="channel.name"
                      :value="channel.id"
                      v-for="channel in channels"
                      :key="channel.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="时间选择">
                        <el-date-picker
                        type="datetimerange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                    </el-date-picker>
                </el-form-item>
                <el-button type="primary">查询</el-button>

            </el-form>
        </div>
      </el-card>
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>共找到{{ total }}条符合条件的内容</span>
          </div>
          <!-- //disabled这个属性石让他禁用的 是个布尔值 -->
          <el-pagination

            :disabled='loading'
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="onchangepage"

            >
          </el-pagination>
          <el-table

           v-loading="loading"
            :data="articles"
            style="width: 100%">
                <el-table-column
                    prop="data"
                    label="图片"
                    width="180">
                    <template slot-scope="scope">
                      <img :src="scope.row.cover.images[0]?scope.row.cover.images[0]:'data:image/jpeg;base64,R0lGODdhyACWAPcAAPf39+fn51dXV9fX12dnZ4eHh8fHx7e3t6enp3d3d5eXl0dHRwcHxwcH1wcH5wcH9wcXBwcXFwcXJwcXNwcXRwcXVwcXZwcXdwcXhwcXlwcXpwcXtwcXxwcX1wcX5wcX9wcnBwcnFwcnJwcnNwcnRwcnVwcnZwcndwcnhwcnlwcnpwcntwcnxwcn1wcn5wcn9wc3Bwc3Fwc3Jwc3Nwc3Rwc3Vwc3Zwc3dwc3hwc3lwc3pwc3twc3xwc31wc35wc39wdHBwdHFwdHJwdHNwdHRwdHVwdHZwdHdwdHhwdHlwdHpwdHtwdHxwdH1wdH5wdH9wdXBwdXFwdXJwdXNwdXRwdXVwdXZwdXdwdXhwdXlwdXpwdXtwdXxwdX1wdX5wdX9wdnBwdnFwdnJwdnNwdnRwdnVwdnZwdndwdnhwdnlwdnpwdntwdnxwdn1wdn5wdn9wd3Bwd3Fwd3Jwd3Nwd3Rwd3Vwd3Zwd3dwd3hwd3lwd3pwd3twd3xwd31wd35wd39weHBweHFweHJweHNweHRweHVweHZweHdweHhweHlweHpweHtweHxweH1weH5weH9weXBweXFweXJweXNweXRweXVweXZweXdweXhweXlweXpweXtweXxweX1weX5weX9wenBwenFwenJwenNwenRwenVwenZwendwenhwenlwenpwentwenxwen1wen5wen9we3Bwe3Fwe3Jwe3Nwe3Rwe3Vwe3Zwe3dwe3hwe3lwe3pwe3twe3xwe31we35we39wfHBwfHFwfHJwfHNwfHRwfHVwfHZwfHdwfHhwfHlwfHpwfHtwfHxwfH1wfH5wfH9wfXBwfXFwfXJwfXNwfXRwfXVwfXZwfXdwfXhwfXlwfXpwfXtwfXxwfX1wfX5wfX9wfnBwfnFwfnJwfnNwfnRwfnVwfnZwfndwfnhwfnlwfnpwfntwfnxwfn1wfn5wfn9wf3Bwf3Fwf3Jwf3Nwf3Rwf3Vwf3Zwf3dwf3hwf3lwf3pwf3twf3xwf31wf35wf39ywAAAAAyACWAAAI/wABCBxIsKDBgwgTKlzIsGGAAA0jSpxIsaLFixgzaoQokKPGjyBDihxJcqFHjyVTqlzJMiVKlC1jypxJk+DDgTdh1tzJs6fFmzgh6vRJtKjRjgWBDj3KtGlNoACgOp1KdeTSh0sTKq3KdWdW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'" alt="" style="width:50px">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="标题"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="状态">
                    <template slot-scope='scope'>
                      <el-tag type='zt[scope.row.status].type'>{{ zt[scope.row.status].agm }}</el-tag>

                    </template>
                </el-table-column>
                <el-table-column
                    prop="pubdate"
                    label="时间">
                </el-table-column>
                <el-table-column label="管理">
                    <el-row>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
                </el-table-column>
            </el-table>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterForm: {
        status: '',
        channel_id: '',
        begin_pubdate: '',
        end_pubdate: ''
      },
      total: '', // 总页数
      articles: [], // 列表数据
      page: 1, // 页数
      loading: true,
      channels: [], // 频道列表
      // 状态按钮
      zt: [
        {
          type: 'success',
          agm: '草稿'
        },
        {
          type: 'info',
          agm: '待审核'
        },
        {
          type: '',
          agm: '审核通过'
        },
        {
          type: 'warning',
          agm: '审核失败'
        },
        {
          type: 'danger',
          agm: '已删除'
        }
      ]

    }
  },
  created () {
    this.jiazai(this.page)
    this.loadChannels()
  },
  methods: {
    // 接受当前页

    jiazai (page = 2) {
      // 在加载的时候就变成true 加载变圈圈
      this.loading = true
      const token = window.localStorage.getItem('toutiao')
      // 掉借口
      this.$axios({
        method: 'get',
        url: '/articles',
        // 请求的时候带着token 放在headers 中 看文档
        headers: {
          Authorization: `Bearer ${token}`
        },
        // Query 参数使用 params 传递
        params: {
          // 当前页
          page
        }
      }).then(res => {
        console.log(res)
        // 把数据给列表数组
        this.articles = res.data.data.results
        // 总页数
        this.total = res.data.data.total_count
      }).finally(() => {
        // 无论成功或者失败都经过这里
        this.loading = false
      })
    },
    onchangepage (page) {
      // 默认传参一个当前页
      // console.log(page)
      // this.page = page
      // 调用接口传当前页
      this.jiazai(page)
    },
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
    }
  }
}
</script>

<style>

</style>
