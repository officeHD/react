import React ,{Component} from 'react'
import NavBar from '../../components/NavBar'
import style from './index.less'


export default class Out extends Component {

    render(){
        let file=this.props.location.query.file;
        let title=this.props.location.query.title;
        return (
            <div>
                <NavBar title="相关文件" />
                <iframe className={style.iframe} src={`${ctx}/static/pdfjs/web/viewer.html?file=${file}&title=${title}`}></iframe>
            </div>
        )
    }
}
 