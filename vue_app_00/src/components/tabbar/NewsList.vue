<template>
    <div class="app-newslist">
        <!-- 新闻列表 -->
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="'http://127.0.0.1:3000/img/'+item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
                            <span>{{item.ctime|datatimeFilter}}</span>
                             <span>点击{{item.point}}次</span>
                        </p>
					</div>
				</a>
			</li>
		</ul>
        <!--添加按钮 mint-ui button-->
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],    //保存服务器数据
            pno:0,      //pno      页码
            pageSize:6  //pageSize 页大小
        }
    },
    methods: {
        loadMore(){
//如果没有下一页的数据，就停止执行
            if(this.hasMore==false){
                this.$toast("别点了,已经没有了...");
                return;
            }

            //0：pno自增
            this.pno++;
            //1：创建变量保存url地址
            var url="http://127.0.0.1:3000";
            url+="/newslist?pno="+this.pno;
            //console.log(url);
            //2：发送ajax请求
            this.axios.get(url).then(result=>{
            //3：获取服务器端数据
            //4：保存list
                var rows =this.list.concat(result.data.data);
                this.list=rows;
                //this.list=result.data.data;
                //console.log(this.list);

                if(this.pno >=result.data.pageCount){
                     this.hasMore = false;
                }
            })
            
        }
    },
    created() {
        this.loadMore();
    },
}
</script>
<style>
.mui-media-body{
    width: 320px;
}
 .app-newslist .mui-table-view .mui-media-body{
     padding-top: 10px;
     padding-bottom: 10px;
 }
 .app-newslist .mui-ellipsis{
     display: flex;  /*修改布局，弹性*/
     font-size: 12px;
     color: #226aff;
     justify-content: space-between; /*两端对齐*/
 }
</style>

