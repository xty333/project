<template>
<div class="content">
        <HeaderBar v-show="$store.state.showAd"></HeaderBar>
        <router-view></router-view>
        <div class="nav" v-show="$store.state.shownav" >
            <p class="arrow-left"><van-icon @click="goclick" name="arrow-left"  /></p>
            <ul>
               <li @click="goo('e')">商品</li>
               <li @click="goo('p')">评价</li>
               <li @click="goo('eval')">推荐</li>
               <li @click="goo('recommend')">详情</li>
            </ul>
           <p class="arrow-left"><van-icon name="wap-home-o" @click="goclick" class="home" /></p>
        </div> 
<div class="wrap" ref="wrap">
    <div> 
        <div class="carousel" id="e">
            <van-swipe class="my-swipe" :autoplay="3000"  indicator-color="white" @change="onChange">
            <van-swipe-item><img :src="item.goodsImage | wh(375.375)" alt=""></van-swipe-item>
            <van-swipe-item><img :src="item.goodsImage1 | wh(375.375)" alt=""></van-swipe-item>
            <van-swipe-item><img :src="item.goodsImage | wh(375.375)" alt=""></van-swipe-item>
            <van-swipe-item><img :src="item.goodsImage1 | wh(375.375)" alt=""></van-swipe-item>
            <van-swipe-item><img :src="item.goodsImage | wh(375.375)" alt=""></van-swipe-item>
            <van-swipe-item><img :src="item.goodsImage1 | wh(375.375)" alt=""></van-swipe-item>
            <slot name="indicator"></slot>
            <template #indicator>
                <div class="custom-indicator">
                    {{ current + 1}}/6
                    
                </div>
            </template>
            </van-swipe>
        </div>
        <div class="price">
            <div class="pricecon"><i>￥</i><span>{{item.currentPrice}}</span><b>起</b></div>
            <div class="oldprice"><span>￥</span><i>{{item.vip}}</i></div>
            <div class="Interestholiday"><p>3期免息</p></div>
            <div class="Special "><p>特价</p></div> 
            <div class="Collection">
                <img src="../../assets/img/xin.jpg" @click="showheater=!showheater" alt="">
                <img class="img2" v-show="showheater" @click="showheater=!showheater" src="../../assets/img/xin2.jpg" alt="">
                <a class="collect " href="javascript:;" >收藏</a>
            </div>   
        </div>
        <div class="open-card">
            <img src="../../assets/img/ka.png" alt="">
            <p>黑卡开通，下单预计省￥10,可得30元红包</p>
            <div class="now" @click="opencd">
                <p class="open">立即<br>开卡</p>
                <van-icon name="arrow" class="icon" />
            </div>
        </div>
        <div class="dw">
            <span  v-show="showheater"><i>收藏成功</i></span>
        </div>
    
         <div class="price-con" ref="detaillist">
            <ul >
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
                <li>商品|450元</li>
            </ul>
        </div>
        <div class="tit"><p>{{item.goodsName}}{{item.goodMinName}}</p></div>
        <div class="mintit">{{item.goodsName}}</div>
        <div class="logo">
            <img src="../../assets/img/meiguo.png" alt="">
            <p>美国品牌</p>
            <img src="../../assets/img/meiguo1.png" alt="">
            <p>跨境商品</p>
        </div>
        <div class="guy" id="p">
            <h4> 其他小伙伴们说(15199)</h4>
            <van-icon name="arrow" class="right" />
        </div>

        <div id="eval" ref="shoplist" >
            <div style="display:flex;">
                <div class="user">
                    <div class="bear"><img src="../../assets/img/hei.png" alt=""><i>1***4</i></div>
                    <p>包装品质，盒子里<br>面都是独立包装，<br>每款都很好用</p>
                </div>
                <img src="../../assets/img/xie.webp" alt="">

                <div class="user">
                    <div class="bear"><img src="../../assets/img/hei.png" alt=""><i>1***4</i></div>
                    <p>包装品质，盒子里<br>面都是独立包装，<br>每款都很好用</p>
                </div>
                <img src="../../assets/img/xie.webp" alt="">

                <div class="user">
                    <div class="bear"><img src="../../assets/img/hei.png" alt=""><i>1***4</i></div>
                    <p>包装品质，盒子里<br>面都是独立包装，<br>每款都很好用</p>
                </div>
                <img src="../../assets/img/xie.webp" alt="">
            </div>
            </div>
            
        </div>
        <div id="recommend">
            <div class="ES">
                <img src="../../assets/img/es.webp" alt="">
                <p><span>ES海外专营店</span><br><i>品牌商入驻  服务保障</i></p>
            </div>
        </div>
        <div id="detail">
            <h4>详情介绍</h4>
            <img src="../../assets/img/bj.png" alt="">
        </div>
    </div>

        <div class="bottom">
            <ul>
                <router-link  to="/arcade"  tag="li">
                    <van-icon class="icon1" name="shop-o" />
                    店铺入口
                </router-link>
                <router-link  to="/service" tag="li">
                    <van-icon class="icon1" name="chat-o" />
                    客服
                </router-link>
                <router-link  to="/carttwo" tag="li">
                <van-icon class="icon1" name="cart-o" />
                    购物车
                </router-link>
                <li>加入购物车</li>
                <li>立即购买</li>
            </ul>
        </div>   
        <!-- <router-view></router-view> -->
