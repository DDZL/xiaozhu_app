<template>
	<div class="app-home">
		<div class="mui-scroll-wrapper">
			<div class="mui-scroll">
						<!-- 轮播图 -->
						<mt-swipe :auto="3000" :show-indicators="true" class="h-350">
							<mt-swipe-item>
								<img src="../img/zz/1.jpg"  class="h-350">
							</mt-swipe-item>
							<mt-swipe-item>
								<img src="../img/zz/2.jpg"  class="h-350">
							</mt-swipe-item>
							<mt-swipe-item>
								<img src="../img/zz/3.jpg"  class="h-350">
							</mt-swipe-item>
							<mt-swipe-item>
								<img src="../img/zz/4.jpg"  class="h-350">
							</mt-swipe-item>
							<mt-swipe-item>
								<img src="../img/zz/5.jpg"  class="h-350">
							</mt-swipe-item>
							<mt-swipe-item>
								<img src="../img/zz/6.jpg"  class="h-350">
							</mt-swipe-item>
						</mt-swipe>
				<!-- 选择地点、日期 -->
				<div class="didian">
					<div class="zuoyou mt--60">
							<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed w-350 pb-10-10 border-radius-5p border-none">
									<li class="mui-table-view-cell h-45 d-flex">
											<img src="../img/icon_city.png" class="w-8 h-90">
								<p class="font-15 ml-5 mt-10">广州</p>
								<p class="pl-55 mt-10">我的附近</p>
									</li>
							<li class="mui-table-view-cell h-45 d-flex">
											<img src="../img/imv2_chatmsg_calendar.png" class="w-8 h-90">
								<p class="font-15 ml-5 mt-10">4.16 今天 - 4.17 周三</p>
								<p class="pl-35 mt-10">共1晚</p>
									</li>
							<li class="mui-table-view-cell h-45 d-flex bg-transparent">
											<img src="../img/search_filter_nearby.png" class="w-8 h-90">
								<p class="font-15 ml-5 mt-10">位置/地名/房源</p>
								<p class="pl-55 mt-10"> > </p>
									</li>
							<button class="mint-button mint-button--danger mint-button--large border-radius-50p ml-9 w-b95">
									<label class="mint-button-text">
										<font style="vertical-align: inherit;">
											<font style="vertical-align: inherit;">搜索</font>
										</font>
									</label>
								</button>
							</ul>
					</div>	
				</div>
				<!-- 古香古色 -->
						<div class="text-center mt-30p position-relative">
					<p class="font-22 text-black font-bold">{ 古 香 古 色 }</p>
					<p>当日不知为客乐 如今回首却销魂</p>
					<div class="yiju">
						<span class="font-15">宜居2人</span>
						<span class="text-red">￥88</span>
						<div class="quang"></div>
					</div>
					<div class="introduce">
						<div class="introduce1 font-15 text-white">普吉岛</div>
						<div class="introduce2 font-15 text-white">游玩异国他乡，抛弃疲劳只为舒适</div>
					</div>
				</div>
				<!-- 商品轮播图1 -->
				<mt-swipe :auto="4000" :show-indicators="true" class="small">
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/0.jpg"></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/01.jpg"></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/02.jpg"></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/03.jpg"></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/04.jpg"></router-link>
						</mt-swipe-item>
				</mt-swipe>
				<!-- 依水而居 -->
						<div class="text-center mt-30p position-relative">
							<p class="font-22 text-black font-bold">{ 依 水 而 居 }</p>
							<p>傍池居住有渔家 收网摇船到浅沙</p>
							<div class="yiju">
								<span class="font-15">宜居2人</span>
								<span class="text-red">￥88</span>
								<div class="quang"></div>
							</div>
							<div class="introduce">
								<div class="introduce1 font-15 text-white">重庆</div>
								<div class="introduce2 font-15 text-white">朝闻百年争鸣,夜听泉水叮咚</div>
							</div>
						</div>
					<!-- 商品轮播图2 -->
				<mt-swipe :auto="3000" :show-indicators="true" class="small">
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/5.jpg" alt=""></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/3.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/4.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/1.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/6.jpg" alt="">
						</mt-swipe-item>
				</mt-swipe>
					<!-- 最新活动 -->
						<div class="text-center mt-30p position-relative">
							<p class="font-22 text-black font-bold">{ 最 新 活 动 }</p>
							<p>不安一隅 给出行多一个理由</p>
						</div>
					<!-- 商品轮播图2 -->
				<mt-swipe :auto="3500" :show-indicators="true" class="small1">
						<mt-swipe-item>
							<router-link to="details"><img src="../img/zz1/10.jpg" alt=""></router-link>
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/9.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/8.jpg" alt="">
						</mt-swipe-item>
				</mt-swipe>
			<!-- 左右滑动导航栏 -->
					<div class="zuoyou">
							<div id="slider" class="mui-slider mui-fullscreen">
								<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
									<div class="mui-scroll">
										<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
											<p class="font-bold text-black text-left">商旅合作</p>
											<p class="font-12">专属优惠，发票无忧</p>
										</a>
										<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
											<p class="font-bold text-black text-left">免押入住</p>
											<p class="font-12">身份验证，立享免押</p>
										</a>
										<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
											<p class="font-bold text-black text-left">蚂蚁花呗</p>
											<p class="font-12">先住后付，分期还款</p>
										</a>
										<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
											<p class="font-bold text-black text-left">小猪保险</p>
											<p class="font-12">房客房东，免费保险</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<!-- 汉文化 -->
					<!-- <div class="wenjun">
						<a href="#">
							<img src="../img/zz1/11.jpg">
							<p>文君故里，体验绝美汉文化</p>
						</a>
					</div> -->
					<!-- 城市精选1 -->
					<div class="city">
						<div class="quangquang"><img src="../img/zz-city/city_chengdu.png"></div>
						<div class="chengdu">
							<p>成都</p>
							<p>CHENGDU ></p>
						</div>
					</div>
					<!-- 精选轮播图1 -->
					<div class="text-center position-relative">
							<div class="jingxuan">
								<span class="font-15">宜居2人</span>
								<span class="text-red">￥88</span>
								<div class="quang"></div>
							</div>
							<div class="touxiang">
								<div class="touxiang1">
									<img src="../img/cleaner_male.png">
								</div>
								<div class="touxiang2 font-15">Macky_forever</div>
							</div>
						</div>
					<mt-swipe :auto="2800" :show-indicators="true" class="small">
						<mt-swipe-item>
							<img src="../img/zz1/5.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/3.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/4.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/1.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/6.jpg" alt="">
						</mt-swipe-item>
				</mt-swipe>
				<!-- 城市精选2 -->
					<div class="city1">
						<div class="quangquang"><img src="../img/zz-city/city_hangzhou.png"></div>
						<div class="chengdu">
							<p>杭州</p>
							<p>HANGZHOU ></p>
						</div>
					</div>
					<!-- 精选轮播图2 -->
					<div class="text-center position-relative">
							<div class="jingxuan">
								<span class="font-15">宜居2人</span>
								<span class="text-red">￥88</span>
								<div class="quang"></div>
							</div>
							<div class="touxiang">
								<div class="touxiang1">
									<img src="../img/cleaner_male.png">
								</div>
								<div class="touxiang2 font-15">Macky_forever</div>
							</div>
						</div>
					<mt-swipe :auto="4000" :show-indicators="true" class="small">
						<mt-swipe-item>
							<img src="../img/zz1/5.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/3.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/4.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/1.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/6.jpg" alt="">
						</mt-swipe-item>
				</mt-swipe>
				<!-- 城市精选3 -->
					<div class="city1">
						<div class="quangquang"><img src="../img/zz-city/city_shenzhen.png"></div>
						<div class="chengdu">
							<p>深圳</p>
							<p>SHENZHEN ></p>
						</div>
					</div>
					<!-- 精选轮播图3 -->
					<div class="text-center position-relative">
							<div class="jingxuan">
								<span class="font-15">宜居2人</span>
								<span class="text-red">￥88</span>
								<div class="quang"></div>
							</div>
							<div class="touxiang">
								<div class="touxiang1">
									<img src="../img/cleaner_male.png">
								</div>
								<div class="touxiang2 font-15">Macky_forever</div>
							</div>
						</div>
					<mt-swipe :auto="4000" :show-indicators="true" class="small mb-40">
						<mt-swipe-item>
							<img src="../img/zz1/5.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/3.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/4.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/1.jpg" alt="">
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../img/zz1/6.jpg" alt="">
						</mt-swipe-item>
				</mt-swipe>
  	</div>
	</div>
	
