<template>
    <div>
        <h3>Welcome</h3>
        <el-row :gutter="20">
  <el-col :span="10"><div class="grid-content_bg-purple">
 <el-date-picker v-model="selectMonth" type="month" placeholder="选择月"   @change="jobSearch" value-format="yyyy-MM"></el-date-picker>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-1">
  <div slot="header" class="clearfix">
    <span></span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
    </div>

</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.grid-content_bg-purple {
    margin-bottom: 40px;
    margin-left: 60px;
    background-color: #C6E2FF;

}
</style>
