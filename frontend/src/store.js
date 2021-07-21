import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

// import composeWithDevTools from 'redux-devtools-extension'

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  // composeWithDevTools(applyMiddleware(...middleware))
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
