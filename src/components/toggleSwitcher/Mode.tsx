import React, {FC, ReactNode} from 'react'
import {ReactComponent as EyeLogo} from '../../assets/eye.svg'
import {ReactComponent as Selector} from '../../assets/selector.svg'
import {colors} from '../../UI/colors'

const switcherClassNames: string[] = ['switcher-mode', 'switcher-mode_active']

interface ModeProps{
    globalMode:boolean
    onClick:()=>void
    children:ReactNode
}

const Mode:FC<ModeProps> = ({globalMode,onClick,children}) => {
    const currentMode = String(children).toLowerCase() === 'runtime'

    return (
        <div className={currentMode===globalMode ? switcherClassNames.join(' ') : switcherClassNames[0]}
             onClick={onClick}>
            {currentMode
                ? <EyeLogo stroke={currentMode===globalMode ? colors.primary : colors.secondary}/>
                : <Selector stroke={currentMode===globalMode ? colors.primary : colors.secondary}/>}
            <span className="switcher-mode__name">{children}</span>
        </div>
    )
}

export default Mode