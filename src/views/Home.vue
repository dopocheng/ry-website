<template>
    <div class="home-container ">
        <section id="fc">风采</section>
        <div style="height:500px"></div>
        <section id="mm">面貌</section>
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
    </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue';
</script>

<style scoped>
.home-container {
    height: 1000px;
    border: solid 1px red;
    background-color: lightblue;
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