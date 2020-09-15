<template>
<div  style="height:100%; overflow:hidden;display:flex;flex-direction:column;">
   <HeaderBar v-show="$store.state.showAd"></HeaderBar>
    <div class="search">
        <div class="fdj">
            <img src="../../../assets/img/search.png" alt="">
            <span>面膜</span>
        </div>
        <div class="login">
            <p><span>登录/</span><i>注册</i></p>
        </div>
    </div>
    <div class="wrap" ref="indexList" style="height:100%">
        <div>
    <div class="carousel">
        <van-swipe class="my-swipe" :autoplay="3000"  indicator-color="white" @change="onChange">
        <van-swipe-item><img src="../../../assets/img/lun1.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../assets/img/lun2.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../assets/img/lun3.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../assets/img/lun4.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../assets/img/lun5.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../assets/img/lun6.webp" alt=""></van-swipe-item>
        <slot name="indicator"></slot>
        <template #indicator>
            <div class="custom-indicator">
                {{ current + 1 }}/6
            </div>
        </template>
        </van-swipe>
    </div>
    <div class="ad"><img src="../../../assets/img/ad.png" alt=""></div>
    <div class="pic-con">
        <ul>
            <li v-for="(item,index) in picList" :key="index"><img :src="item.img | wh('75.85')" alt=""></li>
        </ul>
    </div>
    <div class="buy"><img src="../../../assets/img/goumai.png" alt=""></div>
    <div class="newmsg">
        <p><img src="../../../assets/img/gif1.gif" alt=""></p>
        <div class="ray">
          <img src="../../../assets/img/ray.webp" alt="">
          <img src="../../../assets/img/mu.gif" alt="">
        </div>
    </div>
    <div class="git-two"><img src="../../../assets/img/git2.gif" alt=""></div>
    <div class="price-cutting">
        <div class="price-left">
            <p><span>{{msgList[0]&&msgList[0].title}}</span><i>{{msgList[0]&&msgList[0].subTitle}}</i></p>
             <p>
                <img :src="msgList[0] && msgList[0].imgUrl1 | wh('75.85')" alt=""> 
                <img :src="msgList[0] && msgList[0].imgUrl2 | wh('75.85')" alt=""> 
             </p>
        </div>
        <div class="price-right">
              <p><span>{{msgList[1]&&msgList[1].title}}</span><i>{{msgList[1]&&msgList[1].subTitle}}</i></p>
              <p>
                <img :src="msgList[1] && msgList[1].imgUrl1 | wh('75.85')" alt=""> 
                <img :src="msgList[1] && msgList[1].imgUrl2 | wh('75.85')" alt=""> 
             </p>
        </div>
    </div>
    <div class="recommend"><img src="../../../assets/img/tuijian.png" alt=""></div>
    <div class="commodity">
        <ul>
            <li v-for="(item) in shoplist" :key="item.id"  @click="clickHandler(item)">
                <img :src="item.goodsImage | wh(172.172)" alt="">
                <p class="date">{{item&&item.goodsName}}</p>
                <p class="name">{{item&&item.goodMinName}}</p>
                <span class="price"><i>￥</i><b>{{item.currentPrice}}</b></span>
                <div class="vip-price"><img src="../../../assets/img/heika.png" alt=""><p><i>￥</i><span>{{item.vip}}</span></p></div>
            </li>
        </ul>
    </div>
