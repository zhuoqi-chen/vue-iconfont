<template>
  <div id="app">
    <div>
      <svg-icon id="icon-vuejs" style="font-size:180px;"></svg-icon>
      <h2>Vue Icon component by iconfont</h2>
    </div>
    <div>
      <div style="font-size:36px;"><svg-icon id="icon-vuejs"></svg-icon>SvgIcon</div>           
      <div><svg-icon id="icon-vuejs"></svg-icon>SvgIcon</div>
      <div style="font-size:36px;"><font-icon id="icon-vuejs"></font-icon>FontIcon </div>
      <div><font-icon id="icon-vuejs"></font-icon>FontIcon </div>
      <div style="color:#42b983;"><font-icon id="icon-vuejs"></font-icon>FontIcon whit color</div>
      <div style="color:red;"><font-icon id="icon-vuejs"></font-icon>FontIcon whit color</div>
    </div>
    <br/>
    <br/>
    <br/>
    <a href="https://github.com/zhuoqi-chen/vue-iconfont" ><font-icon id="icon-github" style="font-size:36px;"></font-icon></a>
    <br/>
    <small style="color:#333">Powered by <a target="_blank" href="https://vuejs.org/">https://vuejs.org/</a> & <a target="_blank" href="http://www.iconfont.cn/">http://www.iconfont.cn/</a></small>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
