import AppContent from './AppContent';
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //extension de redux
const reduxStore = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default function App() {
  return (
    <Provider store={reduxStore}>
      <AppContent />
    </Provider>
  );
}