import React from 'react'
import Button, {buttonVariants} from '../../../UI/button/Button'
import {useDispatch} from 'react-redux'
import {addElemToStringAction} from '../../../store/reducers/calculatorReducer'

const EqualsButton = () => {
    const dispatch = useDispatch()

    function onClickHandler() {
        dispatch(addElemToStringAction('='))
    }

    return (
        <div className="equals-button" onClick={onClickHandler}>
            <Button variant={buttonVariants.blue} draggable={true}>=</Button>
        </div>
    )
}

export default EqualsButton