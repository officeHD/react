import React, {Component} from 'react';
import style from '../asset/css/share.less';
 
 const getUrlParam = function(name) {
    //构造一个含有目标参数的正则表达式对象  
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    const r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r !== null) return unescape(r[2]);
    return null;
};
export default class Footer extends Component {
    constructor(props){
        super(props); 
         this.share=this.share.bind(this); 
    }
    share(){
    	let org=window.location.origin;
        let pathname=window.location.pathname;
        let origin=org+pathname;
        let sharepid=getUrlParam("pid");
    	 
    	let test=`${origin}/?type=pc&workNum=${this.props.staffmes.workNum}&productId=HXHXF001A&pid=${sharepid}#/share`
    	console.log(test)
        if(window.minsheng){
           window.minsheng.share(test,"华夏福","82种重疾保障，守护您的健康",`/static/img/lifeInsurance/hxhxf.png`)
        }else{
          tianbai.share(test+"@华夏福@82种重疾保障，守护您的健康@/static/img/lifeInsurance/hxhxf.png")  
        }
    }
    render() {

    	return (
	        <div className={style.sharefoot}>
			   	<div className={`${style.item} ${style.after}`}>
			     	<a href={`${ctx}/usercard?workNum=${this.props.staffmes.workNum}`} className={style.intema}>
			     	 	<img src={require(`../asset/img/user.png`)} />
				     	<div className={style.info}>{this.props.staffmes.name}</div>
			     	</a>
			    </div> 
			    <div className={`${style.item} ${style.after}`}>
			     	<a  href={"tel:"+this.props.staffmes.phoneNum} className={style.intema}>{this.props.staffmes.phoneNum}</a>
			    </div> 
			    <div className={style.item} onClick={this.share}>

			     	{this.props.type?<span className={style.intema}>分享给客户</span>:<a href={`${ctx}/usercard?workNum=${this.props.staffmes.workNum}`} className={style.intema}>查看名片</a>}
			    	
			    </div>
		  	</div>
        )
    };
}