import React, {Dispatch} from 'react'
import {cardType} from '../../types/boardTypes'
import {
    addElemToCanvasAction,
    deleteElemFromCanvasAction, editElemInConstructorAction,
    moveElemInCanvasAction
} from '../../store/reducers/boardReducer'

type DragHandler = (e: React.DragEvent<HTMLDivElement>,
                    canvasArray: Array<cardType>,
                    currentCard: cardType | null,
                    card: cardType) => void

type DropHandler = (e: React.DragEvent<HTMLDivElement>,
                    card: cardType,
                    currentCard: cardType | null,
                    canvasArray: Array<cardType>,
                    dispatch: Dispatch<any>) => void

export const dragHandler: DragHandler = (e, canvasArray,
                                         currentCard, card) => {
    e.preventDefault()
    let fromIndex: number = 0

    if (currentCard) {
        fromIndex = canvasArray.indexOf(currentCard)
    }

    const toIndex = canvasArray.indexOf(card)
    const {classList} = e.target as HTMLDivElement

    if (card.id !== 1) {
        fromIndex < toIndex ? classList.add('place-marker') : classList.add('place-marker-before')
    } else {
        classList.add('place-marker')
    }
}

export const removeClassFromElement = (e: React.MouseEvent<HTMLDivElement>) => {
    const {classList} = e.target as HTMLDivElement
    classList.remove(classList[1])
}

export const doubleClickHandler = (e: React.MouseEvent<HTMLDivElement>, card: cardType, dispatch: Dispatch<any>) => {
    if (e.detail === 2) {
        dispatch(deleteElemFromCanvasAction(card))
    }
}

export const dropHandler: DropHandler = (e, card,
                                         currentCard, canvasArray, dispatch) => {

    e.preventDefault()
    e.stopPropagation()

    if (!currentCard) return

    const fromIndex: number = canvasArray.indexOf(currentCard)
    const toIndex: number = canvasArray.indexOf(card)

    if (fromIndex === -1) {
        dispatch(addElemToCanvasAction({node: currentCard, to: toIndex}))
        dispatch(editElemInConstructorAction(currentCard))
    } else {
        const targetIndex = card.id === 1 ? 1 : toIndex
        dispatch(moveElemInCanvasAction({to: targetIndex, from: fromIndex, node: currentCard}))
    }

    removeClassFromElement(e)
}