</div>
</template>
<script>
import details from './details'

export default {
	routes:[
				{
					path:'./details.vue',
					name:'details',
				}
	],
  mounted() {
		// console.log('object')
    mui.init({
      swipeBack: true //启用右滑关闭功能
		});
		mui('.mui-scroll-wrapper').scroll({
			deceleration:0.001,
			indicators:false
	});
	}
};
</script>
<style>

.touxiang2 {
  padding: 7px;
  height: 25px;
  line-height: 12px;
  border-radius: 15px;
  background: white;
  float: left;
  margin-left: 5px;
  margin-top: 25px;
}

.touxiang1 img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  float: left;
}
.app-home .touxiang {
  width: 295px;
  height: 25px;
  position: absolute;
  top: 210px;
  left: 10px;
  z-index: 10;
}
.jingxuan .quang {
  width: 35px;
  height: 35px;
  border: 1px solid purple;
  border-radius: 50%;
  position: relative;
  left: 17px;
  top: 5px;
  z-index: 1;
}
.app-home .jingxuan {
  height: 130px;
  width: 70px;
  background: white;
  opacity: 0.8;
  z-index: 5;
  right: 18px;
  position: absolute;
  padding-top: 40px;
}
.city1 {
  padding-top: 1px;
  padding-bottom: 60px;
}
.city1 div img {
  width: 50px;
  height: 45px;
}
.city {
  padding-top: 60px;
  padding-bottom: 60px;
}
.city div img {
  width: 50px;
  height: 45px;
}
.chengdu p {
  margin-bottom: 0;
  margin-left: 10px;
  margin-top: 2px;
  letter-spacing: 1px;
}
.chengdu {
  float: left;
}
.quangquang {
  float: left;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
}

