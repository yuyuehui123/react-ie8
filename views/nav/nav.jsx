require('./nav.less');
const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { fetchListActionCreator, changeNavActionCreator, deleteNavActionCreator, changeUserDropdownActionCreator } = require('../../modules/navList');
const Dropdown = require('../../components/dropdown/dropdown.jsx');

class Nav extends React.Component {
    constructor (props) {
        super(props);
        this.closeTopNav = this.closeTopNav.bind(this);
        this.changeUserInfoDropdown = this.changeUserInfoDropdown.bind(this);
        this.goLogin = this.goLogin.bind(this);
        this.goSet = this.goSet.bind(this);
        this.dropDownArr = [
            {
                label: '基本资料',
                handle: this.goSet
            },
            {
                label: '退出',
                handle: this.goLogin
            }
        ];
    }

    componentWillUpdate (nextProps) {
        console.log('next nav props', nextProps);
    }

    componentDidMount () {
        console.log('nav mount', this.props);
    }

    //关闭上方导航
    closeTopNav (path, e) {
        e.preventDefault();
        if (e.stopPropagation) {
            e.stopPropagation();
            //e.nativeEvent.stopImmediatePropagation();
        } else {
            window.event.cancelBubble = true;
        }
        let pathname = this.props.location.pathname;
        if (path == pathname) {
            this.props.history.push('/');
        }
        this.props.deleteNav(path)
    }

    //调整user下拉框状态
    changeUserInfoDropdown (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            //e.nativeEvent.stopImmediatePropagation();
        } else {
            window.event.cancelBubble = true;
        }
        if (this.props.userDropdown == 'block') {
            this.props.changeDropdown('none')
        } else {
            this.props.changeDropdown('block')
        }
    }

    //去登录页
    goLogin () {
        this.props.history.push('/login')
    }

    //去系统页
    goSet () {
        this.props.history.push('/set')
    }

    render () {
        const { navList = [], topNavList = [], userDropdown, changeDropdown } = this.props;
        return (
            <div className="section-container">
                <div className={'left-nav'}>
                    <div className={'left-nav-top'}>
                        <p>
                            <i></i>
                            杭美质量服务
                        </p>
                    </div>
                    <div className={'left-nav-section'}>
                        {
                            navList.map((v, i) => {
                                let className = v.active ? 'left-nav-section-item active' : 'left-nav-section-item';
                                let iconClassName = v.active ? `${'active ' + v.icon}` : v.icon;
                                return (
                                    <Link to={v.to} key={i} className={className}>
                                        <p>
                                            <i className={iconClassName}></i>
                                            <span>{v.name}</span>
                                        </p>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={'right-nav'}>
                    <div className={'right-nav-top'}>
                        <i className="position-icon"></i>
                        <i className="flash-icon"></i>
                        <span className={"user-info"} onClick={this.changeUserInfoDropdown}>
                            <i className={"user-img"}></i>
                            <span>陈水娣</span>
                            <i className={"down-icon"}></i>

                            <Dropdown display={userDropdown} changeDropdown={changeDropdown} dropdownArr={this.dropDownArr} />
                        </span>
                    </div>
                    <div className={'right-nav-top-nav'}>
                        {
                            topNavList.map((v, i) => {
                                let className = v.active ? 'right-nav-section-item active' : 'right-nav-section-item';
                                if (v.to == '/') {
                                    return (
                                        <Link to={v.to} className={className + ' home'} key={i}>
                                            <i className="home-icon"></i>
                                        </Link>
                                    )
                                }
                                return (
                                    <Link to={v.to} className={className} key={i}>
                                        <span>{v.name}</span>
                                        <i className="cha" onClick={this.closeTopNav.bind(this, v.to)}></i>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={'right-section'}>
                        <div className={'right-section-container'}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = connect(
    ({ nav }) => ({ navList: nav.list, topNavList: nav.topNav, userDropdown: nav.display }),
    {
        fetchNavList: fetchListActionCreator,
        changeNav: changeNavActionCreator,
        deleteNav: deleteNavActionCreator,
        changeDropdown: changeUserDropdownActionCreator
    }
)(Nav);

