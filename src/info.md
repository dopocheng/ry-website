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
