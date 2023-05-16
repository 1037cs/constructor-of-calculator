import React from 'react'
import './app.scss'
import Palette from '../palette/Palette'
import Canvas from '../canvas/Canvas'
import ToggleSwitcher from '../toggleSwitcher/ToggleSwitcher'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const appClasses : string[] = ['App', 'App_constructor']

function App() {
    const {isRuntime} = useTypedSelector(state => state.dragAndDrop)
    return (
        <div className={!isRuntime ? appClasses.join(' ') : appClasses[0]}>
            <div className="wrapper">
                <div style={{display: isRuntime ? 'none' : 'block'}}>
                    <Palette/>
                </div>
                <div className="switcher-and-canvas-container">
                    <ToggleSwitcher/>
                    <Canvas/>
                </div>
            </div>
        </div>
    )
}

export default App
