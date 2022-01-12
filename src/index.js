import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

// Redux 관련 정보 불러오기
import { createStore } from 'redux';
import reducers from './reducers'
// Provider: react-redux 라이브러리에 내장되어 있는, 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트
import { Provider } from 'react-redux';

// 스토어 생성
// Store: 리덕스의 핵심 인스턴스
// 현재 상태를 내장하고 있으며, 구동중인 함수들의 상태가 업데이트 될 때 마다 다시 실행하도록 한다...?
// createStore 4개의 내장 함수
// dispatch(): reducer 함수에 Action을 송신하는 역할
// subscribe(): Store을 구독하는 것 -- Store의 State에 변화가 있을 때를 감지하여 변화가 있을 때 호출할 콜백함수를 지정할 수 있음
// getState(): 해당 Store의 현재 state값 출력
// replaceReducer(): Reducer을 동적으로 로드하고 싶을 경우에 사용
const store = createStore(reducers)

ReactDOM.render(
  // Provider 컴포넌트의 props로 store 값을 설정해준다!!!
  <Provider store={store}>
    {/* App 컴포넌트가 store에 연동됨! */}
    <App/>
  </Provider>,
  document.getElementById('root')
);
