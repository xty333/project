import Vue from 'vue'
//全局过滤器
Vue.filter("wh",function(val,params){
   return val?val.replace(/w.h/,params):''
})