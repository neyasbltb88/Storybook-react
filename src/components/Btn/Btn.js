import React, { forwardRef } from 'react';
import './Btn.css';

const Btn = forwardRef(function Btn(props, ref) {
    const { onClick, label, disabled, dense, icon, invert, children, color, background, className = '', mouseDetect = false, ...rest } = props;
    let content = children ? children : label;
    let title = (children && label) ? label : '';
    let _className = `Btn${dense ? ' Btn-dense' : ''}${icon ? ' Btn-icon' : ''}${invert ? ' Btn-invert' : ''} ${className}`.trim();
    let _primary = '#61DAFB';
    let _secondary = background || 'transparent';

    let primary = color || _primary;
    let secondary = invert ? (background ? background : '#171b1f' ) : _secondary;
    let style = {
        '--primary': !invert ? primary : secondary,
        '--secondary': !invert ? secondary : primary
    }

    
    let withMouseDetect = (mouseDetect !== false) ? true : false;
    if(withMouseDetect) {
        let { type, side } = mouseDetect;
        if(type && side) {
            _className = _className + ` ${type}-${side}`;
        }
    }    

    return <button ref={ref} style={style} className={_className} onClick={onClick} disabled={disabled} title={title} data-mouse-detect={withMouseDetect} {...rest} >{content}</button>
});

export default Btn;