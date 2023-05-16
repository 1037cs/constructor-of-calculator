import React from 'react'
import './toggleSwitcher.scss'
import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import Mode from './Mode'
import {setModeAction} from '../../store/reducers/generalReducer'
import {resetAction} from '../../store/reducers/calculatorReducer'

const ToggleSwitcher: React.FC = () => {
    const dispatch = useDispatch()
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)

    const setConstructorModeHandler = (): void => {
        dispatch(setModeAction(false))
        dispatch(resetAction())
    }

    const setRuntimeModeHandler = (): void => {
        dispatch(setModeAction(true))
        dispatch(resetAction())
    }

    return (
        <div className="switcher">
            <Mode globalMode={isRuntime} onClick={setRuntimeModeHandler}>Runtime</Mode>
            <Mode globalMode={isRuntime} onClick={setConstructorModeHandler}>Constructor</Mode>
        </div>
    )
}

export default ToggleSwitcher