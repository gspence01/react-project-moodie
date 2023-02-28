import React from 'react'

export default function (props) {
    return (
        <div style={{border:'1px solid black'}}>
            <h3>{props.item.title}</h3>
            <p>{props.item.entry}</p>
        </div>
    )
}