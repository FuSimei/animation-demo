import React from 'react';
import ReactDOM from 'react-dom';
// import App from './component/App'
import Count from './component/Count'
// import { GlobalProvider } from './context'
import { Provider } from 'react-redux'
import store from './redux'
import './index.scss'

// const Root = () => (
//   <GlobalProvider>
//     <App />
//   </GlobalProvider>
// )

const Root = () => (
  <Provider store={store}>
    <Count />
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)