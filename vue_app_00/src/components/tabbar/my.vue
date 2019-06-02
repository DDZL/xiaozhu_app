<template>
    <div class="app-my">
        <div class="mui-scroll-wrapper">
			<div class="mui-scroll">
                <!-- 用户头像 -->
                <div class="bg bg-blur"></div>
                <div class="content-front">
                    <div class="yonghu">
                        <p>小猪壹号</p>
                        <input type="button" value="签到">
                    </div>
                    <div>
                        <img src="../img/04.jpg" class="touxiangk">
                    </div>
                    <!-- 我的订单 -->
                    <div class="mt-f30">
                        <div class="my-indent">
                            <p class="text-black">我的订单</p>
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/dingdan.png" class="img-size">
                                        <p class="text-black">全部订单</p>
                                        <p>查看订单详情</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_order_invoice.png" class="img-size">
                                        <p class="text-black">开具发票</p>
                                        <p>开票历史及抬头</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_order_smart_lock.png" class="img-size">
                                        <p class="text-black">打开门锁</p>
                                        <p>预定后可使用</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 我的钱包 -->
                    <div class=" mt-10p">
                        <div class="my-indent">
                            <p class="text-black">我的钱包</p>
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_share.png" class="img-size">
                                        <p class="text-black">邀请好友</p>
                                        <p>代金券多邀多得</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_fk_voucher.png" class="img-size">
                                        <p class="text-black">代金券</p>
                                        <p>￥1000</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_fk_integral.png" class="img-size">
                                        <p class="text-black">积分</p>
                                        <p>0</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 广告轮播 -->
                    <div class="my-all mt-10p">
                        <mt-swipe :auto="4000" :show-indicators="true" class="img-lunbo">
                            <mt-swipe-item>
                                <img src="../img/s-1.jpg"  class="img-lunbo">
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <img src="../img/s-2.jpg"  class="img-lunbo">
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <img src="../img/s-3.jpg"  class="img-lunbo">
                            </mt-swipe-item>
                            <mt-swipe-item>
                                <img src="../img/s-4.jpg"  class="img-lunbo">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                    <!-- 我的特权 -->
                    <div class=" mt-10p">
                        <div class="my-indent">
                            <p class="text-black">我的特权</p>
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_order_amount.png" class="img-size">
                                        <p class="text-black">免押入住</p>
                                        <p>未开通</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_live_before_pay.png" class="img-size">
                                        <p class="text-black">先住后付</p>
                                        <p>未授权</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_biz.png" class="img-size">
                                        <p class="text-black">商旅认证</p>
                                        <p>未认证</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 更多功能 -->
                    <div class=" mt-10p">
                        <div class="my-indent">
                            <p class="text-black">更多功能</p>
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_order_amount.png" class="img-size">
                                        <p class="text-black">点评</p>
                                        <p>入住后可发表</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/icon_live_before_pay.png" class="img-size">
                                        <p class="text-black">小猪管家</p>
                                        <p>专业民宿保洁</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_biz.png" class="img-size">
                                        <p class="text-black">常用入住人</p>
                                        <p>共0位入住人</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 更多功能2 -->
                    <div class="">
                        <div class="my-indent pt-0">
                            <ul class="mt-0">
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_biz.png" class="img-size">
                                        <p class="text-black">收件地址</p>
                                        <p>管理收件地址</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <img src="../img/me_biz.png" class="img-size">
                                        <p class="text-black">联系客服</p>
                                        <p>在线解答疑问</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                <!-- 房东按钮 -->
                    <div class="my-all">
                        <input type="button" value="我要成为房东">
                    </div>
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
    }
    };
</script>
<style scoped>
.my-all input {
  width: 100%;
  height: 40px;
  margin-bottom: 58px;
  text-align: center;
  margin-top: 10px;
  border: none;
}
.img-lunbo {
  width: 100%;
  height: 105px;
}
.img-size {
  width: 33px;
}
.my-indent ul li p {
  font-size: 10px;
  margin-bottom: 2px;
}
.my-indent ul li {
  width: 113px;
  text-align: center;
}
.my-indent ul {
  list-style: none;
  padding-left: 0;
  display: flex;
}
.text-black {
  color: black;
}
.my-indent {
  background: white;
  height: 155px;
  margin: 0 36px 0 36px;
  border-radius: 2px;
}
.my-all {
    height: 110px;
    margin: 0 36px 0 36px;
    border-radius: 2px;
}
.touxiangk {
  float: right;
  margin: -49% 5% 0 0;
  width: 30%;
  height: 115px;
  border: 5px solid white;
  border-radius: 50%;
}
.yonghu {
  float: left;
  margin: -40% 0 0 5%;
}
.yonghu p {
  font-size: 1.8rem;
  color: white;
}
.yonghu input {
  width: 70px;
  height: 28px;
  border: 1px solid white;
  background: transparent;
  font-size: 0.5rem;
  color: white;
  padding: 0 0 0 20px;
  background: url("../img/jiaoyin.png") 8px 3px no-repeat;
  background-size: 30%;
}
.bg {
  background: url("../img/04.jpg");
  height: 100%;
  height: 300px;
  text-align: center;
}
.bg-blur {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(5px);
  /* 设置图片模糊 */
}
.content-front {
  position: relative;
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-f30 {
  margin-top: -30px;
}
.mt-10p {
  margin-top: 10px;
}
.pt-0 {
  padding-top: 0 !important;
}
.h-96 {
  height: 96px !important;
}
</style>
