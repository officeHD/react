import React, { Component } from 'react'
import style from './index.less'
import SubTitle from './SubTitle'
import { observer, inject } from 'mobx-react';

import TabSection1 from './TabSection1'
import TabSection3 from './TabSection3'
import TabSection4 from './TabSection4'


@inject('store')
@observer
export default class Out extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            activeItem: "",
            navTop: false

        }
        this.offsetTop = 0;
        this.term1 = null;
        this.term2 = null;
        this.term3 = null;
        this.term4 = null;
        this.term1Top = 0;
        this.term2Top = 0;
        this.term3Top = 0;
        this.term4Top = 0;
        this.handleScroll = this.handleScroll.bind(this)
        this.onScrollTo = this.onScrollTo.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    onScrollTo(ref) {
        this.setState({
            activeItem: ref
        })
        if (ref == "item1") {
            window.scrollTo(0, this.term1Top);
        } else if (ref == "item2") {
            window.scrollTo(0, this.term2Top);

        } else if (ref == "item3") {
            window.scrollTo(0, this.term3Top);

        } else if (ref == "item4") {
            window.scrollTo(0, this.term4Top);

        }
    }
    handleScroll() {
        if (this.refs.item1) {
            this.term1 = this.refs.item1;
            this.term2 = this.refs.item2;
            this.term3 = this.refs.item3;
            this.term4 = this.refs.item4;
            this.term1Top = this.term1 ? this.term1.offsetTop - 100 : 0;
            this.term2Top = this.term2 ? this.term2.offsetTop - 100 : 0;
            this.term3Top = this.term3 ? this.term3.offsetTop - 100 : 0;
            this.term4Top = this.term4 ? this.term4.offsetTop - 100 : 0;
        }
        let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let activeItem = "";
        // console.log(sTop,this.term1Top,this.term2Top,this.term3Top,this.term4Top);
        if (sTop >= this.term1Top && sTop < this.term2Top) {
            activeItem = "item1";
        } else if (sTop >= this.term2Top && sTop < this.term3Top) {
            activeItem = "item2";
        } else if (sTop >= this.term3Top && sTop < this.term4Top) {
            activeItem = "item3";
        } else if (sTop >= this.term4Top) {
            activeItem = "item4";
        }
        this.setState({
            activeItem: activeItem
        })

        if (!this.state.navTop && sTop >= this.term1Top) {

            this.setState({
                navTop: true,

            })

        }
        // console.log(this.offsetTop)
        if (sTop < this.term1Top) {
            this.setState({
                navTop: false,

            })
        }
    }

    render() {
        let {store}=this.props
         
        return (
            <div>
                {
                    this.state.activeItem ? <ul className={`${this.state.navTop ? style.fixedTop : ""} ${style.tab_controller}`} style={{ zIndex: 999 }} >
                        <li className={this.state.activeItem == 'item1' ? style.selected : ''} onClick={e => this.onScrollTo("item1")}>保障方案</li>
                        <li className={this.state.activeItem == 'item2' ? style.selected : ''} onClick={e => this.onScrollTo("item2")}>产品介绍</li>
                        <li className={this.state.activeItem == 'item3' ? style.selected : ''} onClick={e => this.onScrollTo("item3")}>理赔服务</li>
                        <li className={this.state.activeItem == 'item4' ? style.selected : ''} onClick={e => this.onScrollTo("item4")}>常见问题</li>
                    </ul> : ""
                }

                <div ref="item1" className={style.plansub}>
                    <SubTitle icon="bao" title="投保须知" />
                    <TabSection1 insuNotice={store.insurance.insuNotice} />
                </div>
                <div ref="item2" className={style.plansub}>
                    <SubTitle icon="bao" title="产品介绍" />
                    <img src={require(`../../components/asset/img/plan/${store.insurance.varietyCode}.jpg`)} />
                </div>
                <div ref="item3" className={style.plansub} >
                    <SubTitle icon="bao" title="理赔服务" /> 
                    <TabSection3 />
                </div>
                <div ref="item4" className={style.plansub} >
                    <SubTitle icon="bao" title="常见问题" />
                    <TabSection4  problem={store.insurance.problem} />
                </div>
            </div>
        )
    }
}