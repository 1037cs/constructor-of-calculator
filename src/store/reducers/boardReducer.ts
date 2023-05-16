import {boardAction, boardType, boardTypes, cardType, defaultState} from '../../types/boardTypes'

const toggleShowInConstructor = (state: boardType, action: any): Array<cardType> => {
    return state.constructorArray.map(
        card => card.id === action.payload.id
            ? {
                ...card,
                show: !card.show
            }
            : card
    )
}

const addElemToCanvas = (state: boardType, card: cardType, to: number | null): Array<cardType> => {
    const copyArray = [...state.canvasArray]
    if (card.id === 1) {
        copyArray.unshift(card)
    } else if (to !== null) {
        copyArray.splice(to+1, 0, card)
    } else {
        copyArray.push(card)
    }
    return copyArray
}

const changeCanvasArray = (state: boardType, action: any): Array<cardType> => {
    const copyArray = [...state.canvasArray]
    if (action.payload.node.id === 1) {
        return addElemToCanvas(state, action.payload.node, action.payload.to)
    }
    if (action.payload.from !== -1)
        copyArray.splice(action.payload.to, 0, copyArray.splice(action.payload.from, 1)[0])
    else
        copyArray.splice(action.payload.to + 1, 0, action.payload.node)
    return copyArray
}

export const boardReducer = (state = defaultState, action: boardAction): boardType => {
    switch (action.type) {
        case boardTypes.ADD_ELEM_TO_CANVAS: {
            return {...state, canvasArray: addElemToCanvas(state, action.payload.node, action.payload.to)}
        }
        case boardTypes.DELETE_ELEM_FROM_CANVAS:
            return {
                ...state,
                canvasArray: state.canvasArray.filter(elem => elem.node !== action.payload.node),
                constructorArray: toggleShowInConstructor(state, action)
            }
        case boardTypes.MOVE_ELEM_IN_CANVAS: {
            return {
                ...state,
                canvasArray: changeCanvasArray(state, action)
            }
        }
        case boardTypes.SET_CURRENT_CARD:
            return {...state, currentCard: action.payload}
        case boardTypes.EDIT_ELEM_IN_CONSTRUCTOR:
            return {
                ...state, constructorArray: toggleShowInConstructor(state, action)
            }
        default:
            return state
    }
}

export const addElemToCanvasAction = (payload: { node: cardType, to: number | null }) => ({
    type: boardTypes.ADD_ELEM_TO_CANVAS,
    payload
})
export const deleteElemFromCanvasAction = (payload: cardType) => ({type: boardTypes.DELETE_ELEM_FROM_CANVAS, payload})
export const moveElemInCanvasAction = (payload: { to: number, from: number, node: cardType }) => ({
    type: boardTypes.MOVE_ELEM_IN_CANVAS,
    payload
})
export const setCurrentCardAction = (payload: cardType | null) => ({type: boardTypes.SET_CURRENT_CARD, payload})
export const editElemInConstructorAction = (payload: cardType) => ({type: boardTypes.EDIT_ELEM_IN_CONSTRUCTOR, payload})