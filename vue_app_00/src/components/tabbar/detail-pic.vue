<template>
    <div id="detail-pic">
        <header class="mui-bar mui-bar-nav bg-transparent box-shadow-n">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" data-url='/details'></a>
		</header>
        <div class="mui-scroll-wrapper">
			<div class="mui-scroll">
                <!-- 一行一图 -->
                <div class="one">
                    <img src="../img/hjbs/01.jpg" alt="">
                </div>
                <!-- 一行两图 -->
                <div class="two">
                    <img src="../img/hjbs/0.jpg" alt="">
                    <img src="../img/hjbs/1.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/2.jpg" alt="">
                    <img src="../img/hjbs/3.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/4.jpg" alt="">
                    <img src="../img/hjbs/5.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/6.jpg" alt="">
                    <img src="../img/hjbs/7.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/8.jpg" alt="">
                    <img src="../img/hjbs/10.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/11.jpg" alt="">
                    <img src="../img/hjbs/12.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/13.jpg" alt="">
                    <img src="../img/hjbs/14.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/15.jpg" alt="">
                    <img src="../img/hjbs/16.jpg" alt="">
                </div>
                <div class="two">
                    <img src="../img/hjbs/17.jpg" alt="">
                    <img src="../img/hjbs/18.jpg" alt="">
                </div>
                <div class="two two-last">
                    <img src="../img/hjbs/19.jpg" alt="">
                    <img src="../img/hjbs/20.jpg" alt="">
                </div>
			</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
            mui.init({
                swipeBack: true //启用右滑关闭功能
            });
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.001,
                indicators: false
            });
            var $ = this;
            var as = mui(".mui-bar>a");
             mui(".mui-bar").on("tap", "a", function() {
                for (var i = 0; i < as.length; i++) {
                    as[i].className = "mui-tab-item";
                }
                var url = this.dataset.url;
                $.$router.push(url);
                this.className = "mui-tab-item mui-active";
              });
        },
}
</script>
<style>
    .two-last{
        padding-bottom: 70px;
    }
    .two{
        display: flex;
        justify-content: space-between;
    }
    .two img{
        width: 50%;;
        height: 50%;
        padding: 5px;
        padding-top: 0;
    }
    .one img{
        width: 100%;
        height:200px;
        padding: 5px;
    }
</style>