.wenjun img {
  width: 480px;
  height: 320px;
}
.app-home .wenjun p {
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 15px;
  height: 30px;
  line-height: 1px;
  background: white;
  opacity: 0.6;
  position: absolute;
  left: 25%;
  bottom: 60px;
  border-radius: 20px;
}
.app-home .wenjun {
  margin-top: 55px;
  position: relative;
}
.didian ul{
	margin: 0 auto;
}
.zuoyou {
	width: 100%;
	margin: 0 auto;
  position: relative;
  z-index: 5;
}
.small1 {
  padding-top: 10px;
}
.small1 .mint-swipe-indicators {
  top: -10px;
  left: 45%;
  transform: translateX(0%);
  z-index: 30;
}
.small1 .mint-swipe-indicators .mint-swipe-indicator {
  width: 6px;
  height: 6px;
}
.introduce2 {
  padding: 7px;
  height: 25px;
  line-height: 12px;
  border-radius: 5px;
  background: black;
  opacity: 0.8;
  float: left;
  margin-left: 5px;
}
.introduce1 {
  width: 55px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  background: black;
  opacity: 0.8;
  float: left;
}
.app-home .introduce {
  width: 300px;
  height: 25px;
  position: absolute;
  top: 305px;
  left: 10px;
  z-index: 10;
}
.small .mint-swipe-indicators {
  top: 0;
  left: 80%;
  transform: translateX(0%);
  z-index: 10;
}
.small .mint-swipe-indicators .mint-swipe-indicator {
  width: 6px;
  height: 6px;
}
.yiju .quang {
  width: 35px;
  height: 35px;
  border: 1px solid purple;
  border-radius: 50%;
  position: relative;
  left: 17px;
  top: 5px;
  z-index: 1;
}
.app-home .yiju {
  height: 130px;
  width: 70px;
  background: white;
  opacity: 0.8;
  z-index: 5;
  top: 62px;
  right: 18px;
  position: absolute;
  padding-top: 40px;
}
.position-relative {
  position: relative;
}
.font-bold {
  font-weight: bold;
}
.text-black {
  color: black;
}
.text-red {
  color: red;
}
.text-white {
  color: white;
}
.text-center {
  text-align: center !important;
}
.bg-transparent::after {
  background-color: transparent !important;
}
.mui-table-view:before {
  background-color: transparent !important;
}
.mui-table-view:after {
  background-color: transparent !important;
}
.w-b95 {
  width: 95% !important;
}
.border-radius-5p {
  border-radius: 5px !important;
}
.border-radius-50p {
  border-radius: 50px !important;
}
.pl-35 {
  padding-left: 30%;
}
.pb-10 {
  padding-bottom: 10px;
}

