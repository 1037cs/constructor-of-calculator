import React from 'react'
import './display.scss'
import {useTypedSelector} from '../../../hooks/useTypedSelector'

const calculateFontSize = (string: string): string => {
    return string.length > 7
        ? string.length > 13 ? '19px'
            : (36 - (string.length - 7) * 1.7) + 'px'
        : '36px'
}
const formatDisplayString = (string: string): string => {
    if (string.length < 13 || string === 'Не определено') {
        return string
    }
    return String(Number(string).toPrecision(13)).replace(/[,.]?0+$/, '')
}
const checkDisplayString = (string: string): string => (string === 'NaN' || string === 'Infinity')
    ? 'Не определено'
    : string

const Display = () => {
    const {displayString} = useTypedSelector(state => state.calculator)
    const resultString = checkDisplayString(displayString)

    return (
        <div className="display">
            <div className="display__counter"
                style={{
                    fontSize: calculateFontSize(formatDisplayString(resultString))
                }}>
                {formatDisplayString(resultString)}
            </div>
        </div>
    )
}

export default Display