说明：vue3记录

# eslint 添加忽略提示信息

rules: {//添加忽略信息
'vue/multi-word-component-names': ['error', {
ignores: ['index'] // 允许 'index' 作为文件名
}]
},

# 配置了静态ip ipconfig 显示的是自动配置ip

网线啥的都正常，就是 ip 冲突

# 在 Vue 3 中使用 <script setup> 语法时，确实不需要显式地在 components 选项中注册组件

# <router-view /> 是 Vue Router 内置的全局组件，不需要显式导入。它会自动从 Vue Router 库中导入并使用。下面是完整的实现步骤，不需要导入 <router-view />

# ref 和 reactive区别

访问值：ref用 访问值.value，而reactive直接访问值。
简单与复杂：用于ref简单类型和单个对象/数组，用于reactive具有多个反应属性的更复杂的对象。

# 旋转个角度（css）

transform: rotate(-45deg);

# 通常支持的格式包括 MP4、WebM 和 Ogg。

# 跳转到页面指定锚点位置

一、触发和跳转在同一页面1.要跳转的页面设置锚点 <section id="fc"></section>
css:
section {
padding-top: 122px;
/_ 这个值应等于或大于你的 header 高度 _/
margin-top: -122px;
/_ 同样的值但为负 _/
}
触发的链接：

<ul class="child">
  <li v-for="({ childName, childLink }, i) in child" :key="i">
      <a :href= 'childLink'  @click="handleClick()">{{ childName }}</a> 
  </li>
</ul>

2.使用 JavaScript 进行平滑滚动

<ul>
  <li><a href="#" @click="scrollToSection('showcase')">风采</a></li>
  <!-- 其他页脚链接 -->
</ul>
js：
scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);//锚点视口高
  const headerOffset = document.querySelector('.header').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;//窗口高
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  //减去固定的 header 高度
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'//平滑移动
  });
}
二、触发和锚点不在同一页面（router-link ）
触发：
<ul class="child">
  <li v-for="({ childName, childLink }, i) in child" :key="i">
      <router-link :to="{ path: '/home', hash: childLink }">{{ childName }}</router-link>
  </li>
</ul>
路由：routes index.js
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    const header = document.querySelector('.header');
    const headerOffset = header ? header.offsetHeight : 0;
    const element = document.querySelector(to.hash);
    console.log('hash---', element)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      return window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

}
return { x: 0, y: 0 };
}

# 动态拼接url

<ul>
    <li v-for="({ img, name }, index) in partners" :key="index">
      <img :src="getImagePath(img)" alt="">
      <span>{{ name }}</span>
    </li>
  </ul>
  const partners = ref([
      { img: 'hw', name: '华为' },
      { img: 'njyd', name: '南京邮电大学' }
    ]);

    const getImagePath = (img) => {
      return new URL(`../assets/images/public/${img}.jpg`,import.meta.url).href;
    };

直接拼接找不到图片
原因:路径问题：
相对路径可能无法正确解析，尤其是在使用 Webpack 或 Vite 等模块捆绑器时，它们需要以特定方式处理资产路径。

构建过程：
在构建过程中，静态资产的相对路径可能会发生变化。使用require或import.meta.url可确保正确解析路径。

# 二维码中间的图片不能超过二维码的30%

有没异型二维码中间是空的

# 大多数 GPU 的设计温度可达 85°C

# 去除nav hover时文字边框

el-dropdown-link:hover,
.el-dropdown-link:focus,
.el-dropdown-link:active {/\*_用于初始化_/
border: none;/_ 在 hover 状态下去除边框 _/
outline: none;/_ 确保没有 outline _/
text-decoration: none;/_ 确保没有文本装饰 _/
}

# src/assest/images/img.png 无法直接加载问题（或静态资源放到根目录 public 中）

使用 @ 符号作为别名路径会导致无法正确解析图片路径。Vite 中对于静态资源的路径处理，应该使用相对路径或通过 new URL 的方式来生成图片路径。

<ul>
    <li v-for="(item, index) in jsonData" :key="index">
        <div>{{ item.title }}</div>
        <div>{{ item.content }}</div>
        <div><img :src="getImageUrl(item.imgName)" alt="" style="width: 50px;height: 50px;"></div>
    </li>
</ul>
1.import alData from '@/assets/images/home/content-3/anli.json' //import 方式导入
2.const loadJsonData = async () => { //接口方式加载 json 文件
try {
    const response = await fetch('/src/assets/images/home/content-3/anli.json');
    jsonData.value = await response.json();
  } catch (error) {
    console.error('JSON 文件加载失败:', error);
  }
},

      const getImageUrl = (fileName) => {//开发环境，生产环境都可以正常加载 src/assest 中静态图片
          // 动态导入图片文件
          return new URL(`../assets/images/home/content-3/${fileName}`, import.meta.url).href;
      }

# 箭头函数

在 JavaScript 中，当使用箭头函数并加上花括号 {} 时，必须显式地使用 return 语句返回值。如果不使用 return 语句，函数将返回 undefined。因此，在使用花括号时，需要确保正确返回计算的值。

# svg 修改颜色

直接在 <path> 元素上使用 fill 属性
直接在 <path> 元素上使用 stroke 属性

# 可以在 main.js 中根据路由条件加载不同的全局样式

const adminPaths = ['/admin', '/dashboard', '/settings'];

router.beforeEach((to, from, next) => {
if (adminPaths.some(path => to.path.startsWith(path))) {
require('@/assets/admin.scss');
} else {
require('@/assets/web.scss');
}
next();
})

# password 添加显隐密码谷歌会自动填充密码并改变样式

