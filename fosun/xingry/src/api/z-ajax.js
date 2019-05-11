'use strict';
/**
 * 函数：将普通js对象转换成表单参数字符串
 * 输入：
 * 输出：
**/
function objToParams(obj) {
  var list = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      list.push(key + '=' + obj[key]);
    }
  }
  return list.join('&');
}

var zAJAX = function (url, datas, func, type = "POST") {
  if (!navigator.onLine) {
    func({ result: 0, message: '网络已断开，请连接网络！' });
  }
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open(type, url, true);
  if (type == "POST") {
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  xmlhttp.send(objToParams(datas));

  var t1 = setTimeout(function () {
    func({ result: 0, message: '请求超时，请稍后重试！' });
    xmlhttp.abort();
  }, 30000);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      clearTimeout(t1)
      func(JSON.parse(xmlhttp.responseText));
    }
  }
}

module.exports = zAJAX;


//////////////////
// WEBPACK FOOTER
// ./~/.1.0.9@z-ajax/lib/zAJAX.js
// module id = 438
// module chunks = 0