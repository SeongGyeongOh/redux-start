import * as types from './ActionTypes'

/* 
* 액션 객체를 만드는 액션 생성자들을 선언 (action creators)
* () => ({}) 는 function() { return {} }과 동일한 의미임
*/
export const increment = () => ({
  type: types.INCREMENT
})

export const decrement = () => ({
  type: types.DECREMENT
})

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
})