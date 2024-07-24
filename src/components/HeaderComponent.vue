<template>
    <div class="header">
        <div class="header-left">
            <img src="../assets/images/home/u59.png" alt="" class="u59-img">
            <div class=""></div>
            <img src="../assets/images/home/u60.png" alt="" class="u60-img">
        </div>
        <div class="header-middle">

            <ul>
                <li v-for="({ name, link, children }, index) in nav" :key="index">

                    <div v-if="children && children.length > 0">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                {{ name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu v-for="(item, i) in children" :key="i">
                                    <el-dropdown-item>{{ item.name }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                    <div v-else>
                        <a :href="link">{{ name }}</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header-right"><img src="../assets/images/home/u57.svg" alt=""><span>025-222222</span></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const nav = ref([
    {
        name: '首页', link: '/home', children: []
    },
    {
        name: '产品服务', link: '/home', children: []
    },
    {
        name: '解决方案', link: '/home',
        children: [
            { name: '公司介绍', link: '/about/company' },
            { name: '团队介绍', link: '/about/team' }
        ]
    },

    {
        name: '新闻资讯', link: '/home', children: [
            { name: '公司新闻', link: '/news/company' },
            { name: '行业新闻', link: '/news/industry' }
        ]
    },
    {
        name: '在线商城', link: '/home', children: []
    },
    {
        name: '关于我们', link: '/aboutus', children: []
    },
    {
        name: '联系我们', link: '/home', children: []
    },

])
</script>

<style>
.block-col-2.el-dropdown-link {
    display: flex;
    align-items: center;
    background-color: aqua !important;
}
</style>
<style scoped>
.el-dropdown {
    line-height: normal !important;
    font-size: inherit !important;

    border: 0px;

    .el-dropdown-link {
        text-decoration: none;
        border: none;
        /* 默认情况下去除边框 */
    }

    .el-dropdown-link:hover,
    .el-dropdown-link:focus,
    .el-dropdown-link:active {
        /**用于初始化*/
        border: none;
        /* 在 hover 状态下去除边框 */
        outline: none;
        /* 确保没有 outline */
        text-decoration: none;
        /* 确保没有文本装饰 */
    }

    .el-dropdown-link:hover {
        border: 0px !important;
        display: flex;
        align-items: center;
    }
}

.el-dropdown:hover {
    border: 0px !important;
}

.header {
    width: 100%;
    height: 122px;
    /* 或者你想要的高度 */
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 145px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);

}

.header-left {
    display: flex;
    align-items: center;


    .u59-img {
        width: 83px;
        height: 86px;
    }

    ;

    div {
        width: 15px;
    }

    .u60-img {

        /* border-width: 0px; */
        /* left: 0px; */
        /* top: 0px; */
        width: 244px;
        height: 56px;
    }
}



.header-middle {
    /* border-width: 0px;
    position: absolute; */
    left: 0px;
    top: 0px;
    width: 802px;
    height: 30px;

    ul {
        display: flex;
    }

    li {
        left: 0px;
        top: 0px;
        width: 115px;
        height: 30px;
        display: flex;
    }
}

.header-right {
    width: 188px;
    height: 52px;
    display: flex;
    font-size: 20px;
    color: #F90000;

    img {
        transform: rotate(-45deg);
        width: 20px;
        height: 24px;
    }

    ;

    span {

        /* position: absolute; */
        /* left: 0px;
        top: 0px;
        width: 188px;
        height: 52px; */
        padding: 2px 2px 2px 6px;
        /* font-family: 'Arial Normal', 'Arial', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        letter-spacing: normal;
        color: #F90000;
        vertical-align: none;
        text-align: left;
        text-transform: none;
        background-color: transparent;
        border-color: transparent; */
    }

}

nav {
    display: flex;
}

button {
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>