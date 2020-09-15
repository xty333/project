<template>
    <div class="wrapClassify">
        
        <div class="list">
            <ul >
                <router-link to="/home/classify/hairdressing/Hairdressing" tag="li" active-class="active"><span>美容彩妆</span></router-link>
                <router-link to="/home/classify/milkpowder/Milkpowder" tag="li" active-class="active"><span>奶粉/纸尿裤</span></router-link>
                <router-link to="/home/classify/infant/Infant" tag="li" active-class="active"><span>母婴专区</span></router-link>
                <router-link to="/home/classify/health/Health" tag="li" active-class="active"><span>营养保健</span></router-link>
                <router-link to="/home/classify/numerical/Numerical" tag="li" active-class="active"><span>数码家电</span></router-link>
                <router-link to="/home/classify/individual/Individual" tag="li" active-class="active"><span>个人洗护</span></router-link>
                <router-link to="/home/classify/entrylux/Entrylux" tag="li" active-class="active"><span>轻奢</span></router-link>
                <router-link to="/home/classify/apparel/Apparel" tag="li" active-class="active"><span>服饰鞋靴</span></router-link>
                <router-link to="/home/classify/sport/Sport" tag="li" active-class="active"><span>运动户外</span></router-link>
                <router-link to="/home/classify/watch/Watch" tag="li" active-class="active"><span>手表配饰</span></router-link>
                <router-link to="/home/classify/family/Family" tag="li" active-class="active"><span>家居生活</span></router-link>
                <router-link to="/home/classify/food/Food" tag="li" active-class="active"><span>环球美食</span></router-link>
                <router-link to="/home/classify/factory/Factory" tag="li" active-class="active"><span>全球工厂店</span></router-link>
                <router-link to="/home/classify/overseas/Overseas" tag="li" active-class="active"><span>海外直邮</span></router-link>
                <router-link to="/home/classify/strict/Strict" tag="li" active-class="active"><span>网易严选</span></router-link>
                <router-link to="/home/classify/super/Super" tag="li" active-class="active"><span>海外商超</span></router-link>
                <router-link to="/home/classify/fresh/Fresh" tag="li" active-class="active"><span>生鲜</span></router-link>
                <router-link to="/home/classify/voucher/Voucher" tag="li" active-class="active"><span>充值中心</span></router-link>
                <router-link to="/home/classify/pet/Pet" tag="li" active-class="active"><span>宠物生活</span></router-link> 
            </ul>
        </div>
        <div class="view">
            <router-view></router-view>
         </div> 
    </div>
</template>
<style lang="scss" scoped>
.wrapClassify{
    // flex: 1;
    height:100%; 
    overflow:hidden;
    display:flex;
    flex-direction:row;
}
.list{
    // position: fixed;
    // top: 0;
    // left: 0;
    // bottom: 50px;
    // z-index: 2;
    // float: left;
    overflow: auto;
    width: 100px;
    background: #fff;
    box-shadow: inset -1px 0 0 0 #ddd;
    border-right:1px solid #ccc;
    ul{
        flex: 1;
        text-align: center;
        width:100px;
        border-right:1px solid #ccc;
    }
    li{
        height:50px;
        line-height: 50px;
        list-style: none;
        span{
            font-size:14px;
            color: #666;
        }
    }
    .active{

        background: -webkit-gradient(linear,right top,left top,from(red),to(#ff3264));
    }
}
.view{
    flex: 1;
}
</style>