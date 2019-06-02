<template>
    <div class="app_login">
        <div>
            <img src="../img/timg1.png" alt="">
            <img src="../img/timg.jpg" alt="">
        </div>  
        <div>
            <form action="javascript:;">
                账号: <input type="text" placeholder="请输入用户名" v-model="name">
                密码:  <input type="password" placeholder="请输入密码" v-model="pwd">
                <br>
                <input type="button" value="登录" class="input" @click="btnLogin">
            </form>
        </div>
    </div> 
</template>

<script>
//在export之前引入需要组件
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            name:"",
            pwd:""
        }
    },
    methods: {
        btnLogin(){
            //获取用户输入的用户名和密码，验证，如果通过发送ajax请求给服务器
            var uname=this.name;
            var upwd=this.pwd;
            //创建正则表达式
            var uname_reg = /^[\u4e00-\u9fa5]{3,8}$/; 
            //验证用户名如果失败，提示错误信息；
            if(!uname_reg.test(uname)){
                Toast("您的用户名格式有误");
                return;
            }

            var upwd_reg=/^[0-9]{3,10}$/;
            //验证用户名如果失败，提示错误信息
            if(!upwd_reg.test(upwd)){
                Toast("您的密码格式有误");
                return;
            }
            var url = "http://127.0.0.1:3000";
            url+="/login?name="+uname+"&pwd="+upwd;
            this.axios.get(url).then(result=>{
                 //程序并且获得返回结果
                if(result.data.code==1){
                    Toast("登录成功");
                    this.$router.push("/home"); //成功登陆后跳转到主页
                }else{
                    Toast("用户名或者密码有误")
                }
            })
        }
    },
}
</script>

<style>
   
    .app_login div:nth-child(2){
        position: relative;
        margin-top: -4%;;
        background: white;
        padding: 20px;
        border-radius: 15px;
        font-size: 12px;
        z-index: 10;
    }
    .app_login div:first-child img:first-child{
         width: 100px;
         position: absolute;
         top: 28%;
    }
    .app_login div:first-child img:nth-child(2){
        width: 100%;
    }
    .app_login div:nth-child(2) form input:last-child{
        left: 5%;
        width:90%;
        height:40px;
        border:2px solid rgb(248, 97, 97);
        border-radius: 20px;
        color:rgb(248, 97, 97);
    }
    .app_login div:nth-child(2) form input{
        border:0;
        border-bottom: 2px solid gainsboro;
        margin-top: 10px;
    }
</style>
