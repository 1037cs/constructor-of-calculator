import {calculatorAction, calculatorType, calculatorTypesActions, defaultState} from '../../types/calcucatorTypes'
import * as math from 'mathjs'
import {digits} from '../../components/palette/numericPad/NumericPad'

const replaceIncorrectMathSymbols = (action: calculatorAction) => {
    return action.payload.replace('x', '*').replace(',', '.')
}

const cutFirstZero = (string: string) => {
    return !string[1] && string[1] !== '.' && string.startsWith('0') ? string.slice(1) : string
}

const stopDoubleDotAndConcat = (symbol: string, number: string) => {
    number = cutFirstZero(number)
    if (symbol === '.') {
        number = !number ? number = '0.' : number
        number = number.includes(symbol) ? number : number + symbol
    } else {
        number += symbol
    }
    return number
}

const addSymbolToString = (state: calculatorType, action: calculatorAction) => {
    let {firstNumber, operation, secondNumber} = state
    const copyDisplayString = state.displayString
    let symbol = action.payload

    if (symbol === 'x' || symbol === ',') {
        symbol = replaceIncorrectMathSymbols(action)
    }

    const isOperationCompleted = operation

    //ПЕРВОЕ СЛАГАЕМОЕ
    if ((digits.includes(symbol) || symbol === '.') && !isOperationCompleted) {
        firstNumber = stopDoubleDotAndConcat(symbol, firstNumber)
        return {firstNumber, operation, secondNumber, copyDisplayString: firstNumber}
    }

    //ВТОРОЕ СЛАГАЕМОЕ
    if ((digits.includes(symbol) || symbol === '.') && isOperationCompleted) {
        secondNumber = stopDoubleDotAndConcat(symbol, secondNumber)
        return {firstNumber, operation, secondNumber, copyDisplayString: secondNumber}
    }

    //ВЫЧИСЛЕНИЕ
    if (isOperationCompleted && (secondNumber !== '')) {
        const result = String(math.evaluate(firstNumber + operation + secondNumber))
        return {firstNumber: result, operation: symbol, secondNumber: '', copyDisplayString: result}
    }

    //РАВНО
    if (symbol === '=') {
        return {firstNumber: '', operation: '', secondNumber: '', copyDisplayString: '0'}
    }

    operation = symbol
    return {firstNumber, operation, secondNumber, copyDisplayString}
}

export const calculatorReducer = (state: calculatorType = defaultState, action: calculatorAction): calculatorType => {
    switch (action.type) {
        case calculatorTypesActions.ADD_ELEM_TO_STRING:
            return {
                ...state,
                displayString: addSymbolToString(state, action).copyDisplayString,
                firstNumber: addSymbolToString(state, action).firstNumber,
                operation: addSymbolToString(state, action).operation,
                secondNumber: addSymbolToString(state, action).secondNumber
            }

        case calculatorTypesActions.RESET:
            return {...defaultState}

        default:
            return state
    }
}

export const addElemToStringAction = (payload: string) => ({
    type: calculatorTypesActions.ADD_ELEM_TO_STRING,
    payload
})

export const resetAction = () => ({
    type:calculatorTypesActions.RESET
})