<template>
    <div class="home-container ">

        <ul class="right-button">
            <li><img src="../assets/images/home/u145.svg" alt=""></li>
            <li>
                <el-popover :popper-class="'el-pop'" popper1-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; 
                     padding: 20px;" placement="left" trigger="click">
                    <!-- <img src="../assets/images/home/u148.svg" alt=""> -->
                    <template #reference>
                        <img src="../assets/images/home/u148.svg" alt="">
                        <!-- <el-avatar src="https://avatars.githbusercontent.com/u/72015883?v=4" /> -->
                    </template>
                    <template #default>
                        <qrcode-vue class="qrcode"
                            value="https://fanyi.baidu.com/mtpe-individual/multimodal?query=Partners&lang=zh2en"
                            :size="100" />
                    </template>
                </el-popover>
            </li>
            <li>
                <el-popover :popper-class="'el-pop'" popper1-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; 
                     padding: 20px;" placement="left" trigger="click">
                    <!-- <img src="../assets/images/home/u148.svg" alt=""> -->
                    <template #reference>
                        <img src="../assets/images/home/qq_u151.svg" alt="">
                        <!-- <el-avatar src="https://avatars.githbusercontent.com/u/72015883?v=4" /> -->
                    </template>
                    <template #default>
                        <qrcode-vue class="qrcode"
                            value="https://fanyi.baidu.com/mtpe-individual/multimodal?query=Partners&lang=zh2en"
                            :size="100" />
                    </template>
                </el-popover>
            </li>
            <li><el-icon>
                    <MoreFilled />
                </el-icon></li>
        </ul>

        <div class="content-1">
            <img src="../assets/images/home/u139.png" alt="">
        </div>
        <div class="content-2">
            <div class="title">
                <p>现代化、信息化指挥管理中心</p>
                <p>专注于国产地理信息系统、态势标绘、模拟推演平台的研发</p>
            </div>
            <div class="vidiao">宣传视频</div>
        </div>
        <div class="content-3">
            <p>解决方案 客户案例</p>
            <ul>
                <li v-for="(item, index) in jsonData" :key="index">
                    <div class="test">
                        <div class="title">{{ item.title }}</div>
                        <div class="writing-3">{{ item.content }}</div>
                    </div>
                    <div style="display: flex;"><img :src="getImageUrl(item.imgName)" alt=""
                            style="width: 305px;height: 232px;"></div>
                </li>
            </ul>
        </div>
        <div id="content-4" ref="container" class="conte1nt-4">
            <!-- <p>产品与服务</p> -->

            <img id="image" v-for="(image, index) in jsonData" :key="index" class="image"
                :src="getImageUrl(image.imgName)" @mouseover="isMoving = false" @mouseout="isMoving = true"
                :style="{ left: positions[index] + 'px' }" alt="Image" />


            <!-- <ul id="image" style="display: flex;">
                <li v-for="(item, index) in jsonData" :key="index" style="display: flex;width: 500px;">
                    <img :src="getImageUrl(item.imgName)" alt="" style="width: 100px;height: 100px;">
                </li>
            </ul> -->

        </div>
        <div class="content-5"></div>
        <div class="content-6"></div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import QrcodeVue from 'qrcode.vue';
// import doMove from "@/assets/js/slider.js"
// import alData from '@/assets/images/home/content-3/anli.json'
let jsonData = ref(null)
onMounted(async () => {


    const container = document.getElementById('content-4');
    const image = document.getElementById('image');
    console.log(container, image)
    // doMove(container, image)
    console.log(document.getElementById('content-4'));
    await loadJsonData();
    await nextTick()
    initializePosition()
    interVal = setInterval(movingImages, 20)

})
const positions = ref([])
const isMoving = ref(true)
const speed = 2
let interVal
const container = ref(null)

const initializePosition = () => {
    let containerWidth = container.value.clientWidth
    console.log(jsonData.value)
    positions.value = jsonData.value.map((_, index) => containerWidth + index * 110)
}
const movingImages = () => {
    console.log(6)
    if (isMoving.value) {
        const containerWidth = container.value.clientWidth
        positions.value = positions.value.map((pos) => {
            pos -= speed
            if (pos < -100) {
                pos = containerWidth
            }
            return pos
        })
    }
}
const loadJsonData = async () => {
    try {
        const response = await fetch('/src/assets/images/home/content-3/anli.json');
        jsonData.value = await response.json();
    } catch (error) {
        console.error('JSON 文件加载失败:', error);
    }
},
    getImageUrl = (fileName) => {
        // 动态导入图片文件
        return new URL(`../assets/images/home/content-3/${fileName}`, import.meta.url).href;
    }
</script>

<style scoped>
#content-4 {
    height: 100px;
    overflow: hidden;
    position: relative;
    border: 1px solid #000;
}

#image {
    /* position: absolute; */
    /* width: 100px;
    height: 100px; */
}

#content-4 {
    width: 500px;
    height: 150px;
    overflow: hidden;
    position: relative;
    border: 1px solid #000;
}

#image {
    position: absolute;
    width: 100px;
    height: 100px;
}

.content-3 {
    flex-direction: column;
    align-items: center;
    display: flex;

    ul {
        width: 1300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /** 超出区域的部分换行 */
        flex-wrap: wrap;
    }

    ul li {
        display: flex;
        /* background-color: red; */
        background-color: #f6f5f5;
        width: 642px;
        height: 237px;
        align-items: center;
        justify-content: space-around;
        margin-top: 15px;

        .writing-3 {
            font-size: 19px;
            text-align: left;
            line-height: 32px;
        }
    }
}

.test {
    background-color: white;
    width: 303px;
    height: 204px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);

    .title {
        /* font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif; */
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        text-align: left;
    }
}

.content-2 .title,
.content-3 {
    p:first-child {
        margin-top: 15px;
        height: 60px;
        display: flex;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        font-weight: 700;
        font-size: 25px;
    }
}

.content-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p:last-child {
        color: #cccccc;
    }

}


.vidiao {
    background-color: aquamarine;
    width: 1241px;
    height: 618px;
    display: flex;
    justify-content: center;
}

.content-1 img {
    width: 100%;
    height: 853px
}

.home-container {
    /* height: 1000px; */
    border: solid 1px red;
    /* background-color: lightblue; */
}

.section {
    padding-top: 122px;
    /* 这个值应等于或大于你的 header 高度 */
    margin-top: -122px;
    /* 同样的值但为负 */
}

.right-button {
    position: fixed;
    right: 15px;
    bottom: 300px;
    z-index: 10;

    li {
        display: flex;
        justify-content: center;
        box-shadow: -10px 10px 5px rgba(0, 0, 0, 0.5);
        /* 添加左侧底部阴影 */
        border-width: 0px;
        left: 5px;
        top: 175px;
        /* width: 48px; */
        height: 45px;
        display: flex;
        margin-bottom: 10px;
        height: 45px;
        background-color: #eee;

        img {
            font-size: 16px;
            padding: 5px;
        }

        .el-icon {
            font-size: 40px;
        }

        .elpop {
            border-radius: 40px !important;
            width: 0px;
            min-width: 120px !important;
        }
    }

}

.elpop {
    border-radius: 40px !important;
    width: 0px;
    min-width: 120px !important;
}

::v-deep el-popper .is-light el-popover {
    border-radius: 40px !important;
    width: 0px;
    min-width: 120px !important;
}
</style>
<style>
.el-pop {
    /*提示框样式*/
    border-radius: 10px !important;
    width: 0px !important;
    min-width: 126px !important;
}
</style>