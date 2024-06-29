<template>
    <div class="home-container ">
        <section id="fc">风采</section>
        <div style="height:500px"></div>
        <section id="mm">面貌</section>
        <ul class="right-button">
            <li><img src="../assets/images/home/u145.svg" alt=""></li>
            <li><img src="../assets/images/home/u148.svg" alt=""></li>
            <li><img src="../assets/images/home/qq_u151.svg" alt=""></li>
            <li><el-icon>
                    <MoreFilled />
                </el-icon></li>
        </ul>
    </div>
</template>

<script setup>
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
    }

}
</style>