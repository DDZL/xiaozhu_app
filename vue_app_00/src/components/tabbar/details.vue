<template>
    <div id="detail">
        <header class="mui-bar mui-bar-nav bg-transparent box-shadow-n">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" data-url='/home'></a>
		</header>
        <div class="mui-scroll-wrapper">
			<div class="mui-scroll">
                <!-- 轮播图 -->
                <mt-swipe :auto="3000" :show-indicators="true" class="h-250">
                    <mt-swipe-item>
                        <router-link to="detail-pic"><img src="../img/hjbs/01.jpg"  class="h-250"></router-link>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/0.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/1.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/2.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/3.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/4.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/5.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/6.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/7.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/8.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/10.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/11.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/12.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/13.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/14.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/15.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/16.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/17.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/18.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/19.jpg"  class="h-250">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../img/hjbs/20.jpg"  class="h-250">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="price">
                    <p>￥3500</p>
                    <p><img src="../img/white-dingwei.png">普吉普吉岛市Soi Sai Namyen,Tambon Chalong</p>
                </div>
                <div class="text">
                    <p>【白屋】查龙海景泳池四卧室超奢别墅四晚赠接机</p>
                </div>
                <!-- 优惠券弹出窗口 -->
                <div>
                    <div class="daijinquan">
                        <a href="#modal">
                            <p>代金券</p>
                            <p class="kong"></p>
                            <p style="margin-left:-4%; width:90px;text-align:center">1200元住宿券</p>
                            <p class="kong" style="margin-left:-4%;"></p>
                            <p style="margin-left:-4%;width:90px;text-align:center">600元住宿券</p>
                            <p class="kong" style="margin-left:-4%;"></p>
                            <p style="margin-left:-4%;width:90px;text-align:center">350元住宿券</p>
                            <p class="kong" style="margin-left:-4%;"></p>
                            <img src="../img/more.png" >
                        </a>
                    </div>
                    <div id="modal" class="mui-modal tanchu">
                        <a href="#modal" class="mui-icon mui-icon-close mui-pull-right"></a>
                        <p>优惠</p>
                        <p>代金券</p>
                        <div class="couponing">
                            <transition name="fade">
                                <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
                                    <!-- 第一页 -->
                                    <swiper-slide>
                                        <div class="page">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-1200.jpg">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-600.jpg">
                                        </div>
                                    </swiper-slide>
                                    <!-- 第二页 -->
                                    <swiper-slide>
                                        <div class="page">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-350.jpg">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-200.jpg">
                                        </div>
                                    </swiper-slide>
                                    <!-- 第三页 -->
                                    <swiper-slide>
                                        <div class="page">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-150.jpg">
                                            <span>立刻领取</span>
                                            <img src="../img/coupon-100.jpg">
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </transition>
                        </div>
                    </div>
                </div>
                <!-- 选项卡 -->
                <div >
                    <div class="xxk">
                        <div id="segmentedControl" class="mui-segmented-control">
                            <a class="mui-control-item mui-active" href="#item1">
                                <img src="../img/bieshu.png" alt="">
                                <p class="text-t">整套出租</p>
                                </a>
                            <a class="mui-control-item" href="#item2">
                                <img src="../img/me_tenant1.png" alt="">
                                <p class="text-t">宜住8人</p>
                                </a>
                            <a class="mui-control-item" href="#item3">
                                <img src="../img/chuang.png" alt="">
                                <p class="text-t">共4张</p>
                                </a>
                        </div>
                    </div>
                    <div id="item1" class="mui-control-content mui-active">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell bg-abaaaa">整套540平方米  4室1厅4卫1厨2阳台</li>
                        </ul>
                    </div>
                    <div id="item2" class="mui-control-content">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell bg-abaaaa">房客独享整套房源</li>
                        </ul>
                    </div>
                    <div id="item3" class="mui-control-content">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell bg-abaaaa">双人床  1.8m宽×2.00m长×4张</li>
                        </ul>
                    </div>
                </div>
                <!-- 房东信息 -->
                <div class="hostess-msg">
                    <div class="hostess-msg1">
                        <img src="../img/5-1.jpg">
                        <img src="../img/good.png">
                    </div>
                    <div>
                        <p>胡歌家民宿普吉店</p>
                        <p>实名认证</p>
                    </div>
                </div>
                <!-- 房源描述 -->
                <div>
                    <ul class="mui-table-view" style="margin:10px"> 
                        <li class="mui-table-view-cell mui-collapse" >
                            <a class="mui-navigate-right" href="#">房源描述</a>
                            <div class="mui-collapse-content">
                                <p>-友情提醒:</p>
                                <p>    (1)别墅虽美,仍为民宿,是房东把自己的家分享给到普吉自由行的朋友们,没有24小时随叫随到的服务员。在你入住期间,这就是你的家,希望你住得愉快。</p>
                                <p>    (2)尽管我由衷希望你的入住顺利,但电器故障、门被反锁等小问题,在所难免,请及时告知房东,会第一时间处理,不要因此辱骂发火,败了你的旅行好兴致。住进我家,我们就是朋友。我为为了你的旅行愉快,尽力而为。
                                    这是春妮家在泰国普吉岛的一栋三层别墅，我们在普吉岛的烈日下寻寻觅觅几个月，确定这里就是每个女孩子的梦想。三层楼的超大别墅，整栋纯白，有一种在希腊圣岛的错觉。</p>
                                <p>   -内部情况：</p>
                                <p>    私家泳池：让你在普吉的蓝天白云下，与亲朋好友享受静谧私密的游泳时光。24小时随意畅游。</p>
                                <p>    超大高奢卧室：4间超大卧室，每间卧室带独立卫生间和独立衣帽间。</p>
                                <p>    楼上的3间卧室，通过室内电梯直达。</p>
                                <p>    娱乐区域：2楼有娱乐区，包括儿童玩具区和成年人跑步机。</p>
                                <p>    愈百平观海露台：其中两间卧室拥有超大露台，三楼百平方米超大露台可以看日出夕阳和大海，举行BBQ轰趴。</p>
                                <p>    豪华品质设施：全套进口高档电器、音响、厨房用品。高品质度假生活，从这里开启。</p>
                                <p>   -交通情况</p>
                                <p>    位于普吉查龙区的高端山间别墅社区，plot2。</p>
                                <p>    从普吉机场到白屋车程40分钟；</p>
                                <p>    从白屋到卡伦、卡塔、芭东海滩车程30分钟；</p>
                                <p>    从白屋到普吉市中心车程30分钟。</p>
                                <p>    别墅提供私人管家，中文流利，会简单的英语交流，可代为安排租车事宜，帮助客人安全、顺利出行。</p>
                                <p>   -周边情况</p>
                                <p>    这是查龙区山间的高端别墅群。入户大门有门禁。整个别墅区均为欧美户主，安全干净优雅，步入其中，有一种抵达希腊圣岛的错觉，是普吉岛绝无仅有的私家度假胜地。</p>
                                <p>    别墅区步行范围内有全家、711等便利店，可满足日常需求。车程20分钟内，有大超市，日用品、食品，应有尽有。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 配套设施 -->
                <div class="mating">
                    <p>配套设施</p>
                    <ul>
                        <li class="active">
                            <span class="icon iconfont icon-faci_reshuilinyu"></span>
                            <p>热水沐浴</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_wuxianwangluo"></span>
                            <p>无线网络</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_kongtiao"></span>
                            <p>空调</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_dianshi"></span>
                            <p>电视</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="active">
                            <span class="icon iconfont icon-faci_dianti"></span>
                            <p>电梯</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_dianti"></span>
                            <p>门禁系统</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_xiyiji"></span>
                            <p>洗衣机</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_bingxiang"></span>
                            <p>冰箱</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="active">
                            <span class="icon iconfont icon-faci_tingchewei"></span>
                            <p>停车位</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_yinshuishebei"></span>
                            <p>饮水设备</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_tuoxie"></span>
                            <p>拖鞋</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_shouzhi"></span>
                            <p>手纸</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="active">
                            <span class="icon iconfont icon-faci_maojin"></span>
                            <p>毛巾</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_yuyexifashui"></span>
                            <p>浴液 洗发水</p>
                        </li>
                        <li class="active">
                            <span class="icon iconfont icon-faci_xiyiji"></span>
                            <p>香皂</p>
                        </li>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_yugang"></span>
                            <p>浴缸</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_nuanqi"></span>
                            <p>暖气</p>
                        </li>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_youxianwangluo"></span>
                            <p>有线网络</p>
                        </li>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_yashua"></span>
                            <p>牙具</p>
                        </li>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_shiheertong"></span>
                            <p>适宜儿童</p>
                        </li>
                    </ul>
                    <ul>
                        <li class="no-active">
                            <span class="icon iconfont icon-jiedailaoren"></span>
                            <p>适宜老人</p>
                        </li>
                        <li class="no-active">
                            <span class="icon iconfont icon-faci_shihecanjiren"></span>
                            <p>适宜残疾人</p>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <!-- 图片跳转 -->
                <router-link to="detail-pic"><img src="../img/hjbs/1.jpg"  class="center-img"></router-link>
                <!-- 交易规则 -->
                <div class="rule">
                    <p>交易规则</p>
                    <div>
                        <span class="mui-icon-extra mui-icon-extra-topic"></span>
                        <span>
                            <p>预定方式</p>
                            <p>申请预定后，房东确认可生成订单</p>
                        </span>
                    </div>
                    <div>
                        <span class="mui-icon-extra mui-icon-extra-calendar"></span>
                        <span>
                            <p>入住天数</p>
                            <p>最少入住1天，最多入住不限</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>在线定金比</p>
                            <p>订单确认后，在线支付房款的100%作为订金</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>押金</p>
                            <p>￥1000</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>清洁费</p>
                            <p>每单¥400</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>预定服务费</p>
                            <p>在线收取房租原总价的7%作为预定服务费</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>其他费用</p>
                            <p>共4间卧室，按每间入住两人计算，儿童可以和成年人同床</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>加客/加床</p>
                            <p>不允许加客，也不接受加床，也不收取加客费用</p>
                        </span>
                    </div>
                    <div>
                        <span class="mui-icon mui-icon-help"></span>
                        <span>
                            <p>入住须知</p>
                            <p>独立卫生间、允许做饭、不允许吸烟、不允许聚会、不允许带宠物</p>
                        </span>
                    </div>
                    <div>
                        <span></span>
                        <span>
                            <p>特殊要求</p>
                            <p>每天提供80度电，超过部分客人自己承担。每度电，7泰铢</p>
                        </span>
                    </div>
                </div>
                <!-- 退订须知 -->
                <div class="relative mt-10p">
                    <p class="font-size-18p text-black">交易规则</p>
                    <div id="slider" class="mui-slider mui-fullscreen h-110p mt-30p">
                        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted line-height-110p h-60p">
                            <div class="mui-scroll">
                                <a class="mui-control-item mui-active" href="#item1mobile">
                                    <p>预订成功</p>
                                    <p>以普吉岛市时间为准</p>
                                </a>
                                <a class="mui-control-item" href="#item2mobile">
                                    <p>入住前30天14:00</p>
                                    <p>以普吉岛市时间为准</p>
                                </a>
                                <a class="mui-control-item" href="#item3mobile">
                                    <p>入住当天14:00</p>
                                    <p>以普吉岛市时间为准</p>
                                </a>
                                <a class="mui-control-item" href="#item4mobile">
                                    <p>退房当天12:00</p>
                                    <p>以普吉岛市时间为准</p>
                                </a>
                            </div>
                        </div>
                        <div class="mui-slider-group mt-20p">
                            <div id="item1mobile" class="mui-slider-item mui-control-content mui-active m-0">
                                <div id="scroll1" class="mui-scroll-wrapper">
                                    <div class="mui-scroll">
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell">
                                                如取消订单，订金全部退还
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="item2mobile" class="mui-slider-item mui-control-content m-0">
                                <div class="mui-scroll-wrapper">
                                    <div class="mui-scroll">
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell">
                                                如取消订单，扣除前30天的订金
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="item3mobile" class="mui-slider-item mui-control-content m-0">
                                <div class="mui-scroll-wrapper">
                                    <div class="mui-scroll">
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell">
                                                如提前退房，扣除之后30天订金
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="item4mobile" class="mui-slider-item mui-control-content m-0">
                                <div class="mui-scroll-wrapper">
                                    <div class="mui-scroll">
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell">
                                                祝愿您旅途愉快，欢迎下次光临
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
                <!-- 推荐房源 -->
                <div class="mt-135p">
                    <p class="font-size-18p text-black">推荐房源</p>
                    <div class="mui-slider">
                        <div class="mui-slider-group mui-slider-loop">
                            <div class="mui-slider-item mui-slider-item-duplicate">
                                <ul class="mui-table-view mui-grid-view">
                                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                                        <a href="#">
                                            <img class="mui-media-object" src="../img/hjbs/10.jpg">
                                            <div class="mui-media-body h-35p">
                                                <p>现代泰式四卧室泳池别墅</p>
                                                <p>距4KM - 整套出租/4室1厅/6张床/宜住9人</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                                        <a href="#">
                                            <img class="mui-media-object" src="../img/hjbs/11.jpg">
                                            <div class="mui-media-body h-35p">
                                                <p>【31】卡塔海滩山景泳池花园别...</p>
                                                <p>距4KM - 整套出租/4室1厅/4张床/宜住9人</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mui-slider-item">
                                <ul class="mui-table-view mui-grid-view">
                                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                                        <a href="#">
                                            <img class="mui-media-object" src="../img/hjbs/12.jpg">
                                            <div class="mui-media-body h-35p">
                                                <p>查龙3卧室花园泳池别墅</p>
                                                <p>距4KM - 整套出租/3室1厅/3张床/宜住6人</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                                        <a href="#">
                                            <img class="mui-media-object" src="../img/hjbs/13.jpg">
                                            <div class="mui-media-body h-35p">
                                                <p>普吉岛美丽温馨3卧别墅</p>
                                                <p>距4KM - 整套出租/3室1厅/3张床/宜住6人</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 底部高 -->
                <div class="bottom-height"></div>
			</div>
        </div>
        <bottom1></bottom1>
    </div>
