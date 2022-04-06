import React from 'react'
import { ReactComponent as Giraff } from './giraffe.svg';

export default function giraffe({width = "302", height = "283"}) {
    return (
        <Giraff width={width} height={height}></Giraff>
    )
}
