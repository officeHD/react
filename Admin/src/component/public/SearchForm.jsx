import React from 'react';
import { Icon,Select } from 'antd';
import '../asset/less/component/searchtitle.less';
 const Option = Select.Option;

/*页面标题组件，可传参*/
export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);       
    }       
     handleChange(value){
      console.log(`selected ${value}`);
    }
    render() {  
        return (
            <div>
                <div className="searchtitle" >
                    <h4>
                        <Icon type="search" />
                        <span>| 查询筛选</span>
                    </h4>
                    <span className="right">
                        <Icon type="down" />
                    </span>
                    
                </div>
                <div>
                    所在省份
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>Disabled</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div>
        )
    }
} 