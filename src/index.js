import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { createStore } from 'redux';
import gameReducer from './reducers/game-reducer';
import { Provider } from 'react-redux';


const store = createStore(gameReducer)


const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  );
};

render(Game)