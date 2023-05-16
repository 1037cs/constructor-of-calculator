import React from 'react'
import dragAndDropLogo from '../../../assets/dragAndDropLogo.svg'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import {dropBoardHandler} from '../dragBoardFunctions'

const Dropzone = () => {
    const {isDrag} = useTypedSelector(state => state.dragAndDrop)
    const {canvasArray, currentCard} = useTypedSelector(state => state.boards)
    const dispatch = useDispatch()

    return (
        <div className="dropzone" style={isDrag ? {backgroundColor: '#F0F9FF'} : undefined}
             onDragOver={e => e.preventDefault()}
             onDrop={e => dropBoardHandler(e, currentCard, canvasArray, dispatch)}
        >

            <img src={dragAndDropLogo} alt="Перетащите сюда любой элемент из левой панели"/>
            <div className="dropzone__title">Перетащите сюда</div>
            <div className="dropzone__subtitle">любой элемент <br/> из левой панели</div>

        </div>
    )
}

export default Dropzone