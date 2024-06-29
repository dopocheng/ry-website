<template>
    <div class="footer">
        <div class="footer-top">
            <div>合作伙伴</div>
            <img src="../assets/images/home/u33.png" alt="">
        </div>

        <div class="footer-middle">
            <div class="left">
                <ul class="parent">
                    <li v-for="({ name, link, child }, index) in nav" :key="index">
                        <a :href="link">{{ name }}</a>
                        <div v-if="child.length > 0">
                            <ul class="child">
                                <li v-for="({ childName, childLink }, i) in child" :key="i">
                                    <router-link :to="{ path: '/home', hash: childLink }">{{ childName }}</router-link>
                                    <!-- <a :href= 'childLink'  @click="handleClick()">{{ childName }}</a> -->
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="middle">
                <QRCode value="https://fanyi.baidu.com/mtpe-individual/multimodal?query=Partners&lang=zh2en" />
                <!-- <img src="../assets//images/home/u19.svg" alt=""> -->
                <div class="wx-code">微信公众号</div>
            </div>
            <div class="right">
                <!-- <Card :width="300"> -->
                <p>睿鹰时空（江苏）科技股份有限公司</p>
                <!-- <Divider></Divider> -->
                <hr class="divider">
                <p><strong>电话：</strong>025-xxxxx</p>
                <p><strong>手机：</strong>141441414141</p>
                <p><strong>邮箱：</strong>rykj@163.com</p>
                <p><strong>地址：</strong>江苏省南京市玄武区童卫路5号南理工科技创新园1号楼506室</p>
                <!-- </Card> -->
            </div>
        </div>

        <div class="footer-bottom">
            <div>本站涵盖的内容、图片、视频等模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除</div>
            <div>本网站内所有照片、视频、文字等资料信息，未经我司授权使用的任何公司、企业、个人等，我司会追究相关法律责任，请多理解。</div>
            <div class="bq">Copyright © 2024 | 版权所有 : 睿鹰时空（江苏）科技股份有限公司 | 苏ICP备xxxxxxxx</div>
            <div class="fw">
                <div>今日访问:<span>10241</span></div>
                <div>总访问量:<span>222222</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const nav = ref([
    {
        name: '关于我们', link: '/aboutus', child: [{ childName: '公司简介', childLink: '#gsjj' }, { childName: '荣誉资质', childLink: '#ryzz' }, { childName: '企业文化', childLink: '#qywh' }, { childName: '合作伙伴', childLink: '#hzhb' }]
    },
    {
        name: '新闻资讯', link: '/home', child: [{ childName: '公司新闻', childLink: '#gsxw' }, { childName: '行业新闻', childLink: '#hyxw' }]
    },
    {
        name: '产品服务', link: '/home', child: []
    },
    {
        name: '联系我们', link: '/home', child: []
    }
])
</script>

<style scoped>
.footer {
    width: 100%;
    /* background-color: #f8f9fa; */
    display: flex;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);
    /* box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
}

.footer-top {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    flex-direction: column;

    div {
        width: 207px;
        height: 91px;
        font-weight: 700;
        font-size: 42px
    }

    img {
        width: 100%;
        height: 794px;
    }
}

.footer-middle {
    width: 100%;
    height: 179px;
    background-color: rgba(39, 96, 157, 1);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;

    .left {
        height: 125px;
        margin-right: -175px;

        .parent {
            display: flex;

            li {
                width: 168px;
                height: 49px;
                font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
                font-weight: 700;
                font-size: 20px;
                color: #FEFEFE;
            }
        }

        .child {
            display: block;

            li {
                width: 72px;
                height: 30px;
                display: flex;
                font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
                font-weight: 700;
                font-style: normal;
                font-size: 16px;
                color: rgba(254, 254, 254, 0.588235294117647);
            }

        }


        /* width: 200px; */
    }

    ;

    .middle {
        text-align: center;

        .m-qrcode.bordered {
            width: 100px !important;
            height: 100px !important;
        }

        ;

        .wx-code {
            padding: 2px 2px 2px 2px;
            font-family: 'Arial Normal', 'Arial', sans-serif;
            font-weight: 400;
            font-size: 13px;
            color: #FEFEFE;
        }
    }

    .right {
        p {
            padding: 2px 2px 2px 2px;
            font-family: 'Arial Normal', 'Arial', sans-serif;
            font-weight: 400;
            font-size: 13px;
            color: #FEFEFE;
        }

        .divider {
            border: 0;
            height: 1px;
            background: #ddd;
            margin: 0 0 5px 0;
        }
    }

    ;
}

.footer-bottom {
    width: 100%;
    height: 133px;
    background-color: rgba(7, 81, 169, 0.996078431372549);

    div {
        /* height: 25px; */
        padding: 2px 2px 2px 2px;
        font-family: 'Arial Normal', 'Arial', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        letter-spacing: normal;
        color: #F7F7F7;
        text-align: center;
        background-color: transparent;
        border-color: transparent;
    }

    .bq {
        font-weight: 400;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.592156862745098);

    }

    .fw {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        span {
            font-size: 22px;
            color: #F8E306;


        }
    }
}
</style>