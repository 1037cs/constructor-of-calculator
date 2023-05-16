import React from 'react'
import './operationPad.scss'
import Button, {buttonVariants} from '../../../UI/button/Button'
import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {addElemToStringAction} from '../../../store/reducers/calculatorReducer'

const operationsArray: string[] = ['/', 'x', '-', '+']

const OperationPad = () => {
    const dispatch = useDispatch()
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)

    function onClickHandler(elem: string) {
        dispatch(addElemToStringAction(elem))
    }

    return (
        <div className="operation-pad pad">
            {operationsArray.map((elem, index) =>
                <div className="numeric-button" key={index}
                     onClick={isRuntime ? e => onClickHandler(elem) : undefined}>
                    <Button variant={buttonVariants.white}>{elem}</Button>
                </div>
            )}
        </div>
    )
}

export default OperationPad