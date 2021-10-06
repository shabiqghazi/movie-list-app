import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const playlistDefault = {
  value : 0,
  list : []
}

const globalReducer = (state = playlistDefault, action) => {
  switch(action.type){
    case 'ADD_PLAYLIST' :
      if(!state.list.includes(action.newPlaylist)){
        state.list.push(action.newPlaylist)
        return {
          ...state,
          value : state.value + 1
        }
      } else {
        return state
      }
    default :
      break;
  }
}

const globalState = createStore(globalReducer)

globalState.subscribe(()=>{
  window.alert('berhasil menambahkan ke playlist')
})

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
