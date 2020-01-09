<template>
  <el-container class="body">
    <el-header>
      <el-row type="flex" align="middle" justify="center" class="title">
        <el-col :span="6">
          <div class="title-content">
            <span>疾病预测大数据平台</span>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"/>
              <span>数据中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="location">
                <i class="el-icon-menu"/>
                <span>按地区分组</span>
              </el-menu-item>
              <el-menu-item index="age">
                <i class="el-icon-menu"/>
                <span>按年龄分组</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"/>
              <span>数据预测</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="p-location">
                <i class="el-icon-menu"/>
                <span>按地区分组</span>
              </el-menu-item>
              <el-menu-item index="p-age">
                <i class="el-icon-menu"/>
                <span>按年龄分组</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-location"/>
            <span slot="title">个人主页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main class="main-content">
        <!-- 路由占位符 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .body {
    height: 100%;
    background-color: #f0f2f5;

    .el-header {
      background-color: #ffffff;
      box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);

      .title {
        height: 100%;
      }

      .title-content {
        text-align: center;
        font-size: 24px;
        letter-spacing: 0.2em;
        font-family: "Helvetica Neue", sans-serif;
      }

    }

    .el-aside {
      background-color: #ffffff;
      height: 80vh;
      margin: 2vh;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }

</style>
