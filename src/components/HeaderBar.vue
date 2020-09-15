<template>
    <div>
        <div class="promptly">
        <p class="img"><img src="../assets/img/xiong.png" alt=""></p>
        <div class="text">
            <p>新人送168元购物礼包</p>
            <span>下载考拉APP领取</span>
        </div>
        <div class="comming">
            立即领取
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scope>
.promptly{
    height:60px;
    width:100%;
    display: flex;
    border-bottom:1px solid #e3e3e3;
    background: #fff;

    .img{
        
        img{
            margin:10px 12px 0 12px;
            width:40px;
            height:40px;
            border:1px solid rgb(247, 236, 236);
            border-radius: 10px;
            box-shadow: 1px 1px 1px rgb(243, 239, 239);
        }  
    }
    .text{
        height:60px;
        display: flex;
        flex-direction: column;
         margin-right:77px;
         margin-top:5px;
        p{
          font-size:14px;
          color:#333;
          margin-top:10px; 
          
        }
        span{
           font-size:12px;
           color:#999; 
        }
    }
    .comming{
        width:95px;
        background-image: -webkit-gradient(linear,left top, right top,from(#ff0409),to(#ff3162));
        text-align: center;
        line-height: 60px;
        font-size:16px;
        color:#fff;
    }
}
</style>