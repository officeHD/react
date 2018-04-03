import React, {Component} from 'react'
import style from '../asset/css/index.less'
 import { Pagination, Icon } from 'antd-mobile';
 import { getDataFromUrl,getOrderDetail } from '../APIUtils';
 import AppActionCreators from '../../actions/AppActionCreators';

 

export default class Out extends Component {
    constructor(props){
        super(props);
        this.state = { 
          current:this.props.current
        }   
    }

    
    nextText(page){
      getDataFromUrl(page+1)
       AppActionCreators.setcurrentPage(page)
    }
    render(){
      let listShows = this.props.lists.map((text, index)=> {
            return (
                 <li className={style.content_li} key={index}  >
                    <div className={style.title_mes}>
                      <label>{text.insuranceName}</label> <span className={style.mes_status}>{text.orderStatus}</span>
                    </div>
                    <div className={style.main_mes} onClick={e => this.props.Todetail(text)}>
                      <div className={style.img_content}>
                        <img src={require('../asset/img/pic_ha.png')}/>
                      </div>
                      <ul>
                        <li>
                            <label>投保人：</label>
                            <span> {text.insuredPerson}</span>
                            <span className={style.pull_right}>{text.applicantPhone}</span>
                        </li>
                        <li>
                            <label className={style.order_title}>保单编号：</label>
                            <span className={style.order}>{text.orderNum}</span>
                        </li>
                        <li>
                            <label>预收时间：</label>
                            <span> {text.insuranceDate}</span>
                        </li>
                      </ul>
                    </div>
                    <div className={style.price_mes}>
                      共1件商品 合计： ￥<span className={style.price}>{text.insuranceFee}</span>
                    </div>
                    {text.orderStatus==="未承保"&&text.companyAb===true?<div className={style.operation}>
                      <button onClick={e => this.props.payorder(text) }>
                          去付款
                      </button> </div>:''}
                    
                   
                </li>
            );
        });
      const locale = {
        prevText: 'Prev',
        nextText: 'Next',
      };
 
        return (
          <div>
            <ul className={style.content_ul}>
              {listShows}
              {listShows.length?<div className={style.page}>

                <Pagination total={this.props.page}
                current={this.props.current}
                locale={{
                  prevText: (<span className="arrow-align" > 上一页</span>),
                  nextText: (<span className="arrow-align" >下一页 </span>),
                }}
                onChange={(page)=>this.nextText(page)}
              />
              </div>:<h2>暂 无 订 单 !</h2>}
              
              
            </ul> 
          </div>
        )
    }
}