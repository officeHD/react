import React from 'react'
import style from './asset/css/index.less'
 
const OrderMes = ({ title, bnfsData,bnfrelation, bnfsType, name, phone, certiNo, effictive, email, address, location, forInsuredPerson, jobCategory, insuredsData }) => {
    let bnfList = null;
    // console.log(title, bnfsData, bnfsType);
    if (title == "受益人" ) {
        if(bnfsType[0] == "2"){
            bnfList = bnfsData.map((item, index) => {
                // console.log(item.relationToInsured)
                let relation;
                 bnfrelation.forEach((item2,index)=>{if(item.relationToInsured==item2.value){relation= item2.label}});
               
                return (<ul key={index}>
                    <li>与被保人关系： {relation} </li>
                    <li><span className={style.title}>姓名：</span> {item.name} </li>
                    <li><span className={style.title}>证件号：</span> {item.idNo} </li>
                    <li><span className={style.title}>手机号：</span> {item.phone} </li>
                    <li><span className={style.title}>受益比例：</span> {item.bnfLot} % </li>
    
                </ul>)
            })
        }else{
            bnfList=(
                <ul >
                    <li>受益人：法定 </li> 
                </ul>
            ) 
        }
       
    } else {
        if (title === "投保人" || (forInsuredPerson && forInsuredPerson[0] !== '本人')) {
            bnfList = (<ul>
                <li><span className={style.title}>姓名：</span> {name} </li>
                {phone ? <li><span className={style.title}>手机号码：</span>{phone} </li> : null}
                <li><span className={style.title}>证件号：</span>{certiNo} </li>
                <li><span className={style.title}>证件有效期：</span>{effictive} </li>
                <li><span className={style.title}>电子邮箱：</span>{email} </li>
                <li><span className={style.title}>所在地区：</span>{address} </li>
                <li><span className={style.title}>详细地区：</span>{location} </li>
            </ul>)
        }
    }
    return (
        <div className={style.ordermes}>
            <label>{title}信息</label>
            {title === "被保人" ?
                <ul>
                    <li>与投保人关系：{forInsuredPerson} </li>
                    {insuredsData.insuSocialSecFlag === "Y"&&insuredsData.socialInsuCityName ?
                        <li>被保人社保地： {insuredsData.socialInsuProvinceName} ，{insuredsData.socialInsuCityName} </li> : null
                    }
                    <li>被保人职业：{jobCategory} </li>
                </ul> : null}
            {bnfList}
        </div>
    )

}

export default OrderMes


