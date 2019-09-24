import React from 'react';
import './Btn.css';

const Btn = (props) => {
    const { onClick, label, disabled, dense, invert, children, color, background, className = '', ...rest } = props;
    let content = children ? children : label;
    let title = (children && label) ? label : '';
    let _className = `Btn${dense ? ' Btn-dense' : ''}${invert ? ' Btn-invert' : ''} ${className}`.trim();
    let _primary = '#61DAFB';
    let _secondary = background || 'transparent';

    let primary = color || _primary;
    let secondary = invert ? (background ? background : '#171b1f' ) : _secondary;
    let style = {
        '--primary': !invert ? primary : secondary,
        '--secondary': !invert ? secondary : primary
    }

    return <button style={style} className={_className} onClick={onClick} disabled={disabled} title={title} {...rest} >{content}</button>
}

export default Btn;