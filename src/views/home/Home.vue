<template>
<div class="con-wrap">
        <div class="main">
          <router-view></router-view> 
        </div>
    <div>
        <ul class="list">
           <router-link to="/home/index" tag="li" active-class="active">
               <span class="iconfont">&#xe63c;</span>
                首页
           </router-link>
            <router-link to="/home/classify" tag="li" active-class="active">
                <span class="iconfont">&#xe6b1;</span>
                分类
           </router-link>
            <router-link to="/home/cart" tag="li" active-class="active">
                <span class="iconfont">&#xe65d;</span>
                购物车
           </router-link>
            <router-link to="/home/my" tag="li" active-class="active">
                <span class="iconfont">&#xe601;</span>
                我的考拉
           </router-link>
         </ul> 
    </div>
</div>
   
</template>
<script>

import Index from "../home/index/Index"
import iconfont from "../../assets/iconfond/iconfont.css"
export default {
    components:{
        Index,
    },
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
.con-wrap{
    height:100%;
    display:flex;
    flex-direction:column ;
    background: #fff;
    .main{
          flex:1;
          overflow: hidden;
    }
   .list{
    height:50px;
    display: flex;
    @include border1px(#bdbdbd); //在哪里调用混合的方法就在哪里写@include
    padding-top:5px;
    box-sizing: border-box;
    background: #fff;
    li{
      list-style: none;
      display: flex;
      flex:1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size:12px;
      color:#333;
      span{
          font-size:22px;
          margin-bottom:3px;
          color:#666;
      }
    } 
    .active{
        color:#f03d37;
        span{
            color:#f03d37
        }
    } 
  }
}

</style>