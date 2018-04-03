import zAJAX from 'z-ajax'
import data from '../reducers/data.json'

//获取代理人信息
export const getInfo = (state, id, cb) => {
    zAJAX(`${ctx}/lifeInsuranceApi/getInfo`, {staffid : id} , cb)
} 

//从地址栏里获取数据
export const getDataFromUrl = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
  var r = window.location.search.substr(1).match(reg);  
  if (r!== null) return decodeURI(r[2]);  
  return null; 
}
