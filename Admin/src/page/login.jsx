import React from 'react';
import ReactDOM from 'react-dom';
import { changeFileName } from './common/common.js';
import { Form, Input, Button, notification} from 'antd';

import '../less/login.less'

const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }  

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().userName;
        let p = this.props.form.getFieldsValue().password;
        if (n === 'ilovejasonbai' && p === 'ilovejasonbai') {
            // 表单的路由处理
            let ss = window.sessionStorage;
            ss.userName = n;            
            ss.password = p;
            changeFileName('index');            
        } else {
            this.openNotificationWithIcon('info');
        }
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '用户名&密码',
                 description: '都是：ilovejasonbai',
                 duration: 6
               })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');  
    }

    render() {  
        const { getFieldDecorator } = this.props.form;    
        return (
            <div id="loginpagewrap">
                <p>Sign in to PDB</p>
                <div id="loginWrap">                
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('userName')(
                                <Input placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password')(
                                <Input type="password" placeholder="Password" />
                            )}
                        </FormItem>                    
                        <Button type="primary" htmlType="submit" id="loginBtn">Login</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;

ReactDOM.render(
    <Login />
    , document.querySelector('#init')
)