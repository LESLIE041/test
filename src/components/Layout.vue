<template>
  <el-container class="body">
    <el-header>
      <el-row type="flex" align="middle" justify="space-around" class="title">
        <el-col :span="8">
        </el-col>
        <el-col :span="8">
          <div class="title-content">
            <span>疾病预测大数据平台</span>
          </div>
        </el-col>
        <el-col :span="8">
          <el-row type="flex" align="middle" justify="end">
            <el-col
              :span="24"
            >
              <el-dropdown class="personal-menu">
                <el-row
                  type="flex"
                  align="middle"
                  justify="space-around"
                  :gutter="8"
                >
                  <el-col :span="8">
                    <span>user</span>
                  </el-col>
                  <el-col :span="8">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                  </el-col>
                  <el-col :span="8">
                    <i class="el-icon-arrow-down el-icon--right"/>
                  </el-col>
                </el-row>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item class="personal-information">
                    <router-link
                      :to="{name:'personalInformation'}"
                    >
                      个人信息
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :divided="true">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
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
      padding: 0;

      .title {
        height: 100%;

        .title-content {
          text-align: center;
          font-size: 24px;
          letter-spacing: 0.2em;
          font-family: "Helvetica Neue", sans-serif;
        }

        .personal-menu {
          float: right;
          margin-right: 10px;
          height: 100%;

          .user-info {
            display: table-cell;
            vertical-align: middle;
          }
        }
      }

    }

    .el-aside {
      background-color: #ffffff;
      height: 80vh;
      margin: 2vh;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }

  .height-100 {
    height: 100%;
  }

  .personal-information {
    a:link {
      text-decoration: none;
      color: unset;
    }
  }

</style>
