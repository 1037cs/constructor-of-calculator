import {
    defaultState,
    generalActions,
    generalActionTypes,
    generalState
} from '../../types/generalTypes'

export const generalReducer = (state = defaultState, action: generalActions): generalState => {
    switch (action.type) {
        case generalActionTypes.ITEM_IS_DRAGGING:
            return {...state, isDrag: action.payload}
        case generalActionTypes.SET_MODE:
            return {...state, isRuntime:action.payload}
        default:
            return state
    }
}

export const itemIsDraggingAction = (payload:boolean) => ({type:generalActionTypes.ITEM_IS_DRAGGING,payload})
export const setModeAction = (payload:boolean) => ({type:generalActionTypes.SET_MODE,payload})