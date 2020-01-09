<template>
    <div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>数据中心</el-breadcrumb-item>
  <el-breadcrumb-item>按地区分组</el-breadcrumb-item>
</el-breadcrumb>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>图表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
  <el-col :span="10"><div class="grid-content bg-purple">
 <el-date-picker v-model="selectMonth" type="month" placeholder="选择月"   @change="jobSearch" value-format="yyyy-MM"></el-date-picker>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-1">
  <div slot="header" class="clearfix">
    <span>图表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-2">
  <div slot="header" class="clearfix">
    <span>图表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-3">
  <div slot="header" class="clearfix">
    <span>图表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectMonth: ''
    }
  },
  created () {
    this.initData({})
  },
  methods: {
    jobSearch () {
      this.getJobListByMonth()
    },
    async initData (data) {
      // 获取当前时间
      var now = new Date()
      var monthn = now.getMonth() + 1
      var yearn = now.getFullYear()
      this.selectMonth = yearn + ' - ' + monthn
      this.selectUser = parseInt(sessionStorage.getItem('userid'))
      // this.getWeekJobList({
      //   userid: sessionStorage.getItem("userid"),
      //   weekid: "1"
      // });
      this.getJobListByMonth()
    },
    async getJobListByMonth (data) {
    }
  }
}
</script>

<style lang="less" scoped>
  .el-breadcrumb {
    margin-bottom: 18px;
    font-size: 16px;
}
  .clearfix {
    font-size: 14px;
  }
  .grid-content_bg-purple {
    margin-bottom: 20px;
    width: 640px;
  }
  .el-icon-arrow-right {
    margin-bottom: 40px;
  }
</style>
