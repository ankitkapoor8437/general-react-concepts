import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [first ,setFirst ] = useState("Testing Comp.");
    return (
        <div>
            <h2>I am parent component.</h2>
            <Child name="Ankit" desc="I am a programmer." first={first} setFirst={setFirst}/>
        </div>
    )
}

export default Parent