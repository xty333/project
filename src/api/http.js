import axios from 'axios'
export const get=(url,params)=>{
   //url+='&v=1.0.0'; //加等于版本符
   return axios.get(url,{params}) //地址，对象
}
export const post=(url,params)=>{
   return axios.post(url,params)
}
