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
                      <label>众安车险</label> <span className={style.mes_status}>{text.orderStatus}</span>
                    </div>
                    <div className={style.main_mes} onClick={e => this.props.Todetail(text)}>
                      <div className={style.img_content}>
                        <img src={require('../asset/img/pic_ha.png')}/>
                      </div>
                      <ul>
                        <li>
                            <label>投保人：</label>
                            <span> {text.name}</span>
                            <span className={style.pull_right}>{text.applicantPhone}</span>
                        </li>
                        <li>
                            <label className={style.order_title}>保单编号：</label>
                            <span className={style.order}>{text.orderNo}</span>
                        </li>
                        <li>
                            <label>报价时间：</label>
                            <span> {text.offerTime}</span>
                        </li>
                      </ul>
                    </div>
                    <div className={style.price_mes}>
                      共1件商品 合计： ￥<span className={style.price}>{text.money}</span>
                    </div>
                </li>
            );
        });
      const locale = {
        prevText: 'Prev',
        nextText: 'Next',
      };

        return (
          <div className={style.company}>
            <ul className={style.content_ul}>

              {listShows}
              <div className={style.page}>

                <Pagination total={this.props.page}
                current={this.props.current}
                locale={{
                  prevText: (<span className="arrow-align" > 上一页</span>),
                  nextText: (<span className="arrow-align" >下一页 </span>),
                }}
                onChange={(page)=>this.nextText(page)}
              />
              </div>
              
            </ul> 
          </div>
        )
    }
}