.pl-55 {
  padding-left: 55%;
}
.d-flex {
  display: flex;
}
.d-inline {
  display: inline;
}
.d-block {
  display: block;
}
.ml-9 {
  margin-left: 9px;
}
.ml-5 {
  margin-left: 5px;
}
.mt--60 {
  margin-top: -60px;
}
.mt-30p {
  margin-top: 30px;
}
.mt-10 {
  margin-top: 10px;
}
.ml-b8 {
  margin-left: 8%;
}
.mb-40 {
  margin-bottom: 40px;
}
.font-22 {
  font-size: 22px;
}
.font-15 {
  font-size: 15px;
}
.font-12 {
  font-size: 12px;
}
.h-45 {
  height: 45px;
}
.h-350 {
  height: 350px !important;
}
.w-350 {
  width: 350px;
}
.w-8 {
  width: 8%;
}
.h-90 {
  height: 90%;
}
.app-exam02 .mint-swipe {
  height: 200px;
}
.n-img {
  width: 60px;
}
.px-375 {
  width: 375px;
}

.app-home .mint-swipe {
  height: 300px;
}
.app-home .mint-swipe img {
  width: 100%;
}

.mui-table-view-cell {
  padding: 5px !important;
}
.mui-table-view-cell a {
  padding: 1px !important;
}
.app-home ul.mui-grid-9 {
  background-color: white;
}

/* 左右滑动导航栏样式 */
.text-left {
  text-align: left !important;
}

.mui-segmented-control .mui-control-item {
  line-height: 15px !important;
}
.zuoyou .mui-fullscreen {
  height: 110px;
  position: absolute;
}

.mui-pull-top-tips {
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -25px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  z-index: 1;
}

.mui-bar ~ .mui-pull-top-tips {
  top: 24px;
}

.mui-pull-top-wrapper {
  width: 42px;
  height: 42px;
  display: block;
  text-align: center;
  background-color: #efeff4;
  border: 1px solid #ddd;
  border-radius: 25px;
  background-clip: padding-box;
  box-shadow: 0 4px 10px #bbb;
  overflow: hidden;
}

.mui-pull-top-tips.mui-transitioning {
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
}

.mui-pull-top-tips .mui-pull-loading {
  /*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
  margin: 0;
}

.mui-pull-top-wrapper .mui-icon,
.mui-pull-top-wrapper .mui-spinner {
  margin-top: 7px;
}

.mui-pull-top-wrapper .mui-icon.mui-reverse {
  /*-webkit-transform: rotate(180deg) translateZ(0);*/
}

.mui-pull-bottom-tips {
  text-align: center;
  background-color: #efeff4;
  font-size: 15px;
  line-height: 40px;
  color: #777;
}

.mui-pull-top-canvas {
  overflow: hidden;
  background-color: #fafafa;
  border-radius: 40px;
  box-shadow: 0 4px 10px #bbb;
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.mui-pull-top-canvas canvas {
  width: 40px;
}

.mui-slider-indicator.mui-segmented-control {
  background-color: #efeff4;
}
.app-home {
  padding-bottom: 0.8rem;
}
</style>
