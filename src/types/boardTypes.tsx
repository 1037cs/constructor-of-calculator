import React, {ReactNode} from 'react'
import Display from '../components/palette/display/Display'
import OperationPad from '../components/palette/operationPad/OperationPad'
import NumericPad from '../components/palette/numericPad/NumericPad'
import EqualsButton from '../components/palette/equalsButton/EqualsButton'

export enum boardTypes {
    ADD_ELEM_TO_CANVAS = 'ADD_ELEM_TO_CANVAS',
    DELETE_ELEM_FROM_CANVAS = 'DELETE_ELEM_FROM_CANVAS',
    MOVE_ELEM_IN_CANVAS = 'MOVE_ELEM_IN_CANVAS',

    SET_CURRENT_CARD = 'SET_CURRENT_CARD',

    EDIT_ELEM_IN_CONSTRUCTOR = 'EDIT_ELEM_IN_CONSTRUCTOR'
}

export interface boardAction {
    type: string,
    payload?: any
}

export interface cardType {
    id: number,
    node: ReactNode,
    show?: boolean
}

export interface boardType {
    constructorArray: Array<cardType>,
    canvasArray: Array<cardType>,
    currentCard: cardType | null
}

export const defaultState: boardType = {
    constructorArray: [
        {id: 1, show: true, node: <Display/>},
        {id: 2, show: true, node: <OperationPad/>},
        {id: 3, show: true, node: <NumericPad/>},
        {id: 4, show: true, node: <EqualsButton/>}
    ],
    canvasArray: [],
    currentCard: null
}
