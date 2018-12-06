const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { changeNavActionCreator } = require('../../modules/navList');

class Order extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        console.log('order mounted');
        let path = this.props.location.pathname;
        this.props.changeNav(path);
    }

    render () {
        return (
            <div>
                <h1>这里是订单管理</h1>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}

module.exports = connect(
    ({ nav }) => ({ navList: nav.list }),
    {
        changeNav: changeNavActionCreator
    }
)(Order);
