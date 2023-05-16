import React, {FC} from 'react'
import './canvas.scss'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import {doubleClickHandler, dragHandler, dropHandler, removeClassFromElement} from './dragCardsFunctions'
import Dropzone from './dropzone/Dropzone'
import {setCurrentCardAction} from '../../store/reducers/boardReducer'
import {dragBoardHandler, dragLeaveHandler, dropBoardHandler} from './dragBoardFunctions'

const Canvas: FC = () => {
    const {canvasArray, currentCard} = useTypedSelector(state => state.boards)
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)
    const dispatch = useDispatch()

    return (
        canvasArray.length === 0
            ? <Dropzone/>
            : <div className="palette"
                   onDragOver={e => dragBoardHandler(e)}
                   onDrop={e => dropBoardHandler(e, currentCard, canvasArray, dispatch)}
                   onDragLeave={e => dragLeaveHandler(e)}
            >

                {canvasArray.map(card =>
                    <div className="canvas-item" draggable={card.id !== 1 && !isRuntime}
                         onClick={!isRuntime ? e => doubleClickHandler(e, card, dispatch) : undefined}
                         onDragStart={() => dispatch(setCurrentCardAction(card))}
                         onDragOver={e => dragHandler(e, canvasArray, currentCard, card)}
                         onDragLeave={e => removeClassFromElement(e)}
                         onDrop={e => dropHandler(e, card, currentCard, canvasArray, dispatch)}
                         onDragEnd={() => dispatch(setCurrentCardAction(null))}
                         key={card.id}
                    >
                        {card.node}
                    </div>
                )}

            </div>
    )
}

export default Canvas