# vue使用iconfont的最佳实践

--------------------------------------------------------------------------------

先谈谈一个小icon的生命周期

设计师切图->前端加icon加->前端编写css->html引入class

你会发现很蛋疼,一个小小icon需要这么多步骤,制作不方便,过了一段时间,icon散落在页面各个角落,不方便统一管理.

直到发现<http://www.iconfont.cn/>图标管理神器

> 阿里妈妈MUX倾力打造的矢量图标管理、交流平台。 设计师将图标上传到Iconfont平台，用户可以自定义下载> 多种格式的icon，平台也可将图标转换为字体，便于前端工> 程师自由调整与调用

## DEMO

<https://zhuoqi-chen.github.io/vue-iconfont/>

## www.iconfont.cn的使用

> 创建一个项目

![created](https://raw.githubusercontent.com/zhuoqi-chen/vue-iconfont/master/assets/created.png)

> 添加icon到项目

![add](https://raw.githubusercontent.com/zhuoqi-chen/vue-iconfont/master/assets/add.png) ![add-to-project](https://raw.githubusercontent.com/zhuoqi-chen/vue-iconfont/master/assets/add-to-project.png)

> 下载代码

![download](https://raw.githubusercontent.com/zhuoqi-chen/vue-iconfont/master/assets/download.png)

## icon代码集成

### 拷贝下载的download.zip到项目根目录执行下面的脚本

```bash
# 解压->拷贝到对应目录->清理文件
./handle-iconfont-zip.sh
```

### 添加两个icon全局组件

添加font-icon组件

```javascript
//src/components/font-icon.vue
<template lang="html">
  <i v-if="id" class="iconfont" :class="id"></i>
</template>

<script>
export default {
    name: 'font-icon',
    props: {
        id: {
            type: String,
            default: ''
        }
    }
};
</script>
```

添加svg-icon组件

```javascript
//src/components/svg-icon.vue
<template lang="html">
    <svg v-if="iconId" class="svgicon" aria-hidden="true">
        <use :xlink:href="iconId"></use>
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    computed: {
        'iconId'() {
            return this.id ? `#${this.id}` : '';
        }
    }
};
</script>
```

为什么是全局组件?因为用的实在是太频繁了,注册成全局,一劳永逸!

```javascript
// src/main.js
import Vue from 'vue'
import App from './App.vue'

//icon-font
import SvgIcon from './components/svg-icon.vue';
import FontIcon from './components/font-icon.vue';
require('./css/icon.css')
import './css/icon-font/iconfont.css';
import './css/icon-font/iconfont.js';

Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 使用icon-font

```html
<svg-icon id="icon-vuejs"></svg-icon>
<font-icon id="icon-vuejs"></font-icon>
```

### id是哪里来的?

直接从iconfont平台拷贝即可

![id](https://raw.githubusercontent.com/zhuoqi-chen/vue-iconfont/master/assets/id.png)

## font-icon和svg-icon区别

| aa | font-icon | svg-icon |
| :------------- | :------------- |
| 颜色 | 单色 |多色 |
| 大小控制 | font-size |font-size |
| 颜色控制 | color |color |
| 兼容 | all |ie9+ |
| 性能 | - |不如png |
