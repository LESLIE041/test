<template>
    <el-container class="body">
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div class="toggle-button" @click="toggleCollapse">|||</div>
     <el-menu background-color=#66adff
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="location">
            <i class="el-icon-menu"></i>
            <span>按地区分组</span>
          </el-menu-item>
          <el-menu-item index="age">
            <i class="el-icon-menu"></i>
            <span>按年龄分组</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
       <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据预测</span>
       </template>
       <el-menu-item-group>
          <el-menu-item index="p-location">
             <i class="el-icon-menu"></i>
             <span>按地区分组</span>
          </el-menu-item>
          <el-menu-item index="p-age">
             <i class="el-icon-menu"></i>
             <span>按年龄分组</span>
          </el-menu-item>
       </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-location"></i>
        <span slot="title">个人主页</span>
      </el-menu-item>
    </el-menu>
          </el-aside>
  <el-container>
    <el-header>
      <div class="title">
        <!-- <img src="../assets/F03C3F9399D72A5E129E318087334A2F.png" alt=""> -->
        <span>疾病预测大数据平台</span>
      </div>
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
  </div>
    </el-header>
    <el-main>
      <!-- 路由占位符 -->
      <router-view></router-view>
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
  // created () {
  //   this.getMenuList()
  // },
  methods: {
  //   // 获取所有菜单
  //   getMenuList () {
  //     const { data: res } = this.$http.get('home')
  //     console.log(res)
  //   }
  // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }

  }
}
</script>

<style lang="less" scoped>
.body{
    height: 100%;
}
.el-header {
    background-color: #66adff;
    line-height: 1.5;
}
.el-aside {
     background-color: #66adff;
    // display: flex;
    // justify-content: space-between;
     color: #fff;
     font-size: 20px;
     line-height: 1.5;
}
.el-main {
    background-color: #C6E2FF
}
.el-menu {
       border-right: none
     }
.title {
          text-align: center;
          color: #ffffff;
          font-size: 24px;
          letter-spacing: 0.2em;
          font-family: "Helvetica Neue";
          margin-top: 10px;
    }
.toggle-button {
  background-color: #7db8fc;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.demo-type {
  size: small;
}
</style>
