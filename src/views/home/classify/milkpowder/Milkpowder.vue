<template>
    <div class="wrap">
    <div class="header-con">
       <div class="header">育儿驿站</div>
       <ul>
          <li v-for="(item,index) in picList" :key="index">
               <img :src="item.img | wh('76.76')" alt="">
               <span>{{item.name}}</span>
           </li> 
       </ul>

       <div class="header">畅销星品</div>
       <ul>
          <li v-for="(item,index) in picList" :key="index">
               <img :src="item.img | wh('76.76')" alt="">
               <span>{{item.name}}</span>
           </li> 
       </ul>

       <div class="header">奶粉</div>
       <ul>
          <li v-for="(item,index) in picList" :key="index">
               <img :src="item.img | wh('76.76')" alt="">
               <span>{{item.name}}</span>
           </li> 
       </ul>
    </div>
</div>
</template>
<script>
import {get ,post} from "../../../../api/http"
export default {
    data(){
        return{
           picList:[],
        }
    },
    created(){
       this.getlist();
    },
    methods:{
        async getlist(){
            let rs = await get('/api/product')
            this.picList=rs.data;
            //console.log(this.picList)
        },
        
    }
}
</script>
<style lang="scss" scoped>
html,body{
    height:100%;
  }
    .wrap{
        height:100%; 
        overflow:hidden;
        float: right;
        // width:265px;
          flex:1;
        .header-con{
            //  position: fixed;
            //  top: 0;
            //  right: 0;
             float: right;
             flex:1;
             overflow:auto;
             width:265px;
             height:100%;
            
        }
        .header{
            font-size: 14px;
            line-height: 30px;
            height: 30px;
            margin-bottom: 8px;
            font-family: PingFangSC-Semibold;
            color: #333;
            letter-spacing: 0;
            font-weight: 700;
            padding-left: 15px;
            width:265px;
            float: right;
        }
        ul{
            li{
                margin-left:10px;
                float: left;
                width:80px;
                height:107px;
                text-align: center;
                margin:0 4px;
                list-style: none;
                img{
                    width:76px;
                    height:76px;
                }
                span{
                    font-size:12px;
                    color:#1E1E1E;
                    margin-bottom:14px;
                }
            }
        }
    }
    .headertwo{
       padding-top:10px;
    }
</style>