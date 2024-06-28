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
一、触发和跳转在同一页面
1.要跳转的页面设置锚点 <section id="fc"></section>
css:
section {
    padding-top: 122px;
    /* 这个值应等于或大于你的 header 高度 */
    margin-top: -122px;
    /* 同样的值但为负 */
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
