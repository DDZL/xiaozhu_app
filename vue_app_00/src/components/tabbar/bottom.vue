<template>
    <div v-show="$route.meta.navShow==undefined||$route.meta.navShow">
        <!-- 底部导航栏 -->
		<nav class="mui-bar mui-bar-tab">
				<a class="mui-tab-item mui-active" data-url='/home'>
					<span class="mui-icon iconfont icon-faxian"></span>
					<span class="mui-tab-label">发现</span>
				</a>
				<a class="mui-tab-item" data-url='/overseas'>
					<span class="mui-icon iconfont icon-diqiu"></span>
					<span class="mui-tab-label">海外</span>
				</a>
				<a class="mui-tab-item" data-url='/collect'>
					<span class="mui-icon iconfont icon-xinaixin"></span>
					<span class="mui-tab-label">收藏</span>
				</a>
				<a class="mui-tab-item" data-url='/msg_list'>
					<span class="mui-icon iconfont icon-xiaoxi-copy"></span>
					<span class="mui-tab-label">消息</span>
				</a>
				<a class="mui-tab-item" data-url='/my'>
					<span class="mui-icon iconfont icon-xiaolian"></span>
					<span class="mui-tab-label">我</span>
				</a>
			</nav>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var $ = this;
    console.log($)
    var as = mui(".mui-bar>a");
    // console.log(as)

    mui(".mui-bar").on("tap", "a", function() {
      for (var i = 0; i < as.length; i++) {
        as[i].className = "mui-tab-item";
      }
      console.log("object");
      var url = this.dataset.url;
      $.$router.push(url);
      this.className = "mui-tab-item mui-active";
    });
  }
};
</script>

<style scoped>
.mui-bar {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding-top: 5px;
}
.mui-bar-tab .mui-tab-item.mui-active {
  color: red;
  border-bottom: 1px solid red;
}

</style>