</div>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';
import {get ,post} from "../../../api/http"
import HeaderBar from "../../../components/HeaderBar"
import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up' 
// import {Toast} from 'vant';
//BScroll.use(Pullup)
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
     components:{
        HeaderBar,
   } ,
    data() {
        return {
        current: 0,
        picList:[],
        msgList:'',
        shoplist:[],
        };
    },
    created(){
        this.getlist()
        this.getmsg()
        this.getshopping()
    },
    methods: {
        onChange(index) {
        this.current = index;
        },
        async getlist(){
            let rs = await get('/api/list')
            this.picList=rs.data;

        },
        async getmsg(){
            let rs =await get("home/index.html",{
                t: 1599659393353,
                pageNo: 2
            })
            console.log(rs)
            this.msgList = rs.data.data.home[0].wapHomeRowWellViewList[0].rowModules 
        },
        async getshopping(){
            let rs = await get('/api/recItems')
            this.shoplist=rs.data
        },
       init() {
         this.bs = new BScroll(this.$refs.indexList, {
          click: true,
          probeType: 3,
          scrollY:true,
         })
        this.bs.on('scroll', (position) => {
           if(position.y<-50){
                 this.$store.commit("setShowAd", false)
              }else{
                 this.$store.commit("setShowAd", true)
              }
        })
        this.bs.on('scrollEnd', () => {
          console.log('scrollingEnd')
        })
      }, 
      clickHandler(item){
          this.$router.push({path:'/details',query:item})
      } 
        
    },
    mounted(){
        setTimeout(()=>{
        this.init()
        },1000)
    }
   
};
</script>
<style lang="scss" scoped>
.search{
    width:100%;
    height:45px;
    display: flex;
    align-items: center;
    background: #fff;
    .fdj{
        width:268px;
        height:30px;
        border: 2px solid #f00;
        border-radius: 30px;
        display:flex;
        align-items: center;
        img{
           height: 15px;
           width: 15px;  
           margin-left: 6px;
        }
        span{
            font-size:13px;
            color:#727273;
            margin-left:8px;
        }
    }
    .login{
        width:60px;
        height:30px;
        border:1px solid #e31436;
        border-radius: 3px;
        line-height: 30px;
        text-align: center;
        margin-left:15px;
        p{
          font-size:10px;
          color: #e31436;
        }
    }
}
.wrap{
height: 100%;
flex: 1;
overflow: hidden;
//轮播图
.carousel{
    position: relative;
    overflow: hidden;
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        float: left;
        img{
          width:100%;
          height:224px;
        }
       
    }
}
//分页器
.custom-indicator {
    position: absolute;
    left:15px;
    bottom:10px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.3);
    z-index:100;
    color: white;
    border-radius: 8px;
   
  }
.ad{
    height:23px;
    width:100%;
    img{
        height:100%;
        width:100%;
    }
}
.pic-con{
    width:100%;
    height:170px;
    text-align: center;
    background:white;
    li{
        float: left;
        width:75px;
        height:85px;
        list-style: none;
       img{
            width:75px;
            height:85px;
       }
    }
}
.buy{
    width:100%;
    img{
       width:100%;
       height:92px;
       margin-left:-3px;
    }
}
.newmsg{
    height:187px;
    display: flex;
    background: #fff;
    p{
        img{
           width:187px;
           height:187px; 
        }
    }
    .ray{
        display: flex;
        flex-direction: column;
        img{
           height:93px;
           width:187px; 
        }  
    }
}
.git-two{
    background: #fff;
    img{
        width:100%;
        height:233px;
    }
}
.price-cutting{
    width:100%;
    height:155px;
    display:flex;
    margin-top:5px;
    background: #fff;

    .price-left{
        width:186px;
        height:153px;
        border-right:1px solid rgb(226, 224, 224);
        p{
            span{
               color:#333;
               font-size: 18px;  
               margin-left:10px;
               margin-right:5px;
               font-weight: bold;
            }
            i{
               color:#333;
               font-size: 12px;  
               margin-top:5px; 
            }
        }
        p{
            margin-top:15px;
            display:flex;  
            img{
                width:77px;
                height:77px;
            }
            img:nth-child(2){
                margin-left:15px,
            }
        }
    }
    .price-right{
        width:186px;
        height:153px;
         p{
            margin-top:15px;
            display:flex; 
            img{
                width:77px;
                height:77px;
            }
            img:nth-child(2){
                margin-left:15px,
            }
        }
         p{
            span{
               color:#333;
               font-size: 18px;  
               margin-left:10px;
               margin-right:5px;
               font-weight: bold;
            }
            i{
                color:#333;
               font-size: 12px;  
               margin-top:5px; 
            }
        }
    }
}
.recommend{
    width:100%;
    height:60px;
    img{
        width:100%;
        height:60px;
    }
}
.commodity{
    background: rgb(245, 242, 242);
    height: 100%;
    overflow: hidden;
    ul{
    overflow: hidden;
        height: 100%;
    li{
        width:172px;
        height:260px;
        background: #fff;
        float: left;
        margin-left:10px;
        margin-top:5px;
        list-style:none;
        img{
            width:172px;
            height:172px;
        }
        .date{
            font-size:12px;
            color:#333;
            margin-left:10px;
        }
        .name{
            font-size:12px;
            color:#333;
            margin-left:10px;
            width:156px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .price{
             margin-left:10px;
            b{
                font-size:18px;
                color:#ff0000;
            }
            i{
                font-size:8px;
                font-weight: bold;
                color:#ff0000;
            }
        }
        .vip-price{
            margin-top:3px;
            margin-left:10px;
            display: flex;
            align-items: center;
            img{
                width:39px;
                height:16px;
            }
            p{
                background: -webkit-gradient(linear,left top, right top,from(#ffe7c5),to(#ffdeb0));
                height:16px;
                line-height: 16px;
              i{
                font-size:8px;
                 font-weight: bold;
               }
              span{
                font-size:15px;
                color:#151515;
                font-weight: bold;
              }
             };  
        }
    }}
}
}
</style>
