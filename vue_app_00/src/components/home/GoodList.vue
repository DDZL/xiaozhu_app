<template>
    <div class="app-goodlist">
        <!--商品列表  两行两列-->
        <div class="goods-item" v-for="item of list" :key="item.i">
            <!--1.1图片-->
            <img src="http://127.0.0.1:3000/3.png">
            <!--1.2商品名称-->
            <h4>{{item.lname}}</h4>
            <!--1.3商品价格-->
            <h4 class="now">{{item.price.toFixed(2)}}</h4>
        </div>
        <!--添加按钮 mint-ui button-->
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pno:1,//当前的页数（初始值为1）
            pageSize:"",
            list:[],//用来接收服务器返回商品的数组
            hasMore:true,
        }
    },
    created(){
        //console.log(123);
        //当组件创建成功后，请求第一页数据
        //1：创建变量保存请求地址 URL
        var url="http://127.0.0.1:3000";
        url+="/getGoodList";
        //2：发送ajax请求 无参数
        this.axios.get(url).then(result=>{
        //3：接收返回商品数组
        this.list=result.data.data;
        //4：保存list
        //console.log(this.list);
        var pid=this.$route.query.pid;
        console.log(pid);
        })
    },
    methods: {
        loadMore(){
            //如果没有下一页的数据，就停止执行
            if(this.hasMore==false){
                this.$toast("别点了,已经没有了...");
                return;
            }
            //加载下一页数据
            this.pno++;
            //1.创建url请求地址
            //2.添加参数pno
                var url=`http://127.0.0.1:3000/getGoodList?pno=${this.pno}`;
            //3.发送ajax请求
            this.axios.get(url).then(result=>{
            //4.获取服务器数据
            //5.将返回数据保存  list
            var rows =this.list.concat(result.data.data);
            this.list=rows;
            //
            if(this.pno >=result.data.pageCount){
                this.hasMore = false;
            }
            });
        }
    },
}
</script>
<style>
/*外层父元素*/
.app-goodlist{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding:4px;
}
/*商品信息*/
.app-goodlist .goods-item{
    width: 49%;  /*商品元素宽高*/
    border:1px solid red; /*边框*/
    margin:2px 0; 
    padding:2px;
    display: flex;
    flex-direction: column;
    min-height:245px;
}
/*商品图片*/
.app-goodlist .goods-item img{
    width: 100%;
}
</style>
