import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/detail.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
//按需加载mint-ui组件库中一个组件Header
//1:按需引入Header/按需引入Button
/*import {Header,Button,Swipe,SwipeItem,Lazyload} from "mint-ui"
//2:全局注册Header（希望Header组件可以象标签直接调用）
//标签:Header.name="mt-header"
//在项目中任意组件模板都可以直接使用
Vue.use(Lazyload);
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
*/
//完整引入mint-ui组件库
import MintUi from "mint-ui"
Vue.use(MintUi);

//3:实现跨域的三步：
//引入axios库
import axios from "axios"
//配置跨域选项
axios.defaults.withCredentials=true
//将axios配Vue实例中
Vue.prototype.axios = axios




//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
// import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//4:创建日期格式过滤器
  //4.1创建过滤器
// Vue.filter("datatimeFilter",function(val){
//   //(1)创建新日期对象保存原有日期
//   var now=new Date(val);
//   //(2)创建三个变量保存年月日
//   var n=now.getFullYear();
//   var y=now.getMonth()+1;
//   var r=now.getDay();
//   //(3)创建三个变量保存时分秒
//   var s=now.getHours();
//   var f=now.getMinutes();
//   var m=now.getSeconds();
//   //(4)调整月份日期格式
//   y<10&&(y="0"+y);
//   r<10&&(r="0"+r);
//   //(5)返回拼接字符串
//   return `${n}-${y}-${r} ${s}:${f}:${m}`;
// })
  //4.2在组件使用{{item.ctime|过滤器名称（datatimeFilter）}}