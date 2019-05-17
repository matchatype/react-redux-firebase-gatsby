import { combineReducers } from "redux"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import errorReducer from "./errorReducer"

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  errors: errorReducer,
})

export default rootReducer
