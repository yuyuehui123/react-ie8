const React = require('react');
const { Link } = require('react-router');
require('./login.less');

class Login extends React.Component {
    render () {
        return (
            <div className={'login-container'}>
                <div>
                    <input type="text" placeholder={'hhhhhhhhh'}/>
                </div>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}

module.exports = Login;