</template>

<script>
import bottom1 from './bottom1'
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import detailpic from "./detail-pic";
import home from "./Home";
(function($) {
    //阻尼系数
    var deceleration = mui.os.ios?0.003:0.0009;
    $('.mui-scroll-wrapper').scroll({
        bounce: false,
        indicators: true, //是否显示滚动条
        deceleration:deceleration
    });
    $.ready(function() {
        //循环初始化所有下拉刷新，上拉加载。
        $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
            $(pullRefreshEl).pullToRefresh({
                down: {
                    callback: function() {
                        var self = this;
                        setTimeout(function() {
                            var ul = self.element.querySelector('.mui-table-view');
                            ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
                            self.endPullDownToRefresh();
                        }, 1000);
                    }
                },
                up: {
                    callback: function() {
                        var self = this;
                        setTimeout(function() {
                            var ul = self.element.querySelector('.mui-table-view');
                            ul.appendChild(createFragment(ul, index, 3));
                            self.endPullUpToRefresh();
                        }, 1000);
                    }
                }
            });
        });
        var createFragment = function(ul, index, count, reverse) {
            var length = ul.querySelectorAll('li').length;
            var fragment = document.createDocumentFragment();
            var li;
            for (var i = 0; i < count; i++) {
                li = document.createElement('li');
                li.className = 'mui-table-view-cell';
                li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
                fragment.appendChild(li);
            }
            return fragment;
        };
    });
})(mui);
(function($) {
				$('#scroll').scroll({
					indicators: true //是否显示滚动条
				});
				var segmentedControl = document.getElementById('segmentedControl');
				$('.mui-input-group').on('change', 'input', function() {
					if (this.checked) {
						var styleEl = document.querySelector('input[name="style"]:checked');
						var colorEl = document.querySelector('input[name="color"]:checked');
						if (styleEl && colorEl) {
							var style = styleEl.value;
							var color = colorEl.value;
							segmentedControl.className = 'mui-segmented-control' + (style ? (' mui-segmented-control-' + style) : '') + ' mui-segmented-control-' + color;
						}
					}
				});
			})(mui);
export default {
    name: 'index',
    components: {
        swiper,
        swiperSlide,
        home,
        bottom1,
    },
    data() {
        return {
            swiperOption: {
                    // swiper configs 所有的配置同swiper官方api配置
                    notNextTick: true,//notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    direction: 'vertical',//水平方向移动
                    grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    setWrapperSize: true,//Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
                    mousewheel: false,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                    mousewheelControl: false,//同上
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
                    observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    onTransitionStart(swiper){
                        console.log(swiper)
                    },
                    on: {
                        //监听滑动切换事件，返回swiper对象
                        slideChange: ()=>{
                           let swiper = this.$refs.mySwiper.swiper;
                           console.log(swiper.activeIndex); //滑动打印当前索引
                        }
                    }
                }
            }
        },
        methods: {},
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
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
            this.swiper.slideTo(0, 1000, false)  //初始滑动到哪个页面
            // 返回主页路径
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
        watch: {},
        
    routes:[
        {
            path:'./detail-pic.vue',
			name:'detailpic',
        },
        {
            path:'./Home.vue',
			name:'home',
        },
    ]
}
</script>

