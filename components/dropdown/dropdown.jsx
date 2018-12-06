require('./dropdown.less');
const React = require('react');
const { addEventListener, removeEventListener } = require('../../methods/eventListener');

const Dropdown = function (props) {
    let dropdownRef = null;

    const documentHandle = function (e) {
        if (dropdownRef && (!dropdownRef.contains(e.target))) {
            handleDeleteDropdown()
        }
    };

    const handleAddDropdown = function () {
        addEventListener(window, 'click', documentHandle)
    };

    const handleDeleteDropdown = function () {
        removeEventListener(window, 'click', documentHandle);
        props.changeDropdown('none')
    };

    let display = props.display;
    let style = {
        display: display
    };

    if (display == 'block') {
        handleAddDropdown()
    }

    return (
        <div style={style} ref={(dropdown) => {dropdownRef = dropdown}} className={"dropdown"}>
            {
                props.dropdownArr.map((v, i) => {
                    return (
                        <div key={i} className={"dropdown-item"} onClick={v.handle}>
                            {v.label}
                        </div>
                    )
                })
            }
        </div>
    )
};

module.exports = Dropdown;