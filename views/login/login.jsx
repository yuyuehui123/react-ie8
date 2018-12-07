const React = require('react');
const { Link } = require('react-router');
require('./login.less');

class Login extends React.Component {
    render () {
        return (
            <div className={'login-container'}>
                <div className={'login-div'}>
                    <div className={'login-left'}>
                        <div className={'form-control'}>
                            <i className={'account-icon'}></i>
                            <input className={'login-input'} type="text" placeholder={'请输入账号'}/>
                        </div>
                        <div className={'form-control'}>
                            <i className={'password-icon'}></i>
                            <input className={'login-input'} type="password" placeholder={'请输入密码'}/>
                        </div>
                        <div className={'form-btn-control'}>
                            <span className={'login-btn'}>登录</span>
                        </div>
                    </div>
                    <div className={'login-right'}>
                        <img src="../../images/erweima.jpg" alt="" width={150}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Login;