autocomplete="new-password"即可。

1.使用element中el-input自带的属性auto-complete（版本二可用）,但是值不能按照官网而要改成new-password。2.使用el-input组件的只读属性（是否）readonly，开始要input框为只读，readonly = "true"。3.注册聚焦事件focus，控制readonly的属性值（true，false）
<el-form-item>
<el-input
v-model="form.password"
auto-complete="new-password"
:readonly="readonlyFlay"
show-password
@focus="handlerIptClick"
/>
</el-form-item>
const readonlyFlay = ref(true)
handlerIpClick() {
readonlyFlay.value = false
}

# el-tree 点击下拉三角背景变成白色

this.items = dataFromBackend.map(item => {
return {
...item,
customProperty: 'My Custom Value', // 自定义属性
};
});

# 如何清空computed对象数据

假设你有一个 computed 属性依赖于某个响应式数据，那么你可以通过修改这个响应式数据来达到清空 computed 属性的效果
computedValue() {
return this.inputValue ? this.inputValue : 'No data';
}
clearComputed() {
this.inputValue = '';
}

# 居中

height: 32px; line-height: 32px;（思考：垂直方向不是绝对居中）
此方法适用于单行文本。line-height等于的属性height将使文本在元素内垂直居中。
但是，这种方法不能处理水平居中，也不适用于多行文本。
display: flex; justify-content: center; align-items: center;：
这种方法更加灵活，它使内容在垂直和水平方向上居中。
它适用于单行和多行文本以及其他内联或块元素。
Flexbox 更加健壮，可以更优雅地处理复杂的布局

# vue2 父子孙数据响应传递

1.父 ->子：props -> 孙：props
孙：emit ->子：emit ->父
2.bus 总线
父：EventBus.$on 孙：EventBus.$emit
3.vueX

# vue2 父子孙数据非响应传递

this.$parent/this.$children
在 Vue 2 中，this.$children 是指当前组件的直接子组件的数组。可以通过这个属性访问子组件的方法和数据。然而，直接使用 this.$children 进行父子组件通信并不是推荐的做法，因为它会导致组件之间的强耦合，降低组件的可维护性和复用性
为什么不推荐使用 this.$children
不稳定的索引：this.$children 返回的是一个数组，数组中子组件的顺序不一定是固定的，容易出错。
强耦合：父组件需要知道子组件的具体实现细节，导致组件之间的依赖关系过于紧密。
难以维护：随着项目的复杂度增加，直接操作子组件会使代码变得难以维护和调试

# cesium BoundingSphere

BoundingSphere 是一种用于表示空间中一组点的最小包围球的几何结构。在 Cesium 中，BoundingSphere 通常用于计算一组点或一个对象的中心位置和范围，以便相机能够飞到并包含整个对象。
BoundingSphere 有以下几个主要属性：
center: 表示球的中心点，通常是 Cartesian3 坐标。
radius: 表示球的半径，通常是以米为单位的浮点数。

# elment select 下拉框背景颜色修改

.el-select-dropdown.el-popper //下拉框 border 属性修改、背景颜色、输入框文字颜色
.el-select-dropdown\_\_item//文字颜色
.el-select-dropdown\_\_item.hover//选中行背景
.el-select-dropdown\_\_item:hover//hover 当前

# 日期范围样式

.el-picker-panel.el-date-range-picker.el-popper//日期下拉背景

.el-date-table td.end-date div,
.el-date-table td.in-range div
.el-date-table td.start-date div//选中日期样式
.el-date-editor .el-range\_\_icon//日期icon
.el-range-editor .el-range-input//输入框回显日期样式
# b != null
undefiend null（只拦击这俩 不拦截[]）
# 逻辑运算符 b ?? false
拦截 '' 0 undefiend null (不拦截[])
# undefiend null []
if (Array.isArray(variable) && variable.length > 0) {
    // variable 也不是空数组
} 
# 读取配置文件
const fs = require('fs');
const path = require('path');

// 读取配置文件
const configPath = path.resolve(__dirname, 'src/assets/config.json');
let config;

try {
  const rawConfig = fs.readFileSync(configPath);
  config = JSON.parse(rawConfig);
} catch (error) {
  console.error('Error reading the config file:', error);
  config = { ip: 'localhost', port: 8080 }; // 设置默认值
}

module.exports = {
  devServer: {
    host: '0.0.0.0', // 绑定到所有网络接口
    port: config.port || 8080, // 使用JSON配置文件中的端口
    open: true, // 自动打开浏览器
    public: `${config.ip}:${config.port}`, // 使用JSON配置文件中的IP和端口
  }
};
# 在config.js 获取本地ip
import { defineConfig } from 'vite';
import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  let localIP = '127.0.0.1'; // 默认返回localhost

  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    
    if (interfaceName.includes('VMware') || interfaceName.includes('VirtualBox')) {
      continue;
    }

    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        localIP = alias.address;
        if (interfaceName.includes('WLAN') || interfaceName.includes('Wi-Fi')) {
          return alias.address;
        }
      }
    }
  }

  return localIP;
}

const localIP = getLocalIP();

export default defineConfig({
  define: {
    'import.meta.env.VITE_LOCAL_IP': JSON.stringify(localIP),
  },
  server: {
    host: localIP,
    port: 3000,
    open: true,
  },
});
这种方式错误
define: {
  'import.meta.env': {//注入到环境变量
    VITE_LOCAL_IP: JSON.stringify(localIP),
  },
},
因为这种配置方式并未实际替换 import.meta.env 对象的内容，只是试图将整个对象替换为指定的值，这样会导致无法正确访问到 VITE_LOCAL_IP 变量。


