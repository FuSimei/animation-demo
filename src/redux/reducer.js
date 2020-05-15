import { ADD_PERSON, DEL_PERSON } from './actionType'

const defaultData = {
  count: 0,
  personList: [],
}

const reducer = (state = defaultData, action) => {
  switch (action.type) {
    // 增加
    case ADD_PERSON:
      return { 
        ...state, 
        personList: [
          ...state.personList, 
          { id: state.personList.length, name: action.data }
        ]
       }
    // 删除
    case DEL_PERSON:
      return { 
        ...state, 
        personList: state.personList.filter((p, index) => index !== action.data)
      }
    // 修改
    // case EDITOR_PERSON:
    //   return { 
    //     ...state, 
    //     personList: state.personList.map((p, i) => {
    //       if (i !== action.data.index) {
    //         return p
    //       }
    //       // 找到要修改的数据
    //       return {
    //         ...p,
    //         ...action.data.person
    //       }
    //     })
    //   }
    default:
      return state
  }
}

// const update = (state, action) => {
//   let person = state.personList
//   person[0].name = 'Jack'
//   return {
//     ...state,
//     personList: 
//   }
// }

// // reducer/todo，定义一个存储了数组reducer
// export const todoReducer = (state = [], action) => state

// // reducer/count，定义一个计数器reducer
// export const countReducer = (state = 0, action) => state

// // 
// // reducer/index，使用ES6的对象字面量简写方式定义对象结构
// export const reducer = combineReducers({
//   todoReducer,
//   countReducer
// })

// // 使用
// console.log(store.getState())
// // {todoReducer : [], countReducer: 0}

export default reducer