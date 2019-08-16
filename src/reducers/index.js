import {combineReducers} from 'redux'
import categoryListReducer from './categoryListReducer';
import formCategoryReducer from './formCategoryReducer'


export default combineReducers({
   categoryList : categoryListReducer,
   formCategory : formCategoryReducer
})