import React from 'react'

export default function TodoHeader(props) {

    return (
        <>
            <h1>
                {props.title}
            </h1>
            <h3>
                {props.children}
            </h3>
        </>
    )
}
