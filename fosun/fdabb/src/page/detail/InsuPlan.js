import React, { Component } from 'react'
import Accordion from '../../components/Accordion'
import style from './index.less'
import { Link } from 'react-router'

export default class Instruction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
        this.changeCurrent = this.changeCurrent.bind(this)
        // this.onScrollTo = this.onScrollTo.bind(this)
    }

    changeCurrent(val) {
        this.setState({
            current:val
        })
         
    }
    render() {
        let {planData}=this.props;
        
        console.log(planData)
        if(!planData){
            return null;
        }
        return (
            <div className={style.insuPlan}>
                <ul className={style.title}>
                    {
                        planData.map((item) => { return <li key={item.defaultfee} onClick={e => this.changeCurrent(item.id)} className={`${this.state.current == item.id ? style.active : ""}`} >{item.name}</li> })
                    }
                </ul>
                <div className={style.insuContent}>
                    {
                        planData[this.state.current].lists.map((item,index) => <Accordion key={index} title={item.title} tip={item.name} more={item.content} />)
                    }
                </div>
                <div className={style.prem}>
                    <div className={style.premFee}>￥<label>{planData[this.state.current].defaultfee}</label> 起</div>
                    <div className={style.calcbtn}> <Link to="computed">保费试算</Link></div>
                </div>
            </div>
        )
    }
}
