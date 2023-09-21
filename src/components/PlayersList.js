import React from 'react'
import Player from './Player'
import { players } from '../players'

const PlayersList = () => {
    const styleObject = {display: "flex" , justifyContent: "space-between", margin: "2rem"}
    return (
        <div style={styleObject     }>
            {players.map(el => { return <Player propName={el} key={el.name} /> })}
        </div>
    )
}

export default PlayersList