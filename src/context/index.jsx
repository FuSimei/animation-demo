// context/index
import React, { createContext, useReducer } from 'react'
import Count from '../component/Count'

const defaultStore = {
  props: {
    diamond: 0,
    resurrection: 0,
  },
  mission: [
    {
      id: 10,
      type: 'sign_in',
      desc: '',
      isFinish: true,
    }
  ]
}

// const TYPE = {

// }
// // 修改道具的reducer
// const propReducer = (state, action) => {
//   switch (action.type) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// }

// 修改任务reducer

// 初始化context
export const GlobalContext = createContext(defaultStore)

const TYPE = {
  INCREMENT: 'INCREMENT'
}

// 定义reducer函数
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.INCREMENT:
      return { ...state, count: state.count + action.data }
    default:
      return state
  }
}

// 导出context，需要使用context数据的需要包在这个组件里
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultStore)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
