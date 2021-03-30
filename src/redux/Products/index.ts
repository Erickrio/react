import {createStore,combineReducers} from 'redux'
import Products from './Products.reducer'

const reducers = combineReducers({
    products: Products
})

const store = createStore(reducers)

export default store