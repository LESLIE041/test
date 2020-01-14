<template>
  <div>
    <h3>Welcome</h3>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content_bg-purple">
          <el-date-picker type="month" placeholder="选择月"
                          value-format="yyyy-MM"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="grid-content_bg-purple">
          <el-card class="box-card-1">
            <div slot="header" class="clearfix">
              <span/>
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
    /*background-color: #C6E2FF;*/

  }

  .box-card-1 {
    background-color: rgba(1, 1, 1, 0);
    border: unset;

    /deep/ .el-card__header {
      border-bottom: unset ;
    }

    /deep/ .el-card__body {
      border-bottom: unset ;
    }
  }

</style>
