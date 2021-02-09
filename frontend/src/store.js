import { createStore, combinedReducers, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
import { composedWithDevTools } from 'redux-devtools-extension'

const reducer = combinedReducers({})

const initialState = {}

const middleware = [thunk]

const store = createStore( reducer. initialState, composedWithDevTools
    (applyMiddleware([...middleware])))

export default store    