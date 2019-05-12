import React, { Component } from 'react'
import style from './asset/css/index.less'
import { Icon } from 'antd-mobile';


import { occupationArry } from '../store/job'


export default class OccupationSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parent: ""
        }
    }
    setParent(val) {
        this.setState({
            parent: val
        })
    }
    componentDidMount() {
        document.getElementsByTagName('body')[0].style.overflowY= 'hidden'; //禁止屏幕滚动 
        if(this.props.parent){
            this.setState({
                parent: this.props.parent
            })
        }
    }
    componentWillUnmount() {
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll'; //屏幕可滚动 
    }
    render() {
        let { changeShow, setcode,parent,code } = this.props;
        
        let currentData = occupationArry.filter((item) => this.state.parent ? item.parent == this.state.parent : !item.parent)
        return (
            <div className="mask" style={{ zIndex: 10 }} onClick={changeShow}>
                <div className={style.occupationBox} onClick={e => e.stopPropagation()}>
                    <div className={style.title}>
                        <span>
                            {
                                this.state.parent ? <Icon type="left" size="md" onClick={e => this.setState({
                                    parent: ""
                                })} /> : "请选择职业类别"

                            } 
                        </span>
                        <span onClick={changeShow}>
                            <Icon type="cross" size="md" />
                        </span>
                    </div>
                    <div className={style.content}>
                        {
                            currentData.map((item) => {
                                return <div key={item.value} className={`${style.item} ${item.value==parent||code==item.value?style.active:""}`}
                                    onClick={e => {
                                        this.state.parent ? setcode(item) : this.setState({
                                            parent: item.value
                                        })
                                    }}>{item.name}
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
