import React, {Dispatch, FC} from 'react'
import './palette.scss'
import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {cardType} from '../../types/boardTypes'
import {setCurrentCardAction} from '../../store/reducers/boardReducer'
import {itemIsDraggingAction} from '../../store/reducers/generalReducer'

const paletteItemClasses: string[] = ['palette-item', 'palette-item_disable']

function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: cardType, dispatch: Dispatch<any>) {
    dispatch(itemIsDraggingAction(true))
    dispatch(setCurrentCardAction(card))
}

function dragEndHandler(dispatch: Dispatch<any>) {
    dispatch(itemIsDraggingAction(false))
    dispatch(setCurrentCardAction(null))
}

const Palette: FC = () => {
    const dispatch = useDispatch()
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)
    const {constructorArray} = useTypedSelector(state => state.boards)

    return (
        <div className="palette">
            {constructorArray.map(card =>
                <div className={card.show ? paletteItemClasses[0] : paletteItemClasses.join(' ')}
                     draggable={!isRuntime} key={card.id}
                     onDragStart={e => dragStartHandler(e, card, dispatch)}
                     onDragEnd={() => dragEndHandler(dispatch)}
                >
                    {card.node}
                </div>
            )}
        </div>
    )
}

export default Palette