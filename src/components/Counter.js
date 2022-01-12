import React from "react";
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={ // 우클릭으로 메뉴가 열리는 이벤트
        (e) => { 
          e.preventDefault() // 우클릭 시 메뉴가 열리지 않도록..
          onDecrement()
        }
      }
      onDoubleClick={onSetColor}
      style={{backgroundColor: color}}>
        {number}
    </div>
  )
}

// PropTypes : 컴포넌트에 prop으로 넘어오는 입력값들이 어떤 타입을 가져야 하는지 정의함
Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter