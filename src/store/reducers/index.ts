import {combineReducers} from 'redux'
import {generalReducer} from './generalReducer'
import {boardReducer} from './boardReducer'
import {calculatorReducer} from './calculatorReducer'


export const rootReducer = combineReducers({
    dragAndDrop: generalReducer,
    boards:boardReducer,
    calculator:calculatorReducer
})

export type RootState = ReturnType<typeof rootReducer>