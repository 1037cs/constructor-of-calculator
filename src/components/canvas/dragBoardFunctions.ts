import React, {Dispatch} from 'react'
import {
    addElemToCanvasAction,
    editElemInConstructorAction,
    setCurrentCardAction
} from '../../store/reducers/boardReducer'
import {cardType} from '../../types/boardTypes'


type DropBoardHandler = (e: React.DragEvent<HTMLDivElement>,
                        currentCard: cardType | null,
                        canvasArray: Array<cardType>,
                        dispatch: Dispatch<any>) => void

const deleteClassFromElements = () => {
    const elements = document.querySelectorAll('.elem-on-canvas-wrapper')
    if (elements.length > 0)
        elements[elements.length - 1].classList.remove('place-marker')
}

export const dropBoardHandler: DropBoardHandler = (e, currentCard,
                                           canvasArray, dispatch) => {
    e.preventDefault()

    if ((currentCard) && (!canvasArray.some(card => card === currentCard))) {
        dispatch(addElemToCanvasAction({node: currentCard, to: null}))
        dispatch(editElemInConstructorAction(currentCard))
    }

    dispatch(setCurrentCardAction(null))
    deleteClassFromElements()
}

export const dragBoardHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const {classList} = e.target as HTMLDivElement

    if (classList.contains('palette')) {
        const elements = document.querySelectorAll('.elem-on-canvas-wrapper')
        if (elements.length > 0) {
            elements[elements.length - 1].classList.add('place-marker')
        }
    }
}

export const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    deleteClassFromElements()
}
