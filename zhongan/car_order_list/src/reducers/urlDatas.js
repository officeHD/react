import { INIT_URL_DATAS } from '../actions'

//获取url参数
const getUrlParam = (name) => {  
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg); 
    //返回参数值  
    if (r!== null) return unescape(r[2]);  
    return null;  
}

export const staffId = (state = '', action) => {
  switch (action.type) {
    case INIT_URL_DATAS:
      let staffId = getUrlParam('staffId')
      if (!staffId) {
        staffId = ''
      }
      return staffId
    default:
      return state
  }
}

 