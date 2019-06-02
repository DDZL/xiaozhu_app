<template>
    <div class="app-collect">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <div class="bg-img">
                    <a href="javascript:;" class="fengzu">新建分组</a>
                    <p class="bg-text">您还没有收藏过任何房源</p>
                    <p class="xuankuang">
                        <a href="javascript:;">
                            <input type="text" placeholder="开始小猪的发现之旅" class="xuankuang-input">
                            <img src="">
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bottom from "./bottom.vue"
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
			deceleration:0.001,
			indicators:false
     });
    }
}
</script>
<style scoped>
    @media screen and (min-width: 414px) {
        .bg-img{height: 736px;}
    }
    @media screen and (max-width: 375px) {
        .app-collect .bg-img{height:812px;}
    }
     ::-webkit-input-placeholder{
                color: black;
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 1px;
            }
    .xuankuang-input{
        background: url('../img/nav_collection_prompt_arrow.png')90% 0 no-repeat;
        background-size: 10%;
        margin: 0;
        border: 0;
    }
    .xuankuang{
        background: white;
        margin: 0 auto;
        width: 90%;
        height: 50px;
        line-height: 50px;
        border-radius: 30px;
    }
    .bg-text{
        width: 65%;
        font-size: 32px;
        color:white;
        margin-left: 10%;
        line-height: 50px;
        padding-top:25%;
        letter-spacing: 2px;
    }
    .bg-img .fengzu{
        float:right;
        padding: 4%;
        color:white;
        opacity: 0.8;
        font-size:15px;
        letter-spacing: 1px; /* 文字间隔 */
    }
    .app-collect .zuti{
        position: absolute;
    }
    .bg-img{
        height: 681px;
        background-image: url('../img/02.jpg');
        background-repeat: no-repeat;
    }
</style>
