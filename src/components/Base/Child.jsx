import React from 'react'

const Child = (props) => {
    return (
        <>
            <div>Child
                <h1>{props.name}</h1>
                <span>{props.desc}
                </span>
                <br />
                <span>
                    {props.first}
                </span>
                <button onClick={()=>props.setFirst("Rohit Kaushal")}>Click Me!</button>
            </div>
        </>
    )
}

export default Child