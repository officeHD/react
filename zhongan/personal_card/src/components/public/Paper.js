import React, {Component} from 'react';
import style from '../asset/css/index.less'

export default class out extends Component {

    render() {
        if (!this.props.isShow) {
            return null
        }

        return (
            <div className="cover">
                <div className={style.paper}>
                    <div className={style.title}>
                        {this.props.title}
                        <div className={style.close} onClick={this.props.onClose}>&times;</div>
                    </div>
                    <div className={style.body}>
                        <iframe src="http://localhost:8080/ms-console/static/pdf/gyx/gyx.pdf.html" />
                    </div>
                    

                </div>
            </div>
        );
    };
}
