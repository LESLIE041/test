<template>
  <div class="personal-information">
    <span class='font'>个人信息</span>
    <el-card class="content" :body-style="{ color: 'rgba(131, 134, 136, 1)'}">
      <el-row type="flex" justify="space-around" align="middle">
        <el-col :span="21">
          <el-row type="flex" justify="space-around">
            <el-col :span="7">
              <p><span>登录名：测试数据</span></p>
              <p><span>性别：测试数据</span></p>
            </el-col>
            <el-col :span="7">
              <p><span>姓名：测试数据</span></p>
              <p><span>邮箱：测试数据</span></p>
            </el-col>
            <el-col :span="7">
              <p><span>公司名称：测试数据</span></p>
              <p><span>身份证号：测试数据</span></p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around" style="border-top: 1px solid rgba(210, 210, 210, 1)">
            <el-col :span="7">
              <p><span>手机号：测试数据</span></p>
              <p><span>密码强度：中级 <el-rate style="display: inline"/></span></p>
            </el-col>
            <el-col :span="7"/>
            <el-col :span="7"/>

          </el-row>
        </el-col>
        <el-col :span="3">
          <el-avatar class="avatar" :size="150" :src="avatarURL"/>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'PersonalInformation',
    data () {
      return {
        avatarURL: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

<style scoped lang="less">
  .personal-information {
    /*height: 100%;*/
    font-family: PingFang SC, sans-serif;
    font-weight: bold;
    color: rgba(131, 134, 136, 1);

    .font {
      width: 170px;
      font-size: 18px;
      font-weight: bold;
      margin: 0 20px 10px;
    }

    .content {
      margin-top: 10px;
      width: 100%;

      .avatar {
        float: right;
      }
    }
  }
</style>
