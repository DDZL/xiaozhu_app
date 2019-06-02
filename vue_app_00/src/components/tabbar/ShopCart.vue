<template>
  <div class="app-shopcart">
    <div class="mui-card">
				<div class="mui-card-header">
          全选
          <input type="checkbox"  @change="selectAll"
          :checked="allcb"/> 
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) of list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							<p class='mui-ellipsis'>
               <!--1:复选框-->
               <input type="checkbox" :checked="item.cb" @change="modifyItem"
               :data-i="i"
               />
               <!--2:商品名称 -->
               {{item.lname}}
               <!--3:商品价格-->
               {{item.price}}
               <!--4:删除按钮-->
               <input type="button" value="删除" @click="removeItem" :data-id="item.id"/>
              </p>
						</div>
					</a>
				</li>
        </ul>
					</div>
				</div>
				<div class="mui-card-footer">
  <input type="button" value="删除选中商品" @click="removeSelect"/>
        </div>
			</div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[],    //保存购物列表
        allcb:false,//全选状态 默认未选中
      }
    },
    created() {
      this.loadMore();
    },
    methods:{
      modifyItem(e){
        //功能:如果用户选中商品，将当前商品对应对象
        //     cb=true
        //     如果用户取消选中 将当前商品对应对象
        //     cb=false 50
        //1:获取当前元素选中状态
        var cb = e.target.checked;
        //2:获取当前元素对应商品对象
        //2.1:获取当前元素下标   01
        var i = e.target.dataset.i;
        //2.2:将数组下标对象
        this.list[i].cb = cb;
        //3:修改商品对象cb 属性
        
        //4:修改全选状态 true fales  17:32
        //4.1:如果完成  累加计算
        //4.2:创建变量count 保存累加和
        var count = 0;
        //4.3:创建循环遍历所有元素
        //4.4:获取cb如果值等于true count++
        for(var item of this.list){
            if(item.cb){
              count++;
            }
        }
        //4.5:如果count个数与数组长度一致
        if(count==this.list.length){
          //console.log("全选选中");
          this.allcb = true
        }else{
          //console.log("全选消空");
          this.allcb = false;
        }
        //4.6:将全选复选框选中
        //4.7:否则清空全选复选框


      },
      removeSelect(){
        //console.log("删除选中的商品");
        //-1:显示确认框 "是否删除选中商品"
      this.$messagebox.confirm("是否删除选中商品?")
      .then(action=>{
         // console.log("确认")
         //-2:如果用户选中 确认
         //2.1:获取用户选中商品
         //-创建变量保存删除商品 ids = ""
         var ids = "";
         //-创建循环遍历数组
         for(var item of this.list){
             if(item.cb){
               ids += item.id+",";
             }
         }
         //-如果用户没有选中商品,停止删除操作
         if(ids.length==0){
           this.$toast("请选中您需要删除的商品");
           return;
         }
         //-如果用户选中多个商品 1,2, 去除后面
         //substring(?,?) 截取字符串
         //? 起始位置
         //? 几个
         ids =  ids.substring(0,ids.length-1);
         //console.log(ids);
         //return;
         //-如果当前元素cb:true
         //-获取当前元素id拼字符串 ids+="1"
         //2.2:创建变量  var ids = "11,12";
         //var ids = "1,2";
         //2.3:发送ajax请求给服务器 /delM
         var url = "http://127.0.0.1:3000";
         url+="/delM?ids="+ids;
         this.axios.get(url).then(result=>{
           //console.log(result.data.msg);
           //2.4:接收服务器返回结果 56
           //2.5:提示   删除成功 或者删除失败
           this.$toast(result.data.msg);
           //2.6:重新加载购物车数据
           this.loadMore();
         })
      }).catch(result=>{
          console.log("取消")
      });
        
        //3:如果用户选中 取消 
      },
      selectAll(e){
        //console.log(12345);
        //1:获取全选状态
        var cb = e.target.checked;
        //2:遍历所有商品
        //3:将全选状态赋值商品选中状态
        for(var item of this.list){
          item.cb = cb;
        }
        //4:修改全选状态
        this.allcb = cb;
      },
      removeItem(e){
        //0:创建确认消息框
      this.$messagebox.confirm("是否删除指定商品?")
      .then(action=>{
        //如果用户选择确定 
        //功能:删除指定商品
        //1:获取商品编号
        var id = e.target.dataset.id;
        //2:创建变量url
        var url = "http://127.0.0.1:3000";
        url+="/removeCartItem?id="+id;
        //3:发送ajax请求
        this.axios.get(url).then(result=>{
          //4:获取返回结果
          //5:判断如果删除成功
          if(result.data.code==1){
             this.$toast("删除成功");
             //数据库己经删除成功
             //网页内容显示新内容[删除后];
             this.loadMore();
             //在页眉添加复选框 []全选
          }else{
             this.$toast("删除失败");
          }
          //6:将当前商品对象删除
        })
      })
      .catch(result=>{
      //如果用户选择取消息
      })
      },
      loadMore(){
        //1:创建变量url
        var url = "http://127.0.0.1:3000";
        url+="/getCart";
        //2:发送ajax请求
        this.axios.get(url).then(result=>{
          if(result.data.code < 1){
            this.$toast("请登录");
            this.$router.push("/Login");
            return;
          }
          //2.1:为数组件元素添加属性cb
          //    cb表示复选框状态
          //2.2:原先数组
          var rows = result.data.data;
          //2.3:创建循环遍历数组并且添加属性
          for(var item of rows){
             item.cb = false;
          }    
          //2.4:将添加结果后数组件赋值 list
          this.list = rows;
          //注意:以上二步要求顺序
        })
      }
    }
  }
</script>
<style>
.mui-media-body{
  height: 50px;
  padding-top: 3px;
}
  .mui-ellipsis{
    padding-top: 5px;
  }
</style>