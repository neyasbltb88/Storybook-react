import React, { Component, createRef } from 'react';

const MouseDetect = (Comp) => {
    return class MouseDetect extends Component {
        constructor(props) {
            super(props);
            this.comp = createRef();

            this.state = {
                type: null,
                side: null
            }
        }

        detectSide(mouse, elem) {
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

        onMouse = ({ pageX, pageY, target, type}) => {
            let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = target;

            let side = this.detectSide({
                x: pageX,
                y: pageY
            }, {
                x: {
                    left: offsetLeft,
                    right: offsetLeft + offsetWidth
                }, 
                y: {
                    top: offsetTop,
                    bottom: offsetTop + offsetHeight
                }
            });

            this.setState({
                type,
                side
            });
        }

        componentDidMount() {
            let comp = this.comp.current;
            comp.addEventListener('mouseenter', this.onMouse);
            comp.addEventListener('mouseleave', this.onMouse);
        }

        render() {
            const props = { ...this.props, 'data-mouse-detect': true };
            return <Comp ref={ this.comp } mouseDetect={this.state} { ...props }/>
        }
    }
}

export default MouseDetect;