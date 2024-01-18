import {combineReducers} from 'redux'
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'

const rootReducer=combineReducers({
authReducer,alertReducer,productReducer,userReducer
})
export default rootReducer