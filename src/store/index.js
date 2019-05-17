import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import rootReducer from "./reducers"

// Create store with reducers and initial state
const initialState = {}
// const store = createStore(rootReducer, initialState)
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