</div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import HeaderBar from "../../components/HeaderBar";
import BScroll from "@better-scroll/core";
import iconfont from "../../assets/iconfond/iconfont.css";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  // props:["item"],
  components: {
    HeaderBar,
  },
  data() {
    return {
      current: 0,
      showheater: false,
      list: [],
      flag: false,
    };
  },
  computed: {
    item() {
      return this.$route.query;
    },
  },
  mounted() {
    // console.log(this.$route.query),
    this.init();
    this.initwrap();
    this.shopping();
  },
  methods: {
      goo(i){
         this.bss.scrollToElement(('#'+i),500)
      },
    onChange(index) {
      this.current = index;
    },
    opencd() {
      this.$router.push({ path: "/Open" });
    },
    init() {
      this.bs = new BScroll(this.$refs.detaillist, {
        click: true,
        probeType: 3,
        scrollX: true,
      });
    },
    initwrap() {
      this.bss = new BScroll(this.$refs.wrap, {
        click: true,
        probeType: 3,
        scrollY: true,
      });
      this.bss.on("scroll", (position) => {
        if (position.y < -50) {
          this.$store.commit("setShowAd", false);
          this.$store.commit("setShowNav", true);
        } else {
          this.$store.commit("setShowAd", true);
          this.$store.commit("setShowNav", false);
        }
      });
    },
    shopping() {
      this.bs = new BScroll(this.$refs.shoplist, {
        click: true,
        probeType: 3,
        scrollX: true,
      });
    },
    goclick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow:hidden;

}
.wrap {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    float: left;
    img {
      width: 100%;
      height: 375px;
    }
  }
}
.custom-indicator {
  position: absolute;
  left: 15px;
  bottom: 10px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  color: white;
  border-radius: 8px;

  text-align: center;
  ul {
    li {
      border-radius: 8px;
      width: 6px;
      height: 6px;
      float: left;
      margin: 0 9px;
      border: 1px solid #ccc;
    }
  }
}
.price {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  .pricecon {
    margin-left: 6px;
    width: 84px;
    i {
      color: #e31436;
      font-size: 15px;
    }
    span {
      color: #e31436;
      font-size: 24px;
      font-weight: 700;
    }
    b {
      font-size: 15px;
      color: #e31436;
    }
  }
  .oldprice {
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
    margin-left: 12px;
    margin-top: 12px;
  }
  .Interestholiday {
    width: 52px;
    height: 15px;
    background: #ff9839;
    text-align: center;
    line-height: 15px;
    border-radius: 5px;
    margin-left: 12px;
    margin-top: 12px;
    P {
      font-size: 12px;
      color: #fff;
    }
  }
  .Special {
    width: 34px;
    height: 15px;
    background: #ff8587;
    text-align: center;
    line-height: 15px;
    border-radius: 5px;
    margin-left: 12px;
    margin-top: 12px;
    p {
      color: #fff;
      font-size: 12px;
    }
  }
  .Collection {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 50px;
    margin-left: 100px;
    margin-right: 5px;
    margin-top: 5px;
    text-align: center;
    align-items: center;
    position: relative;
    img {
      width: 20px;
      height: 20px;
    }
    a {
      color: #666;
      font-size: 9px;
    }
    .img2 {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 8px;
      top: 0px;
    }
  }
}
.open-card {
  display: flex;
  height: 54px;
  align-items: center;
  position: relative;
  width: 100%;
  img {
    width: 40px;
    height: 15px;
  }
  p {
    vertical-align: -12px;
    display: inline-block;
    line-height: 21px;
    height: 21px;
    font-size: 12px;
    color: #333;
    margin-left: 3px;
    margin-top: 2px;
  }
  .now {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 55px;
    background: #f3eee3;
    p {
      margin-top: -18px;
    }
    .icon {
      margin-left: 5px;
    }
  }
}
.dw {
  span {
    display: block;
    width: 150px;
    height: 50px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 120px;
    bottom: 130px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    i {
      font-size: 16px;
      margin-top: 15px;
      display: block;
    }
  }
}
.price-con {
  height: 30px;
  overflow: hidden;
  display: flex;
  width: 100%;
  margin-top: 10px;
  ul {
    display: flex;
    li {
      width: 94px;
      height: 26px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #666;
      font-size: 12px;
      text-align: center;
      align-items: center;
      margin: 0 5px;
      line-height: 26px;
    }
  }
}
.tit {
  height: 46px;
  margin-top: 15px;
  width: 100%;
  p {
    line-height: 18px;
    padding-top: 10px;
    font-size: 14px;
    color: #333;
    font-weight: 700;
    width: 100%;
    border-top: 1px solid #ccc;
    margin-left: 5px;
  }
}
.mintit {
  margin-top: 10px;
  font-size: 13px;
  color: #333;
  line-height: 21px;
}
.logo {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    margin-left: 5px;
  }
  p {
    font-size: 12px;
    color: #666;
  }
}
.bottom {
  position: relative;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  ul {
    border-top: 1px solid #ccc;
    text-align: center;

    li {
      height: 50px;
      float: left;
      color: #666666;
      font-size: 12px;
      .icon1 {
        display: block;
        margin-top: 5px;
        margin-bottom: 3px;
        font-size: 24px;
      }
    }
    li:nth-child(1) {
      width: 68px;
    }
    li:nth-child(2) {
      width: 48px;
    }
    li:nth-child(3) {
      width: 55px;
    }
    li:nth-child(4) {
      width: 100px;
      color: #fff;
      background: #404040;
      font-size: 15px;
      line-height: 50px;
    }
    li:nth-child(5) {
      width: 100px;
      color: #fff;
      background-image: linear-gradient(225deg, #ff3163 15%, red 85%);
      font-size: 15px;
      line-height: 50px;
    }
  }
}
.nav {
  width: 100%;
  height: 45px;
  display: flex;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  .arrow-left {
    width: 45px;
    text-align: center;
    line-height: 45px;
    color: #666;
    margin-top: 1px;
    .home {
      font-size: 18px;
      color: #e31436;
    }
  }
  ul {
    display: flex;
    li {
      width: 69px;
      height: 50px;
      font-size: 14px;
      color: #666;
      text-align: center;
      position: relative;
      p {
        position: absolute;
        width: 28px;
        height: 1px;
        background: #e31436;
        left: 50%;
        bottom: 12px;
        margin-left: -14px;
      }
    }
  }
}
.guy {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  h4 {
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: normal;
  }
  .right {
    font-size: 9px;
    position: absolute;
    right: 5px;
  }
}
#eval {
  width: 100%;
  height: 120px;
  display: flex;
  .user {
    width: 105px;
    height: 120px;
    .bear {
      display: flex;
      img {
        width: 30px;
        height: 30px;
      }
      i {
        font-size: 10px;
        color: #666;
        margin: 8px 0 0 8px;
      }
    }
    p {
      margin-top: 12px;
      white-space: normal;
      line-height: 18px;
      max-height: 54px;
      overflow: hidden;
      font-size: 12px;
      color: #333;
    }
  }
  img {
    width: 110px;
    height: 110px;
  }
}
#recommend {
  width: 100%;
  height: 55px;
  display: flex;
  .ES {
    display: flex;
    img {
      width: 50px;
      height: 50px;
      margin: 10px 10px;
    }
    p {
      margin: 10px 10px;
      span {
        padding-top: 12px;
        width: 50%;
        font-family: PingFangSC-Medium;
        font-size: 15px;
        color: #333;
        line-height: 25px;
      }
      i {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
#detail {
  width: 100%;
  text-align: center;
  h4 {
    font-size: 14px;
    line-height: 44px;
  }
  img {
    width: 100%;
    height: 125px;
  }
}
.join {
  width: 100%;
  height: 200px;
}
</style>