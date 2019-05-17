import { SIGN_IN_ERROR, SIGN_UP_ERROR } from "../actions/actionTypes"

const errorReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return { ...state, firebase: { ...action.payload } }
    case SIGN_UP_ERROR:
      return { ...state, firebase: { ...action.payload } }
    default:
      return { ...state, firebase: null }
  }
}

export default errorReducer
