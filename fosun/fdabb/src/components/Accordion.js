import React, { Component } from 'react'
import style from './asset/css/index.less'
import ShowController from './ShowController'

export default class Plans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow() {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        let { title, tip, more } = this.props;
        return (
            <div>
                <div className={`${this.state.show ? style.plan_all : style.plan_list} ${more ? '' : style.nobb}`}>
                    <span className={style.detail_title}>
                        <span className={style.detail_half}> {title}</span>
                        <span className={style.detail_half}> {tip}
                            {more ? <ShowController show={this.state.show} onToggleShow={this.toggleShow} /> : ""}
                        </span>
                    </span>
                    <span className={style.more_info}>
                        {more}
                    </span>
                </div>
            </div>
        )
    }
}