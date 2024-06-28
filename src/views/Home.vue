<template>
    <div class="home-container ">
        <section id="fc">风采</section>
        <div style="height:500px"></div>
        <section id="mm">面貌</section>
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
</style>