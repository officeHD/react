import React, {Component} from 'react';
import style from '../asset/css/TitleBar.less'
class SubFrame extends Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <iframe className={style.sub_frame} src={`${ctx}`+`${this.props.url}?idNumber=`+`${this.props.idNum}`} id="sub_frame"></iframe>
        );
    };
}
export default SubFrame