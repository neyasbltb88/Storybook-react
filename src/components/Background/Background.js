import React from 'react';
import './Background.css';

const Background = (props) => {
    const {children, color = '#171b1f', style = {}, center, ...rest} = props;
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const colorStyle = {
        '--color': color
    };
    const _style = center ? {...colorStyle, ...centerStyle, ...style} : {...colorStyle, ...style};

    return (
        <div className="Background" style={_style} {...rest}>
            {children}
        </div>
    )
}

export default Background;