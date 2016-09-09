'use strict';
import { combineReducers, createStore } from 'redux';

const globals = combineReducers({
  VERSION : () => '0.1.0'
});

const app = combineReducers({
  _globals : globals
});

export const store = createStore(app);
