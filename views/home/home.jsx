const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { changeNavActionCreator } = require('../../modules/navList');

class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        console.log('home mounted');
        let path = this.props.location.pathname;
        this.props.changeNav(path);
    }

    render () {
        return (
            <div>
                <h1>这里是主页</h1>
                <ul>
                    <Link to={'/set'}>系统管理12333</Link>
                    <Link to={'/order'}>订单管理12</Link>
                    <Link to={'/account'}>账号管理12</Link>
                    <Link to={'/trade'}>交易管理12</Link>
                </ul>
            </div>
        )
    }
}

module.exports = connect(
    ({ nav }) => ({ navList: nav.list }),
    {
        changeNav: changeNavActionCreator
    }
)(Home);

