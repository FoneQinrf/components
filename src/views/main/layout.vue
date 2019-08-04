<!--
 * @Author: Fone丶峰
 * @Date: 2019-08-02 20:03:31
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-03 17:07:25
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="G-home">
    <div class="top-nav"></div>
    <div class="G-body">
      <div class="left-nav">
        <router-link to="/main/Input">Input</router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.G-home {
  .top-nav {
    width: 100%;
    height: 54px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .G-body {
    width: 100%;
    box-sizing: border-box;
    padding-top: 56px;
    display: flex;
  }
  .left-nav {
    flex: 0 0 200px;
  }
  .main {
    flex: 1;
  }
}
</style>
