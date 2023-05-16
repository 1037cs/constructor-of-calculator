export enum calculatorTypesActions {
    ADD_ELEM_TO_STRING = 'ADD_ELEM_TO_STRING',
    RESET = 'RESET'
}

export interface calculatorAction {
    type: string,
    payload?: any
}

export interface calculatorType {
    displayString: string,
    firstNumber : string
    operation : string
    secondNumber : string
}

export const defaultState: calculatorType = {
    displayString: '0',
    firstNumber : '0',
    operation : '',
    secondNumber : ''
}
