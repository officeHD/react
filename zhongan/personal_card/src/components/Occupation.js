import React, {Component} from 'react'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
import { Toast } from 'antd-mobile';
export default class OutPut extends Component{
  constructor(props){
        super(props);
       

        this.handelClick = this.handelClick.bind(this)
    }

  componentWillUnmount() {
    
    //当页面卸载时，要关闭选择器
    this.props.onClose()
  }
  handelClick(){
     Toast.info('拒保', 1);
     this.props.onClose()
  }
  render() {
    if (!this.props.isShow) {
      return null
    } 

    let listShows = null;
    if (this.props.step === 0) {
      listShows = this.props.list.map((ind, index) => {
        return (<li key={index} onClick={e => this.props.onClickInd(index)}>{ind.name}</li>)
      })
    } else {
      listShows = this.props.list.map((job, index) => {
        if (job.class == '1'||job.class == '2'||job.class == '3') {
          return (
            <li key={index} onClick={e => this.props.onClickJob(`${job.name}(${job.class}类)`, `${this.props.indName}|${job.name}(${job.class}类)|${job.detail}`)}>
              <span>{`${job.name}(${job.class}类)`}</span>
              <p>{job.detail}</p>
            </li>
          )
        }else{
          return(
             <li key={index} onClick={this.handelClick}>
              <span>{`${job.name}(${job.class}类)`}</span>
              <p>{job.detail}</p>
            </li>
            )
        }
      })
    }

    return (
      <div className={style.occupation}>
        <div className={style.o_head}>
          <h2>请选择{this.props.title}</h2>
          <span dangerouslySetInnerHTML={{__html: this.props.btn}} onClick={e => this.props.onClickBtn(this.props.step)}></span>
        </div>
        <div className={style.o_body}>
          <ol>
            {listShows}
          </ol>
        </div>

      </div>
    )
  }

}
