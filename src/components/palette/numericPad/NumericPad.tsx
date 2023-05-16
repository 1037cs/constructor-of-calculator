import React from 'react'
import Button, {buttonVariants} from '../../../UI/button/Button'
import './numericPad.scss'
import {addElemToStringAction} from '../../../store/reducers/calculatorReducer'
import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../../../hooks/useTypedSelector'

export const digits: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']

const NumericPad = () => {
    const dispatch = useDispatch()
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)


    function onClickHandler(elem: string) {
        dispatch(addElemToStringAction(elem))
    }

    return (
        <div className="numeric-pad pad">
            {digits.map((elem, index) =>
                <div className="numeric-button" key={index}
                     onClick={isRuntime ? () => onClickHandler(elem) : undefined}>
                    <Button variant={buttonVariants.white}>{elem}</Button>
                </div>
            )}
        </div>
    )
}

export default NumericPad