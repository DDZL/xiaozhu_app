<template>
<!-- 消息列表 -->
    <div class="app-list">
        <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-pull-right">
                <img src="../img/imv2_chatmsg_shield.png" class="img-size">
            </a>
			<h1 class="mui-title">消息</h1>
		</header>
        <!-- 列表 -->
        <div class="mui-content">
            <ul class="mui-table-view">
            <!-- 1 -->
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
                        <img class="mui-pull-left img1" src="../img/naozhong.png">
						<div class="mui-media-body">
							系统消息
							<p class='mui-ellipsis '>【新人专享礼】</p>
						</div>
					</a>
				</li>
                <!-- 2 -->
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
                        <img class="mui-pull-left img2" src="../img/biaoqian.png">
						<div class="mui-media-body">
							优惠活动
							<p class='mui-ellipsis '>免费抽奖！gopro等好礼100%中奖</p>
						</div>
					</a>
				</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import bottom from './bottom.vue'
export default {
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
.mui-table-view .mui-media, .mui-table-view .mui-media-body{
    overflow:visible;
}
.mui-ellipsis{
    font-size: 15px;
    color: black;
    font-weight: bold;
    letter-spacing: 0.5px;
    
}
.mui-table-view-cell .img2{
    height:50px;
    width: 50px;
    border:1px solid 	#FFD700;
    border-radius: 50%;
    margin-left: 5%;
    margin-top: 5%;
    padding:5px;
    background:		#FFD700;
}
.mui-table-view-cell .img1{
    height:50px;
    width: 50px;
    border:1px solid #2E8B57;
    border-radius: 50%;
    margin-left: 5%;
    margin-top: 5%;
    padding:10px 5px 10px 5px;
    background:#2E8B57;
    opacity: 0.8;
}
.mui-table-view-cell .mui-media-body{
    font-size: 12px;
    height:95px;
    padding-top: 5%;
    padding-left: 10px;
}
.mui-content > .mui-table-view:first-child {
    margin:0px;
}
.mui-title{
    font-weight: bold;
    letter-spacing: 1.3px;
}
.app-list .mui-bar{
    text-align: right;
}
.img-size{
    width:40%;
    margin-top: 7px;
}
/* .mui-bar-nav{
	-webkit-box-shadow:none !important;
	box-shadow:none !important;
} 去掉头部底边阴影*/
</style>

