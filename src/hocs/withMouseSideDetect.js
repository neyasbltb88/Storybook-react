import React, { useState } from 'react';

const MouseDetect = (Comp) => {
    const MouseDetect = (props) => {
        const [ state, setState ] = useState({ type: null, side: null });

        const detectSide = (mouse, elem) => {
            let minDistance = Infinity;
            let side = null;

            Object.keys(mouse).forEach(axis => {
                Object.keys(elem[axis]).forEach(axisSide => {
                    let distance = Math.abs(mouse[axis] - elem[axis][axisSide]);
                    if(distance < minDistance) {
                        minDistance = distance;
                        side = axisSide
                    }
                })
            });

            return side;
        }

        const onMouse = ({ pageX, pageY, target, type }) => {
            let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = target;
            let mouse = { x: pageX, y: pageY };
            let elem = {
                x: {
                    left: offsetLeft,
                    right: offsetLeft + offsetWidth
                }, 
                y: {
                    top: offsetTop,
                    bottom: offsetTop + offsetHeight
                }
            };
            let side = detectSide(mouse, elem);

            setState({ type, side });
        }

        props = { ...props, 'data-mouse-detect': true };
        return <Comp onMouseEnter={onMouse} onMouseLeave={onMouse} mouseDetect={state} { ...props }/>
    }

    return MouseDetect;
}

export default MouseDetect;