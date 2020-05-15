import React from 'react'
// import { connect } from 'react-redux'
// import { increment } from '../../redux/action'
import { useEffect } from 'react'

// const Counter = (props) => {
//   const { count, handleClickAdd } = props
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={handleClickAdd}>add</button>
//     </div>
//   )
// }

// const stateToProps = (state, ownProps) => ({
//   count: state.count
// })

// const dispatchToprops = (dispatch, ownProps) => {
//   return {
//     handleClickAdd: () => {
//       dispatch(increment(3))
//     }
//   }
// }

// const Counter = (props) => {
//   const { personList, handleClickAddPerson } = props
//   return (
//     <div>
//       {
//         personList.map((person) => {
//           return (
//             <li key={person.id}>{person.name}</li>
//           )
//         })
//       }
//       <input />
//       <button onClick={handleClickAddPerson}>增加人数</button>
//     </div>
//   )
// }

// const stateToProps = (state, ownProps) => ({
//   count: state.count,
//   personList: state.personList,
// })

// const dispatchToprops = (dispatch, ownProps) => {
//   return {
//     handleClickAdd: () => {
//       dispatch(increment(3))
//     },
//     handleClickAddPerson: () => {
//       // dispatch({type: })
//     }
//   }
// }

// export default connect(stateToProps, dispatchToprops)(Counter)

const Counter = () => {
  function makeActionCreator(type, ...argNames) {
    console.log('name', ...argNames)
    return function(...args) {
      console.log('111', ...args)
      const action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
  }

  useEffect(
    () => {
      console.log('aa', makeActionCreator('ADD_TODO', 'text', 'id')('aa', 18))
    },
    []
  )
  return (
    <div>
      <div>count</div>
      <button>点我</button>
    </div>
  )
}

export default Counter