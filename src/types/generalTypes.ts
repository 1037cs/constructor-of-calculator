export enum generalActionTypes {
    ITEM_IS_DRAGGING = 'ITEM_IS_DRAGGING',
    SET_MODE = 'SET_MODE',
}

export interface generalActions {
    type: string,
    payload?: any
}

export interface generalState {
    isDrag: boolean,
    isRuntime: boolean,
}

export const defaultState: generalState = {
    isDrag: false,
    isRuntime: false,
}